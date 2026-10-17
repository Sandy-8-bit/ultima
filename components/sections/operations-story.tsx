import { Activity, ArrowDown, Check, CheckCheck, Database, HardDrive, MessageSquare, Server, Sparkles, Ticket, Users, Zap } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DotMark, Eyebrow } from "./shared";

function Frame({ title, children, dark = false }: { title: string; children: ReactNode; dark?: boolean }) {
  return <figure aria-label={title} className={cn("relative min-w-0 overflow-hidden rounded-2xl border", dark ? "border-white/10 bg-ink text-white shadow-hard-dark" : "border-line bg-white shadow-hard")}>
    <figcaption className={cn("flex items-center gap-3 border-b px-5 py-3.5 text-sm", dark ? "border-white/10 bg-white/5" : "border-line bg-[#faf9fc]")}>
      <span aria-hidden className="flex gap-1.5"><span className="size-2.5 rounded-full bg-brand-purple" /><span className="size-2.5 rounded-full bg-brand-purple" /><span className="size-2.5 rounded-full bg-brand-green" /></span>
      <span className={dark ? "text-white/85" : "text-ink"}>{title}</span>
      <span className={cn("ml-auto rounded-md px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest", dark ? "bg-white/10 text-white/60" : "bg-mist text-muted-foreground")}>Example</span>
    </figcaption>
    <div className="p-5 sm:p-7">{children}</div>
  </figure>;
}

function MonitorVisual() {
  return <Frame title="Infrastructure health"><div className="grid grid-cols-3 gap-2 sm:gap-3">{[{ Icon: Server, name: "Servers", status: "Healthy", tone: "green" }, { Icon: Database, name: "Databases", status: "Healthy", tone: "green" }, { Icon: HardDrive, name: "Storage", status: "Warning", tone: "purple" }].map(({ Icon, name, status, tone }) => <div key={name} className={cn("rounded-xl border p-3 sm:p-4", tone === "purple" ? "border-brand-purple/30 bg-brand-purple-soft/60" : "border-line bg-[#faf9fc]")}><span className={cn("mb-5 flex size-8 items-center justify-center rounded-lg", tone === "purple" ? "bg-brand-purple text-white" : "bg-white text-brand-green-deep")}><Icon className="size-4" /></span><p className="text-[11px] font-medium">{name}</p><p className={cn("mt-2 flex items-center gap-1.5 text-[10px]", tone === "purple" ? "text-brand-purple-deep" : "text-brand-green-deep")}><span className={cn("size-1.5 rounded-full", tone === "purple" ? "bg-brand-purple" : "bg-brand-green")} />{status}</p></div>)}</div><div className="mt-5 rounded-xl border border-line bg-[#faf9fc] p-4"><div className="flex justify-between text-xs"><span className="flex items-center gap-2"><Activity className="size-4 text-brand-purple" />Disk utilization</span><span className="font-mono">82%</span></div><svg viewBox="0 0 400 100" className="mt-4 w-full text-brand-purple" role="img" aria-label="Disk utilization rising to 82 percent"><defs><linearGradient id="monitor-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#aa10d0" stopOpacity=".28" /><stop offset="1" stopColor="#aa10d0" stopOpacity="0" /></linearGradient></defs><path d="M0 30H400M0 65H400M0 99H400" className="stroke-line" fill="none" /><path d="M0 85 30 80 60 84 90 65 120 70 150 55 180 61 210 42 240 48 270 29 300 35 330 18 360 23 400 10V100H0Z" fill="url(#monitor-fill)" /><path d="M0 85 30 80 60 84 90 65 120 70 150 55 180 61 210 42 240 48 270 29 300 35 330 18 360 23 400 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg></div></Frame>;
}

function PredictVisual() {
  return <Frame title="Disk capacity forecast"><div className="flex items-end justify-between gap-4"><div><p className="text-xs text-muted-foreground">Now</p><p className="mt-2 font-mono text-3xl tracking-tight">82<span className="text-lg">%</span></p></div><div className="text-right"><p className="text-xs text-brand-purple-deep">In 18 hours</p><p className="mt-2 font-mono text-3xl tracking-tight text-brand-purple">95<span className="text-lg">%</span></p></div></div><svg viewBox="0 0 400 180" className="my-4 w-full" role="img" aria-label="Disk usage forecast rises from 82 percent to the 95 percent risk threshold in 18 hours"><defs><linearGradient id="predict-line" x1="0" x2="1"><stop offset="0" stopColor="#0094da" /><stop offset="1" stopColor="#aa10d0" /></linearGradient></defs><path d="M0 155H400M0 100H400" className="stroke-line" /><rect x="0" y="0" width="400" height="40" fill="#aa10d0" opacity=".06" /><path d="M0 40H400" className="stroke-brand-purple" strokeDasharray="4 5" /><path d="M0 150 50 143 100 121 150 125 200 100" fill="none" className="stroke-ink" strokeWidth="3" /><path d="M200 100Q280 80 370 40" fill="none" stroke="url(#predict-line)" strokeWidth="3" strokeDasharray="6 5" /><circle cx="200" cy="100" r="5" className="fill-ink" /><circle cx="370" cy="40" r="12" fill="#aa10d0" opacity=".18" /><circle cx="370" cy="40" r="6" className="fill-brand-purple" /><text x="0" y="26" className="fill-muted-foreground" fontSize="11">Risk threshold</text></svg><div className="flex items-center gap-3 rounded-xl bg-brand-purple-soft/70 p-4 text-xs"><Sparkles className="size-4 shrink-0 text-brand-purple" />Disk exhaustion predicted before impact.</div></Frame>;
}

function TicketVisual() {
  return <Frame title="ServiceNow handoff"><div className="flex items-center gap-3 rounded-xl bg-brand-purple-soft/70 p-4"><span className="flex size-9 items-center justify-center rounded-lg bg-brand-purple text-white"><Ticket className="size-4" /></span><div><p className="text-xs font-semibold">Disk capacity risk</p><p className="mt-1 text-[11px] text-muted-foreground">Issue details included</p></div></div><span className="mx-auto my-3 flex size-8 items-center justify-center rounded-full border border-line bg-white"><ArrowDown className="size-4 text-brand-purple" /></span><div className="rounded-xl border border-line p-5"><div className="flex items-center justify-between gap-3"><span className="font-mono text-xs">INC0010586</span><span className="rounded-full bg-brand-green/10 px-3 py-1 text-[10px] text-brand-green-deep">Assigned</span></div><div className="my-5 h-px bg-line" /><div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-lg bg-[#f3f2f8]"><Users className="size-4 text-ink" /></span><div><p className="text-xs font-medium">Infrastructure team</p><p className="mt-1 text-[11px] text-muted-foreground">Context. Priority. Clear ownership.</p></div></div></div><p className="mt-5 flex items-center gap-2 text-[11px] text-muted-foreground"><Check className="size-4 text-brand-green" />Routed to the right support group</p></Frame>;
}

function ActVisual() {
  return <Frame title="Wise Actions remediation" dark><div className="flex items-center gap-3"><span className="rounded-xl bg-brand-green/15 p-3"><Zap className="size-6 text-brand-green" /></span><div><p className="text-sm font-medium">Archive eligible logs</p><p className="mt-1 text-xs text-white/55">Recommended fix</p></div></div><div className="my-6 space-y-3">{["Run remediation", "Validate system health", "Capture resolution"].map((label, i) => <div key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[.03] px-4 py-3"><span className="font-mono text-[10px] text-white/45">0{i + 1}</span><span className="flex-1 text-xs">{label}</span><span className="flex size-5 items-center justify-center rounded-full bg-brand-green/20"><Check className="size-3 text-brand-green" /></span></div>)}</div><div className="flex items-center justify-between rounded-xl bg-brand-green/15 p-4"><span className="flex items-center gap-2 text-xs text-brand-green"><CheckCheck className="size-4" />Healthy again</span><span className="font-mono text-sm">82% → 54%</span></div></Frame>;
}

function ConverseVisual() {
  return <Frame title="Ask Wise AI"><div className="ml-8 rounded-2xl rounded-tr-sm bg-ink p-4 text-xs leading-6 text-white">Why was storage flagged?</div><div className="mt-5 flex gap-3"><span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white"><Sparkles className="size-4" /></span><div className="flex-1 rounded-2xl rounded-tl-sm border border-line bg-[#faf9fc] p-4"><p className="text-xs font-semibold">Wise AI</p><p className="mt-3 text-xs leading-6 text-muted-foreground">Disk usage was forecast to reach 95% in 18 hours.</p><div className="mt-4 flex items-center gap-2 rounded-lg bg-brand-green/10 p-3 text-[11px]"><Check className="size-4 shrink-0 text-brand-green-deep" />Logs archived. Usage is now 54%.</div></div></div><div className="mt-6 flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-xs text-muted-foreground"><MessageSquare className="size-4 text-brand-purple" />Your operations, explained.</div></Frame>;
}

const stages = [
  { name: "Monitor", title: "Every system.", accent: "One clear view.", copy: "Track health, utilization, and logs across your infrastructure.", Visual: MonitorVisual },
  { name: "Predict", title: "See risk.", accent: "Before impact.", copy: "Spot emerging issues and understand which systems are at risk.", Visual: PredictVisual },
  { name: "Ticket", title: "The right issue.", accent: "The right team.", copy: "Raise ServiceNow tickets with context and route them to the right team.", Visual: TicketVisual },
  { name: "Act", title: "Resolve faster.", accent: "Keep moving.", copy: "Apply recommended fixes, validate recovery, and capture what worked.", Visual: ActVisual },
  { name: "Converse", title: "Ask naturally.", accent: "Get clarity.", copy: "Ask Wise AI about system health, incidents, and recommended actions.", Visual: ConverseVisual },
];

const stageId = (name: string, index: number) => (index === 0 ? "the-story" : `step-${name.toLowerCase()}`);

function StageTabs({ active }: { active: number }) {
  return <nav aria-label="Operations story stages" className="-mx-1 flex gap-1 overflow-x-auto border-b border-line pb-px">{stages.map(({ name }, i) => <a key={name} href={`#${stageId(name, i)}`} aria-current={i === active ? "step" : undefined} className={cn("relative shrink-0 px-3 py-3 text-sm transition-colors md:px-5", i === active ? "text-ink after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-brand-purple" : "text-muted-foreground hover:text-ink")}><span className="mr-2 font-mono text-[10px] text-muted-foreground">0{i + 1}</span>{name}</a>)}</nav>;
}

export function OperationsStory() {
  return <>{stages.map(({ name, title, accent, copy, Visual }, index) => {
    const onBand = index === 3;
    const flipped = index % 2 === 1;
    return <section key={name} id={stageId(name, index)} className={cn("relative scroll-mt-20 overflow-hidden px-6 py-16 md:px-10 md:py-24", onBand && "bg-brand-purple")}>
      <DotMark light={onBand} className="absolute top-5 right-6 hidden md:grid xl:right-16" />
      <div className="mx-auto max-w-7xl">
        <div className="panel relative overflow-hidden rounded-2xl px-5 pt-3 pb-8 sm:px-8 md:pb-10">
          <StageTabs active={index} />
          <div className="mt-8 grid items-center gap-10 md:mt-10 md:grid-cols-2 md:gap-14">
            <div data-reveal className={cn("min-w-0", flipped && "md:order-2 md:pl-4")}>
              <Eyebrow>0{index + 1} / {name}</Eyebrow>
              <h2 data-split className="mt-5 font-display text-5xl leading-[1.04] font-normal tracking-[-.025em] text-ink md:text-6xl">{title}<br /><span className="text-brand-purple">{accent}</span></h2>
              <p className="mt-5 max-w-sm text-[15px] leading-7 text-muted-foreground">{copy}</p>
            </div>
            <div data-reveal className={cn("relative min-w-0 py-6", flipped && "md:order-1")}>
              <div aria-hidden className={cn("absolute top-0 bottom-0 w-[62%] bg-gradient-to-b", flipped ? "-left-8 rounded-r-full from-brand-blue via-[#11a3a8] to-brand-green sm:-left-12" : "-right-8 rounded-l-full from-brand-purple via-[#6a3fd6] to-brand-blue sm:-right-12", onBand && "from-brand-purple via-[#6a3fd6] to-brand-blue")} />
              <div className="relative">
                <Visual />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  })}</>;
}
