# Wise Ultima — Product Website Build Spec

> **Hand this file to Claude (or Claude Code) as the single source of truth.**
> Build a modern, multi-page, story-driven product website for **Wise Ultima** by **Wise Work**.
> Output rule: **always return full files** (never partial diffs).

---

## 0. HARD RULES (read first, never break)

| # | Rule |
|---|------|
| 1 | **Multi-page website.** Separate routes, NOT one long single page. See §5 for the full sitemap. |
| 2 | **Tailwind CSS only** for all styling. Use `globals.css` **only** for things Tailwind cannot do (see §3.3). No CSS modules, no styled-components, no inline `style` except for GSAP-driven dynamic values and CSS variables. |
| 3 | **shadcn/ui** for all base components (Button, Card, Tabs, Accordion, Dialog, Sheet, NavigationMenu, Badge, Input, Select, Switch, Tooltip, Table, ScrollArea, Progress, Separator, Skeleton, Sonner toast, Form, Textarea, Command). Restyle them with Tailwind tokens. |
| 4 | **GSAP for every animation.** Every section on every page must have at least one scroll or entrance animation. See §7 for the animation library to use. |
| 5 | **NO GRADIENTS anywhere.** No `bg-gradient-*`, no `linear-gradient`, `radial-gradient`, `conic-gradient`, no gradient text, no gradient borders, no gradient glows, no gradient meshes. Flat solid colors only. Depth comes from solid layers, hard offset shadows, borders, and 3D geometry — not gradients. |
| 6 | **Story-telling layout.** Visual first, minimal text. Max ~20 words per block. Big type, big visuals, one idea per screen. |
| 7 | **3D theme** derived from the logo (three hexagonal shapes: purple, green, blue). See §4. |
| 8 | **Home page must include a YouTube video section** (§6.1, section 9). |
| 9 | **A dedicated Product Demo page** with interactive dummy data (§6.12). |
| 10 | **Never invent** customers, testimonials, logos, pricing, awards, or stats. Use only facts in §2. Anything unknown is a clearly-marked placeholder. |

---

## 1. Brand

- **Product:** Wise Ultima — *"Intelligent Operations, Simplified!"*
- **Company:** Wise Work — `wisework.in` — `info@wisework.in`
- **What it is:** An AI-driven platform that simplifies and optimizes IT operations for complex cloud and IT environments, using AI, deep learning, LLMs and automation workflows to give predictive and prescriptive insights so organizations manage infrastructure **proactively**.
- **Audience:** CXOs (CIOs, CTOs), top management, IT heads.
- **Industries:** Finance, healthcare, retail, manufacturing, other sectors with complex IT.
- **Tone:** confident, clear, executive-friendly, plain language. Short sentences. No jargon walls.
- **Core promise (3 verbs):** **Predict. Prevent. Act.**

### Assets (already provided in `/assets`, copy to `/public`)

| File | Use |
|---|---|
| `logo.png` | Logo mark (navbar, footer, loader, 3D reference) |
| `favicon.ico` | Favicon (`app/favicon.ico`) |
| `wise-work-wordmark.png` | "Wise Work" company wordmark (footer, about) |
| `wise-board.png` | Wise Board screenshot (2940×1850) |
| `wise-actions.png` | Wise Actions screenshot |
| `wise-explore.png` | Wise Explore screenshot |
| `wise-monitory.png` | Wise Monitory screenshot |
| `wise-ai.png` | Wise AI chat screenshot |

Screenshots are shown inside a **flat browser/device frame** (solid border + hard offset shadow, no blur-gradient shadow) and animated with scroll parallax / clip-path reveal.

---

## 2. CONTENT SOURCE OF TRUTH (from the product document)

Use only this content. Rewrite into short, visual copy. Do not add claims.

### 2.1 The problem (Chapter 1 of the story)
- Managing multiple cloud and IT environments is complex.
- No real-time insights → delayed decisions.
- Reactive responses → downtime and inefficiency.

### 2.2 What Wise Ultima gives you
- Proactive issue detection and resolution.
- Resource optimization and cost management.
- Simple, executive-friendly dashboards and insights.

### 2.3 Modules (each gets its own page)

**Predictive Health Monitoring**
- Real-time health of IT infrastructure.
- Green = healthy · Amber = warning, potential issue · Red = critical, act now.
- Early detection: **25% overall, 60% for P1/P2 critical issues.**

**Prescriptive Actions**
- AI-driven, real-time recommendations to prevent or resolve issues.
- One-click fixes (e.g. increase table space, clear alert logs).
- Integrates with ticketing systems like **ServiceNow** for escalation.

**Intelligent Automation**
- AI engines that heal, optimize and govern infrastructure.
- Optional AI-driven transactional execution.

**Wise Board** — the centralized hub for IT operations
- Serves CXOs (strategic view) and IT teams (system-level detail).
- Three time views: **Current Health**, **One-Week Health** (AI prediction), **One-Month Health** (AI forecast).
- Drill into red/amber servers: current + predicted issues, possible root causes, metadata (type, region, environment).
- **Potential Impacts on Connected Systems** — key differentiator: upstream/downstream dependency map, shows blast radius, prioritizes by business impact, prevents cascading failures.
- **Continuous learning via feedback:** SMEs can re-prioritize (e.g. Red → Amber); AI uses it in the next prediction cycle → context-aware AI, not generic automation.
- Tagline: *A centralized hub for performance metrics, alerts and predictive insights — a top-down view of the entire IT infrastructure.*

**Wise Actions** — where insights become solutions
- Prescribes real-time fixes from an enterprise runbook-driven knowledge base; tailored remediation.
- Example: server reports potential disk exhaustion → recommend delete/archive unneeded files, clear logs/temp directories.
- Execution options: **one-click automated fix** · **raise ServiceNow ticket with auto-populated details** · **auto-route to the correct support group**.
- After resolution: notes captured → knowledge base updated → future recommendations improve automatically.
- Result: **up to 50% reduction in incident resolution time.**
- Tagline: *A centralized action hub to auto-fix issues or raise tickets seamlessly.*

**Wise Explore** — intelligent search engine for IT operations
- Filter by: health status (R/A/G), component type (server, database…), environment (production, testing), application, region.
- Benefits: fast identification of critical issues · explore details without losing context · big time savings.
- Tagline: *Precise, relevant insights, features and data — instantly.*

**Wise Monitory** *(doc title; doc also says "Wise Monitoring" — see §11 open question)*
- Live detailed view of a single system: CPU, memory, disk, network · system logs and DB logs · uptime, sync status, trends.
- AI insights: flags anomalies and security risks early · detects inefficient resource use · predicts utilization spikes.
- Peak events: Black Friday sales, large campaigns, seasonal surges → alerts **before** thresholds are breached → proactive scaling, not firefighting.
- Tagline: *Understand peak patterns and spot potential failures through DB and system logs.*

**Wise AI (chat)** — a virtual IT consultant
- Natural-language questions → actionable answers. Learns from interactions and operational data.
- Sample prompts from the doc (use verbatim in the demo):
  - Health: "What's the health status of systems with ID a010065p210?" · "Show me the overall health distribution."
  - Incidents: "What systems had incidents with unexpected shutdown?" · "Show me P1 incidents."
  - Utilization: "Which systems have high CPU usage?" · "Which systems have high memory usage?"
  - Attributes: "Which systems use an OS with Windows?"
  - Tickets: "What are the details of ticket INC0010586?"
  - Actions: "What actions can I take for system a010065p210?"
- Tagline: *Deep insights, tailored assessments and expert guidance to optimize IT infrastructure efficiently.*

**Ease of use**
- Simple health monitoring for non-technical users.
- Top-down: high-level for executives, drill-down for technical teams.
- Explains complex issues in plain language.

### 2.4 AI Workflows — auto-healing (dedicated page)

Closed-loop model: **Detect → Diagnose → Fix → Validate → AI Re-Learn**

Supported services today: **MongoDB · Apache HTTP Server · Microsoft SQL Server (MSSQL) · Nginx**

| Service | Failure the AI fixes | What the AI does |
|---|---|---|
| MSSQL | Binary permission failure (status=203/EXEC) | Restores execute permission → validates startup → confirms healthy |
| MSSQL | Binary not found (203/EXEC) | Detects missing binary → restores to correct path or alerts → retries startup |
| Nginx | Worker freeze (SIGSTOP) | Finds frozen workers → resumes/restarts → validates requests |
| Nginx | Binary permission error (203/EXEC) | Restores permissions → restarts → confirms availability |
| Nginx | HTTP 403 Forbidden | Analyzes permission/config → corrects rules → validates access |
| Apache | Missing VirtualHost closure | Detects syntax issue → restores valid config → restarts |
| Apache | Invalid DocumentRoot | Detects bad path → corrects/restores default → restarts |
| MongoDB | Binary permission failure (203/EXEC) | Restores execute permission → validates startup |
| MongoDB | Binary not found (203/EXEC) | Detects missing binary → restores or alerts by policy → retries |
| MongoDB | Config corruption (status=100) | Detects corruption → restores last known good config → restarts |
| MongoDB | Data directory ownership (status=14) | Restores ownership → validates data access → restarts safely |

(Show this as a visual filterable grid of cards, not a text table — see §6.7.)

### 2.5 Roadmap — "Next steps in progress" (label clearly as **In progress**, never as shipped)
1. **AI auto-fix via conversational interface** — run auto-fix workflows from Wise AI Chat in natural language (restart services, restart servers, trigger remediation) under **role-based access control, approval policies and full audit logging**.
2. **Flexible service integration + human-in-the-loop automation** — onboard new services, create custom auto-remediation workflows, approvals first, then progressively move from manual approval to full automation based on confidence and policy.
- Outcome: from AI-assisted operations to AI-driven autonomous operations.

### 2.6 Benefits (big animated counters)
- **25%** early issue detection
- **60%** early detection of P1/P2 issues
- **50%** reduction in incident resolution time
- **40%** reduction in operational costs
- Typical **ROI within 6 months** · Setup in **2–4 weeks** (depends on environment)

### 2.7 Architecture
- **Data sources:** servers, databases, logs, incidents, events, change, utilization metrics (CPU/disk/memory), CMDB, external services, ITSM (ServiceNow).
- **Data lake** → **AI engine** (predicts health, prescribes actions) → **Action hub** (auto-fix or ticket) → **User interface** (Wise Board, Wise Explore, action screens, Wise AI chat).
- **Technology:** AI (predictive analytics, decisions) · Deep learning (pattern recognition) · LLMs (natural-language insights and reporting).
- **Workflow:** Ingest → Process → Predict (G/A/R) → Prescribe & Act → Report.
- **Closed loop:** Monitoring → Analysis → Action → Feedback.

### 2.7b Use cases
| Industry | Challenge | Solution | Outcome |
|---|---|---|---|
| Finance | Prevent outages in high-traffic trading periods | Predictive monitoring, automated resource scaling | 60% early detection of critical issues, zero downtime |
| Healthcare | 24/7 uptime for patient management systems | Real-time health monitoring, AI-driven fixes | 50% faster incident resolution, improved patient care |
| Retail | Optimize e-commerce at peak sales | Predictive analytics, resource optimization | 40% cost reduction, better customer experience |
| Manufacturing | Manage complex on-prem + cloud infrastructure | Top-down visibility, AI agents for automation | 25% early issue detection, streamlined operations |

### 2.8 FAQ (use as-is, shorten if needed)
- **What is Wise Ultima?** AI-driven platform for predictive IT operations with real-time insights and automation.
- **Who is it for?** CXOs, IT heads, and organizations with complex IT infrastructure.
- **What data sources does it support?** Servers, databases, logs, ServiceNow, CMDB, utilization data (CPU, disk, memory).
- **Is it compatible with existing tools?** Yes — integrates with the customer's ServiceNow via APIs.
- **How does it save costs?** Optimizing resources, automating fixes, reducing downtime (40% cost reduction).
- **What is the ROI?** Customers typically see ROI within 6 months (faster resolutions, lower costs).
- **How long does setup take?** 2–4 weeks, depending on the environment.
- **Do I need technical expertise?** No — the color system in the dashboard and natural-language insights are user-friendly.

### 2.9 Conclusion line
*Predict, prevent, and act — turning IT from a reactive function into a strategic advantage.*

### 2.10 Contact
Company: Wise Work · Website: wisework.in · Email: info@wisework.in — for inquiries, support, demonstrations.

---

## 3. TECH STACK & PROJECT SETUP

### 3.1 Stack
- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** (strict) + **shadcn/ui**
- **GSAP** + plugins: `ScrollTrigger`, `SplitText`, `Flip`, `Observer`, `MotionPathPlugin`, `DrawSVGPlugin`, `MorphSVGPlugin`, `ScrambleTextPlugin`, `CustomEase`, `TextPlugin` (all free in current GSAP), **`@gsap/react`** (`useGSAP` hook)
- **Lenis** for smooth scroll (synced with ScrollTrigger)
- **three + @react-three/fiber + @react-three/drei** for the 3D logo scenes (flat materials only — §4.3)
- **lucide-react** icons · **recharts** for the demo charts (flat fills only)
- **react-hook-form + zod** for the contact/demo form
- **next/font** for fonts, **next/image** for images
- Dummy data lives in `/data/*.ts` (typed). No backend needed; the demo form shows a success toast (wire to email/API later).

### 3.2 Folder structure
```
app/
  layout.tsx            # fonts, Lenis provider, PageTransition, Navbar, Footer, cursor
  globals.css           # ONLY what Tailwind can't do (see 3.3)
  page.tsx              # Home
  product/page.tsx
  features/page.tsx
  features/
    wise-board/page.tsx
    wise-actions/page.tsx
    wise-explore/page.tsx
    wise-monitory/page.tsx
    wise-ai/page.tsx
    ai-workflows/page.tsx
  how-it-works/page.tsx
  architecture/page.tsx
  solutions/page.tsx
  solutions/[industry]/page.tsx   # finance | healthcare | retail | manufacturing
  benefits/page.tsx
  integrations/page.tsx
  demo/page.tsx
  roadmap/page.tsx
  faq/page.tsx
  about/page.tsx
  contact/page.tsx      # includes "Book a demo" form
  privacy/page.tsx
  terms/page.tsx
  not-found.tsx
components/
  ui/                   # shadcn
  layout/               # Navbar, MegaMenu, Footer, MobileSheet, PageTransition, ScrollProgress, Cursor
  three/                # LogoScene, HexField, FloatingHex
  sections/             # every reusable section (Hero, StoryChapter, StatCounter, ...)
  demo/                 # DemoShell, BoardDemo, ExploreDemo, MonitoryDemo, ActionsDemo, AiChatDemo
  motion/               # useReveal, SplitReveal, Magnetic, Marquee, Tilt, CountUp, etc.
data/
  demo.ts  features.ts  workflows.ts  usecases.ts  faq.ts  nav.ts
lib/
  gsap.ts               # registers all plugins once
  utils.ts
public/                 # assets from §1
```

### 3.3 What is allowed in `globals.css` (nothing else)
1. `@import "tailwindcss";` + shadcn token layer (`:root` / `.dark` CSS variables mapped to the palette in §4.1).
2. `@theme` tokens (colors, fonts, radii, hard-shadow utilities like `--shadow-hard`).
3. Things Tailwind cannot express: `::selection`, custom scrollbar, `html.lenis` rules, `@media (prefers-reduced-motion)`, `will-change`/`perspective`/`transform-style: preserve-3d` helpers, `clip-path` polygons for the hexagon shape, `.split-line` overflow-mask helper, custom-cursor `mix-blend-mode`, and keyframes needed by pure-CSS marquees.
4. **No gradients here either.** Reject any gradient in review.

---

## 4. DESIGN SYSTEM

### 4.1 Color palette (flat, sampled from the logo)

| Token | Hex | Role |
|---|---|---|
| `brand-purple` | `#AA10D0` | Primary — Predict / AI |
| `brand-green` | `#01A862` | Success — Healthy / Act |
| `brand-blue` | `#0094DA` | Info — Explore / Monitor |
| `ink` | `#0B0B14` | Dark sections, text |
| `paper` | `#FFFFFF` | Light sections |
| `mist` | `#F3F2F8` | Alt light section, cards |
| `line` | `#E2E0EC` | Borders |
| `status-green / amber / red` | `#5BC65B` / `#F5C542` / `#EF5350` | **Only** for R/A/G health UI (matches the product dashboard) |

Rules:
- Each of the 3 brand colors "owns" a meaning and a set of pages: **Purple = intelligence** (Board, AI, prediction) · **Green = action/healthy** (Actions, AI Workflows, benefits) · **Blue = visibility** (Explore, Monitory, architecture).
- Alternate section backgrounds between `paper`, `mist`, `ink` and a **solid brand color** for high-impact sections (flat, full-bleed).
- Tint = solid lighter color token (e.g. `purple/10` opacity is fine — it's flat, not a gradient).

### 4.2 Typography
- Display: a bold geometric grotesk (e.g. **Space Grotesk** / **Sora**) — huge, tight tracking, 8–14vw on heroes.
- Body: **Inter** or **DM Sans**.
- Mono accents (workflow steps, status codes like `203/EXEC`): **JetBrains Mono**.

### 4.3 The 3D theme (from the logo, no gradients)
The logo = three rounded hexagonal "W" shapes: purple (top), green (bottom-left), blue (bottom-right).
- Build the logo as **extruded 3D hexagon shapes** in react-three-fiber using **`MeshBasicMaterial` / flat `MeshStandardMaterial` with `flatShading`** and a single directional light. Solid brand colors only — no gradient textures, no environment glow.
- Use 3D in: **Home hero** (three hexes assemble into the logo, then slowly float and react to the mouse), **section dividers** (hex field parallax), **loader**, **Architecture page** (hex nodes as the data → AI → action pipeline), **Solutions hero**, **404**.
- Scroll-linked: tie hex rotation/position to a ScrollTrigger progress value (`gsap.to(mesh.rotation, { scrollTrigger: { scrub: true }})`).
- Non-3D fallback: CSS `clip-path` hexagons with Tailwind, tilted with GSAP (`rotationX/Y`, `transformPerspective`).
- Mobile / reduced-motion: render a static or lightly-animated version; lazy-load the canvas (`next/dynamic`, `ssr: false`); cap DPR at 1.5.
- Depth without gradients: **hard offset shadows** (`shadow-[8px_8px_0_0_#0B0B14]`), thick borders, layered flat cards, overlap + parallax.

### 4.4 Shape language
Hexagon motif (from the logo) for icons, badges, image masks, bullets. Big rounded corners on cards (`rounded-3xl`). Generous whitespace. Thick 2px borders on `ink`.

### 4.5 Visual-first content rules
- Every section = **1 headline (≤8 words) + 1 visual + ≤2 short lines**.
- Prefer: icons, diagrams, animated counters, RAG donuts, flow arrows, screenshots in frames, hex illustrations, mini-simulations. Avoid paragraphs.
- Explain with pictures: e.g. the R/A/G status is shown as three animated traffic dots, not a sentence.
- Every page ends with the same **CTA band**: "See it in action" → `/demo` and "Book a demo" → `/contact`.

---

## 5. SITEMAP (multi-page — required)

**Primary nav (mega menu + mobile Sheet):** Product · Features ▾ · Solutions ▾ · How it works · Demo · Benefits · Company ▾ · **[Book a demo]** (primary Button)

| Route | Purpose |
|---|---|
| `/` | Home — the whole story in one scroll (teaser of every other page) |
| `/product` | What is Wise Ultima — overview, audience, promise |
| `/features` | Feature index — 3D/visual grid linking to each module |
| `/features/wise-board` | Board module |
| `/features/wise-actions` | Actions module |
| `/features/wise-explore` | Explore module |
| `/features/wise-monitory` | Monitory module |
| `/features/wise-ai` | AI chat module |
| `/features/ai-workflows` | Auto-healing workflows |
| `/how-it-works` | Closed loop + 5-step flow |
| `/architecture` | Data → Lake → AI → Action → UI |
| `/solutions` + `/solutions/[industry]` | 4 industries |
| `/benefits` | Numbers, ROI, setup time |
| `/integrations` | ServiceNow, CMDB, data sources |
| `/demo` | **Interactive product demo with dummy data** |
| `/roadmap` | "In progress" items |
| `/faq` | Accordion FAQ |
| `/about` | Wise Work |
| `/contact` | Book a demo / inquiry form + contact info |
| `/privacy`, `/terms` | Legal placeholders (mark "to be provided by Wise Work") |
| `not-found` | 3D hex 404 |

> No `/pricing` page — the doc has no pricing. Use "Book a demo" instead. Do **not** invent prices.

---

## 6. PAGE-BY-PAGE SPEC

Legend: **Visual** = what the eye sees · **Anim** = GSAP behavior (names refer to §7).

### 6.1 Home `/` — "The Story of a Server That Didn't Crash"

The home page is a **6-chapter scroll story** (pinned scenes), then proof, video, and CTA.

1. **Hero** — Headline: **"Predict. Prevent. Act."** Sub: *Intelligent Operations, Simplified!* Buttons: Watch video (scrolls to video section) · See the demo (`/demo`).
   Visual: 3D hex logo assembling; floating RAG dots; screenshot of Wise Board in a flat frame.
   Anim: preloader hex build → SplitText headline (chars rise + rotate) → magnetic buttons → mouse-parallax on 3D → scroll hint bounce.
2. **Trust strip / marquee** — Industry chips (Finance · Healthcare · Retail · Manufacturing) + integration chips (ServiceNow · CMDB · MongoDB · MSSQL · Nginx · Apache). *No fake customer logos.* Anim: infinite marquee, speed reacts to scroll velocity.
3. **Chapter 1 — "IT is on fire."** Pinned scene: a grid of servers flips from green to amber to red as you scroll; alarm counter climbs; 3 problem icons pop in (complexity · no real-time insight · reactive response). Anim: pin + scrub timeline, color-state flips, number count-up, screen-shake on red.
4. **Chapter 2 — "Now it sees ahead."** Wise Board screenshot slides in; Current → W-Predict → M-Predict tabs animate as scroll steps; donuts redraw. Anim: DrawSVG donuts, Flip between the 3 time views.
5. **Chapter 3 — "It knows what breaks next."** Dependency map: nodes connect, one turns red, ripples propagate to connected systems (blast radius). Anim: MotionPath pulses along lines, stagger ripple.
6. **Chapter 4 — "Then it fixes it."** Wise Actions: alert → **One-click fix** → ✓ healed, or → ServiceNow ticket auto-routed. Anim: timeline with typewriter/scramble text on the fix steps, check-mark DrawSVG.
7. **Chapter 5 — "And it keeps learning."** The closed loop ring (Detect → Diagnose → Fix → Validate → AI Re-Learn) rotates; SME flips a Red to Amber, AI adapts. Anim: rotation scrub, MorphSVG arrow, Observer drag on the ring.
8. **Chapter 6 — "The results."** 4 giant counters: 25% · 60% · 50% · 40%. Solid brand-color full-bleed blocks. Anim: CountUp on enter, staggered scale-in, hover tilt.
9. **▶ YOUTUBE VIDEO SECTION (required)** — Headline **"See Wise Ultima in 2 minutes."** Large flat frame with poster + hex play button. Click → smooth GSAP expand into a shadcn `Dialog`/lightbox with a **lite YouTube embed** (load iframe only on click; `youtube-nocookie.com`; autoplay on open).
   - Read the ID from `NEXT_PUBLIC_YOUTUBE_VIDEO_ID` (placeholder `REPLACE_WITH_VIDEO_ID`); show a graceful "Video coming soon" state if unset.
   - Anim: section pins slightly, frame scales up from 0.85 with clip-path reveal, play button pulses, corner hexes orbit.
10. **Module carousel** — 6 module cards (Board, Actions, Explore, Monitory, AI, Workflows) that stack on scroll (sticky stacking cards); each links to its page. Anim: sticky stack with scale-down of previous cards.
11. **Live mini-demo teaser** — a small interactive R/A/G widget + "Try the full demo" → `/demo`.
12. **Industries** — 4 hex tiles, hover flips to outcome. Links to `/solutions/[industry]`.
13. **FAQ preview** (3 questions) + link to `/faq`.
14. **CTA band** — "Turn IT into a strategic advantage." Buttons: Book a demo · Try the demo. Anim: giant text reveal + magnetic buttons.

### 6.2 Product `/product`
- Hero: "One platform. Three verbs." (Predict / Prevent / Act as 3 big hex cards, purple/green/blue, flip on hover.)
- "Who it's for": CXO · Top management · IT heads → 3 persona cards with the one thing each gets (strategic view / dashboards / drill-down detail).
- "Ease of use" strip: 3 icon rows (non-technical friendly · top-down · plain language).
- R/A/G explainer: 3 animated dots → Healthy / Warning / Critical.
- Module overview grid → feature pages.

### 6.3 Features index `/features`
- Interactive **hex map**: 6 hexes (one per module) — hover enlarges + shows tagline, click navigates.
- Below: horizontal-scroll gallery of the 5 screenshots (pinned horizontal scroll).

### 6.4 Wise Board `/features/wise-board`  (Purple)
Story: "One screen. The whole estate."
- Hero with `wise-board.png` in frame; parallax layers.
- **Three-time-view switcher** (Current / 1-Week / 1-Month) — shadcn Tabs; donut charts animate between states (Flip).
- **Drill-down** scene: click a red server → panel shows Current + Predicted issues, Possible root causes, Metadata (type, region, environment) — animated with slide-in.
- **Potential Impacts on Connected Systems** — dependency-map animation (blast radius ripples). Labeled "Key differentiator".
- **Feedback loop**: SME drags a Red chip to Amber → AI "learns" badge pulses → "Next prediction cycle updated".
- Two audiences split screen: CXO view vs IT team view.
- CTA band.

### 6.4b Wise Actions `/features/wise-actions`  (Green)
Story: "Insight → Fix in one click."
- Hero with `wise-actions.png`.
- **Disk-exhaustion example** as a 3-step animated story: Alert → Recommendation (delete/archive files, clear logs/temp) → Execute.
- **3 execution options** cards: One-click auto-fix · ServiceNow ticket (auto-populated) · Auto-routed to correct support group.
- **Self-improving loop**: Resolved → Notes captured → Knowledge base updated → Better recommendations (circular flow).
- Big stat: **up to 50%** faster incident resolution (count-up).

### 6.4c Wise Explore `/features/wise-explore`  (Blue)
Story: "Find the one red dot in a thousand."
- Hero with `wise-explore.png`.
- **Animated filter chips** (Health · Component · Environment · Application · Region) — as chips toggle, a grid of dummy system tiles filters live with Flip animation.
- 3 benefit icons (fast · keeps context · saves time).

### 6.4d Wise Monitory `/features/wise-monitory`  (Blue)
Story: "Before Black Friday breaks it."
- Hero with `wise-monitory.png`.
- Live-feeling animated gauges: CPU · Memory · Disk · Network (GSAP-driven needles/rings).
- **Peak-event timeline**: line chart drawn on scroll (DrawSVG), predicted spike glows as a flat highlighted band → "Alert fires before threshold" marker.
- Log-stream panel (scrolling mono lines with ScrambleText) — dummy logs; anomaly line highlights red.
- Chips: Black Friday · Campaigns · Seasonal surges.

### 6.4e Wise AI `/features/wise-ai`  (Purple)
Story: "Ask your infrastructure."
- Hero with `wise-ai.png`.
- **Chat simulator** with the 6 categories of sample prompts (Health, Incidents, Utilization, Attributes, Tickets, Actions) as clickable chips; the answer types out with dummy data.
- "Virtual IT consultant" badge; note "learns from interactions and operational data".
- Roadmap teaser card: "Coming: run fixes from chat (RBAC · approvals · audit log)" — marked **In progress**.

### 6.5 AI Workflows `/features/ai-workflows`  (Green)
Story: "Self-healing infrastructure."
- Hero: the 5-step loop **Detect → Diagnose → Fix → Validate → AI Re-Learn** as a horizontal pipeline that lights up node by node on scroll.
- 4 service tabs/cards with logos-as-icons: **MongoDB · Apache · MSSQL · Nginx** (use lucide/simple hex icons, not trademarked logos).
- **Failure grid** (from §2.4): 11 cards, filter by service (Flip). Each card: Cause → Impact → AI Fix as 3 short stepped rows with tiny animation; mono font for status codes.
- "Simulate a failure" mini-demo: pick a failure → animated terminal shows Detect→Diagnose→Fix→Validate→Re-learn with dummy output.

### 6.6 How it works `/how-it-works`
- Pinned 4-step ring: **Monitoring → Analysis → Action → Feedback** (closed loop).
- Below: the 5-step workflow **Ingest → Process → Predict → Prescribe & Act → Report**, each a full-height scene with its own icon animation, listing the real inputs (CPU, memory, disk, network, incidents, events, logs; ServiceNow incident reports).
- Setup timeline: **2–4 weeks** → simple 4-node timeline (placeholders for phases; do not invent phase names beyond "Connect data · Configure · Go live" flagged as illustrative).

### 6.7 Architecture `/architecture`
- 3D/flat hex pipeline: **Data Sources → Data Lake → AI Engine → Action Hub → User Interface**.
- Data sources fan-in animation: servers, databases, logs, incidents, events, change, utilization, CMDB, external services, ServiceNow.
- Tech stack trio: AI · Deep Learning · LLMs (icons + one line each).
- Hover any node → tooltip/panel explaining it (shadcn Tooltip/Popover).

### 6.8 Solutions `/solutions` and `/solutions/[industry]`
- Index: 4 big tiles (Finance, Healthcare, Retail, Manufacturing).
- Detail page template (data from §2.7b): **Challenge → Solution → Outcome** as 3 pinned scenes with an industry-specific flat illustration; outcome stat counts up. Include the caveat-free wording from the doc only; legal to review "zero downtime".

### 6.9 Benefits `/benefits`
- 4 full-screen counters (25 / 60 / 50 / 40 %) each with a one-line meaning and a tiny animated icon.
- "ROI in ~6 months" bar/timeline visual; "Live in 2–4 weeks" visual.
- Cost calculator? **Do not build** (no data to support). Instead a "Talk to us" CTA.

### 6.10 Integrations `/integrations`
- ServiceNow hero block (incident escalation, auto-populated tickets, auto-routing, API integration).
- Data source tiles: Servers · Databases · Logs · CMDB · Utilization (CPU/Disk/Memory) · Incidents/Events/Change.
- Animated connection lines into a central hex.

### 6.11 Roadmap `/roadmap`
- Vertical timeline with two **"In progress"** cards (§2.5). Pill badge "In progress". Progress metaphor: manual approval → human-in-the-loop → full automation slider (Switch/Slider animating the "trust ladder").
- Do **not** add dates.

### 6.12 ⭐ Demo `/demo` — Interactive product demo with dummy data
Purpose: let visitors *feel* the product. Fully client-side, dummy data from `/data/demo.ts`. Show a **"Sample data — demo only"** Badge at all times.

**Layout:** a flat app frame (mimics the product: left icon rail, top bar "Wise Ultima", region + application selects, light/dark toggle) built with shadcn (Tabs, Select, Switch, Table, Card, Badge, Dialog, ScrollArea, Progress, Command).

**Guided mode + free mode:** a "Start guided tour" button runs a GSAP timeline that highlights each area with a spotlight (solid dim overlay + cut-out via `clip-path`, no gradient) and a tooltip step (1/5…5/5). Or click freely.

**Demo tabs (each mirrors a real module):**
1. **Board** — 6 donut cards (Server, Storage, Database, Network, Middleware, Backup) with R/A/G counts; top switch **Current / W-Predict / M-Predict** changes data with animated transitions. Region + Application selects filter. Click a red/amber slice → side Sheet with root causes + metadata + **Impacted connected systems** mini-graph + "Change priority (Red → Amber)" button that shows the feedback toast.
2. **Explore** — filter chips (Health, Component, Environment, Application, Region) + Command search box; results table animates with Flip.
3. **Monitory** — pick a system; animated CPU / Memory / Disk / Network charts (recharts, flat fills), log viewer, "predicted spike" marker.
4. **Actions** — list of open issues with recommended fixes; buttons **One-click fix** (runs an animated Detect→Fix→Validate steps then turns tile green) and **Raise ServiceNow ticket** (dialog showing an auto-populated dummy ticket + auto-assigned support group).
5. **Wise AI** — chat with the sample prompts as chips; typed answers from canned dummy responses; free-text falls back to "This is a demo — try one of the sample questions."

**Dummy data (put in `data/demo.ts`; all fictional except counts taken from the product screenshot):**
```ts
export const estate = {
  Server:     { total: 1036, green: 748, amber: 155, red: 133 },
  Storage:    { total: 114,  green: 109, amber: 3,   red: 2   },
  Database:   { total: 6,    green: 6,   amber: 0,   red: 0   },
  Network:    { total: 44,   green: 44,  amber: 0,   red: 0   },
  Middleware: { total: 83,   green: 77,  amber: 6,   red: 0   },  // illustrative split
  Backup:     { total: 48,   green: 43,  amber: 4,   red: 1   },  // illustrative split
};
// W-Predict and M-Predict: generate plausible shifted numbers (more amber/red)
export const regions = ["All", "APAC", "EMEA", "Americas"];        // dummy
export const applications = ["Critical App 1", "Payments", "Portal", "ERP"]; // dummy
export const sampleSystems = [
  { id: "a010065p210", type: "Server", os: "Linux", region: "APAC", env: "Production",
    health: "red", cpu: 92, mem: 81, disk: 97,
    issue: "Potential disk exhaustion", rootCause: "Log growth on /var",
    fix: ["Archive old files", "Clear logs / temp directories"],
    impacts: ["a010071p044", "db-ledger-02", "web-front-03"] },
  // ...create ~24 more with mixed health/type/env/region/OS (incl. Windows)
];
export const sampleTicket = { number: "INC0010586", priority: "P1", group: "Infra-Linux-L2", state: "New" };
```
Sample AI answers must reference this dummy data only and use the doc's example prompts.

**Anim:** tab-switch cross-fade + slide, donut redraw via DrawSVG/stroke-dashoffset, count-up on numbers, row stagger, Flip on filter, confetti-free (no gradients) success pulse on "healed".

### 6.13 FAQ `/faq`
shadcn Accordion, grouped chips (General · Technical · Business · Implementation). Animated open/close (GSAP height), search input filters live. Content §2.8.

### 6.14 About `/about`
- Wise Work: who we are (only what's known: company name, site, email — **placeholders** for story/team marked `TODO`).
- Mission line: *Turning IT from a reactive function into a strategic advantage.*
- Wordmark + hex pattern; values as 3 hex cards (Predict, Prevent, Act).

### 6.15 Contact `/contact`
- Split: left = **Book a demo** form (name, work email, company, role select [CIO/CTO/IT Head/Other], industry select, message) with zod validation + shadcn Form + Sonner toast; right = contact card (Wise Work · wisework.in · info@wisework.in).
- Anim: inputs slide in, hex send button fills on submit, success state animates a check.

### 6.16 Global components
- **Preloader**: 3D/flat hex assembly, exits with hex wipe (once per session).
- **Navbar**: sticky, hides on scroll down / shows on scroll up (GSAP), mega menu with module cards, active-route indicator that slides (Flip), mobile shadcn Sheet with staggered links.
- **Footer**: `ink` background, giant "Predict. Prevent. Act." text with per-letter hover, sitemap columns, contact, © Wise Work.
- **Page transitions**: hex-shaped wipe covering the screen between routes (GSAP timeline on route change).
- **Scroll progress bar** (solid purple), **custom cursor** (hex, grows on links, hidden on touch), **back-to-top hex**.
- Sticky mobile "Book a demo" button.

---

## 7. ANIMATION PLAYBOOK (GSAP) — use ALL of these across the site

Register once in `lib/gsap.ts`. Use `useGSAP()` with `scope` and cleanup; wrap in `gsap.matchMedia()` for `(prefers-reduced-motion: reduce)` (disable heavy motion, keep fades) and desktop vs mobile.

| # | Technique | Where |
|---|---|---|
| 1 | **Lenis smooth scroll** synced to ScrollTrigger (`lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker`) | global |
| 2 | **SplitText** char/word/line reveals (rise + rotateX, masked lines) | all headlines |
| 3 | **ScrollTrigger pin + scrub timelines** (story chapters) | Home, How it works, Solutions |
| 4 | **Horizontal scroll gallery** (pinned) | Features index, screenshots |
| 5 | **Sticky stacking cards** (scale-down previous) | Home modules, Benefits |
| 6 | **Clip-path reveals** (inset / polygon / hexagon wipes) on images and frames | screenshots, video |
| 7 | **Parallax layers** (`yPercent`, different speeds) + mouse parallax | heroes, 3D |
| 8 | **Count-up numbers** (snap, once on enter) | benefits, stats |
| 9 | **DrawSVG** line/donut/check drawing | dependency map, charts, ticks |
| 10 | **MotionPath** pulses along connection lines | dependency map, architecture, integrations |
| 11 | **Flip** layout animations (filters, tab indicator, view switching) | Explore, Board views, workflows grid, navbar |
| 12 | **MorphSVG** shape morphs (arrow → check, hex → circle) | closed-loop, success states |
| 13 | **ScrambleText / TextPlugin typewriter** | AI chat, terminal, logs |
| 14 | **Marquee** (infinite, velocity-linked) | trust strip |
| 15 | **Magnetic buttons** + **custom hex cursor** | CTAs, global |
| 16 | **3D tilt cards** (`transformPerspective`, rotationX/Y on pointermove) | cards, hex tiles |
| 17 | **Observer** (wheel/drag/touch) for the rotating loop ring and swipeable carousels | Home ch.5, How it works |
| 18 | **Stagger grids** (`from: "center"|"edges"|"random"`) | tile grids, icons |
| 19 | **Page-transition wipes** with `CustomEase` | route changes |
| 20 | **Preloader timeline** + logo hex assemble | first load |
| 21 | **Scroll-scrubbed 3D** (rotation/position bound to scroll progress) | hero, architecture |
| 22 | **Text highlight sweep** (solid color bar scaleX behind words, no gradient) | key words |
| 23 | **Infinite float / breathe loops** (`yoyo`, `sine.inOut`) | hexes, status dots |
| 24 | **Navbar hide/show** on scroll direction | navbar |
| 25 | **ScrollTrigger.batch** for large lists/cards | FAQ, failure grid |
| 26 | **Number "odometer" roll** for KPI changes in the demo | demo board |
| 27 | **Spotlight guided tour** (solid overlay cut-out) | demo |

Motion principles: eases `power3.out` / `expo.out` / custom; durations 0.6–1.2s; stagger 0.04–0.12; animate `transform` + `opacity` only where possible; `once: true` for entrances; `markers` off; `ScrollTrigger.refresh()` after images/fonts load; `will-change` only during animation; **60fps on mid-range mobile**.

Every section gets at least: an entrance (fade/slide/clip) **and** one "signature" motion relevant to its content.

---

## 8. shadcn/ui USAGE MAP

| Need | Component |
|---|---|
| Buttons / CTAs | `Button` (variants restyled: solid brand, ink outline, hard-shadow) |
| Nav | `NavigationMenu` (mega menu), `Sheet` (mobile) |
| Module/feature cards | `Card`, `Badge` |
| Demo shell | `Tabs`, `Select`, `Switch`, `Table`, `Sheet`, `Dialog`, `Command`, `ScrollArea`, `Progress`, `Tooltip`, `Popover`, `Skeleton` |
| FAQ | `Accordion`, `Input` |
| Forms | `Form`, `Input`, `Textarea`, `Select`, `Label`, `Sonner` |
| Video lightbox | `Dialog` |
| Roadmap | `Badge`, `Slider`/`Switch` |
| Separators | `Separator` |

Theme shadcn via CSS variables in `globals.css` mapped to §4.1 (flat colors, `--radius: 1.25rem`). Remove any default shadow/gradient shadcn styles.

---

## 9. QUALITY, PERFORMANCE, SEO, A11Y

- **Responsive:** mobile-first; test 360 / 768 / 1280 / 1920. Pinned scenes degrade to stacked sections on mobile.
- **Accessibility:** semantic landmarks, visible focus, keyboard nav, alt text, color contrast AA (don't put white text on `status-amber`), `prefers-reduced-motion` honored, video has title, all interactive demo controls keyboard-accessible.
- **Performance:** Lighthouse ≥ 90 target; `next/image` with proper sizes; lazy-load 3D and the YouTube embed; dynamic import heavy GSAP plugins per page if needed; fonts via `next/font` with `display: swap`.
- **SEO:** per-page `metadata` (title, description, OG), `sitemap.ts`, `robots.ts`, JSON-LD `SoftwareApplication` for the product, canonical URLs, OG image using the logo (flat).
- **Analytics-ready:** event hooks on "Book a demo", "Watch video", demo interactions (no vendor hard-coded).

---

## 10. BUILD ORDER FOR CLAUDE (follow in order; return **full files** each step)

1. Init Next.js + TS + Tailwind + shadcn; add all shadcn components in §8; configure `globals.css` (tokens, no gradients), fonts, `lib/gsap.ts`, Lenis provider.
2. Layout: Navbar (mega menu + Sheet), Footer, PageTransition, Preloader, Cursor, ScrollProgress.
3. Motion primitives in `components/motion/` (SplitReveal, Magnetic, CountUp, Marquee, Tilt, Reveal, StickyStack).
4. 3D: `LogoScene` (three flat hexes), `HexField`.
5. Data files in `/data`.
6. **Home** (all 14 sections incl. the YouTube section).
7. Product, Features index, then the 6 feature pages.
8. **Demo** page (all 5 tabs + guided tour).
9. How it works, Architecture, Solutions (+ `[industry]`), Benefits, Integrations, Roadmap.
10. FAQ, About, Contact, Legal, 404.
11. SEO/metadata, a11y + reduced-motion pass, performance pass, gradient audit (`grep -Ri "gradient" app components` must return **nothing**).

**Definition of done:** all routes in §5 exist and are linked; every section animates; no gradients; only Tailwind + minimal `globals.css`; shadcn used for base UI; demo works with dummy data; YouTube section on Home; no invented facts; builds with `next build` clean.

---

## 11. OPEN QUESTIONS (leave as clearly-marked TODOs — do not guess)

1. **Module name spelling:** doc says "Wise Monitory" and "Wise Monitoring". Default to **Wise Monitory** (matches the screenshot title); confirm.
2. **YouTube video ID** → `NEXT_PUBLIC_YOUTUBE_VIDEO_ID`.
3. **Legal copy** (Privacy, Terms), **About/team story**, **office address/phone** → placeholders marked `TODO`.
4. **Claims review:** "zero downtime" (Finance) and ROI/percentage claims come from the product doc — confirm they're approved for public marketing.
5. **Demo form destination** (email/CRM/API) → wire later; currently toast only.
6. **Analytics vendor**, **domain/canonical URL** → TBD.
7. **Tagline usage:** *"Intelligent Operations, Simplified!"* (from the doc) — confirm final punctuation.
