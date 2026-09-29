export type Health = "green" | "amber" | "red";
export type System = { id: string; type: string; os: string; region: string; application: string; env: string; health: Health; cpu: number; mem: number; disk: number; issue: string; rootCause: string; fix: string[]; impacts: string[] };
export const estate = {
  Server: { total: 1036, green: 748, amber: 155, red: 133 },
  Storage: { total: 114, green: 109, amber: 3, red: 2 },
  Database: { total: 6, green: 6, amber: 0, red: 0 },
  Network: { total: 44, green: 44, amber: 0, red: 0 },
  Middleware: { total: 83, green: 77, amber: 6, red: 0 },
  Backup: { total: 48, green: 43, amber: 4, red: 1 },
};
export const regions = ["All", "APAC", "EMEA", "Americas"];
export const applications = ["Critical App 1", "Payments", "Portal", "ERP"];
export const sampleSystems: System[] = Array.from({ length: 25 }, (_, i) => ({
  id: i === 0 ? "a010065p210" : `a0100${71 + i}p${String(44 + i).padStart(3, "0")}`,
  type: ["Server", "Storage", "Database", "Network", "Middleware", "Backup"][i % 6],
  os: i % 3 === 0 ? "Linux" : "Windows", region: regions[1 + i % 3], application: applications[i % 4],
  env: i % 4 === 1 ? "Testing" : "Production", health: i % 5 === 0 ? "red" : i % 3 === 0 ? "amber" : "green",
  cpu: i === 0 ? 92 : 20 + i * 13 % 73, mem: i === 0 ? 81 : 30 + i * 7 % 60, disk: i === 0 ? 97 : 22 + i * 11 % 74,
  issue: i % 5 === 0 ? "Potential disk exhaustion" : i % 3 === 0 ? "Predicted utilization spike" : "Operating normally",
  rootCause: i % 5 === 0 ? "Log growth on /var" : "Increasing application demand",
  fix: ["Archive old files", "Clear logs / temp directories"], impacts: ["a010071p044", "db-ledger-02", "web-front-03"],
}));
export const sampleTicket = { number: "INC0010586", priority: "P1", group: "Infra-Linux-L2", state: "New" };
export const prompts = [
  { category: "Health", text: "What's the health status of systems with ID a010065p210?", answer: "a010065p210 is critical. Disk utilization is 97%, CPU 92%, and memory 81%. Log growth on /var may exhaust disk space. Archive old files and clear logs / temp directories." },
  { category: "Health", text: "Show me the overall health distribution.", answer: "The sample estate has 1,331 components: 1,027 healthy, 168 warning, and 136 critical. Server health needs attention first." },
  { category: "Incidents", text: "What systems had incidents with unexpected shutdown?", answer: "No unexpected-shutdown incidents are recorded in this sample dataset. Try the P1 incident question to explore the sample ticket." },
  { category: "Incidents", text: "Show me P1 incidents.", answer: "Sample ticket INC0010586 is P1, assigned to Infra-Linux-L2, and in New state." },
  { category: "Utilization", text: "Which systems have high CPU usage?", answer: `Sample systems above 80% CPU: ${sampleSystems.filter(s => s.cpu > 80).map(s => `${s.id} (${s.cpu}%)`).join(", ")}.` },
  { category: "Utilization", text: "Which systems have high memory usage?", answer: `Sample systems above 80% memory: ${sampleSystems.filter(s => s.mem > 80).map(s => `${s.id} (${s.mem}%)`).join(", ")}.` },
  { category: "Attributes", text: "Which systems use an OS with Windows?", answer: `${sampleSystems.filter(s => s.os === "Windows").length} sample systems use Windows, including ${sampleSystems.filter(s => s.os === "Windows").slice(0, 3).map(s => s.id).join(", ")}.` },
  { category: "Tickets", text: "What are the details of ticket INC0010586?", answer: "INC0010586 · Priority P1 · Support group Infra-Linux-L2 · State New. This is a fictional demonstration ticket." },
  { category: "Actions", text: "What actions can I take for system a010065p210?", answer: "Archive old files and clear logs / temp directories. Open Wise Actions to simulate a fix or prepare a ServiceNow ticket. Chat execution is in progress." },
];
