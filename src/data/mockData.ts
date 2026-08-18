export const mockAssets = [
  { id: "DRN-001", name: "Eagle One", type: "Drone" },
  { id: "GVT-014", name: "Patrol Vehicle 14", type: "Ground Vehicle" },
  { id: "PRS-022", name: "Field Unit 22", type: "Personnel" },
  { id: "AIS-003", name: "Sentry 03", type: "AI Sentry" },
];

export const mockIncidents = [
  { id: "INC-001", title: "Perimeter Alert", location: "Sector A", severity: "critical", status: "Active" },
  { id: "INC-002", title: "Delayed Response", location: "Sector C", severity: "warning", status: "Monitoring" },
  { id: "INC-003", title: "Unauthorized Movement", location: "Sector B", severity: "warning", status: "Investigating" },
] as const;