"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Logo, Icon } from "@/components/brand";
import { features } from "@/data/features";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
export function Navbar() {
  const path = usePathname(); const [open, setOpen] = useState(false); const ref = useRef<HTMLElement>(null);
  useGSAP(() => { const mm = gsap.matchMedia(); mm.add("(prefers-reduced-motion: no-preference)", () => { ScrollTrigger.create({ start: 100, onUpdate: self => gsap.to(ref.current, { yPercent: self.direction === 1 && self.scroll() > 500 ? -100 : 0, duration: .25, overwrite: true }) }); }); return () => mm.revert(); }, { scope: ref });
  return <header ref={ref} className="sticky top-0 z-50 border-b border-line bg-white"><div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between gap-5 px-5 md:px-10 xl:px-16"><Link href="/" aria-label="Wise Ultima home"><Logo/></Link><NavigationMenu className="hidden lg:flex" viewport={false}><NavigationMenuList className="gap-1 xl:gap-2">
    <NavigationMenuItem><NavigationMenuTrigger className="bg-transparent text-[13px]">Features</NavigationMenuTrigger><NavigationMenuContent className="rounded-xl border-line bg-white p-4"><div className="grid w-[570px] grid-cols-2 gap-2">{features.map(f => <NavigationMenuLink asChild key={f.slug}><Link className="flex flex-row gap-3 rounded-lg p-4 hover:bg-mist" href={`/features/${f.slug}`}><span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-mist text-brand-purple"><Icon name={f.icon}/></span><span><span className="block font-medium">{f.name}</span><span className="text-xs text-muted-foreground">{f.verb}</span></span></Link></NavigationMenuLink>)}</div><Link href="/features" className="mt-2 block border-t border-line px-4 pt-4 text-sm">Explore all features ↗</Link></NavigationMenuContent></NavigationMenuItem>
    {[['Demo','/demo'],['Benefits','/benefits']].map(([label, href]) => <NavigationMenuItem key={href}><NavigationMenuLink asChild><Link href={href} className={cn("px-3 py-3 text-[13px]", path === href && "text-brand-purple")}>{label}</Link></NavigationMenuLink></NavigationMenuItem>)}
  </NavigationMenuList></NavigationMenu><div className="flex items-center gap-3"><Button asChild className="hidden h-10 rounded-lg bg-ink px-5 text-xs hover:bg-brand-purple sm:inline-flex"><Link onClick={() => track("book_demo", { source: "navigation" })} href="/contact">Book a demo <ArrowUpRight/></Link></Button><Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu/></Button></SheetTrigger><SheetContent className="overflow-y-auto bg-white p-6"><SheetTitle><Logo/></SheetTitle><SheetDescription>Explore intelligent operations.</SheetDescription><nav className="mt-5 flex flex-col gap-1">{[["Home","/"],["All features","/features"], ...features.map(f => [f.name, `/features/${f.slug}`]),["Product demo","/demo"],["Benefits","/benefits"]].map(([name, href]) => <Link key={href} onClick={() => setOpen(false)} href={href} className="rounded-lg px-3 py-2.5 text-sm hover:bg-mist">{name}</Link>)}</nav></SheetContent></Sheet></div></div></header>;
}
