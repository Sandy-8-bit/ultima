import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon, Logo } from "@/components/brand";
import { HexVisual } from "@/components/three/hex-visual";
import { DemoShell } from "@/components/demo/demo-shell";
import { WiseExploreIllustration } from "@/components/product-ui/WiseExploreIllustration";
import { WiseActionsIllustration } from "@/components/product-ui/WiseActionsIllustration";
import { WiseAIIllustration } from "@/components/product-ui/WiseAIIllustration";
import { features, stats } from "@/data/features";
import { industries } from "@/data/usecases";
import {
  CTA,
  Eyebrow,
  FeatureGrid,
  IndustryGrid,
  PageHero,
  Points,
} from "./shared";
import {
  ArchitecturePipeline,
  DependencyMap,
  FAQ,
  LearningLoop,
  TrustLadder,
  WorkflowExplorer,
} from "./interactions";
import { ContactForm } from "./contact";
const section = "mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20";
export const pageInfo: Record<string, { title: string; description: string }> =
  {
    product: {
      title: "One platform.\nThree verbs.",
      description:
        "Predict, prevent, and act. Turn complex IT operations into a clear path forward.",
    },
    features: {
      title: "Every signal.\nOne connected platform.",
      description:
        "Six modules. Shared intelligence. Everything you need to stay ahead of your infrastructure.",
    },
    "how-it-works": {
      title: "From signal\nto solution.",
      description:
        "A continuous loop of monitoring, analysis, action, and feedback. Your operations get wiser with every cycle.",
    },
    architecture: {
      title: "Complex underneath.\nClear on the surface.",
      description:
        "Bring operational data together. Turn it into predictive insight and prescriptive action.",
    },
    solutions: {
      title: "Your industry.\nA step ahead.",
      description:
        "Keep critical systems moving across finance, healthcare, retail, and manufacturing.",
    },
    benefits: {
      title: "Less reaction.\nMore impact.",
      description:
        "Detect issues earlier. Resolve them faster. Make room for the work that moves your business forward.",
    },
    integrations: {
      title: "Your environment.\nBetter connected.",
      description:
        "Bring existing data and ServiceNow into a connected operational view.",
    },
    demo: {
      title: "Meet your next\nway of working.",
      description:
        "Explore the platform with sample data. Find an issue, trace its impact, and simulate a fix.",
    },
    roadmap: {
      title: "The next chapter\nis taking shape.",
      description:
        "From AI-assisted operations toward AI-driven autonomous operations. These capabilities are in progress.",
    },
    faq: {
      title: "Good questions.\nClear answers.",
      description:
        "Get to know Wise Ultima, from the first connection to everyday operations.",
    },
    about: {
      title: "Wise Work.\nWiser operations.",
      description:
        "Turning IT from a reactive function into a strategic advantage.",
    },
    contact: {
      title: "Your next step\nstarts here.",
      description:
        "Book a demo. Explore your use case. See how Wise Ultima fits your environment.",
    },
    privacy: {
      title: "Privacy policy",
      description: "TODO — legal copy to be provided by Wise Work.",
    },
    terms: {
      title: "Terms of use",
      description: "TODO — legal copy to be provided by Wise Work.",
    },
  };
export function StandardPage({ slug }: { slug: string }) {
  const info = pageInfo[slug];
  return (
    <>
      <PageHero
        label={slug === "contact" ? "Book a demo" : slug.replaceAll("-", " ")}
        title={info.title}
        description={info.description}
      />
      {slug === "product" && (
        <>
          <section data-reveal className={section + " pt-0"}>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                [
                  "Predict",
                  "purple",
                  "intelligence",
                  "See the issue before it escalates.",
                ],
                [
                  "Prevent",
                  "blue",
                  "shield",
                  "Understand impact. Stay ahead of disruption.",
                ],
                [
                  "Act",
                  "green",
                  "actions",
                  "Turn insight into your next action.",
                ],
              ].map(([n, c, icon, text], i) => (
                <Card
                  key={n}
                  className={`gap-6 rounded-2xl border-0 p-8 ${c === "purple" ? "bg-brand-purple/8" : c === "blue" ? "bg-brand-blue/8" : "bg-brand-green/8"}`}
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <Icon name={icon} className="my-4 size-14" />
                  <h2 className="font-display text-4xl tracking-tight">{n}.</h2>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </Card>
              ))}
            </div>
          </section>
          <section data-reveal className="bg-mist">
            <div className={section}>
              <Eyebrow>Clarity at every level</Eyebrow>
              <h2 className="mt-5 mb-10 font-display text-4xl tracking-tight">
                One estate. Every perspective.
              </h2>
              <Points
                items={[
                  "CXOs: a strategic view of the entire IT estate.",
                  "Top management: clear dashboards and actionable insights.",
                  "IT heads: system-level detail and tailored recommendations.",
                ]}
              />
              <div className="mt-12 flex flex-wrap justify-between gap-6 text-sm">
                {[
                  ["#5bc65b", "Healthy"],
                  ["#f5c542", "Warning · potential issue"],
                  ["#ef5350", "Critical · act now"],
                ].map(([color, label], i) => (
                  <p className="flex items-center gap-3" key={label}>
                    <span
                      className={`size-4 rounded-full ${i === 0 ? "bg-status-green" : i === 1 ? "bg-status-amber" : "bg-status-red"}`}
                    />
                    {label}
                  </p>
                ))}
              </div>
              <p className="mt-10 text-sm text-muted-foreground">
                Non-technical friendly · Top-down visibility · Plain-language
                insights
              </p>
            </div>
          </section>
          <section className={section}>
            <FeatureGrid />
          </section>
        </>
      )}
      {slug === "features" && (
        <section className={section + " pt-0"}>
          <FeatureGrid />
          <div data-reveal className="mt-14 rounded-2xl bg-mist p-8">
            <p className="font-mono text-xs text-muted-foreground">
              EXPLORE IT LIVE
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight">
              Five perspectives. One working demo.
            </h2>
            <p className="mt-4 mb-7 text-sm text-muted-foreground">
              Original product screenshots are pending. Explore the clearly
              labeled sample interface below.
            </p>
            <DemoShell />
          </div>
        </section>
      )}
      {slug === "demo" && (
        <section data-reveal className={section + " pt-0"}>
          <DemoShell />
        </section>
      )}
      {slug === "solutions" && (
        <>
          <section data-reveal className={section + " pt-0"}>
            <HexVisual className="mx-auto -mt-16 mb-12 h-64 max-w-sm" />
            <IndustryGrid />
          </section>
        </>
      )}
      {slug === "how-it-works" && (
        <>
          {/* <section
            data-reveal
            className={
              section + "  items-center flex gap-10 pt-0"
            }
          >
            <LearningLoop />
            <div>
              <Eyebrow>The closed loop</Eyebrow>
              <h2 className="mt-5 font-display text-4xl tracking-tight">
                Monitoring.
                <br />
                Analysis.
                <br />
                Action.
                <br />
                Feedback.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
                Collect the signal. Understand the context. Take action. Learn
                from the outcome.
              </p>
            </div>
          </section> */}
          {[
            [
              "Ingest",
              "Servers, databases, CPU, memory, disk, network, incidents, events, and logs.",
              "server",
            ],
            [
              "Process",
              "Bring operational data and ServiceNow incident reports into context.",
              "database",
            ],
            [
              "Predict",
              "Translate patterns into green, amber, and red health predictions.",
              "intelligence",
            ],
            [
              "Prescribe & Act",
              "Recommend a fix. Automate execution or escalate through ServiceNow.",
              "actions",
            ],
            [
              "Report",
              "Make insights accessible through dashboards and natural-language reporting.",
              "board",
            ],
          ].map(([title, copy, icon], i) => (
            <section
              data-reveal
              key={title}
              className={i % 2 === 0 ? "bg-mist" : "bg-white"}
            >
              <div className={section + " flex items-center gap-8 md:gap-20"}>
                <span className="font-display text-5xl text-brand-purple/25 md:text-8xl">
                  0{i + 1}
                </span>
                <div>
                  <Icon name={icon} className="mb-5 size-8 text-brand-purple" />
                  <h2 className="font-display text-4xl tracking-tight">
                    {title}
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                    {copy}
                  </p>
                </div>
              </div>
            </section>
          ))}
          <Setup />
        </>
      )}
      {slug === "architecture" && (
        <>
          <section data-reveal className={section + " pt-0"}>
            <HexVisual className="mx-auto h-52 max-w-xs" />
            <ArchitecturePipeline />
          </section>
          <section data-reveal className="bg-mist">
            <div className={section}>
              <Eyebrow>From every corner of your estate</Eyebrow>
              <h2 className="mt-5 mb-9 font-display text-4xl tracking-tight">
                The right inputs. Connected.
              </h2>
              <SourceTiles />
              <div className="mt-12">
                <Points
                  items={[
                    "AI: predictive analytics and operational decisions.",
                    "Deep learning: recognize patterns across infrastructure.",
                    "LLMs: natural-language insights and reporting.",
                  ]}
                />
              </div>
            </div>
          </section>
        </>
      )}
      {slug === "benefits" && (
        <>
          <section className={section + " grid gap-5 pt-0 md:grid-cols-2"}>
            {stats.map((s, i) => (
              <Card
                data-reveal
                key={s.value}
                className={`min-h-80 justify-between rounded-2xl border-0 p-10 text-white ${["bg-brand-purple", "bg-[#007d49]", "bg-[#007cb7]", "bg-ink"][i]}`}
              >
                <Icon
                  name={["intelligence", "shield", "actions", "board"][i]}
                  className="size-7"
                />
                <p className="font-display text-8xl tracking-[-.07em]">
                  <span data-count={s.value}>{s.value}</span>%
                </p>
                <div>
                  <h2 className="text-lg">{s.label}</h2>
                  <p className="mt-2 text-xs text-white/70">{s.note}</p>
                </div>
              </Card>
            ))}
          </section>
          <section data-reveal className="bg-mist">
            <div
              className={
                section + " flex flex-wrap items-center justify-between gap-8"
              }
            >
              <div>
                <Eyebrow>Value that moves forward</Eyebrow>
                <h2 className="mt-5 font-display text-5xl tracking-tight">
                  Typical ROI within
                  <br />
                  <span className="text-brand-purple">6 months.</span>
                </h2>
              </div>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="flex h-24 w-9 items-end justify-center rounded-lg bg-brand-purple/10 pb-3 font-mono text-xs text-brand-purple sm:w-12"
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Setup />
        </>
      )}
      {slug === "integrations" && (
        <>
          <section data-reveal className={section + " pt-0"}>
            <div className="grid items-center gap-10 rounded-2xl bg-[#eef6f0] p-8 md:grid-cols-2 md:p-12">
              <div>
                <p className="font-display text-4xl font-medium tracking-tight text-[#315c41]">
                  ServiceNow
                </p>
                <h2 className="mt-7 font-display text-3xl tracking-tight">
                  The right ticket.
                  <br />
                  The right team.
                </h2>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  API integration connects your operational insights to your
                  existing incident workflow.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Incident escalation",
                  "Auto-populated ticket details",
                  "Auto-routing to the support group",
                  "Customer ServiceNow API integration",
                ].map((s, i) => (
                  <div
                    className="flex gap-4 rounded-lg border border-[#d6e6da] bg-white p-4 text-sm"
                    key={s}
                  >
                    <span className="text-[#007746]">0{i + 1}</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section data-reveal className={section}>
            <Eyebrow>Connect the operational picture</Eyebrow>
            <h2 className="mt-5 mb-10 font-display text-4xl tracking-tight">
              All your signals. Working together.
            </h2>
            <SourceTiles />
            <div className="mt-12">
              <ArchitecturePipeline />
            </div>
          </section>
        </>
      )}
      {slug === "roadmap" && (
        <section className={section + " space-y-8 pt-0"}>
          {[
            {
              title: "Run fixes through conversation.",
              copy: "Execute auto-fix workflows from Wise AI chat using natural language.",
              tags: [
                "Role-based access control",
                "Approval policies",
                "Full audit logging",
              ],
            },
            {
              title: "Your services. Your workflows.",
              copy: "Flexible service onboarding and custom remediation, with people in control.",
              tags: [
                "Human-in-the-loop",
                "Confidence-based progression",
                "Policy-governed automation",
              ],
            },
          ].map((r, i) => (
            <Card
              key={r.title}
              data-reveal
              className="gap-6 rounded-2xl border-line p-8 shadow-none md:p-12"
            >
              <div className="flex justify-between">
                <Badge className="bg-brand-purple/10 text-brand-purple">
                  In progress
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h2 className="font-display text-4xl tracking-tight">
                {r.title}
              </h2>
              <p className="text-sm text-muted-foreground">{r.copy}</p>
              <div className="flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <Badge key={t} variant="outline" className="px-3 py-2">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
          <div data-reveal>
            <TrustLadder />
          </div>
        </section>
      )}
      {slug === "faq" && (
        <section data-reveal className={section + " pt-0"}>
          <FAQ />
        </section>
      )}
      {slug === "contact" && (
        <section data-reveal className={section + " pt-0"}>
          <ContactForm />
        </section>
      )}
      {slug === "about" && (
        <>
          <section
            data-reveal
            className={
              section + " grid items-center gap-10 pt-0 md:grid-cols-2"
            }
          >
            <HexVisual className="h-80" />
            <div>
              <Logo />
              <h2 className="mt-8 font-display text-4xl tracking-tight">
                Intelligent Operations,
                <br />
                Simplified!
              </h2>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                Wise Ultima is a Wise Work product for proactive, AI-driven IT
                operations.
              </p>
              <a
                href="https://wisework.in"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 text-sm"
              >
                Visit Wise Work <ArrowUpRight className="size-4" />
              </a>
              <p className="mt-8 rounded-lg border border-line p-4 text-xs leading-6 text-muted-foreground">
                TODO — company story and team information to be provided by Wise
                Work.
              </p>
            </div>
          </section>
          <section data-reveal className={section}>
            <Points
              items={[
                "Predict: see infrastructure issues earlier.",
                "Prevent: understand risk and connected impact.",
                "Act: turn insight into operational improvement.",
              ]}
            />
          </section>
        </>
      )}
      {(slug === "privacy" || slug === "terms") && (
        <section data-reveal className={section + " pt-0"}>
          <Card className="gap-5 rounded-2xl border-line p-8 shadow-none">
            <Badge variant="outline" className="w-fit">
              Placeholder — not final legal terms
            </Badge>
            <h2 className="font-display text-2xl">
              To be provided by Wise Work.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              {slug === "privacy"
                ? "The final privacy policy, data practices, and contact details are pending. This demo form validates locally and does not transmit your submission."
                : "The final terms governing access and use of this website are pending."}
            </p>
            <a
              className="text-sm text-brand-purple"
              href="mailto:info@wisework.in"
            >
              Contact info@wisework.in
            </a>
          </Card>
        </section>
      )}
      <CTA />
    </>
  );
}
function SourceTiles() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
      {[
        "Servers",
        "Databases",
        "Logs",
        "Incidents",
        "Events",
        "Change",
        "CPU / disk / memory",
        "CMDB",
        "External services",
        "ServiceNow",
      ].map((s, i) => (
        <div
          key={s}
          className="flex flex-col gap-5 rounded-xl border border-line bg-white p-5"
        >
          <Icon
            name={i % 2 === 0 ? "server" : "database"}
            className="text-brand-blue"
          />
          <p className="text-xs">{s}</p>
        </div>
      ))}
    </div>
  );
}
function Setup() {
  return (
    <section data-reveal className={section}>
      <div className="flex flex-wrap items-center justify-between gap-7">
        <div>
          <Eyebrow>Get moving</Eyebrow>
          <h2 className="mt-5 font-display text-5xl tracking-tight">
            Live in 2–4 weeks.
          </h2>
          <p className="mt-4 text-xs text-muted-foreground">
            Depends on your environment. Setup phases below are illustrative.
          </p>
        </div>
        <Button asChild className="bg-ink">
          <Link href="/contact">
            Talk to us <ArrowUpRight />
          </Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {["Connect data", "Configure", "Go live"].map((s, i) => (
          <div key={s} className="border-t-2 border-brand-purple pt-5 text-sm">
            <span className="mr-4 font-mono text-xs text-muted-foreground">
              0{i + 1}
            </span>
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
export function FeaturePage({ slug }: { slug: string }) {
  const f = features.find((f) => f.slug === slug)!;
  const tab = (
    {
      "wise-board": "Board",
      "wise-actions": "Actions",
      "wise-explore": "Explore",
      "wise-monitory": "Monitory",
      "wise-ai": "Wise AI",
    } as Record<string, string>
  )[slug];
  return (
    <>
      <PageHero label={f.name} title={f.title} description={f.description} />
      <section data-reveal className={section + " pt-0"}>
        {slug === "ai-workflows" ? (
          <>
            <div className="mb-12">
              <LearningLoop />
            </div>
            <WorkflowExplorer />
          </>
        ) : slug === "wise-explore" ? (
          <WiseExploreIllustration />
        ) : slug === "wise-actions" ? (
          <WiseActionsIllustration />
        ) : slug === "wise-ai" ? (
          <WiseAIIllustration />
        ) : (
          <DemoShell initialTab={tab} />
        )}
      </section>
      <section data-reveal className="bg-mist">
        <div className={section}>
          <Eyebrow>{f.verb}</Eyebrow>
          <h2 className="mt-5 mb-10 font-display text-4xl tracking-tight">
            Purpose-built for your next move.
          </h2>
          <Points items={f.points} />
        </div>
      </section>
      {slug === "wise-board" && (
        <section
          className={section + " grid items-center gap-10 md:grid-cols-2"}
        >
          <div data-reveal>
            <Eyebrow>See beyond the red dot</Eyebrow>
            <h2 className="mt-5 font-display text-4xl tracking-tight">
              It knows what breaks next.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Prioritize by business impact. Prevent cascading failures.
              <br />
              Expert feedback makes predictions context-aware.
            </p>
          </div>
          <div data-reveal>
            <DependencyMap />
          </div>
        </section>
      )}
      {slug === "wise-actions" && (
        <section data-reveal className={section + " text-center"}>
          <p className="font-display text-8xl tracking-tight text-[#007746]">
            50%
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Up to 50% reduction in incident resolution time.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5 text-xs">
            {[
              "Resolved",
              "Notes captured",
              "Knowledge base updated",
              "Better recommendations",
            ].map((s) => (
              <span key={s} className="rounded-full bg-mist px-5 py-3">
                {s} →
              </span>
            ))}
          </div>
        </section>
      )}
      {slug === "wise-monitory" && (
        <section data-reveal className={section}>
          <Points
            items={[
              "Black Friday: anticipate demand before thresholds are breached.",
              "Campaigns: detect inefficient resource use and anomalies.",
              "Seasonal surges: plan scaling with utilization forecasts.",
            ]}
          />
        </section>
      )}
      {slug === "wise-ai" && (
        <section data-reveal className={section}>
          <TrustLadder />
          <Link
            href="/roadmap"
            className="mt-6 flex items-center gap-3 text-sm"
          >
            Coming: run fixes from chat <ArrowRight className="size-4" />
          </Link>
        </section>
      )}
      <CTA />
    </>
  );
}
export function IndustryPage({ slug }: { slug: string }) {
  const i = industries.find((i) => i.slug === slug)!;
  return (
    <>
      <PageHero
        label={`${i.name} / Industry solutions`}
        title={`Keep ${i.name.toLowerCase()}\nmoving forward.`}
        description={i.solution}
      />
      {[
        ["The challenge", i.challenge],
        ["The solution", i.solution],
        ["The outcome", i.outcome],
      ].map(([label, text], n) => (
        <section
          key={label}
          data-reveal
          className={n % 2 === 0 ? "bg-mist" : "bg-white"}
        >
          <div className={section + " grid items-center gap-10 md:grid-cols-2"}>
            <div>
              <Eyebrow>{`0${n + 1} / ${label}`}</Eyebrow>
              <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
                {text}
              </h2>
            </div>
            <div className="flex min-h-64 items-center justify-center">
              {n === 2 ? (
                <p className="font-display text-[120px] tracking-[-.07em] text-brand-purple">
                  {i.stat}
                </p>
              ) : (
                <span className="hex flex size-52 items-center justify-center bg-brand-purple/10">
                  <Icon name={i.icon} className="size-20 text-brand-purple" />
                </span>
              )}
            </div>
          </div>
        </section>
      ))}
      <CTA />
    </>
  );
}
