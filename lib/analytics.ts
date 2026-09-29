export function track(name: string, detail: Record<string, unknown> = {}) {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("wise:analytics", { detail: { name, ...detail } }));
}
