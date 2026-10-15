import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Play,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "@/components/demo/board";
import { OperationsStory } from "./operations-story";

import { HexVisual } from "@/components/three/hex-visual";
import { Eyebrow, CTA, IndustryGrid } from "./shared";
import {
  FAQ,
  Video,
} from "./interactions";
export function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-[1440px] overflow-hidden px-6 pt-14 pb-10 md:px-10 md:pt-20 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-8">
          <div data-page-enter className="relative z-10">
            <Eyebrow className="text-[9px] tracking-[.17em]">
              From reactive to proactive intelligence
            </Eyebrow>
            <h1 className="mt-7 font-display text-[clamp(4.3rem,7.2vw,7.1rem)] leading-[.98] font-medium tracking-[-.075em]">
              <span className="block">Predict.</span>
              <span className="block">Prevent.</span>
              <span className="block text-brand-purple">
                Act<span className="text-ink">.</span>
              </span>
            </h1>
            <p className="mt-7 font-display text-xl tracking-[-.035em] text-[#46414e]">
              Intelligent Operations, Simplified!
            </p>
            <p className="mt-3 max-w-[355px] text-[13px] leading-[1.9] text-muted-foreground">
              Predict issues before they arise. Resolve risks before they escalate. 
              Keep your IT one step ahead.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-12 rounded-lg bg-ink px-6 text-xs hover:bg-brand-purple"
              >
                <Link href="/demo">
                  Explore the demo <ArrowUpRight className="ml-3" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-lg border-line px-6 text-xs"
              >
                <a href="#watch-video">
                  <Play className="mr-1 size-3" />
                  Watch video
                </a>
              </Button>
            </div>
            <div className="mt-7 flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="flex size-4 items-center justify-center rounded-full bg-brand-green/10 text-[#007746]">
                <Check className="size-2.5" />
              </span>
              Predictive intelligence. Prescriptive action. One platform.
            </div>
          </div>
          <div data-page-enter className="relative min-w-0 pt-5 pb-10 lg:pt-12">
            <div className="absolute -top-12 right-6 h-44 w-44 opacity-90 lg:-top-24 lg:right-5 lg:h-56 lg:w-56">
              <HexVisual className="h-full w-full" />
            </div>
            <div className="absolute inset-x-8 top-12 bottom-4 -rotate-[5deg] rounded-2xl border border-[#e4dfec] bg-[#f6f3fa]" />
            <div className="absolute inset-x-5 top-16 bottom-4 rotate-[3deg] rounded-2xl border border-[#e4dfec] bg-[#f1eef7]" />
            <div className="relative z-10">
              <DashboardPreview />
            </div>
            <div
              data-float
              className="absolute -bottom-1 left-5 z-20 flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 shadow-[4px_4px_0_#eeecf4] md:-left-5"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-brand-green/10">
                <Check className="size-4 text-[#00824d]" />
              </span>
              <div>
                <p className="text-[10px] font-semibold">
                  Issue predicted. Downtime prevented.
                </p>
                <p className="mt-0.5 text-[8px] text-muted-foreground">
                  Illustrative auto-healing scenario
                </p>
              </div>
              <Sparkles className="ml-2 size-3 text-brand-purple" />
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-line pt-5">
          <span className="font-mono text-[9px] uppercase tracking-[.15em] text-muted-foreground">
            Built for complexity. Designed for clarity.
          </span>
          <a
            href="#the-story"
            className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-muted-foreground"
          >
            Scroll to discover <ArrowDown className="size-3" />
          </a>
        </div>
      </section>
      {/* <section
        data-reveal
        className="border-y border-line bg-[#faf9fc] px-6 py-7"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-7 gap-y-5">
          <span className="max-w-36 text-[10px] leading-4 text-muted-foreground">
            COMPLEX ENVIRONMENTS.
            <br />
            <span className="text-ink">ONE INTELLIGENT PLATFORM.</span>
          </span>
          {["Finance", "Healthcare", "Retail", "Manufacturing"].map((n, i) => (
            <span
              key={n}
              className="flex items-center gap-2.5 text-[12px] font-medium text-[#635d6c]"
            >
              <Icon
                name={["finance", "healthcare", "retail", "manufacturing"][i]}
                className="size-4"
              />
              {n}
            </span>
          ))}
          <span className="hidden h-7 w-px bg-line xl:block" />
          <span className="text-[10px] text-muted-foreground">
            Works with{" "}
            <strong className="ml-2 text-sm font-semibold text-[#476453]">
              ServiceNow
            </strong>
          </span>
        </div>
        <div className="mx-auto mt-5 flex max-w-7xl flex-wrap justify-end gap-5 text-[9px] text-muted-foreground">
          <span>CMDB</span>
          <span>MongoDB</span>
          <span>MSSQL</span>
          <span>Nginx</span>
          <span>Apache</span>
        </div>
      </section> */}
      {/* <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">
        <Stats />
      </section> */}
      <OperationsStory />
      <section className="bg-brand-purple px-6 py-16 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl tracking-[-.05em] md:text-5xl">ROI</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-4">
            {[
              [25, "Early issue detection"],
              [60, "Early detection of critical issues"],
              [50, "Less resolution time · up to"],
              [40, "Lower operational costs"],
            ].map(([n, label]) => (
              <div data-reveal key={n}>
                <p className="font-display text-7xl tracking-[-.065em]">
                  <span data-count={n}>{n}</span>
                  <span className="text-4xl">%</span>
                </p>
                <p className="mt-3 text-xs text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <ProductShowcase /> */}
      <section
        id="watch-video"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10"
      >
        <div data-reveal className="mb-10 text-center">
          <div className="flex justify-center">
            <Eyebrow>Less explaining. More seeing.</Eyebrow>
          </div>
          <h2
            data-split
            className="mt-5 font-display text-4xl tracking-[-.05em] md:text-5xl"
          >
            See Wise Ultima in 2 minutes.
          </h2>
        </div>
        <div data-reveal>
          <Video />
        </div>
      </section>
      {/* <section className="bg-mist px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div
            data-reveal
            className="mb-12 flex flex-wrap items-end justify-between gap-5"
          >
            <div>
              <Eyebrow>One platform. Connected intelligence.</Eyebrow>
              <h2
                data-split
                className="mt-5 font-display text-4xl tracking-[-.05em] md:text-5xl"
              >
                All the right moves.
              </h2>
            </div>
          </div>
          <FeatureGrid />
        </div>
      </section> */}
      {/* <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10">
        <div data-reveal>
          <Eyebrow>No slides. Just possibilities.</Eyebrow>
          <h2
            data-split
            className="mt-5 font-display text-4xl tracking-[-.05em] md:text-5xl"
          >
            Take the controls.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
            Explore sample infrastructure. Inspect an issue. Try a fix.
            <br />
            See what proactive feels like.
          </p>
          <Button asChild className="mt-7 h-11 bg-ink px-6">
            <Link href="/demo">
              Try the full demo <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div data-reveal>
          <DemoControlsIllustration />
        </div>
      </section> */}
      <section className="bg-mist px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12">
            <Eyebrow>Built for your world</Eyebrow>
            <h2
              data-split
              className="mt-5 font-display text-4xl tracking-[-.05em] md:text-5xl"
            >
              Different industries. Same foresight.
            </h2>
          </div>
          <IndustryGrid />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[.8fr_1.2fr] md:px-10">
        <div data-reveal>
          <Eyebrow>A little more clarity</Eyebrow>
          <h2 className="mt-5 font-display text-4xl tracking-[-.05em]">
            Good questions.
            <br />
            Clear answers.
          </h2>
          <Link
            href="/faq"
            className="mt-7 inline-flex items-center gap-4 text-xs font-semibold"
          >
            All your questions <ArrowRight className="size-4" />
          </Link>
        </div>
        <div data-reveal>
          <FAQ preview />
        </div>
      </section>
      <CTA home />
    </>
  );
}
