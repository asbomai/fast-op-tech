import Card from "../components/ui/Card";
export default function OperationsCenter() {
  return <div className="page"><h1 className="page-title">Operations Center</h1><p className="page-subtitle">Shared operational picture.</p><Card title="Live Operations Map"><div className="map-placeholder"><div className="map-grid" /><div className="map-message">Map component will be integrated here.</div></div></Card></div>;
}