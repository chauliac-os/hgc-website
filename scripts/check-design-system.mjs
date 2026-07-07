#!/usr/bin/env node
// Design gate — huguettegremychauliac.com
// The book is the design authority (design-tokens.json). This gate blocks
// off-system CSS/JSX before any build, mirroring the harperOS website gate.
// GATE (fails --strict): gradients, shadows, off-system fonts, non-circular
// border-radius, desktop-first media queries, off-palette hex colors.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const PALETTE = ["#ffffff", "#1a1a1a", "#c72f25", "#6b6b6b", "#e8e2d9"];
const strict = process.argv.includes("--strict");
const findings = [];

function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (["node_modules", ".next", "out", ".git", "public"].includes(e)) continue;
      walk(p);
    } else if (/\.(css|tsx|ts)$/.test(e)) {
      check(p, readFileSync(p, "utf8"));
    }
  }
}

function check(file, src) {
  const rel = file.replace(ROOT, "");
  src.split("\n").forEach((line, i) => {
    const at = `${rel}:${i + 1}`;
    if (/linear-gradient|radial-gradient/.test(line)) findings.push(`${at} GATE gradient`);
    if (/box-shadow|text-shadow/.test(line)) findings.push(`${at} GATE shadow`);
    if (/border-radius/.test(line) && !/border-radius:\s*50%/.test(line))
      findings.push(`${at} GATE non-circular border-radius (only the roundel circle ships)`);
    if (/font-family/.test(line) && !/--font-garamond|Garamond/.test(line))
      findings.push(`${at} GATE off-system font-family`);
    if (/@media[^{]*max-width/.test(line))
      findings.push(`${at} GATE desktop-first media query (mobile-first law)`);
    const hexes = line.match(/#[0-9a-fA-F]{6}\b/g) || [];
    for (const h of hexes)
      if (!PALETTE.includes(h.toLowerCase()))
        findings.push(`${at} GATE off-palette color ${h}`);
  });
}

walk(join(ROOT, "src"));

if (findings.length) {
  console.error(`design gate: ${findings.length} violation(s)`);
  for (const f of findings) console.error("  " + f);
  if (strict) process.exit(1);
} else {
  console.log("design gate: clean");
}
