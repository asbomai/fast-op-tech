import Card from "../ui/Card";
import type { Incident } from "../../types/incident";
export default function IncidentCard({ incident }: { incident: Incident }) {
  return <Card><strong>{incident.title}</strong><p className="muted">{incident.location}</p></Card>;
}