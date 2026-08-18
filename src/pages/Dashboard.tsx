import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { mockIncidents, mockAssets } from "../data/mockData";

export default function Dashboard() {
  const critical = mockIncidents.filter(i => i.severity === "critical").length;
  return (
    <div className="page">
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">Live operational overview and situational awareness.</p>

      <div className="grid grid-4">
        <Card><div className="stat-label">Active Assets</div><div className="stat-value">{mockAssets.length}</div><Badge status="online">Online</Badge></Card>
        <Card><div className="stat-label">Active Incidents</div><div className="stat-value">{mockIncidents.length}</div><Badge status="warning">Monitoring</Badge></Card>
        <Card><div className="stat-label">Critical Incidents</div><div className="stat-value">{critical}</div><Badge status="critical">Critical</Badge></Card>
        <Card><div className="stat-label">System Status</div><div className="stat-value">100%</div><Badge status="online">Operational</Badge></Card>
      </div>

      <div className="grid grid-2" style={{marginTop:24}}>
        <Card title="Operational Map">
          <div className="map-placeholder">
            <div className="map-grid" />
            <div className="map-message">Map integration placeholder<br/><small>MapLibre / OpenStreetMap — Phase 2</small></div>
          </div>
        </Card>
        <Card title="Recent Incidents">
          <div className="list">
            {mockIncidents.map(i => (
              <div className="list-row" key={i.id}>
                <div><strong>{i.title}</strong><div className="muted">{i.location}</div></div>
                <Badge status={i.severity === "critical" ? "critical" : "warning"}>{i.severity}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}