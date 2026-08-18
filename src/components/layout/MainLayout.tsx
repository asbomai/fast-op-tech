import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./layout.css";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <Header />
      <main className="main-content"><Outlet /></main>
    </div>
  );
}