#!/usr/bin/env python3
"""Regressionstests für den ThemeJS2-Migrationsaudit."""

from __future__ import annotations

import json
import subprocess
import tempfile
import unittest
from pathlib import Path

from migration_audit import restore_kickers, text_segments


SCRIPT = Path(__file__).with_name("migration_audit.py")


class MigrationAuditTest(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.source = self.root / ".old"
        self.target = self.root / "target"
        (self.source / "docs/pages").mkdir(parents=True)
        (self.source / "docs/assets").mkdir(parents=True)
        (self.source / "docs/_data").mkdir(parents=True)
        self.target.mkdir()
        (self.source / "docs/pages/index.de.md").write_text(
            "---\ntitle: Praxis\npermalink: /\nimage: /assets/team.png\n---\n"
            "## Willkommen\n{: layout=\"use: #sec-card-2col\"}\n\n"
            "Unser Text bleibt exakt.\n\n![Team](/assets/team.png)\n\n[Kontakt](/kontakt)\n",
            encoding="utf-8",
        )
        (self.source / "docs/assets/team.png").write_bytes(b"image-bytes")
        (self.source / "docs/_data/general.yml").write_text(
            "name: Praxis Beispiel\nphone: '+491234'\n", encoding="utf-8"
        )
        self.inventory = self.root / "inventory.json"
        self.mapping = self.root / "mapping.json"
        self.run_audit("snapshot", "--source", self.source, "--output", self.inventory)
        self.run_audit("init-map", "--inventory", self.inventory, "--output", self.mapping)

    def tearDown(self) -> None:
        self.temp.cleanup()

    def run_audit(self, *args: object, expected: int = 0) -> subprocess.CompletedProcess[str]:
        result = subprocess.run(
            [str(SCRIPT), *(str(arg) for arg in args)],
            text=True,
            capture_output=True,
            check=False,
        )
        self.assertEqual(expected, result.returncode, result.stdout + result.stderr)
        return result

    def make_valid_target(self) -> None:
        (self.target / "docs/pages").mkdir(parents=True)
        (self.target / "docs/assets").mkdir(parents=True)
        (self.target / "docs/_data").mkdir(parents=True)
        (self.target / "docs/pages/index.de.md").write_text(
            "---\ntitle: Praxis\npermalink: /\nimage: /assets/team.png\n---\n"
            "## Willkommen\n{: layout=\"ntl-2col.style-default\"}\n\n"
            "Unser Text bleibt exakt.\n\n![Team](/assets/team.png)\n\n[Kontakt](/kontakt)\n",
            encoding="utf-8",
        )
        (self.target / "docs/assets/team.png").write_bytes(b"image-bytes")
        (self.target / "docs/_data/general.yml").write_text(
            "name: Praxis Beispiel\nphone: '+491234'\nnew_theme_key: true\n", encoding="utf-8"
        )

    def test_structural_layout_change_preserves_content(self) -> None:
        self.make_valid_target()
        self.run_audit(
            "verify", "--source", self.source, "--target", self.target,
            "--inventory", self.inventory, "--mapping", self.mapping,
        )

    def test_changed_text_fails(self) -> None:
        self.make_valid_target()
        page = self.target / "docs/pages/index.de.md"
        page.write_text(page.read_text(encoding="utf-8").replace("exakt", "ungefähr"), encoding="utf-8")
        self.run_audit(
            "verify", "--source", self.source, "--target", self.target,
            "--inventory", self.inventory, "--mapping", self.mapping, expected=1,
        )

    # Durchläuft die CLI mit unverändertem Inventar und einem tatsächlich migrierten Paar.
    def test_kicker_migration_and_corruption_through_cli(self) -> None:
        source_page = self.source / "docs/pages/index.de.md"
        source_page.write_text(source_page.read_text().replace("Unser Text", "> Für alle\n\nUnser Text"))
        self.run_audit("snapshot", "--source", self.source, "--output", self.inventory)
        self.make_valid_target()
        page = self.target / "docs/pages/index.de.md"
        page.write_text(page.read_text().replace('## Willkommen', '## Für alle').replace(
            '{: layout="ntl-2col.style-default"}', '{: layout="ntl-2col.style-default" data-kicker="Willkommen"}'))
        self.run_audit("verify", "--source", self.source, "--target", self.target,
                       "--inventory", self.inventory, "--mapping", self.mapping)
        page.write_text(page.read_text().replace('data-kicker="Willkommen"', 'data-kicker="Verändert"'))
        self.run_audit("verify", "--source", self.source, "--target", self.target,
                       "--inventory", self.inventory, "--mapping", self.mapping, expected=1)

    def test_missing_page_fails(self) -> None:
        self.make_valid_target()
        (self.target / "docs/pages/index.de.md").unlink()
        self.run_audit(
            "verify", "--source", self.source, "--target", self.target,
            "--inventory", self.inventory, "--mapping", self.mapping, expected=1,
        )

    def test_changed_asset_fails(self) -> None:
        self.make_valid_target()
        (self.target / "docs/assets/team.png").write_bytes(b"optimized")
        self.run_audit(
            "verify", "--source", self.source, "--target", self.target,
            "--inventory", self.inventory, "--mapping", self.mapping, expected=1,
        )

    def test_changed_frontmatter_content_fails(self) -> None:
        self.make_valid_target()
        page = self.target / "docs/pages/index.de.md"
        page.write_text(page.read_text(encoding="utf-8").replace("title: Praxis", "title: Neue Praxis"), encoding="utf-8")
        self.run_audit(
            "verify", "--source", self.source, "--target", self.target,
            "--inventory", self.inventory, "--mapping", self.mapping, expected=1,
        )

    def test_changed_link_target_fails(self) -> None:
        self.make_valid_target()
        page = self.target / "docs/pages/index.de.md"
        page.write_text(page.read_text(encoding="utf-8").replace("(/kontakt)", "(/kontakt-neu)"), encoding="utf-8")
        self.run_audit(
            "verify", "--source", self.source, "--target", self.target,
            "--inventory", self.inventory, "--mapping", self.mapping, expected=1,
        )

    def test_changed_old_copy_fails(self) -> None:
        self.make_valid_target()
        source_page = self.source / "docs/pages/index.de.md"
        source_page.write_text(source_page.read_text(encoding="utf-8") + "\nVerändert.\n", encoding="utf-8")
        self.run_audit(
            "verify", "--source", self.source, "--target", self.target,
            "--inventory", self.inventory, "--mapping", self.mapping, expected=1,
        )

    # Fehlende Sicherungsseiten erzeugen einen Prüfbericht statt eines unbehandelten Fehlers.
    def test_missing_source_page_reports_failure(self) -> None:
        self.make_valid_target()
        (self.source / "docs/pages/index.de.md").unlink()
        result = self.run_audit("verify", "--source", self.source, "--target", self.target,
                                "--inventory", self.inventory, "--mapping", self.mapping, expected=1)
        self.assertNotIn("Traceback", result.stderr)

    def test_old_directory_cannot_mask_missing_target(self) -> None:
        mapping = json.loads(self.mapping.read_text(encoding="utf-8"))
        mapping["pages"][0]["target"] = ".old/docs/pages/index.de.md"
        self.mapping.write_text(json.dumps(mapping), encoding="utf-8")
        self.run_audit(
            "verify", "--source", self.source, "--target", self.root,
            "--inventory", self.inventory, "--mapping", self.mapping, expected=1,
        )


# Prüft den Kicker-Vertrag unabhängig von Layoutklassen und schützt echte Textänderungen.
class KickerAuditTest(unittest.TestCase):
    def test_supported_levels_and_escaped_attribute(self) -> None:
        for level in ("##", "###", "####"):
            with self.subTest(level=level):
                source = f'{level} Beratung & "Vorsorge"\n{{: #beratung }}\n\n> Für alle\n'
                target = f'{level} Für alle\n{{: #beratung data-kicker="Beratung &amp; &quot;Vorsorge&quot;" .aside }}\n'
                self.assertEqual(text_segments(source), text_segments(restore_kickers(source, target)))

    def test_changed_or_missing_pair_is_rejected(self) -> None:
        source = '## Angebot\n\n> Für alle\n'
        for target in (
            '## Für alle\n{: data-kicker="Anderes Angebot" }\n',
            '## Für wenige\n{: data-kicker="Angebot" }\n',
            '### Für alle\n{: data-kicker="Angebot" }\n',
            '## Für alle\n{: data-kicker="Angebot" data-kicker="Angebot" }\n',
            '## Für alle\n{: data-kicker="Angebot" }\n' * 2,
        ):
            with self.subTest(target=target), self.assertRaises(ValueError):
                restore_kickers(source, target)

    def test_intervening_content_and_unsupported_levels_are_rejected(self) -> None:
        for source in ('## Angebot\nText\n> Für alle\n', '## Angebot\n![](bild.png)\n> Für alle\n'):
            with self.subTest(source=source), self.assertRaises(ValueError):
                restore_kickers(source, '## Für alle\n{: data-kicker="Angebot" }\n')
        for level in ('#', '#####', '######'):
            with self.subTest(level=level), self.assertRaises(ValueError):
                restore_kickers(f'{level} Angebot\n> Für alle\n', f'{level} Für alle\n{{: data-kicker="Angebot" }}\n')

    def test_standalone_quote_and_unmigrated_content_remain_unchanged(self) -> None:
        source = '## Angebot\n\nText\n\n> Ein Zitat\n'
        self.assertEqual(source, restore_kickers(source, source))

    def test_reordered_pair_still_fails_text_comparison(self) -> None:
        source = 'Einleitung\n\n## Angebot\n> Für alle\n\nEnde\n'
        target = '## Für alle\n{: data-kicker="Angebot" }\n\nEinleitung\n\nEnde\n'
        self.assertNotEqual(text_segments(source), text_segments(restore_kickers(source, target)))


if __name__ == "__main__":
    unittest.main()
