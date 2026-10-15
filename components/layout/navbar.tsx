"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/brand";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          start: 100,
          onUpdate: (self) =>
            gsap.to(ref.current, {
              yPercent: self.direction === 1 && self.scroll() > 500 ? -100 : 0,
              duration: 0.25,
              overwrite: true,
            }),
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );
  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 border-b border-line bg-white"
    >
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between gap-5 px-5 md:px-10 xl:px-16">
        <Link href="/" aria-label="Wise Ultima home">
          <Logo />
        </Link>
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList className="gap-1 xl:gap-2">
            {[
              ["Home", "/"],
              ["Demo", "/demo"],
            ].map(([label, href]) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className={cn(
                      "px-3 py-3 text-[13px]",
                      path === href && "text-brand-purple",
                    )}
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden h-10 rounded-lg bg-ink px-5 text-xs hover:bg-brand-purple sm:inline-flex"
          >
            <Link
              onClick={() => track("book_demo", { source: "navigation" })}
              href="/contact"
            >
              Book a demo <ArrowUpRight />
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-white p-6">
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription>
                Explore intelligent operations.
              </SheetDescription>
              <nav className="mt-5 flex flex-col gap-1">
                {[
                  ["Home", "/"],
                  ["Demo", "/demo"],
                ].map(([name, href]) => (
                  <Link
                    key={href}
                    onClick={() => setOpen(false)}
                    href={href}
                    className="rounded-lg px-3 py-2.5 text-sm hover:bg-mist"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
