export type IncidentSeverity = "critical" | "warning" | "info";
export interface Incident {
  id: string;
  title: string;
  location: string;
  severity: IncidentSeverity;
  status: string;
  createdAt?: string;
}