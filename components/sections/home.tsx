import Image from "next/image";
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
import { OperationsStory } from "./operations-story";

import { DotMark, Eyebrow, CTA, IndustryGrid } from "./shared";
import {
  FAQ,
  Video,
} from "./interactions";
export function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="glow-blob absolute top-[38%] -right-[22%] h-[78%] w-[72%] opacity-90 motion-safe:animate-drift lg:top-[24%] lg:-right-[16%] lg:w-[58%]"
        />
        <div className="relative mx-auto max-w-[1440px] px-6 pt-14 pb-10 md:px-10 md:pt-20 xl:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-10">
            <div data-page-enter className="relative z-10">
              <span className="inline-flex items-center gap-2.5 rounded-[15px] border-2 border-[#e2e0ec] bg-white p-2 pr-4">
                <span className="flex size-6 items-center justify-center rounded-lg bg-ink text-white">
                  <ArrowRight className="size-3.5" />
                </span>
                <span className="text-[13px] font-medium text-ink">
                  From reactive to proactive intelligence
                </span>
              </span>
              <h1 className="mt-7 font-display text-[clamp(3.6rem,7vw,6.4rem)] leading-[.96] font-normal tracking-[-.02em] text-ink">
                <span className="block">Predict.</span>
                <span className="block">Prevent.</span>
                <span className="block text-brand-purple">
                  Act<span className="text-ink">.</span>
                </span>
              </h1>
              <p className="mt-7 font-display text-2xl tracking-[-.02em] text-ink">
                Intelligent Operations, <em className="font-light">Simplified!</em>
              </p>
              <p className="mt-3 max-w-[420px] text-base leading-[1.6] text-ink/80">
                Predict issues before they arise. Resolve risks before they escalate.
                Keep your IT one step ahead.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-[52px] rounded-[18px] px-6 text-[15px]"
                >
                  <Link href="/demo">
                    Explore the demo <ArrowUpRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-[52px] rounded-[18px] border-[#e2e0ec] px-6 text-[15px] text-ink shadow-soft"
                >
                  <a href="#watch-video">
                    <span className="flex size-6 items-center justify-center rounded-full bg-brand-purple-soft text-brand-purple">
                      <Play className="ml-0.5 size-2.5" fill="currentColor" />
                    </span>
                    Watch video
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-2.5 text-[13px] text-ink/80">
                <span className="flex size-5 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-deep">
                  <Check className="size-3" />
                </span>
                Predictive intelligence. Prescriptive action. One platform.
              </div>
            </div>
            <div data-page-enter className="relative min-w-0 pb-10 lg:pb-4">
              <div data-float className="relative mx-auto w-full max-w-[560px]">
                <Image
                  src="/illustrations/hero-dashboard.svg"
                  width={490}
                  height={441}
                  priority
                  unoptimized
                  alt="Sample Wise Ultima dashboard showing database and memory utilization, server health across all regions, and a critical app with predicted disk space exhaustion"
                  className="h-auto w-full drop-shadow-[0_30px_60px_rgb(170_16_208/12%)]"
                />
              </div>
              <div className="absolute bottom-0 left-2 z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-hard backdrop-blur-md md:-left-4">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand-green/10">
                  <Check className="size-4 text-brand-green-deep" />
                </span>
                <div>
                  <p className="text-xs font-semibold">
                    Issue predicted. Downtime prevented.
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    Illustrative auto-healing scenario
                  </p>
                </div>
                <Sparkles className="ml-2 size-3.5 text-brand-purple" />
              </div>
            </div>
          </div>
          <div className="mt-14 flex items-center justify-between border-t border-ink/10 pt-5">
            <span className="text-xs text-muted-foreground">
              Built for complexity. Designed for clarity.
            </span>
            <a
              href="#the-story"
              className="group flex items-center gap-3 text-xs text-muted-foreground transition-colors hover:text-ink"
            >
              Scroll to discover
              <span className="flex size-7 items-center justify-center rounded-full border border-ink/10 bg-white transition-colors group-hover:border-brand-purple group-hover:text-brand-purple">
                <ArrowDown className="size-3" />
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* <section
        data-reveal
        className="border-y border-line bg-[#fbf9f7] px-6 py-7"
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
              className="flex items-center gap-2.5 text-[12px] font-medium text-ink/75"
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
            <strong className="ml-2 text-sm font-semibold text-brand-green-deep">
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
      <section className="relative overflow-hidden bg-brand-purple px-6 py-24 text-white md:px-10 md:py-32">
        <DotMark light className="absolute top-8 right-6 xl:right-16" />
        <div
          aria-hidden
          className="glow-blob absolute -bottom-[45%] left-1/2 h-[80%] w-[60%] -translate-x-1/2 opacity-70"
        />
        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-center font-display text-5xl tracking-[-.02em] md:text-6xl">Bussiness Values</h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {[
              [25, "Early issue detection"],
              [60, "Early detection of critical issues"],
              [50, "Less resolution time · up to"],
              [40, "Lower operational costs"],
            ].map(([n, label]) => (
              <div data-reveal key={n} className="border-l-2 border-white pl-6">
                <p className="font-mono text-6xl font-medium tracking-[-.05em] md:text-7xl">
                  <span data-count={n}>{n}</span>
                  <span className="text-4xl">%</span>
                </p>
                <p className="mt-4 max-w-48 text-sm leading-5 text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <ProductShowcase /> */}
      <section
        id="watch-video"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-28"
      >
        <div data-reveal className="mb-12 text-center">
          <div className="flex justify-center">
            <Eyebrow>Less explaining. More seeing.</Eyebrow>
          </div>
          <h2
            data-split
            className="mt-5 font-display text-4xl tracking-[-.02em] text-ink md:text-5xl"
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
      <section className="relative px-6 py-24 md:px-10">
        <DotMark className="absolute top-8 right-6 hidden md:grid xl:right-16" />
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12">
            <Eyebrow>Built for your world</Eyebrow>
            <h2
              data-split
              className="mt-5 font-display text-4xl tracking-[-.02em] text-ink md:text-5xl"
            >
              Different industries. <em className="font-light">Same foresight.</em>
            </h2>
          </div>
          <IndustryGrid />
        </div>
      </section>
      <section className="px-6 pb-24 md:px-10">
        <div className="panel mx-auto grid max-w-7xl gap-10 rounded-2xl p-7 md:grid-cols-[.8fr_1.2fr] md:p-12">
          <div data-reveal>
            <Eyebrow>A little more clarity</Eyebrow>
            <h2 className="mt-5 font-display text-4xl tracking-[-.02em] text-ink">
              Good questions.
              <br />
              <em className="font-light">Clear answers.</em>
            </h2>
            <Link
              href="/faq"
              className="group mt-8 inline-flex items-center gap-3 rounded-[18px] bg-brand-purple px-5 py-3 text-sm font-medium text-white shadow-glow transition-colors hover:bg-brand-purple-deep"
            >
              All your questions <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div data-reveal>
            <FAQ preview />
          </div>
        </div>
      </section>
      <CTA home />
    </>
  );
}
