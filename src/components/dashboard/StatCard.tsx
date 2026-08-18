import Card from "../ui/Card";
export default function StatCard({ label, value }: { label: string; value: string | number }) {
  return <Card><div className="stat-label">{label}</div><div className="stat-value">{value}</div></Card>;
}