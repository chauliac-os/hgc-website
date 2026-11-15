# huguettegremychauliac.com — rules for any agent editing this site

This site belongs to Bertrand Chauliac (operator, French only, non-technical) and was built by Michael Chauliac. Bertrand may ask for any change: text, page, structure, design. You implement it. Your extra job is to make sure that what ships is **sound**: correct facts, coherent with the book, consistent with HelloAsso, legal, and in the site's design. You advise; Bertrand decides. Speak to him in plain French, never in technical words.

## 1. How a change ships — always the same path

1. **Work on a branch, never directly on `main`.** `main` deploys to production on Vercel automatically.
2. Push the branch. Vercel builds a **preview URL** for it. Open the preview in Chrome and look at it **on a phone width (375 px) and on desktop**.
3. Show Bertrand the preview (screenshot or link) and say in one or two sentences what changed.
4. Only after his explicit "oui" for that preview: merge to `main`. Then open the live page and check that the change is there.
5. Say in one line what changed and where.

`npm run build` runs `scripts/check-design-system.mjs --strict` first. It blocks gradients, shadows, fonts other than Garamond, rounded corners (except the roundel circle), desktop-first media queries and colours off the palette. If it fails, fix the change. Never loosen the gate to make a change pass.

## 2. How much checking a change needs — three levels

| Level | Examples | What you do |
|---|---|---|
| **Green: content** | fixing a typo, rewording a paragraph, replacing a photo, adding a disc to the discography, a new video in Médias | Branch → preview → Bertrand's OK → merge. |
| **Orange: structure or design** | a new page, changing the menu, moving sections, a new layout, new colours or fonts, changing the home page | Same path. Before building: say what already exists that could do the job (a page, a component, a section), and propose to reuse it. Check every page still reads well at 375 px. Tell Michael in one line after it ships. |
| **Red: facts, money, legal, infrastructure** | prices; ISBN; HelloAsso links; copyright and legal notices; personal data (addresses, phone numbers); deleting a page or a photo; anything about the domain, Vercel, `next.config.ts`, `package.json` or the design gate | Stop before building. State plainly what worries you and why, propose the safer option, and implement only after Bertrand confirms knowing the risk. Tell Michael before merging. |

## 3. Facts that must match everywhere

These facts live in several places: the site, the printed book, the ebook, and HelloAsso. If one changes, **every place changes in the same pass**, or you name what is left out of date.

| Fact | Value (15 Nov 2026) | Also lives in |
|---|---|---|
| Printed book price | 20 € TTC | back cover, HelloAsso shop « HUGUETTE GREMY CHAULIAC » |
| Ebook price | 10 € TTC | ebook back cover (page 102), HelloAsso shop « Ebook - Passion d'une claveciniste » |
| Postage | 7 € per order, La Poste lettre suivie, France only | HelloAsso shop, page « Le livre » |
| ISBN printed book | 979-10-990059-0-8 | book page 2, barcode |
| ISBN ebook (PDF) | 979-10-990059-1-5 | ebook page 2 and page 102 |
| Hand delivery | **No** (Bertrand, 15 Nov 2026) | — |
| Rights notice | « © Association PRESS, 2026 » | book page 2. Text rights: « 01 Autorisation de publication - Manou ». Photo rights (musée Chagall, Nicolas Bomsel) still to confirm. |

The book is the design and content authority. Its files are in Bertrand's iCloud: `Documents/CLAUDE/&1 FAMILLE/MANOU /`.

## 4. When Bertrand asks for something you think is unsound

Do not refuse, and do not comply silently. In this order:

1. Restate what he wants, in one sentence.
2. Name the concrete risk: what breaks, who sees it, and whether it can be undone.
3. Propose the alternative that gets him the same result more safely.
4. He decides. If he keeps his choice on a red item, implement it on a branch, show the preview, and tell Michael before merging.

Common cases:

- **A price that differs from HelloAsso or the book** → change HelloAsso and the site together, or keep the old price.
- **Personal contact details** (home address, mobile number) on a public page → use the contact page or the association email instead.
- **Deleting content** → hide it or move it instead. Deleted work is hard to recover.
- **A new look for one page** → reuse the existing components and palette, so the site stays one book.
- **Putting the ebook PDF in the site** → never. This repository is public, so the file would be free for anyone. The paid ebook is delivered only by the link in the HelloAsso thank-you message.

## 5. Things that are never done without Michael

- Changing the domain, the Vercel project, environment variables, `next.config.ts`, dependencies, or the design gate.
- Force-pushing or rewriting the history of `main`.
- Publishing a HelloAsso shop, or changing what it charges. Those also need Bertrand's explicit yes.
