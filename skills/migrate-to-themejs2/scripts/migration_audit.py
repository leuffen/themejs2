#!/usr/bin/env python3
"""Inventarisiert und prüft inhaltsgetreue ThemeJS1-zu-ThemeJS2-Migrationen."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import sys
from collections import Counter
from pathlib import Path
from typing import Any


SCHEMA_VERSION = 1
IGNORED_PARTS = {".git", ".old", ".migration", "node_modules", "vendor", "_site"}
PAGE_EXCLUDED_PARTS = {"_includes", "_layouts", "_data", "_src", "assets"}
PAGE_SUFFIXES = {".md", ".markdown", ".html", ".htm"}
MEDIA_SUFFIXES = {
    ".avif", ".bmp", ".gif", ".ico", ".jpeg", ".jpg", ".pdf", ".png",
    ".svg", ".tif", ".tiff", ".webp",
}
PROTECTED_FRONTMATTER_KEYS = {
    "company", "description", "headline", "keywords", "nav_title", "published",
    "short_title", "subtitle", "title",
}

FRONTMATTER_RE = re.compile(r"^([A-Za-z0-9_-]+):\s*(.*?)\s*$")
MARKDOWN_IMAGE_RE = re.compile(r"!\[([^\]]*)\]\(([^)\s]+)(?:\s+['\"][^'\"]*['\"])?\)")
MARKDOWN_LINK_RE = re.compile(r"(?<!!)\[([^\]]+)\]\(([^)\s]+)(?:\s+['\"][^'\"]*['\"])?\)")
HTML_IMAGE_TAG_RE = re.compile(r"<img\b[^>]*>", re.I | re.S)
HTML_ATTRIBUTE_RE = re.compile(r"\b([A-Za-z_:][-A-Za-z0-9_:.]*)\s*=\s*(['\"])(.*?)\2", re.S)
HTML_LINK_RE = re.compile(r"<a\b[^>]*?\bhref\s*=\s*(['\"])(.*?)\1", re.I | re.S)
CSS_URL_RE = re.compile(r"\burl\(\s*(['\"]?)(.*?)\1\s*\)", re.I)
LIQUID_COMMENT_RE = re.compile(r"{%\s*comment\s*%}.*?{%\s*endcomment\s*%}", re.I | re.S)
HTML_COMMENT_RE = re.compile(r"<!--.*?-->", re.S)
LIQUID_TAG_RE = re.compile(r"{%.*?%}|{{.*?}}", re.S)
HTML_TAG_RE = re.compile(r"<[^>]+>")
ATTRIBUTE_LINE_RE = re.compile(r"^\s*\{:\s*.*\}\s*$")
THEMATIC_BREAK_RE = re.compile(r"^\s*(?:-{3,}|\*{3,}|_{3,})\s*$")


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def normalized_path(path: Path) -> str:
    value = path.as_posix()
    return value[2:] if value.startswith("./") else value


def safe_target_path(root: Path, value: Any, label: str, errors: list[str]) -> tuple[Path, str] | None:
    if not isinstance(value, str) or not value:
        errors.append(f"{label} besitzt keinen gültigen Zielpfad")
        return None
    relative = Path(value)
    if relative.is_absolute() or ".." in relative.parts or ".old" in relative.parts:
        errors.append(f"{label} verwendet einen unzulässigen Zielpfad: {value}")
        return None
    return root / relative, normalized_path(relative)


def ignored(relative: Path) -> bool:
    return any(part in IGNORED_PARTS for part in relative.parts)


def iter_files(root: Path) -> list[Path]:
    return sorted(
        (path for path in root.rglob("*") if path.is_file() and not ignored(path.relative_to(root))),
        key=lambda item: normalized_path(item.relative_to(root)),
    )


def decode_text(path: Path) -> str | None:
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return None


def split_frontmatter(text: str) -> tuple[dict[str, str], str]:
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}, text
    closing = next((index for index in range(1, len(lines)) if lines[index].strip() == "---"), None)
    if closing is None:
        return {}, text
    values: dict[str, str] = {}
    for line in lines[1:closing]:
        if line[:1].isspace():
            continue
        match = FRONTMATTER_RE.match(line)
        if not match:
            continue
        value = match.group(2).strip()
        if len(value) >= 2 and value[0] == value[-1] and value[0] in {'"', "'"}:
            value = value[1:-1]
        values[match.group(1)] = value
    return values, "\n".join(lines[closing + 1 :])


def is_page(relative: Path) -> bool:
    if not relative.parts or relative.parts[0] != "docs":
        return False
    if relative.suffix.lower() not in PAGE_SUFFIXES:
        return False
    return not any(part in PAGE_EXCLUDED_PARTS for part in relative.parts[1:-1])


def route_for(relative: Path, frontmatter: dict[str, str]) -> str | None:
    permalink = frontmatter.get("permalink", "").strip()
    if permalink and permalink not in {"null", "~"}:
        return permalink
    parts = list(relative.parts[1:])
    if not parts or parts[0].startswith("_"):
        return None
    filename = parts[-1]
    stem = filename
    for suffix in (".markdown", ".html", ".htm", ".md"):
        if stem.endswith(suffix):
            stem = stem[: -len(suffix)]
            break
    if stem == "index":
        route = "/" + "/".join(parts[:-1])
        return route.rstrip("/") + "/"
    return "/" + "/".join([*parts[:-1], stem + ".html"])


def media_references(frontmatter: dict[str, str], body: str) -> list[dict[str, str]]:
    references: list[dict[str, str]] = []
    image = frontmatter.get("image", "").strip()
    if image and image not in {"null", "~"}:
        references.append({"kind": "frontmatter", "src": image})
    references.extend(
        {"kind": "markdown", "src": match.group(2), "alt": match.group(1)}
        for match in MARKDOWN_IMAGE_RE.finditer(body)
    )
    for match in HTML_IMAGE_TAG_RE.finditer(body):
        attributes = {item.group(1).lower(): item.group(3) for item in HTML_ATTRIBUTE_RE.finditer(match.group(0))}
        if "src" in attributes:
            references.append({"kind": "html", "src": attributes["src"], "alt": attributes.get("alt", "")})
    references.extend(
        {"kind": "css", "src": match.group(2)} for match in CSS_URL_RE.finditer(body)
    )
    return references


def link_references(body: str) -> list[str]:
    references = [match.group(2) for match in MARKDOWN_LINK_RE.finditer(body)]
    references.extend(match.group(2) for match in HTML_LINK_RE.finditer(body))
    return references


def text_segments(body: str) -> list[str]:
    body = LIQUID_COMMENT_RE.sub("", body)
    body = HTML_COMMENT_RE.sub("", body)
    segments: list[str] = []
    for original_line in body.splitlines():
        if ATTRIBUTE_LINE_RE.match(original_line) or THEMATIC_BREAK_RE.match(original_line):
            continue
        line = MARKDOWN_IMAGE_RE.sub(lambda match: match.group(1), original_line)
        line = MARKDOWN_LINK_RE.sub(lambda match: match.group(1), line)
        line = LIQUID_TAG_RE.sub("", line)
        line = HTML_TAG_RE.sub("", line)
        line = re.sub(r"^\s{0,3}(?:#{1,6}\s+|>\s*|[-+*]\s+|\d+[.)]\s+)", "", line)
        line = re.sub(r"[`*_~]", "", line)
        line = html.unescape(line)
        line = " ".join(line.split())
        if line:
            segments.append(line)
    return segments


# Rekonstruiert ausschließlich belegte Kicker-Umwandlungen für den Textvergleich.
# Inventar, Original und unabhängige Link-/Medienprüfungen bleiben unverändert.
def restore_kickers(source: str, target: str) -> str:
    heading = r"^(#{1,6})[ \t]+([^\n]+)\n"
    attributes = r"((?:(?:[ \t]*\n)|(?:[ \t]*\{:[^\n]*\}[ \t]*(?:\n|$)))*)"
    source_pattern = re.compile(heading + attributes + r"((?:>[ \t]?[^\n]*(?:\n|$))+)", re.M)
    target_pattern = re.compile(heading + attributes, re.M)
    candidates = Counter()
    for match in source_pattern.finditer(source):
        if len(match[1]) not in {2, 3, 4}:
            continue
        quote = "\n".join(re.sub(r"^>[ \t]?", "", line) for line in match[4].splitlines())
        candidates[(match[1], html.unescape(match[2]), html.unescape(quote))] += 1

    # Fehlerhafte, fremde oder mehrfach verwendete Paare dürfen nie Textverlust maskieren.
    def restore(match: re.Match[str]) -> str:
        attrs = [item for item in HTML_ATTRIBUTE_RE.finditer(match[3]) if item[1] == "data-kicker"]
        if not attrs:
            return match[0]
        if len(attrs) != 1:
            raise ValueError("Mehrfaches data-kicker an einer Überschrift")
        kicker = html.unescape(attrs[0][3])
        key = (match[1], kicker, html.unescape(match[2]))
        if not candidates[key]:
            raise ValueError("Kicker, Überschrift oder Heading-Ebene ohne identisches benachbartes Quellpaar")
        candidates[key] -= 1
        return f"{match[1]} {kicker}\n\n> {match[2]}\n" + match[3]

    return target_pattern.sub(restore, target)


def yaml_like_values(text: str) -> list[str]:
    values: list[str] = []
    for raw in text.splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        if line.startswith("-"):
            line = line[1:].strip()
        if ":" in line:
            line = line.split(":", 1)[1].strip()
        if not line or line in {"|", ">", "[]", "{}"}:
            continue
        if " #" in line:
            line = line.split(" #", 1)[0].rstrip()
        if len(line) >= 2 and line[0] == line[-1] and line[0] in {'"', "'"}:
            line = line[1:-1]
        if line:
            values.append(line)
    return values


def data_values(path: Path, text: str) -> list[str]:
    if path.suffix.lower() == ".json":
        try:
            value = json.loads(text)
        except json.JSONDecodeError:
            return []
        result: list[str] = []

        def walk(item: Any) -> None:
            if isinstance(item, dict):
                for child in item.values():
                    walk(child)
            elif isinstance(item, list):
                for child in item:
                    walk(child)
            elif item is not None:
                result.append(str(item))

        walk(value)
        return result
    return yaml_like_values(text)


def build_inventory(source: Path) -> dict[str, Any]:
    files: list[dict[str, Any]] = []
    pages: list[dict[str, Any]] = []
    assets: list[dict[str, Any]] = []
    data_files: list[dict[str, Any]] = []
    for path in iter_files(source):
        relative = path.relative_to(source)
        rel = normalized_path(relative)
        digest = sha256(path)
        files.append({"path": rel, "sha256": digest, "size": path.stat().st_size})
        if path.suffix.lower() in MEDIA_SUFFIXES and "dist" not in relative.parts:
            assets.append({"path": rel, "sha256": digest, "size": path.stat().st_size})
        text = decode_text(path)
        if text is None:
            continue
        if is_page(relative):
            frontmatter, body = split_frontmatter(text)
            pages.append({
                "path": rel,
                "route": route_for(relative, frontmatter),
                "frontmatter_content": {
                    key: frontmatter[key] for key in sorted(PROTECTED_FRONTMATTER_KEYS) if key in frontmatter
                },
                "text_segments": text_segments(body),
                "links": link_references(body),
                "media": media_references(frontmatter, body),
            })
        if len(relative.parts) >= 3 and relative.parts[:2] == ("docs", "_data"):
            data_files.append({"path": rel, "values": data_values(path, text)})
    return {
        "schema_version": SCHEMA_VERSION,
        "files": files,
        "pages": pages,
        "assets": assets,
        "data_files": data_files,
    }


def write_json(path: Path, value: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def snapshot(args: argparse.Namespace) -> int:
    source = args.source.resolve()
    if not source.is_dir():
        raise SystemExit(f"Source directory does not exist: {source}")
    inventory = build_inventory(source)
    write_json(args.output, inventory)
    print(f"Inventar: {len(inventory['pages'])} Seiten, {len(inventory['assets'])} Medien, {len(inventory['files'])} Dateien")
    return 0


def init_map(args: argparse.Namespace) -> int:
    inventory = load_json(args.inventory)
    mapping = {
        "schema_version": SCHEMA_VERSION,
        "pages": [{"source": page["path"], "target": page["path"]} for page in inventory["pages"]],
        "assets": [{"source": asset["path"], "target": asset["path"]} for asset in inventory["assets"]],
        "data_files": [{"source": item["path"], "target": item["path"]} for item in inventory["data_files"]],
        "additional_pages": [],
    }
    write_json(args.output, mapping)
    print(f"Zuordnung angelegt: {len(mapping['pages'])} Seiten")
    return 0


def counter_missing(expected: list[str], actual: list[str]) -> list[str]:
    missing = Counter(expected) - Counter(actual)
    return [value for value, count in missing.items() for _ in range(count)]


def verify(args: argparse.Namespace) -> int:
    source = args.source.resolve()
    target = args.target.resolve()
    inventory = load_json(args.inventory)
    mapping = load_json(args.mapping)
    errors: list[str] = []

    if inventory.get("schema_version") != SCHEMA_VERSION or mapping.get("schema_version") != SCHEMA_VERSION:
        errors.append("Nicht unterstützte Inventar- oder Mapping-Version")

    expected_files = {item["path"]: item for item in inventory.get("files", [])}
    current_files = {item["path"]: item for item in build_inventory(source)["files"]}
    if set(expected_files) != set(current_files):
        missing = sorted(set(expected_files) - set(current_files))
        added = sorted(set(current_files) - set(expected_files))
        if missing:
            errors.append("Dateien fehlen in .old: " + ", ".join(missing))
        if added:
            errors.append("Dateien wurden in .old ergänzt: " + ", ".join(added))
    for path, expected in expected_files.items():
        current = current_files.get(path)
        if current and current["sha256"] != expected["sha256"]:
            errors.append(f"Datei in .old verändert: {path}")

    page_by_source = {item["path"]: item for item in inventory.get("pages", [])}
    page_entries = mapping.get("pages", [])
    mapped_sources = [item.get("source") for item in page_entries]
    mapped_targets = [item.get("target") for item in page_entries]
    if Counter(mapped_sources) != Counter(page_by_source):
        missing = sorted(set(page_by_source) - set(mapped_sources))
        unknown = sorted((str(value) for value in set(mapped_sources) - set(page_by_source)))
        duplicates = sorted(path for path, count in Counter(mapped_sources).items() if path and count > 1)
        if missing:
            errors.append("Quellseiten ohne Zuordnung: " + ", ".join(missing))
        if unknown:
            errors.append("Unbekannte Quellseiten im Mapping: " + ", ".join(unknown))
        if duplicates:
            errors.append("Quellseiten mehrfach zugeordnet: " + ", ".join(duplicates))
    duplicate_targets = sorted(path for path, count in Counter(mapped_targets).items() if path and count > 1)
    if duplicate_targets:
        errors.append("Zielseiten mehrfach verwendet: " + ", ".join(duplicate_targets))

    valid_targets: set[str] = set()
    for item in page_entries:
        source_rel = item.get("source")
        target_rel = item.get("target")
        if not source_rel or not target_rel or source_rel not in page_by_source:
            continue
        resolved = safe_target_path(target, target_rel, f"Seitenzuordnung {source_rel}", errors)
        if resolved is None:
            continue
        target_path, normalized_target = resolved
        if not target_path.is_file():
            errors.append(f"Zielseite fehlt: {source_rel} -> {target_rel}")
            continue
        target_text = decode_text(target_path)
        if target_text is None:
            errors.append(f"Zielseite ist nicht UTF-8: {target_rel}")
            continue
        frontmatter, body = split_frontmatter(target_text)
        relative = Path(normalized_target)
        source_page = page_by_source[source_rel]
        target_route = route_for(relative, frontmatter)
        if source_page.get("route") != target_route:
            errors.append(f"Route verändert: {source_rel} ({source_page.get('route')}) -> {target_rel} ({target_route})")
        protected_frontmatter = {
            key: frontmatter[key] for key in sorted(PROTECTED_FRONTMATTER_KEYS) if key in frontmatter
        }
        if source_page.get("frontmatter_content", {}) != protected_frontmatter:
            errors.append(f"Geschütztes Frontmatter verändert: {source_rel} -> {target_rel}")
        # Nur nach exaktem Paarabgleich wird die erlaubte Kicker-Struktur zurückgeführt.
        source_path = source / source_rel
        source_text = decode_text(source_path) if source_path.is_file() else None
        source_body = split_frontmatter(source_text)[1] if source_text is not None else ""
        try:
            comparison_body = restore_kickers(source_body, body)
        except ValueError as error:
            errors.append(f"Kicker verändert: {source_rel} -> {target_rel}: {error}")
            comparison_body = body
        fields = (
            ("Text", "text_segments", text_segments(comparison_body)),
            ("Links", "links", link_references(body)),
            ("Medienreferenzen", "media", media_references(frontmatter, body)),
        )
        for label, key, actual in fields:
            if source_page[key] != actual:
                errors.append(f"{label} verändert: {source_rel} -> {target_rel}")
        valid_targets.add(normalized_target)

    target_inventory = build_inventory(target)
    actual_target_pages = {item["path"] for item in target_inventory["pages"]}
    additional_paths: set[str] = set()
    for item in mapping.get("additional_pages", []):
        path = item.get("path")
        reason = str(item.get("reason", "")).strip()
        if not path or not reason:
            errors.append("Jede zusätzliche Zielseite benötigt Pfad und Begründung")
            continue
        resolved = safe_target_path(target, path, "Zusätzliche Zielseite", errors)
        if resolved is None:
            continue
        _, normalized_additional = resolved
        additional_paths.add(normalized_additional)
        if normalized_additional not in actual_target_pages:
            errors.append(f"Dokumentierte zusätzliche Zielseite fehlt: {path}")
    undocumented = sorted(actual_target_pages - valid_targets - additional_paths)
    if undocumented:
        errors.append("Zusätzliche Zielseiten ohne Begründung: " + ", ".join(undocumented))

    asset_by_source = {item["path"]: item for item in inventory.get("assets", [])}
    asset_entries = mapping.get("assets", [])
    if Counter(item.get("source") for item in asset_entries) != Counter(asset_by_source):
        missing = sorted(set(asset_by_source) - {item.get("source") for item in asset_entries})
        if missing:
            errors.append("Lokale Medien ohne Zuordnung: " + ", ".join(missing))
    for item in asset_entries:
        source_rel = item.get("source")
        target_rel = item.get("target")
        if source_rel not in asset_by_source or not target_rel:
            continue
        resolved = safe_target_path(target, target_rel, f"Medienzuordnung {source_rel}", errors)
        if resolved is None:
            continue
        target_path, _ = resolved
        if not target_path.is_file():
            errors.append(f"Lokales Medium fehlt: {source_rel} -> {target_rel}")
        elif sha256(target_path) != asset_by_source[source_rel]["sha256"]:
            errors.append(f"Lokales Medium verändert: {source_rel} -> {target_rel}")

    data_by_source = {item["path"]: item for item in inventory.get("data_files", [])}
    data_entries = mapping.get("data_files", [])
    if Counter(item.get("source") for item in data_entries) != Counter(data_by_source):
        missing = sorted(set(data_by_source) - {item.get("source") for item in data_entries})
        if missing:
            errors.append("Datendateien ohne Zuordnung: " + ", ".join(missing))
    for item in data_entries:
        source_rel = item.get("source")
        target_rel = item.get("target")
        if source_rel not in data_by_source or not target_rel:
            continue
        resolved = safe_target_path(target, target_rel, f"Datenzuordnung {source_rel}", errors)
        if resolved is None:
            continue
        target_path, _ = resolved
        target_text = decode_text(target_path) if target_path.is_file() else None
        if target_text is None:
            errors.append(f"Datendatei fehlt oder ist nicht UTF-8: {source_rel} -> {target_rel}")
            continue
        missing_values = counter_missing(data_by_source[source_rel]["values"], data_values(target_path, target_text))
        if missing_values:
            errors.append(f"Werte aus Datendatei fehlen: {source_rel} -> {target_rel}: {missing_values!r}")

    report = {
        "ok": not errors,
        "source_files": len(expected_files),
        "source_pages": len(page_by_source),
        "mapped_pages": len(valid_targets),
        "source_assets": len(asset_by_source),
        "errors": errors,
    }
    if args.report:
        write_json(args.report, report)
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1
    print(f"OK: {len(valid_targets)} Seiten und {len(asset_by_source)} Medien vollständig geprüft")
    return 0


def parser() -> argparse.ArgumentParser:
    root = argparse.ArgumentParser(description=__doc__)
    commands = root.add_subparsers(dest="command", required=True)

    snapshot_parser = commands.add_parser("snapshot", help="Ausgangsstand inventarisieren")
    snapshot_parser.add_argument("--source", type=Path, required=True)
    snapshot_parser.add_argument("--output", type=Path, required=True)
    snapshot_parser.set_defaults(handler=snapshot)

    map_parser = commands.add_parser("init-map", help="vollständige 1:1-Ausgangszuordnung erzeugen")
    map_parser.add_argument("--inventory", type=Path, required=True)
    map_parser.add_argument("--output", type=Path, required=True)
    map_parser.set_defaults(handler=init_map)

    verify_parser = commands.add_parser("verify", help="Migration gegen das Inventar prüfen")
    verify_parser.add_argument("--source", type=Path, required=True)
    verify_parser.add_argument("--target", type=Path, required=True)
    verify_parser.add_argument("--inventory", type=Path, required=True)
    verify_parser.add_argument("--mapping", type=Path, required=True)
    verify_parser.add_argument("--report", type=Path)
    verify_parser.set_defaults(handler=verify)
    return root


def main() -> int:
    args = parser().parse_args()
    return args.handler(args)


if __name__ == "__main__":
    raise SystemExit(main())
