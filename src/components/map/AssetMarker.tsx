export default function AssetMarker({ label }: { label: string }) {
  return <div aria-label={label} title={label} className="asset-marker" />;
}