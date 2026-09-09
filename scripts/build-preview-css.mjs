import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as sass from "sass";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = dirname(scriptDirectory);
const inputFile = join(repositoryRoot, "docs/_src/style.scss");
const outputFile = join(repositoryRoot, "docs/assets/dist/style.css");
const outputDirectory = dirname(outputFile);
const selfPackagePrefix = "@leuffen/themejs2/";

// Spiegelt den Vite-Alias für Importe aus dem eigenen Paket im separaten Preview-CSS-Build.
const selfPackageImporter = {
    findFileUrl(url) {
        if (!url.startsWith(selfPackagePrefix)) {
            return null;
        }

        const importPath = resolve(repositoryRoot, url.slice(selfPackagePrefix.length));
        if (importPath !== repositoryRoot && !importPath.startsWith(`${repositoryRoot}${sep}`)) {
            return null;
        }

        const candidates = [
            importPath,
            `${importPath}.scss`,
            join(dirname(importPath), `_${basename(importPath)}.scss`),
            join(importPath, "_index.scss"),
            join(importPath, "index.scss"),
            `${importPath}.sass`,
            `${importPath}.css`,
        ];
        const sourceFile = candidates.find((candidate) => existsSync(candidate));
        return sourceFile ? pathToFileURL(sourceFile) : null;
    },
};

const result = await sass.compileAsync(inputFile, {
    importers: [selfPackageImporter],
    loadPaths: [join(repositoryRoot, "node_modules")],
    sourceMap: true,
    sourceMapIncludeSources: true,
    style: "compressed",
});

// Schreibt portable Repository-Pfade, damit DevTools direkt zu SCSS-Quellen springen kann.
const sourceMap = {
    ...result.sourceMap,
    file: "style.css",
    sources: result.sourceMap.sources.map((source) => {
        const sourceUrl = new URL(source);
        if (sourceUrl.protocol !== "file:") {
            return source;
        }

        return relative(outputDirectory, fileURLToPath(sourceUrl)).split(sep).join("/");
    }),
};

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputFile, `${result.css}\n/*# sourceMappingURL=style.css.map */\n`);
writeFileSync(`${outputFile}.map`, `${JSON.stringify(sourceMap)}\n`);
