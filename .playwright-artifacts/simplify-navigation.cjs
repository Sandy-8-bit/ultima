const fs = require('fs');
function edit(path, transform) { const before = fs.readFileSync(path, 'utf8'); const after = transform(before); if (after === before) throw new Error(`No change: ${path}`); fs.writeFileSync(path, after); }
edit('components/layout/navbar.tsx', s => {
  s = s.replace('ArrowUpRight, Menu', 'Menu').replace('  NavigationMenuTrigger,\n', '').replace('  NavigationMenuContent,\n', '').replace('{ Logo, Icon }', '{ Logo }').replace('import { features } from "@/data/features";\n', '').replace('import { track } from "@/lib/analytics";\n', '');
  const start = s.indexOf('            <NavigationMenuItem>');
  const end = s.indexOf('            ].map(([label, href])', start);
  if (start < 0 || end < 0) throw new Error('Missing desktop navigation');
  s = s.slice(0, start) + '            {[\n              ["Home", "/"],\n              ["Demo", "/demo"],\n' + s.slice(end);
  const ctaStart = s.indexOf('          <Button\n            asChild');
  const ctaEnd = s.indexOf('          <Sheet open=', ctaStart);
  if (ctaStart < 0 || ctaEnd < 0) throw new Error('Missing header CTA');
  s = s.slice(0, ctaStart) + s.slice(ctaEnd);
  return s.replace('                  ["All features", "/features"],\n', '').replace('                  ...features.map((f) => [f.name, `/features/${f.slug}`]),\n', '').replace('                  ["Benefits", "/benefits"],\n', '').replace('["Product demo", "/demo"]', '["Demo", "/demo"]');
});
edit('components/sections/operations-story.tsx', s => s.replace('import Link from "next/link";\n', '').replace('ArrowUpRight, ', '').replace(/, href: "\/features\/[^\"]+", link: "[^\"]+"/g, '').replace('copy, href, link, Visual', 'copy, Visual').replace(/<Link href=\{href\}[^>]*>\{link\}<ArrowUpRight[^>]*\/><\/Link>/g, ''));
for (const path of ['components/sections/shared.tsx', 'components/product-ui/ProductShowcase.tsx']) {
  edit(path, s => {
    s = s.replace(/<Link href=\{`\/features\/[^`]+`\}[^>]*>[\s\S]*?<\/Link>/g, '');
    if (path.includes('ProductShowcase')) s = s.replace('import Link from "next/link";\n', '').replace('import { ArrowUpRight } from "lucide-react";\n', '');
    return s;
  });
}
edit('components/sections/home.tsx', s => s.replace(/\s*<Link\s+href="\/features"[\s\S]*?<\/Link>/g, ''));
edit('components/layout/footer.tsx', s => s.replace('import { features } from "@/data/features";\n', '').replace(/    \{\n      title: "Platform",[\s\S]*?\n    \},\n/, '').replace('        { name: "Benefits", href: "/benefits" },\n', '').replace('md:grid-cols-[2fr_1fr_1fr_1fr]', 'md:grid-cols-[2fr_1fr_1fr]'));
edit('app/sitemap.ts', s => s.replace('import { features } from "@/data/features";\n', '').replace('"features","benefits",', '').replace(',...features.map(f=>`features/${f.slug}`)', ''));
for (const path of ['app/features/[slug]/page.tsx', 'app/features/page.tsx', 'app/benefits/page.tsx']) fs.unlinkSync(path);
