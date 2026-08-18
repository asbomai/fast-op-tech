export type AssetType = "drone" | "ground-vehicle" | "personnel" | "ai-sentry" | "agency-resource";
export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  status: "online" | "warning" | "offline";
  latitude?: number;
  longitude?: number;
}