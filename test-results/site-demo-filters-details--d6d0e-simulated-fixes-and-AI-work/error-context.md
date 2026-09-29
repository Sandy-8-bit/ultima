# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: site.spec.ts >> demo filters, details, priority, simulated fixes and AI work
- Location: tests\site.spec.ts:4:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[aria-live=polite]').last()
Expected substring: "Disk utilization is 97%"
Received string:    ""
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('[aria-live=polite]').last() with timeout 5000ms
  - waiting for locator('[aria-live=polite]').last()
    8 × locator resolved to <section tabindex="-1" aria-live="polite" aria-atomic="false" aria-relevant="additions text" aria-label="Notifications alt+T" data-react-aria-top-layer="true">…</section>
      - unexpected value "Sample ticket preparedAuto-routed to Infra-Linux-L2 in this simulation. Nothing was sent to ServiceNow.Feedback recordedSample priority changed to Amber. Next prediction cycle updated."
    3 × locator resolved to <section tabindex="-1" aria-live="polite" aria-atomic="false" aria-relevant="additions text" aria-label="Notifications alt+T" data-react-aria-top-layer="true">…</section>
      - unexpected value "Sample ticket preparedAuto-routed to Infra-Linux-L2 in this simulation. Nothing was sent to ServiceNow."
    2 × locator resolved to <section tabindex="-1" aria-live="polite" aria-atomic="false" aria-relevant="additions text" aria-label="Notifications alt+T" data-react-aria-top-layer="true"></section>
      - unexpected value ""

```

```yaml
- link "Skip to content":
  - /url: "#main-content"
- banner:
  - link "Wise Ultima home":
    - /url: /
    - text: wiseultima™
  - navigation "Main":
    - list:
      - listitem:
        - link "Product":
          - /url: /product
      - listitem:
        - button "Features"
      - listitem:
        - button "Solutions"
      - listitem:
        - link "How it works":
          - /url: /how-it-works
      - listitem:
        - link "Demo":
          - /url: /demo
      - listitem:
        - link "Benefits":
          - /url: /benefits
      - listitem:
        - button "Company"
  - link "Book a demo":
    - /url: /contact
- main:
  - text: demo
  - heading "Meet your next way of working." [level=1]
  - paragraph: Explore the platform with sample data. Find an issue, trace its impact, and simulate a fix.
  - text: wiseultima™ Sample data — demo only
  - switch "Dark demo theme"
  - combobox "Regions": All regions
  - combobox "Applications": All applications
  - button "Start guided tour"
  - tablist:
    - tab "Board"
    - tab "Explore"
    - tab "Monitory"
    - tab "Actions"
    - tab "Wise AI" [selected]
  - tabpanel:
    - heading "Ask your infrastructure." [level=3]
    - paragraph: Your virtual IT consultant · sample answers
    - button "Health"
    - button "Incidents"
    - button "Utilization"
    - button "Attributes"
    - button "Tickets"
    - button "Actions"
    - button "What's the health status of systems with ID a010065p210?"
    - button "Show me the overall health distribution."
    - paragraph: What's the health status of systems with ID a010065p210?
    - paragraph: a010065p210 is critical. Disk utilization is 97%, CPU 92%, and memory 81%. Log growth on /var may exhaust disk space. Archive old files and clear logs / temp directories.
    - textbox "Ask Wise AI":
      - /placeholder: Ask a question about your infrastructure…
    - button "Send question" [disabled]
    - paragraph: "Conversational auto-fix: in progress. RBAC, approvals, and audit logging are planned safeguards."
  - text: Your next move
  - heading "Less firefighting. More moving forward." [level=2]
  - link "Book a demo":
    - /url: /contact
  - link "See it in action":
    - /url: /demo
- contentinfo:
  - text: Predict. Prevent. Act. wiseultima™
  - paragraph: Intelligent Operations, Simplified! A Wise Work product.
  - link "info@wisework.in":
    - /url: mailto:info@wisework.in
  - paragraph: Platform
  - link "Overview":
    - /url: /product
  - link "Wise Board":
    - /url: /features/wise-board
  - link "Wise Actions":
    - /url: /features/wise-actions
  - link "Wise Explore":
    - /url: /features/wise-explore
  - link "Wise Monitory":
    - /url: /features/wise-monitory
  - link "Wise AI":
    - /url: /features/wise-ai
  - link "AI Workflows":
    - /url: /features/ai-workflows
  - paragraph: Explore
  - link "Product demo":
    - /url: /demo
  - link "How it works":
    - /url: /how-it-works
  - link "Architecture":
    - /url: /architecture
  - link "Integrations":
    - /url: /integrations
  - link "Solutions":
    - /url: /solutions
  - link "Benefits":
    - /url: /benefits
  - paragraph: Company
  - link "About Wise Work":
    - /url: /about
  - link "Roadmap":
    - /url: /roadmap
  - link "FAQ":
    - /url: /faq
  - link "Contact":
    - /url: /contact
  - paragraph: © 2026 Wise Work. All rights reserved.
  - link "Privacy policy":
    - /url: /privacy
  - link "Terms of use":
    - /url: /terms
  - link "wisework.in ↗":
    - /url: https://wisework.in
- region "Notifications alt+T"
- alert
```

# Test source

```ts
  1 | import { test, expect } from "@playwright/test";
  2 | test("all public routes render and unknown routes return 404",async({page})=>{for(const path of ["/","/product","/features","/features/wise-board","/features/wise-actions","/features/wise-explore","/features/wise-monitory","/features/wise-ai","/features/ai-workflows","/how-it-works","/architecture","/solutions","/solutions/finance","/solutions/healthcare","/solutions/retail","/solutions/manufacturing","/benefits","/integrations","/demo","/roadmap","/faq","/about","/contact","/privacy","/terms"]){const response=await page.goto(path);expect(response?.status(),path).toBe(200);await expect(page.locator("h1")).toBeVisible();}expect((await page.goto("/features/not-real"))?.status()).toBe(404);});
  3 | test("home is responsive and video gracefully handles missing ID",async({page})=>{await page.goto("/");for(const width of [360,768,1280,1920]){await page.setViewportSize({width,height:1000});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`overflow at ${width}`).toBeTruthy();await page.screenshot({path:`.playwright-artifacts/home-${width}.png`,fullPage:width===1280});}await page.getByRole("button",{name:"Video coming soon",exact:true}).click();await expect(page.getByRole("dialog")).toContainText("Video coming soon");await expect(page.locator("iframe")).toHaveCount(0);});
> 4 | test("demo filters, details, priority, simulated fixes and AI work",async({page})=>{const errors:string[]=[];page.on("pageerror",e=>errors.push(e.message));await page.goto("/demo");await page.getByRole("button",{name:"a010065p210 Critical"}).click();await expect(page.getByRole("dialog")).toContainText("Log growth on /var");await page.getByRole("button",{name:"Change priority: Red"}).click();await expect(page.getByRole("dialog")).toContainText("Warning");await page.keyboard.press("Escape");await page.getByRole("tab",{name:"Explore",exact:true}).click();await page.getByRole("textbox",{name:"Search systems"}).fill("a010065p210");await expect(page.getByRole("row")).toHaveCount(2);await page.getByRole("textbox",{name:"Search systems"}).fill("no-such-system");await expect(page.getByText("No matching systems.",{exact:false})).toBeVisible();await page.getByRole("tab",{name:"Actions",exact:true}).click();await page.getByRole("button",{name:"Raise ServiceNow ticket"}).first().click();await expect(page.getByRole("dialog")).toContainText("Infra-Linux-L2");await page.getByRole("button",{name:"Confirm simulated ticket"}).click();const count=await page.getByRole("button",{name:"One-click fix",exact:true}).count();await page.getByRole("button",{name:"One-click fix",exact:true}).first().click();await expect(page.getByRole("button",{name:"One-click fix",exact:true})).toHaveCount(count-1);await page.getByRole("tab",{name:"Wise AI",exact:true}).click();await page.getByRole("button",{name:"What's the health status"}).click();await expect(page.locator("[aria-live=polite]").last()).toContainText("Disk utilization is 97%");await page.getByRole("textbox",{name:"Ask Wise AI"}).fill("hello");await page.getByRole("button",{name:"Send question"}).click();await expect(page.locator("[aria-live=polite]").last()).toContainText("This is a demo");expect(errors).toEqual([]);});
    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ^ Error: expect(locator).toContainText(expected) failed
  5 | test("FAQ search and contact validation work",async({page})=>{await page.goto("/faq");await page.getByRole("textbox",{name:"Search frequently"}).fill("setup");await page.getByRole("button",{name:"How long does setup take"}).click();await expect(page.getByText("2–4 weeks, depending on your environment.",{exact:true})).toBeVisible();await page.goto("/contact");await page.getByRole("button",{name:"Complete demo request"}).click();await expect(page.getByText("Please enter your name.")).toBeVisible();await page.getByLabel("Full name").fill("Demo Visitor");await page.getByLabel("Work email").fill("demo@example.com");await page.getByLabel("Company",{exact:false}).fill("Example Company");await page.getByRole("combobox").nth(0).click();await page.getByRole("option",{name:"CTO",exact:true}).click();await page.getByRole("combobox").nth(1).click();await page.getByRole("option",{name:"Retail",exact:true}).click();await page.getByRole("button",{name:"Complete demo request"}).click();await expect(page.getByRole("heading",{name:"Your demo form is complete."})).toBeVisible();});
  6 | test("mobile menu links and guided tour work",async({page})=>{await page.setViewportSize({width:360,height:800});await page.goto("/");await page.getByRole("button",{name:"Open navigation"}).click();await page.getByRole("dialog").getByRole("link",{name:"Product demo",exact:true}).click();await expect(page).toHaveURL(/\/demo/);await page.getByRole("button",{name:"Start guided tour"}).click();for(let i=1;i<5;i++){await expect(page.getByRole("dialog")).toContainText(`Step ${i} of 5`);await page.getByRole("button",{name:"Next",exact:true}).click();}await page.getByRole("button",{name:"Finish tour"}).click();await expect(page.getByRole("tab",{name:"Wise AI",exact:true})).toHaveAttribute("data-state","active");expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();});
  7 | 
```