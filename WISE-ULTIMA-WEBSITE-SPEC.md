---

## 6.4f PRODUCT UI ILLUSTRATIONS — RECREATE FROM REFERENCE SCREENSHOTS

Three reference screenshots are provided for:

1. Wise Explore
2. Wise Actions
3. Wise AI

IMPORTANT:
These screenshots are VISUAL REFERENCES only.

DO NOT simply place the screenshots using `<Image />` or `<img>`.

Recreate each screenshot as a real React/TypeScript UI component using:
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui where appropriate
- lucide-react icons

The recreated screens are product illustrations for the marketing website.
They do NOT need backend functionality.

They should visually match the supplied screenshots as closely as possible while remaining responsive and clean.

Create the components inside:

components/product-ui/
  WiseExploreIllustration.tsx
  WiseActionsIllustration.tsx
  WiseAIIllustration.tsx
  ProductAppShell.tsx

`ProductAppShell.tsx` should contain the reusable visual structure shared by all three screens:
- left vertical navigation rail
- Wise Work / Wise Ultima logo area
- navigation icons
- active navigation state
- top search bar
- Region selector
- Application selector
- main application canvas
- subtle borders
- light neutral background
- realistic enterprise-dashboard spacing

Do not rebuild the shell separately inside every illustration.

### VISUAL ACCURACY

Use the supplied screenshots as the primary visual reference.

Match:
- proportions
- spacing
- sidebar width
- top navigation positioning
- card dimensions
- borders
- typography hierarchy
- table structure
- filters
- tabs
- badges
- status indicators
- dropdowns
- search fields
- icon placement

The result should look like an actual Wise Ultima application screen rather than a generic SaaS dashboard.

Use the website's existing design tokens where possible, but the internal product UI should remain faithful to the screenshots.

Do NOT introduce gradients.

Do NOT redesign the product interface into a completely different UI.

Small simplifications are acceptable where screenshot details are unreadable, but preserve the overall composition.

---

### A. `WiseExploreIllustration.tsx`

Recreate the supplied **WISE EXPLORE** screen.

Structure:

Top:
- global search
- Region dropdown
- Application dropdown

Prediction tabs:
- CURRENT
- W-PREDICT
- M-PREDICT

Filter row:
- Amber
- Type
- Environment
- Search for CID's
- search icons
- download icon

Below filters:
- "Number of results: 168"

Results area:
- table/card layout
- columns:
  - System Name
  - Description
  - Issues

Create a representative system result based on the screenshot.

System badge:
- `a004456p007`

Metadata:
- Production
- Server

Description should visually resemble a long infrastructure-analysis result.

Issues panel should contain expandable rows.

Example expanded issue:

"Errors detected during backup"

Possible Causes:
- Insufficient disk space for backup files
- Backup software configuration errors
- Network connectivity issues during backup
- Database corruption or errors
- Hardware failure or malfunction

Category:
Database

Add another collapsed issue:
"MSSQL Log files used size"

The component does not need real filtering/backend behavior, but tabs, dropdowns and accordion rows may have lightweight local interactions.

---

### B. `WiseActionsIllustration.tsx`

Recreate the supplied **WISE ACTIONS** screen.

Top:
- global search
- Region dropdown
- Application dropdown

Prediction tabs:
- CURRENT
- W-PREDICT
- M-PREDICT

Health summary cards:

Server
- Red: 133
- Amber: 155

Storage
- Red: 2
- Amber: 3

Database
- Green
- "All Well!"

Network
- Green
- "All Well!"

Middleware
- Red: 0
- Amber: 6

Backup
- Red: 1
- Amber: 4

Use the proper R/A/G colors defined by the website design system.

Below the cards:

Heading:
"Action Recommendations"

Table headings:
- System Name
- Issues and Actions

Representative rows:

System:
`a010011p201`

Type:
Server

Issue:
High memory usage

System:
`a010065p210`

Type:
Server

Issues:
- Potential disk space exhaustion
- Potential memory exhaustion

Include chevron controls on the right to visually indicate expandable recommendations.

The illustration may allow rows to expand locally to show a short recommended action, but no backend behavior is required.

---

### C. `WiseAIIllustration.tsx`

Recreate the supplied **WISE AI** screen.

This screen should visually look like an enterprise AI assistant inside Wise Ultima.

Left conversation/history column:

Heading:
"Recent"

Example history:

"What are the systems with low cpu usage"
20/02/2025 11:58 AM

"At what time, did the most amount of incidents occur on 2024-05-02?"
20/02/2025 11:20 AM

Main chat:

User message:
"What are the systems with high cpu usage?"

Wise-AI response:
"The systems with high CPU usage include several with percentages exceeding 95%, with the highest being 100% for system ID 'a010987p009'."

Below the response show a table:

System ID | CPU Usage %

Include representative rows such as:

a010065p300 | 98.74
a010067p300 | 98.88
a010067p301 | 97.95

Bottom suggested prompt chips:

"What systems have low memory usage that I should be aware of?"

"How can I improve my system's overall performance?"

"Can I customize the alert settings for high CPU usage?"

Bottom:
- message input
- send icon

Top-right:
- Save Chat
- user avatar

The illustration may have lightweight local interaction:
- clicking suggested prompts changes the input
- sending a known demo prompt can display a canned answer

Do not connect it to an actual LLM/API.

---

## PRODUCT ILLUSTRATION PRESENTATION

These recreated screens must NOT appear as plain full-width application pages when used on the marketing site.

Create a reusable presentation wrapper:

`components/product-ui/ProductIllustrationFrame.tsx`

It should make each UI recreation look like a premium product showcase:

- large rounded application frame
- thin solid border
- subtle flat shadow / hard offset shadow
- clipped overflow
- white/light product interface
- responsive scaling
- desktop proportions preserved
- no gradient
- optional small product label outside the frame

On desktop, allow the illustration to be slightly oversized and partially cropped when that improves composition.

On mobile, scale/reflow intelligently rather than shrinking the entire dashboard until text becomes unreadable.

---

## WHERE TO USE THESE COMPONENTS

Replace screenshot-only presentation for these three modules with the recreated components.

### `/features/wise-explore`

Use:

`<WiseExploreIllustration />`

as the primary hero/product visual.

Do NOT use `wise-explore.png` as the main visible product screen.

Keep the existing Wise Explore story:

"Find the one red dot in a thousand."

Continue the page with the animated filter explanation and benefit sections.

---

### `/features/wise-actions`

Use:

`<WiseActionsIllustration />`

as the primary product visual.

Do NOT use `wise-actions.png` as the main visible product screen.

Keep the existing story:

"Insight → Fix in one click."

The recreated Actions interface should visually lead into the existing:
Alert → Recommendation → Execute
story section.

---

### `/features/wise-ai`

Use:

`<WiseAIIllustration />`

as the primary product visual.

Do NOT use `wise-ai.png` as the main visible product screen.

Keep the existing story:

"Ask your infrastructure."

The recreated AI interface should lead naturally into the interactive chat simulator section.

---

## HOME PAGE USAGE

Also reuse these three product UI components on the Home page.

Add a visual product showcase section after the main Wise Ultima story chapters.

Headline:

"Meet the intelligence behind your operations."

Create three alternating showcase rows:

01 — WISE EXPLORE
"Find the signal inside the noise."

[Text left] [WiseExploreIllustration right]

02 — WISE ACTIONS
"Turn insight into action."

[WiseActionsIllustration left] [Text right]

03 — WISE AI
"Ask your infrastructure."

[Text left] [WiseAIIllustration right]

Each screen should enter using GSAP:
- clip-path reveal
- slight y movement
- scale 0.96 → 1
- subtle parallax while scrolling

Do NOT animate individual dashboard elements excessively.
The product UI must remain readable.

Each row links to its corresponding feature page.

---

## RESPONSIVE RULES FOR PRODUCT UI

Desktop:
- preserve the screenshot's wide dashboard proportions
- application frame can occupy 65–80vw
- allow subtle perspective/tilt only on the outer frame

Tablet:
- reduce sidebar width
- preserve important content
- horizontally scroll dense tables where necessary

Mobile:
- do NOT simply scale a 1400px dashboard down
- simplify/reflow the recreation
- sidebar may become a compact top/side icon strip
- cards stack
- tables can horizontally scroll
- AI history panel can hide/collapse
- preserve the recognizable identity of each screen

---

## IMPORTANT IMPLEMENTATION RULE

The screenshots are references, NOT production assets.

The goal is:

REFERENCE SCREENSHOT
        ↓
REACT UI RECREATION
        ↓
REUSABLE PRODUCT COMPONENT
        ↓
ANIMATED MARKETING-SITE ILLUSTRATION

Do not:
- screenshot the screenshot
- use it as a background image
- trace it into one giant SVG
- hardcode the entire screen as absolute-positioned pixels
- create canvas-based screenshots
- replace it with a generic dashboard design

Build it from normal semantic React elements and reusable components.

The finished recreation should be maintainable and should look convincing at different screen sizes.