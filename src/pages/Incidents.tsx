import Card from "../components/ui/Card";
import { mockIncidents } from "../data/mockData";
export default function Incidents() {
  return <div className="page"><h1 className="page-title">Incidents</h1><p className="page-subtitle">Monitor and manage operational incidents.</p><div className="grid">{mockIncidents.map(i => <Card key={i.id}><strong>{i.title}</strong><p className="muted">{i.location} · {i.status}</p></Card>)}</div></div>;
}