import type { ReactNode } from "react";

export function ProductIllustrationFrame({ children, label }: { children: ReactNode; label: string }) {
  return <figure data-product-reveal aria-label={label} className="product-illustration min-w-0 rounded-2xl border border-line bg-white text-ink shadow-hard"><div className="overflow-hidden rounded-2xl">{children}</div><figcaption className="flex items-center justify-between gap-3 border-t border-line bg-mist/50 px-5 py-3 font-mono text-[9px] uppercase tracking-widest"><span>{label}</span><span className="text-muted-foreground">Sample workspace</span></figcaption></figure>;
}
