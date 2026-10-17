import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/brand";
import { features, stats } from "@/data/features";
import { industries } from "@/data/usecases";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5 text-[13px] font-medium tracking-[-.01em] text-muted-foreground", className)}>
      <span className="size-1.5 rounded-full bg-brand-pink" />
      {children}
    </div>
  );
}

/** Wise Work 3×3 dot mark from the Figma section corners. Decorative only. */
export function DotMark({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span aria-hidden className={cn("pointer-events-none grid size-14 grid-cols-3 gap-1", className)}>
      {Array.from({ length: 9 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "rounded-full",
            i === 4 ? "bg-ink" : light ? "bg-white" : "bg-brand-pink",
          )}
        />
      ))}
    </span>
  );
}

/** Renders a "\n"-separated title with the last line in brand pink. */
function AccentTitle({ title }: { title: string }) {
  const lines = title.split("\n");
  if (lines.length < 2) return <>{title}</>;
  return (
    <>
      {lines.slice(0, -1).join("\n")}
      {"\n"}
      <span className="text-brand-pink">{lines.at(-1)}</span>
    </>
  );
}

export function PageHero({ label, title, description, children }: { label: string; title: string; description: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="glow-blob-soft absolute -top-40 -right-40 size-[560px] opacity-60 motion-safe:animate-drift" />
      <DotMark className="absolute top-10 right-6 hidden md:grid xl:right-16" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10 md:pt-24">
        <div data-page-enter>
          <Eyebrow className="capitalize">{label}</Eyebrow>
          <h1 data-split className="mt-7 max-w-4xl font-display text-5xl leading-[1.02] font-normal tracking-[-.025em] whitespace-pre-line text-graphite md:text-7xl lg:text-[84px]">
            <AccentTitle title={title} />
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
        </div>
        {children && <div data-reveal className="mt-14">{children}</div>}
      </div>
    </section>
  );
}

export function CTA({ home = false }: { home?: boolean }) {
  return (
    <section data-reveal className="relative overflow-hidden bg-brand-pink px-6 pt-24 pb-10 text-white md:px-12 md:pt-28">
      <DotMark light className="absolute top-8 right-6 xl:right-16" />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Eyebrow className="text-white [&>span]:bg-white">Your next move</Eyebrow>
        <h2 data-split className="mt-6 font-display text-4xl leading-[1.08] tracking-[-.02em] md:text-6xl">
          {home ? <>Turn IT into a<br /><em className="font-light">strategic advantage.</em></> : <>Less firefighting.<br /><em className="font-light">More moving forward.</em></>}
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild className="h-12 rounded-2xl bg-white px-7 text-ink shadow-[0_6px_20px_-4px_rgb(255_120_90/70%)] hover:bg-white/90">
            <Link href="/contact">Book a demo <ArrowUpRight /></Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-2xl border-white/60 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white">
            <Link href="/demo">See it in action <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const featureTint = {
  purple: "bg-brand-pink-soft text-brand-pink-deep",
  green: "bg-brand-green/10 text-brand-green-deep",
  blue: "bg-brand-orange/10 text-brand-orange-deep",
} as const;

export function FeatureGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2", !compact && "lg:grid-cols-3")}>
      {features.map((f, i) => (
        <Card data-reveal key={f.slug} className="panel group gap-0 rounded-2xl p-7 shadow-none transition-shadow hover:shadow-hard">
          <div className="mb-10 flex items-start justify-between">
            <span className={cn("flex size-12 items-center justify-center rounded-xl", featureTint[f.color])}>
              <Icon name={f.icon} className="size-6" />
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
          </div>
          <p className="text-xs text-muted-foreground">{f.name}</p>
          <h3 className="mt-2 font-display text-2xl tracking-tight">{f.verb}</h3>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{f.description}</p>
        </Card>
      ))}
    </div>
  );
}

export function IndustryGrid() {
  return (
    <div className="panel grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4">
      {industries.map((i, n) => (
        <article data-reveal key={i.slug} className="group relative bg-white/60 p-7 transition-colors hover:bg-white">
          <span className="mb-10 flex size-14 items-center justify-center rounded-xl bg-[#f1f1f1] text-graphite transition-colors group-hover:bg-brand-pink group-hover:text-white">
            <Icon name={i.icon} className="size-6" />
          </span>
          <span className="absolute top-7 right-7 font-mono text-[11px] text-muted-foreground">0{n + 1}</span>
          <h3 className="font-display text-xl tracking-tight">{i.name}</h3>
          <p className="mt-3 text-[13px] leading-5 text-muted-foreground">{i.solution}</p>
        </article>
      ))}
    </div>
  );
}

export function Stats({ colorful = false }: { colorful?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.value} data-reveal className={cn("border-l border-line pl-5 md:pl-8", colorful && ["text-brand-pink", "text-brand-green-deep", "text-brand-orange-deep", "text-ink"][i])}>
          <p className="font-mono text-5xl font-medium tracking-[-.04em] md:text-6xl">
            <span data-count={s.value}>{s.value}</span>
            <span className="text-[.55em]">%</span>
          </p>
          <p className="mt-3 max-w-44 text-xs leading-5 text-muted-foreground">
            {s.label}
            {s.value === 50 && " · up to"}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Points({ items }: { items: readonly string[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((p, i) => (
        <Card key={p} data-reveal className="panel gap-0 rounded-2xl p-7 shadow-none">
          <div className="flex items-center justify-between">
            <span className="flex size-9 items-center justify-center rounded-full bg-brand-pink text-white">
              <Check className="size-4" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
          </div>
          <p className="mt-6 text-sm leading-6">{p}</p>
        </Card>
      ))}
    </div>
  );
}
