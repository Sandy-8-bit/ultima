import {
  Activity,
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Building2,
  Database,
  Factory,
  HeartPulse,
  LayoutDashboard,
  Network,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  wordmark = true,
  dark = false,
}: {
  className?: string;
  wordmark?: boolean;
  dark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={dark ? "/logo-dark.svg" : "/logo.svg"}
        alt="WiseUltima"
        className="h-auto"
      />
    </span>
  );
}

const icons = {
  board: LayoutDashboard,
  actions: Zap,
  explore: Search,
  monitor: Activity,
  ai: Sparkles,
  workflow: Workflow,
  finance: Building2,
  healthcare: HeartPulse,
  retail: ShoppingBag,
  manufacturing: Factory,
  server: Server,
  database: Database,
  network: Network,
  intelligence: BrainCircuit,
  shield: ShieldCheck,
  blocks: Blocks,
  arrow: ArrowUpRight,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = icons[name as keyof typeof icons] || Blocks;

  return (
    <Component
      strokeWidth={1.7}
      className={cn("h-5 w-5", className)}
    />
  );
}