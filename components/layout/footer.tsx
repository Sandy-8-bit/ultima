import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand";
export function Footer() {
  const footerColumns = [
    {
      title: "Explore",
      links: [
        { name: "Product demo", href: "/demo" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Wise Work", href: "https://wisework.in/", external: true },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="overflow-hidden bg-brand-purple px-6 pb-24 text-white md:px-12 md:pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-t border-white/30 py-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <span className="inline-flex rounded-2xl bg-white px-3 py-1.5 shadow-[0_6px_20px_-6px_rgb(11_11_20/22%)]">
              <Logo />
            </span>
            <p className="mt-6 max-w-64 text-sm leading-6 text-white">
              Intelligent Operations, Simplified!
              <br />A Wise Work product.
            </p>
            <a
              className="mt-5 inline-flex items-center gap-3 text-sm underline-offset-4 hover:underline"
              href="mailto:info@wisework.in"
            >
              info@wisework.in <ArrowUpRight className="size-4" />
            </a>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-5 text-sm font-medium text-white/80">
                {col.title}
              </p>
              <div className="flex flex-col gap-3">
                {col.links.map(({ name, href, external }) => external ? (
                  <a key={href} className="text-[15px] text-white underline-offset-4 hover:underline" href={href} target="_blank" rel="noreferrer">{name}</a>
                ) : (
                  <Link key={href} className="text-[15px] text-white underline-offset-4 hover:underline" href={href}>{name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          data-reveal
          className="py-6 text-center font-display text-[clamp(2.6rem,10.4vw,10rem)] leading-none font-medium tracking-[-.04em] whitespace-nowrap"
        >
          Predict. Prevent. <span className="font-light italic">Act.</span>
        </div>
        <div className="flex flex-wrap justify-between gap-5 pt-7 text-[13px] text-white">
          <p>© {new Date().getFullYear()} Wise Work. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="hover:underline" href="/privacy">Privacy policy</Link>
            <Link className="hover:underline" href="/terms">Terms of use</Link>
            <a className="hover:underline" href="https://wisework.in" target="_blank" rel="noreferrer">
              wisework.in ↗
            </a>
          </div>
        </div>
      </div>
      <Link
        href="/contact"
        className="fixed right-4 bottom-4 z-40 rounded-2xl bg-ink px-5 py-3 text-sm text-white shadow-hard sm:hidden"
      >
        Book a demo ↗
      </Link>
    </footer>
  );
}
