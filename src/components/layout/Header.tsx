import { Bell, Search, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="search">
        <Search size={18} />
        <input placeholder="Search assets, incidents, personnel..." />
      </div>
      <div className="header-actions">
        <span className="secure"><ShieldCheck size={18} /> Secure</span>
        <button className="icon-button" aria-label="Notifications"><Bell size={20} /></button>
        <div className="user-chip">AA</div>
      </div>
    </header>
  );
}