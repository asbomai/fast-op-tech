import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Layouts
import MainLayout from "./components/layout/MainLayout";

// App Pages
import Dashboard from "./pages/Dashboard";
import OperationsCenter from "./pages/OperationsCenter";
import Incidents from "./pages/Incidents";
import Assets from "./pages/Assets";
import Personnel from "./pages/Personnel";
import Agencies from "./pages/Agencies";
import Communications from "./pages/Communications";
import Settings from "./pages/Settings";

// Website Pages
import Platform from "./pages/website/Platform";
import Solutions from "./pages/website/Solutions";
import Product from "./pages/website/Product";
import Company from "./pages/website/Company";


export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          {/* =====================================================
              WEBSITE ROUTES
          ====================================================== */}

          {/* Redirect root to Platform */}
          <Route
            path="/"
            element={<Navigate to="/platform" replace />}
          />

          {/* Platform */}
          <Route
            path="/platform"
            element={<Platform />}
          />

          {/* Product */}
          <Route
            path="/product"
            element={<Product />}
          />

          {/* Solutions */}
          <Route
            path="/solution"
            element={<Solutions />}
          />

          {/* Backward-compat redirect in case anything still links to the plural form */}
          <Route
            path="/solutions"
            element={<Navigate to="/solution" replace />}
          />

          {/* Company */}
          <Route
            path="/company"
            element={<Company />}
          />


          {/* =====================================================
              APP / DASHBOARD ROUTES
          ====================================================== */}

          <Route element={<MainLayout />}>

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/operations"
              element={<OperationsCenter />}
            />

            <Route
              path="/incidents"
              element={<Incidents />}
            />

            <Route
              path="/assets"
              element={<Assets />}
            />

            <Route
              path="/personnel"
              element={<Personnel />}
            />

            <Route
              path="/agencies"
              element={<Agencies />}
            />

            <Route
              path="/communications"
              element={<Communications />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Route>


          {/* =====================================================
              UNKNOWN ROUTES
          ====================================================== */}

          <Route
            path="*"
            element={<Navigate to="/platform" replace />}
          />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}