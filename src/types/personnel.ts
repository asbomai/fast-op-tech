export interface Personnel {
  id: string;
  name: string;
  role: string;
  status: "active" | "standby" | "offline";
}