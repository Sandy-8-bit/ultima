import fs from 'node:fs';
for (const name of fs.readdirSync('components/ui')) {
  const file = `components/ui/${name}`;
  let source = fs.readFileSync(file, 'utf8').replaceAll('from "cn"', 'from "@/lib/utils"');
  source = source.replace(/\b(?:data-\[[^\]]+\]:)?(?:animate-in|animate-out|animate-pulse|animate-spin|fade-in-0|fade-out-0|zoom-in-95|zoom-out-95|slide-in-from-\S+|slide-out-to-\S+|transition-all|transition-colors|transition-transform|transition-\[[^\]]+\]|duration-\d+)\b/g, '');
  source = source.replace(/shadow-(?:xs|sm|md|lg|xl|2xl)/g, 'shadow-none');
  fs.writeFileSync(file, source);
}
