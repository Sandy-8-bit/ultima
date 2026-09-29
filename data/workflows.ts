export const workflows = [
  { service: "MSSQL", cause: "Binary permission failure", code: "203/EXEC", impact: "Database service cannot start", fix: "Restore execute permission, validate startup, confirm health." },
  { service: "MSSQL", cause: "Binary not found", code: "203/EXEC", impact: "Database executable unavailable", fix: "Restore the correct binary path or alert, then retry startup." },
  { service: "Nginx", cause: "Worker freeze", code: "SIGSTOP", impact: "Requests stop responding", fix: "Find frozen workers, resume or restart, validate requests." },
  { service: "Nginx", cause: "Binary permission error", code: "203/EXEC", impact: "Web service cannot start", fix: "Restore permissions, restart, confirm availability." },
  { service: "Nginx", cause: "HTTP 403 Forbidden", code: "403", impact: "Requests are denied", fix: "Analyze permissions and configuration, correct rules, validate access." },
  { service: "Apache", cause: "Missing VirtualHost closure", code: "CONFIG", impact: "Invalid web server configuration", fix: "Detect syntax issues, restore valid configuration, restart." },
  { service: "Apache", cause: "Invalid DocumentRoot", code: "CONFIG", impact: "Website root cannot be served", fix: "Correct the path or restore the default, then restart." },
  { service: "MongoDB", cause: "Binary permission failure", code: "203/EXEC", impact: "Database service cannot start", fix: "Restore execute permission and validate startup." },
  { service: "MongoDB", cause: "Binary not found", code: "203/EXEC", impact: "Database binary is missing", fix: "Restore the binary or alert according to policy, then retry." },
  { service: "MongoDB", cause: "Config corruption", code: "100", impact: "Database configuration is invalid", fix: "Restore the last known good configuration and restart." },
  { service: "MongoDB", cause: "Data directory ownership", code: "14", impact: "Data access is blocked", fix: "Restore ownership, validate data access, restart safely." },
];
