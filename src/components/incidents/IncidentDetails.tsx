import type { Incident } from "../../types/incident";
export default function IncidentDetails({ incident }: { incident: Incident }) {
  return <div><h3>{incident.title}</h3><p>{incident.location}</p><p>{incident.status}</p></div>;
}