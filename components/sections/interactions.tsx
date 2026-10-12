"use client";
import { useRef, useState } from "react";
import { Play, ArrowRight, Check, RotateCcw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";
import { Icon, Logo } from "@/components/brand";
import { faqs } from "@/data/faq";
import { workflows } from "@/data/workflows";
import { gsap, Observer, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
export function FAQ({ preview = false }: { preview?: boolean }) {
  const [query, setQuery] = useState(""),
    [category, setCategory] = useState("All");
  const list = (preview ? faqs.slice(0, 3) : faqs).filter(
    (f) =>
      (category === "All" || f.group === category) &&
      `${f.q} ${f.a}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div>
      {!preview && (
        <div className="mb-8 space-y-4">
          <div className="relative max-w-lg">
            <Search className="absolute top-3 left-3 size-4 text-muted-foreground" />
            <Input
              aria-label="Search frequently asked questions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find your answer…"
              className="h-11 pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "General", "Technical", "Business", "Implementation"].map(
              (c) => (
                <Button
                  key={c}
                  size="sm"
                  variant={c === category ? "default" : "outline"}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </Button>
              ),
            )}
          </div>
        </div>
      )}
      <Accordion type="single" collapsible>
        {list.map((f, i) => (
          <AccordionItem key={f.q} value={f.q} className="border-line">
            <AccordionTrigger className="py-6 text-left text-sm font-medium hover:no-underline">
              <span className="flex gap-5">
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{i + 1}
                </span>
                {f.q}
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-2xl pl-9 text-sm leading-7 text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {list.length === 0 && (
        <p className="py-8 text-muted-foreground">
          No matching questions. Try another search.
        </p>
      )}
    </div>
  );
}
export function Video() {
  const [open, setOpen] = useState(false);
  const id = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID;
  const ready =
    !!id && id !== "REPLACE_WITH_VIDEO_ID" && /^[a-zA-Z0-9_-]{11}$/.test(id);
  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          track("watch_video", { available: ready });
        }}
        className="group relative flex min-h-72 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-line bg-[#eeebf3] py-14 shadow-hard md:min-h-96"
        aria-label={ready ? "Watch Wise Ultima video" : "Video coming soon"}
      >
        <div className="absolute -top-10 -left-8 size-44 rounded-full border border-[#d8d3e3]" />
        <div className="absolute -right-10 -bottom-16 size-64 rounded-full border border-[#d8d3e3]" />
        <Logo className="mb-10" />
        <span
          data-float
          className="hex flex size-20 items-center justify-center bg-brand-purple text-white"
        >
          <Play className="ml-1 size-7" fill="currentColor" />
        </span>
        <span className="mt-7 font-display text-2xl tracking-tight">
          Intelligent Operations, Simplified!
        </span>
        <span className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {ready ? "Play the product film" : "Product film · coming soon"}
        </span>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>See Wise Ultima in 2 minutes.</DialogTitle>
            <DialogDescription>
              {ready
                ? "A closer look at predictive operations."
                : "Video coming soon. In the meantime, explore the interactive product demo."}
            </DialogDescription>
          </DialogHeader>
          {open && ready ? (
            <iframe
              className="aspect-video w-full rounded-lg"
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
              title="Wise Ultima product overview"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center gap-6 bg-mist py-12">
              <Logo />
              <p className="text-sm text-muted-foreground">
                The Wise Ultima product film is on its way.
              </p>
              <Button asChild>
                <a href="/demo">
                  Try the interactive demo <ArrowRight />
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
export function DependencyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [critical, setCritical] = useState(true);
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-connection]", {
        drawSVG: "0%",
        duration: 1.4,
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
      gsap.to("[data-pulse]", {
        motionPath: {
          path: "M110,140 C210,140 200,55 315,55",
          autoRotate: false,
        },
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: ref, dependencies: [critical], revertOnUpdate: true },
  );
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-line bg-white p-6 shadow-hard"
    >
      <div className="mb-5 flex justify-between">
        <Badge
          variant="outline"
          className="border-brand-purple/20 text-brand-purple"
        >
          Impact analysis
        </Badge>
        <span className="text-[9px] text-muted-foreground">
          1 critical issue · 3 systems at risk
        </span>
      </div>
      <svg
        viewBox="0 0 460 280"
        className="w-full"
        role="img"
        aria-label="A critical disk issue on a server cascading to the payments API, ledger database, and customer web portal"
      >
        <g
          fill="none"
          stroke={critical ? "#e4bccd" : "#b7d7c7"}
          strokeWidth="2"
        >
          <path data-connection d="M110 140C210 140 200 55 315 55" />
          <path data-connection d="M110 140H315" />
          <path data-connection d="M110 140C210 140 200 225 315 225" />
        </g>
        <circle data-pulse r="4" fill="#aa10d0" />
        <rect
          x="20"
          y="100"
          width="135"
          height="80"
          rx="12"
          fill={critical ? "#fff0f0" : "#edf9ef"}
          stroke={critical ? "#ef5350" : "#5bc65b"}
        />
        <text x="87" y="130" textAnchor="middle" fontSize="11" fill="#15121d">
          a010065p210
        </text>
        <text
          x="87"
          y="153"
          textAnchor="middle"
          fontSize="10"
          fill={critical ? "#bd302d" : "#267b2c"}
        >
          {critical ? "Critical server" : "Healthy server"}
        </text>
        <text x="87" y="168" textAnchor="middle" fontSize="8" fill="#81778e">
          {critical ? "Disk reaching 94%" : "Resolved"}
        </text>
        {[
          { name: "Payments API", impact: "Transactions at risk" },
          { name: "Ledger database", impact: "Write queue may grow" },
          { name: "Customer portal", impact: "Checkout could slow" },
        ].map(({ name, impact }, i) => (
          <g key={name}>
            <rect
              x="295"
              y={i * 85 + 20}
              width="145"
              height="70"
              rx="10"
              fill={critical ? "#fffaf0" : "#f6f4f9"}
              stroke={critical ? "#f2d48a" : "#e2e0ec"}
            />
            <circle
              cx="314"
              cy={i * 85 + 55}
              r="4"
              fill={critical ? "#ef5350" : "#5bc65b"}
            />
            <text x="332" y={i * 85 + 59} fontSize="10" fill="#15121d">
              {name}
            </text>
            <text x="332" y={i * 85 + 75} fontSize="8" fill="#81778e">
              {critical ? impact : "Operating normally"}
            </text>
          </g>
        ))}
      </svg>
      <div className="mb-5 flex items-center gap-2 rounded-lg bg-mist px-3 py-2 text-[10px] text-muted-foreground"><span className={`size-2 rounded-full ${critical ? "bg-status-red" : "bg-status-green"}`} />{critical ? "Wise Board maps the blast radius before the issue spreads." : "All dependent services are healthy."}</div>
      <Button
        variant="outline"
        className="w-full text-xs"
        onClick={() => setCritical(!critical)}
      >
        {critical ? "Simulate resolution" : "Reset dependency scenario"}
        <RotateCcw className="size-3" />
      </Button>
    </div>
  );
}
export function HealingVisual() {
  const [step, setStep] = useState(-1);
  const scope = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope });
  const run = contextSafe(() => {
    setStep(0);
    const tl = gsap.timeline();
    [0, 1, 2, 3, 4].forEach((i) => tl.call(() => setStep(i), [], i * 0.65));
  });
  return (
    <div
      ref={scope}
      className="rounded-2xl border border-white/15 bg-[#171722] p-7 text-white"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green">
          <Icon name="actions" />
        </span>
        <div>
          <p className="text-sm">Potential disk exhaustion</p>
          <p className="mt-1 font-mono text-[10px] text-white/40">
            a010065p210 · Sample scenario
          </p>
        </div>
      </div>
      <div className="my-7 rounded-xl border border-white/10 bg-ink p-5 font-mono text-xs leading-8">
        {[
          "Detect — disk approaching capacity",
          "Diagnose — log growth on /var",
          "Fix — archive files, clear logs",
          "Validate — utilization healthy",
          "AI Re-learn — update knowledge base",
        ].map((text, i) => (
          <p
            key={text}
            className={cn(i <= step ? "text-status-green" : "text-white/30")}
          >
            {i <= step ? "✓" : "›"} {text}
          </p>
        ))}
      </div>
      <Button
        className="w-full bg-brand-green text-ink hover:bg-[#25c47f]"
        disabled={step >= 0 && step < 4}
        onClick={run}
      >
        {step === 4 ? (
          <>
            <Check />
            Healed. Run again?
          </>
        ) : (
          <>
            <Icon name="actions" />
            Simulate one-click fix
          </>
        )}
      </Button>
    </div>
  );
}
export function LearningLoop() {
  const ref = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(ring.current, {
          rotation: 90,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        Observer.create({
          target: ref.current,
          type: "touch,pointer",
          onDrag: (self) =>
            gsap.to(ring.current, {
              rotation: `+=${self.deltaX}`,
              duration: 0.4,
            }),
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );
  return (
    <div
      ref={ref}
      className="relative mx-auto flex aspect-square max-w-[370px] touch-pan-y items-center justify-center"
    >
      <div
        ref={ring}
        className="absolute inset-6 rounded-full border-2 border-dashed border-brand-purple/25"
      >
        <span className="absolute top-1/2 -left-2 size-4 rounded-full bg-brand-purple" />
        <span className="absolute top-1/2 -right-2 size-4 rounded-full bg-brand-green" />
      </div>
      <div className="flex size-36 items-center justify-center rounded-full border border-line bg-white shadow-hard">
        <Logo />
      </div>
      {["Detect", "Diagnose", "Fix", "Validate", "AI Re-learn"].map((n, i) => (
        <span
          key={n}
          className={cn(
            "absolute rounded-full border border-line bg-white px-4 py-2 font-mono text-[10px]",
            [
              "top-0 left-1/2 -translate-x-1/2",
              "top-[30%] right-0",
              "right-5 bottom-10",
              "bottom-10 left-5",
              "top-[30%] left-0",
            ][i],
          )}
        >
          {n}
        </span>
      ))}
    </div>
  );
}

export function WorkflowExplorer() {
  const [service, setService] = useState("All"),
    [selected, setSelected] = useState(0),
    [step, setStep] = useState(-1);
  const scope = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope });
  const run = contextSafe(() => {
    setStep(0);
    const tl = gsap.timeline();
    [0, 1, 2, 3, 4].forEach((i) => tl.call(() => setStep(i), [], i * 0.7));
  });
  return (
    <div ref={scope}>
      <div className="mb-8 flex flex-wrap gap-2">
        {["All", "MongoDB", "Apache", "MSSQL", "Nginx"].map((s) => (
          <Button
            key={s}
            variant={s === service ? "default" : "outline"}
            onClick={() => setService(s)}
          >
            {s}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {workflows
          .filter((w) => service === "All" || w.service === service)
          .map((w) => (
            <Card
              data-reveal
              key={`${w.service}${w.cause}`}
              className="gap-4 rounded-xl border-line p-6 shadow-none"
            >
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{w.service}</Badge>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {w.code}
                </span>
              </div>
              <h3 className="font-display text-xl tracking-tight">{w.cause}</h3>
              <p className="text-xs text-muted-foreground">
                Impact · {w.impact}
              </p>
              <p className="text-xs leading-6">
                <span className="text-[#007746]">AI fix · </span>
                {w.fix}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelected(workflows.indexOf(w));
                  setStep(-1);
                  document
                    .getElementById("workflow-terminal")
                    ?.scrollIntoView({ behavior: "instant", block: "center" });
                }}
              >
                Select simulation <ArrowRight />
              </Button>
            </Card>
          ))}
      </div>
      <div
        id="workflow-terminal"
        className="mt-12 rounded-2xl bg-ink p-7 text-white"
      >
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-white/40">
              SIMULATION · NO LIVE EXECUTION
            </p>
            <h3 className="mt-3 font-display text-2xl">
              {workflows[selected].service}: {workflows[selected].cause}
            </h3>
          </div>
          <Button
            onClick={run}
            disabled={step >= 0 && step < 4}
            className="bg-brand-green text-ink"
          >
            Simulate a failure <Play />
          </Button>
        </div>
        <div aria-live="polite" className="mt-7 space-y-3 font-mono text-xs">
          {[
            "Detect: " + workflows[selected].code,
            "Diagnose: " + workflows[selected].impact,
            "Fix: " + workflows[selected].fix,
            "Validate: startup and availability confirmed",
            "AI Re-learn: resolution captured in sample knowledge base",
          ].map((s, i) => (
            <p
              className={i <= step ? "text-status-green" : "text-white/30"}
              key={s}
            >
              {i <= step ? "✓" : "›"} {s}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export function ArchitecturePipeline() {
  const nodes = [
    {
      name: "Data sources",
      icon: "server",
      detail:
        "Servers, databases, logs, incidents, events, change, utilization, CMDB, external services, and ServiceNow.",
    },
    {
      name: "Data lake",
      icon: "database",
      detail: "Operational data is brought together for processing.",
    },
    {
      name: "AI engine",
      icon: "intelligence",
      detail:
        "Predict health and prescribe actions using AI, deep learning, and LLMs.",
    },
    {
      name: "Action hub",
      icon: "actions",
      detail: "Execute an automated fix or prepare a ServiceNow ticket.",
    },
    {
      name: "User interface",
      icon: "board",
      detail: "Wise Board, Wise Explore, action screens, and Wise AI chat.",
    },
  ];
  return (
    <TooltipProvider>
      <div className="grid gap-5 md:grid-cols-5">
        {nodes.map((n, i) => (
          <Tooltip key={n.name}>
            <TooltipTrigger asChild>
              <button className="relative flex flex-col items-center gap-5 rounded-2xl border border-line bg-white p-6 text-center outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
                <span
                  className={cn(
                    "hex flex size-20 items-center justify-center",
                    i === 2
                      ? "bg-brand-purple text-white"
                      : "bg-mist text-brand-blue",
                  )}
                >
                  <Icon name={n.icon} className="size-8" />
                </span>
                <span className="text-sm font-medium">{n.name}</span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  0{i + 1} {i < 4 ? "→" : "✓"}
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-64 bg-ink p-4 text-xs leading-6 text-white">
              {n.detail}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
export function TrustLadder() {
  const [value, setValue] = useState([0]);
  return (
    <Card className="border-line p-8 shadow-none">
      <Badge className="w-fit bg-brand-purple/10 text-brand-purple">
        In progress
      </Badge>
      <h3 className="font-display text-2xl">Automation at your pace.</h3>
      <p className="text-sm text-muted-foreground">
        Illustrative progression, governed by confidence and policy.
      </p>
      <Slider
        aria-label="Illustrative automation progression"
        value={value}
        onValueChange={setValue}
        max={2}
        step={1}
        className="my-5"
      />
      <div className="flex justify-between gap-3 text-xs">
        {["Manual approval", "Human-in-the-loop", "Full automation"].map(
          (s, i) => (
            <span
              key={s}
              className={
                i === value[0]
                  ? "font-semibold text-brand-purple"
                  : "text-muted-foreground"
              }
            >
              {s}
            </span>
          ),
        )}
      </div>
    </Card>
  );
}
