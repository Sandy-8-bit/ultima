"use client";
import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { Logo } from "@/components/brand";
const Scene = dynamic(() => import("./logo-scene"), { ssr: false, loading: () => <Fallback/> });
function Fallback() { return <div className="flex h-full items-center justify-center"><Logo wordmark={false} className="scale-[5]"/></div>; }
function subscribe(cb: () => void) { const q = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)"); q.addEventListener("change", cb); return () => q.removeEventListener("change", cb); }
function snapshot() { return window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)").matches && "WebGLRenderingContext" in window; }
export function HexVisual({ className = "h-64" }: { className?: string }) { const enabled = useSyncExternalStore(subscribe, snapshot, () => false); return <div className={className} role="img" aria-label="Three geometric hexagons in purple, green, and blue">{enabled ? <Scene/> : <Fallback/>}</div>; }
