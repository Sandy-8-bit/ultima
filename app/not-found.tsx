import Link from "next/link";
import { HexVisual } from "@/components/three/hex-visual";
import { Button } from "@/components/ui/button";
export default function NotFound(){return <section data-reveal className="mx-auto max-w-3xl px-6 py-20 text-center"><HexVisual className="mx-auto h-60 w-80 max-w-full"/><p className="font-mono text-xs text-brand-pink">404 / OUTSIDE THE ESTATE</p><h1 className="mt-5 font-display text-5xl tracking-tight">A signal we couldn’t find.</h1><p className="mt-5 text-sm text-muted-foreground">This page doesn’t exist. Let’s get you back to the bigger picture.</p><Button asChild className="mt-8 h-11 rounded-2xl px-6"><Link href="/">Back to home →</Link></Button></section>;}
