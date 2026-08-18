import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import OperationsCenter from "./pages/OperationsCenter";
import Incidents from "./pages/Incidents";
import Assets from "./pages/Assets";
import Personnel from "./pages/Personnel";
import Agencies from "./pages/Agencies";
import Communications from "./pages/Communications";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/operations" element={<OperationsCenter />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/agencies" element={<Agencies />} />
        <Route path="/communications" element={<Communications />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}