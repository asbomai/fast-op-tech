export default function IncidentMarker({ label }: { label: string }) {
  return <div aria-label={label} title={label} className="incident-marker" />;
}