import {
  Activity, Bell, Building2, LayoutDashboard, MessageSquare,
  Radio, Settings, ShieldAlert, Users, X
} from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  ["/dashboard", LayoutDashboard, "Dashboard"],
  ["/operations", Radio, "Operations Center"],
  ["/incidents", ShieldAlert, "Incidents"],
  ["/assets", Activity, "Assets"],
  ["/personnel", Users, "Personnel"],
  ["/agencies", Building2, "Agencies"],
  ["/communications", MessageSquare, "Communications"],
  ["/settings", Settings, "Settings"],
] as const;

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">F</div>
        <div>
          <strong>FAST</strong>
          <small>Situational Tracking</small>
        </div>
      </div>
      <nav>
        {items.map(([to, Icon, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-status">
        <Bell size={16} />
        <span>System Operational</span>
        <span className="status-dot" />
      </div>
    </aside>
  );
}