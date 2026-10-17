"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";
import { Toaster } from "@/components/ui/sonner";
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scope = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("[data-page-enter]", { opacity: 0, y: 22, duration: .7, stagger: .1, clearProps: "all" });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el => {
        gsap.from(el, { y: 35, opacity: 0, duration: .8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 94%", once: true }, clearProps: "all" });
      });
      gsap.utils.toArray<HTMLElement>("[data-product-reveal]").forEach(el => {
        gsap.from(el, { clipPath: "inset(12% 0 0 0 round 16px)", y: 24, scale: .96, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 94%", once: true }, clearProps: "all" });
      });
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-product-reveal]").forEach(el => {
          if (el.parentElement) gsap.fromTo(el.parentElement, { y: 8 }, { y: -8, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach(el => {
        const split = SplitText.create(el, { type: "words", autoSplit: true, onSplit: self => gsap.from(self.words, { yPercent: 65, opacity: 0, rotationX: -25, stagger: .07, duration: .9, scrollTrigger: { trigger: el, start: "top 92%", once: true } }) });
        return () => split.revert();
      });
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach(el => {
        const value = Number(el.dataset.count); const counter = { value: 0 };
        gsap.to(counter, { value, duration: 1.5, snap: { value: 1 }, scrollTrigger: { trigger: el, start: "top 95%", once: true }, onUpdate: () => { el.textContent = `${counter.value}`; } });
      });
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => gsap.to(el, { y: -9, duration: 2.5 + i * .2, repeat: -1, yoyo: true, ease: "sine.inOut" }));
      gsap.to("[data-scroll-progress]", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: true } });
      gsap.fromTo("[data-route-wipe]", { scaleX: 1 }, { scaleX: 0, duration: .45, ease: "power3.inOut" });
      ScrollTrigger.refresh();
    });
    return () => mm.revert();
  }, { scope, dependencies: [pathname], revertOnUpdate: true });
  return <div ref={scope}><div data-route-wipe className="pointer-events-none fixed inset-0 z-[90] origin-right scale-x-0 bg-mist"/><div data-scroll-progress className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left scale-x-0 bg-brand-pink"/>{children}<Toaster position="bottom-right" richColors /></div>;
}
