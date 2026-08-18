import Card from "../components/ui/Card";
import { mockAssets } from "../data/mockData";
export default function Assets() {
  return <div className="page"><h1 className="page-title">Assets</h1><p className="page-subtitle">Track drones, vehicles and operational resources.</p><div className="grid grid-2">{mockAssets.map(a => <Card key={a.id}><strong>{a.name}</strong><p className="muted">{a.type} · <span className="mono">{a.id}</span></p></Card>)}</div></div>;
}