import { Activity, ArrowDown, ArrowUpRight, BellRing, Cloud, Database, Radio, Server, TriangleAlert } from "lucide-react";

const sources = [
  { name: "Cloud", detail: "CPU pressure", icon: Cloud, severity: "Warning", color: "text-[#947010]", background: "bg-status-amber", bars: [24, 35, 28, 48, 42, 65, 80] },
  { name: "On-prem", detail: "Backup failed", icon: Server, severity: "Critical", color: "text-[#c23c3a]", background: "bg-status-red", bars: [30, 28, 45, 39, 63, 85, 96] },
  { name: "Database", detail: "Latency rising", icon: Database, severity: "Warning", color: "text-[#947010]", background: "bg-status-amber", bars: [18, 24, 36, 30, 51, 68, 78] },
];

export function ChallengeIllustration() {
  return (
    <figure aria-label="Disconnected cloud, server and database alerts build up before business impact becomes visible" className="mx-auto w-full max-w-[470px] min-w-0 overflow-hidden rounded-2xl border border-line bg-white shadow-hard">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
        <span className="flex items-center gap-2 text-[11px] font-semibold"><Activity className="size-4 text-brand-purple"/>An estate that never sleeps</span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] text-muted-foreground"><span className="size-1.5 rounded-full bg-brand-green"/>24 / 7</span>
      </div>
      <div className="px-4 pt-4 pb-4 sm:px-5">
        <div className="mb-3 flex items-center justify-between font-mono text-[8px] uppercase tracking-[.12em] text-muted-foreground"><span>Different systems</span><span>Disconnected signals</span></div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {sources.map(({name,detail,icon:Glyph,severity,color,background,bars})=>(
            <div key={name} className="min-w-0 rounded-xl border border-line bg-[#faf9fc] px-2.5 py-3 sm:px-3">
              <Glyph strokeWidth={1.5} className="mb-2 size-5 text-[#82738e]"/>
              <p className="text-[11px] font-semibold sm:text-xs">{name}</p>
              <div aria-hidden="true" className="mt-3 flex h-7 items-end gap-1">{bars.map((height,i)=><span key={i} style={{height:`${height}%`}} className={`min-w-0 flex-1 rounded-t-sm ${i>4 ? background : "bg-[#ded8e7]"}`}/>)}</div>
              <p className={`mt-2 flex items-center gap-1 text-[9px] font-semibold ${color}`}><span className={`size-1.5 shrink-0 rounded-full ${background}`}/>{severity}</p>
              <p className="mt-1 text-[9px] leading-4 text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="grid grid-cols-3 px-5"><div className="h-4 border-r border-dashed border-[#c9bfd2]"/><div className="h-4 border-r border-dashed border-[#c9bfd2]"/><div className="h-4"/></div>
        <div className="relative mx-auto -mt-4 flex h-8 w-2/3 items-end justify-center rounded-b-2xl border-x border-b border-dashed border-[#c9bfd2]"><span className="absolute -bottom-3 bg-white px-2"><ArrowDown className="size-4 text-[#a38bad]"/></span></div>
        <div className="relative mt-5 rounded-xl border border-line bg-mist/60 p-3">
          <div className="flex items-center justify-between gap-3"><p className="flex items-center gap-2 text-[11px] font-semibold"><BellRing className="size-4 text-brand-purple"/>The alert queue keeps growing</p><span className="rounded-full border border-status-red/20 bg-status-red/8 px-2 py-1 font-mono text-[8px] text-[#c23c3a]">+2 NEW</span></div>
          <div className="mt-3 space-y-1.5">{[["02:41","CPU threshold exceeded","Cloud"],["02:42","Nightly backup interrupted","Server"]].map(([time,event,source],i)=><div key={event} className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2"><span className="font-mono text-[8px] text-muted-foreground">{time}</span><span className={`size-1.5 shrink-0 rounded-full ${i===1 ? "bg-status-red" : "bg-status-amber"}`}/><span className="flex-1 text-[9px] sm:text-[10px]">{event}</span><span className="hidden text-[8px] text-muted-foreground sm:inline">{source}</span></div>)}</div>
          <p className="mt-3 flex items-center gap-2 text-[10px] text-muted-foreground"><Radio className="size-3.5 shrink-0"/>More alerts. Still no connected picture.</p>
        </div>
        <div className="mt-3 flex items-start gap-3 rounded-xl bg-ink p-3 text-white"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10"><TriangleAlert className="size-4 text-status-amber"/></span><div className="flex-1"><p className="text-[11px] font-medium">The real risk? Seeing it too late.</p><p className="mt-1 text-[10px] leading-5 text-white/55">A small warning becomes a customer-facing slowdown.</p></div><ArrowUpRight className="mt-1 size-4 shrink-0 text-white/40"/></div>
      </div>
      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[8px] uppercase tracking-[.12em] text-muted-foreground sm:px-5">Illustrative scenario · From signal overload to business impact</figcaption>
    </figure>
  );
}
