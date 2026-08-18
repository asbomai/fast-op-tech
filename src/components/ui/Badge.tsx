export default function Badge({ status, children }: {
  status: "online" | "warning" | "critical";
  children: string;
}) {
  return <span className={`badge badge-${status}`}>{children}</span>;
}