import { WiseExploreIllustration } from "./WiseExploreIllustration";
import { WiseActionsIllustration } from "./WiseActionsIllustration";
import { WiseAIIllustration } from "./WiseAIIllustration";
import { DemoShell } from "@/components/demo/demo-shell";

function WiseMonitoryScreen({ focus = false }: { focus?: boolean }) {
  return <div className={focus ? "[&_.bg-ink.font-mono]:hidden" : undefined}><DemoShell initialTab="Monitory" /></div>;
}
const modules = [
  {name:"Wise Explore",slug:"wise-explore",title:"Find the signal inside the noise.",description:"From an entire estate to one critical detail. Follow each signal to its cause, with the context to know what matters.",Visual:WiseExploreIllustration},
  {name:"Wise Actions",slug:"wise-actions",title:"Turn insight into action.",description:"A clear next step for every issue. Review recommendations, prioritize your response and keep operations moving.",Visual:WiseActionsIllustration},
  {name:"Wise Monitory",slug:"wise-monitory",title:"Stay one step ahead.",description:"Understand peak patterns and spot potential failures before thresholds are breached.",Visual:WiseMonitoryScreen},
  {name:"Wise AI",slug:"wise-ai",title:"Ask your infrastructure.",description:"Start with a question. Get a clear answer grounded in your systems, with the details right beside it.",Visual:WiseAIIllustration},
];
export function ProductShowcase() {
  return <section className="overflow-hidden border-b border-line bg-[#fbf9f7] px-6 py-24 md:px-10"><div className="mx-auto max-w-7xl"><div data-reveal className="mb-20 max-w-2xl"><p className="font-mono text-[10px] uppercase tracking-[.16em] text-brand-pink">Your operational advantage</p><h2 className="mt-5 font-display text-4xl leading-[1.12] tracking-[-.05em] md:text-5xl">Meet the intelligence behind your operations.</h2></div><div className="space-y-24">{modules.map(({name,slug,title,description,Visual},i)=>{const reverse = i % 2 === 1; return <div key={slug} className={`grid items-center gap-10 lg:gap-14 ${reverse ? "lg:grid-cols-[1.55fr_1fr]" : "lg:grid-cols-[1fr_1.55fr]"}`}><div data-reveal className={reverse ? "lg:order-2" : ""}><p className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">0{i+1} — {name}</p><h3 className="mt-5 max-w-sm font-display text-4xl leading-[1.12] tracking-[-.05em]">{title}</h3><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">{description}</p></div><div className="min-w-0"><Visual focus/></div></div>})}</div></div></section>;
}
