import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

/* ============================================================
   IMAGE SOURCES
   
============================================================ */

const PRODUCT_IMAGES = {
  liveMap: "/images/product/live-map.jpg",
  incidentLifecycle: "/images/product/incident-lifecycle.jpg",
  dispatch: "/images/product/dispatch.jpg",
  fieldAppScreen: "/images/product/field-app-screen.jpg",
};

/* ============================================================
   NAV / SHARED ICONS (kept in sync with Platform.tsx)
============================================================ */

const SearchIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

/* ============================================================
   SECTION ICONS
============================================================ */

const Icon = ({
  type,
  className = "",
}: IconProps & { type: string }) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );

    case "user-plus":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="3" />
          <path d="M4 19c.6-3.3 2.3-5 5-5s4.4 1.7 5 5" />
          <path d="M17 8h4M19 6v4" />
        </svg>
      );

    case "dispatch":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3.2 2" />
        </svg>
      );

    case "offline":
      return (
        <svg {...common}>
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );

    case "target-ui":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01" />
        </svg>
      );

    case "network-hub":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="1.8" />
          <circle cx="5" cy="17" r="1.8" />
          <circle cx="19" cy="17" r="1.8" />
          <circle cx="12" cy="13" r="1.8" />
          <path d="M11 7 6 15M13 7l5 8M7 17h10M12 7v4" />
        </svg>
      );

    case "chart":
      return (
        <svg {...common}>
          <path d="M5 19V9M12 19V5M19 19v-7" />
          <path d="M3 19h18" />
        </svg>
      );

    case "bell":
      return (
        <svg {...common}>
          <path d="M7 9a5 5 0 0 1 10 0v4l1.5 2.5h-13L7 13V9Z" />
          <path d="M10 18.5a2 2 0 0 0 4 0" />
        </svg>
      );

    case "report":
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h4M9 12h6M9 15h6" />
        </svg>
      );

    case "location-pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
      );

    default:
      return null;
  }
};

/* ============================================================
   REUSABLE PIECES
============================================================ */

const StatBox = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="border border-white/[0.05] bg-white/[0.02] px-3 py-2.5 sm:px-4 sm:py-3">
    <p className="text-[14px] font-semibold text-white sm:text-[15px]">
      {value}
    </p>
    <p className="mt-0.5 text-[9px] text-slate-400 sm:text-[10px]">
      {label}
    </p>
  </div>
);

const LogRow = ({
  label,
  timestamp,
}: {
  label: string;
  timestamp: string;
}) => (
  <div className="flex items-center justify-between border-b border-white/[0.04] px-3 py-2.5 last:border-b-0 sm:px-4 sm:py-3">
    <div className="flex items-center gap-2">
      <Icon type="check" className="h-3 w-3 shrink-0 text-emerald-400" />
      <span className="text-[10px] text-slate-300 sm:text-[11px]">
        {label}
      </span>
    </div>
    <span className="text-[8.5px] text-slate-500 sm:text-[9px]">
      {timestamp}
    </span>
  </div>
);

const FeatureRow = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-emerald-500/10 text-emerald-400">
      <Icon type={icon} className="h-3.5 w-3.5" />
    </div>
    <div>
      <h4 className="text-[11px] font-medium text-slate-200 sm:text-[12px]">
        {title}
      </h4>
      <p className="mt-0.5 text-[9.5px] leading-[1.5] text-slate-400 sm:text-[10px]">
        {children}
      </p>
    </div>
  </div>
);

const InfoCard = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) => (
  <div className="border border-white/[0.025] bg-[#0a1f36] p-4 transition duration-200 hover:bg-[#0d2540] sm:p-5">
    <div className="flex h-7 w-7 items-center justify-center rounded bg-blue-500/10 text-blue-400">
      <Icon type={icon} className="h-3.5 w-3.5" />
    </div>
    <h3 className="mt-3 text-[11px] font-medium text-slate-200 sm:text-[12px]">
      {title}
    </h3>
    <p className="mt-1.5 text-[9.5px] leading-[1.5] text-slate-400 sm:text-[10px]">
      {children}
    </p>
  </div>
);

/* ============================================================
   VISUAL MOCKUPS (stand-ins for product screenshots)
============================================================ */

const LiveMapVisual = () => (
  <div className="relative h-[190px] w-full overflow-hidden rounded-[5px] border border-white/[0.06] bg-[#0b1118] sm:h-[230px]">
    <img
      src={PRODUCT_IMAGES.liveMap}
      alt="FAST live operational map showing real-time incident and unit tracking"
      className="h-full w-full object-cover"
    />
  </div>
);

const NetworkVisual = () => (
  <div className="relative h-[190px] w-full overflow-hidden rounded-[5px] border border-white/[0.06] bg-[#0b1118] sm:h-[230px]">
    <img
      src={PRODUCT_IMAGES.incidentLifecycle}
      alt="FAST incident lifecycle and reporting dashboard"
      className="h-full w-full object-cover"
    />
  </div>
);

const DispatchCard = () => (
  <div className="h-[145px] w-full rounded-[5px] border border-white/[0.06] bg-[#0a1f36] p-4 sm:h-[165px] sm:p-5">
    <div className="flex items-center justify-between">
      <span className="text-[8.5px] font-medium tracking-wide text-slate-400">
        ACTIVE DISPATCH
      </span>
      <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[8px] font-semibold text-red-400">
        PRIORITY 1
      </span>
    </div>

    <h4 className="mt-2.5 text-[12px] font-semibold text-slate-100 sm:text-[13px]">
      UNAUTHORIZED ACCESS: SECTOR 4
    </h4>

    <p className="mt-1 text-[9px] text-slate-400">
      ASSIGNED TO UNIT ALPHA 7
    </p>

    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
      <div className="h-full w-2/3 rounded-full bg-cyan-400" />
    </div>

    <div className="mt-2 flex items-center justify-between text-[8.5px] text-slate-500">
      <span>ETA 4 MIN</span>
      <span>RESOURCES: ARMED, MEDICAL</span>
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="mx-auto h-[280px] w-[145px] overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#0a1f36] p-2 shadow-2xl sm:h-[320px] sm:w-[165px]">
    <img
      src={PRODUCT_IMAGES.fieldAppScreen}
      alt="FAST field app screenshot showing task assignment and field log"
      className="h-full w-full rounded-[10px] object-cover"
    />
  </div>
);

/* ============================================================
   PAGE
============================================================ */

const Product = () => {
  return (
    <>
      <Helmet>
        <title>Product - FAST Operational Technologies</title>
        <meta
          name="description"
          content="See how the FAST platform works in practice — live mapping, incident lifecycle tracking, smart dispatch, and a field app built for real-world operations."
        />
      </Helmet>

      <main className="min-h-screen overflow-hidden bg-[#061525] text-white">

        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <header className="h-[58px] border-b border-white/[0.035] bg-[#07182a] px-5 sm:px-8 lg:px-[58px]">
          <div className="mx-auto flex h-full max-w-[1400px] items-center">
                        <a
              href="/"
              className="flex h-[30px] w-[72px] items-center"
            >
              <img
                src="/images/logo/fast-logo.svg"
                alt="FAST Operational Technologies"
                className="h-full w-auto object-contain"
              />
            </a>
            <nav className="mx-auto hidden items-center gap-7 md:flex">
              <a
                href="/platform"
                className="text-[13px] font-medium text-slate-500 transition hover:text-slate-200"
              >
                Platform
              </a>

              <a
                href="/product"
                className="relative text-[13px] font-medium text-slate-200"
              >
                Product
                <span className="absolute -bottom-[9px] left-0 right-0 h-px bg-slate-300" />
              </a>

              <a
                href="/solution"
                className="text-[13px] font-medium text-slate-500 transition hover:text-slate-200"
              >
                Solution
              </a>

              <a
                href="/company"
                className="text-[13px] font-medium text-slate-500 transition hover:text-slate-200"
              >
                Company
              </a>
            </nav>

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                aria-label="Search"
                className="hidden p-1 text-slate-500 transition hover:text-white sm:block"
              >
                <SearchIcon className="h-3.5 w-3.5" />
              </button>

              <a
                href="/dashboard"
                className="rounded border border-slate-500/40 px-3 py-1.5 text-[11px] font-medium text-slate-300 transition hover:border-slate-300 sm:text-[12px]"
              >
                Login
              </a>

              <a
                href="#demo"
                className="rounded border border-blue-500 bg-blue-600 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-blue-500 sm:px-4 sm:text-[12px]"
              >
                Request Demo
              </a>
            </div>
          </div>
        </header>


        {/* =====================================================
            SECTION 1 — LIVE MAP
        ====================================================== */}

        <section className="bg-[#0a2548] px-5 py-12 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
            <div>
              <h2 className="text-[24px] font-semibold leading-[1.25] text-slate-100 sm:text-[28px]">
                See everything. Miss nothing.
              </h2>

              <p className="mt-3 max-w-[430px] text-[12px] leading-[1.6] text-slate-400 sm:text-[13px]">
                The live map is the heart of FAST. Every field unit, every
                incident, and every asset is plotted on a shared real-time
                map visible to all coordinators simultaneously. Units are
                color-coded by status. Incidents are marked by severity.
                Everything updates in real time — no refresh required.
              </p>

              <div className="mt-5 grid max-w-[380px] grid-cols-2 gap-2.5">
                <StatBox value="0.1s" label="Real-time synchronization" />
                <StatBox value="50K+" label="Simultaneous tracking" />
              </div>
            </div>

            <LiveMapVisual />
          </div>
        </section>


        {/* =====================================================
            SECTION 2 — INCIDENT LIFECYCLE
        ====================================================== */}

        <section className="bg-[#061525] px-5 py-12 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
            <div className="order-2 sm:order-1">
              <NetworkVisual />
            </div>

            <div className="order-1 sm:order-2">
              <h2 className="text-[24px] font-semibold leading-[1.25] text-slate-100 sm:text-[28px]">
                From report to resolution. Fully tracked.
              </h2>

              <p className="mt-3 max-w-[430px] text-[12px] leading-[1.6] text-slate-400 sm:text-[13px]">
                Every incident in FAST has a complete lifecycle from the
                moment it is reported to the moment it is closed. Every
                action, status change, and note is logged with a timestamp
                and user ID. Mission-critical accountability is baked into
                every step.
              </p>

              <div className="mt-5 max-w-[430px] border border-white/[0.05] bg-white/[0.02]">
                <LogRow label="Incident Created: Report #912" timestamp="14:02:11 UTC" />
                <LogRow label="Unit B-12 Assigned" timestamp="14:02:15 UTC" />
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            SECTION 3 — SMART DISPATCH
        ====================================================== */}

        <section className="bg-[#0a2548] px-5 py-12 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
            <div>
              <h2 className="text-[24px] font-semibold leading-[1.25] text-slate-100 sm:text-[28px]">
                The right team. In seconds.
              </h2>

              <p className="mt-3 max-w-[430px] text-[12px] leading-[1.6] text-slate-400 sm:text-[13px]">
                Coordinators can assign tasks to any available field unit in
                two clicks. Overdue tasks are flagged automatically, and
                critical alerts ensure nothing falls through the cracks
                during high-pressure scenarios.
              </p>

              <div className="mt-5 flex max-w-[380px] items-start gap-2.5 border border-white/[0.05] bg-white/[0.02] p-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-cyan-500/10 text-cyan-400">
                  <Icon type="dispatch" className="h-3 w-3" />
                </div>
                <div>
                  <h4 className="text-[11px] font-medium text-slate-200 sm:text-[12px]">
                    Optimized Dispatch
                  </h4>
                  <p className="mt-0.5 text-[9.5px] leading-[1.5] text-slate-400">
                    Automated proximity-based routing and skill-set matching
                    for all field personnel.
                  </p>
                </div>
              </div>
            </div>

            <DispatchCard />
          </div>
        </section>


        {/* =====================================================
            SECTION 4 — FIELD APP
        ====================================================== */}

        <section className="bg-[#061525] px-5 py-12 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-12">
            <PhoneMockup />

            <div>
              <h2 className="text-[24px] font-semibold leading-[1.25] text-slate-100 sm:text-[28px]">
                Built for real-world operations. From the command center to
                the front line.
              </h2>

              <p className="mt-3 max-w-[430px] text-[12px] leading-[1.6] text-slate-400 sm:text-[13px]">
                The FAST field app is designed for real operational
                environments — simple, fast, and reliable. All from one
                lightweight app that works on weak 4G connections and queues
                data locally when offline.
              </p>

              <div className="mt-5 flex max-w-[430px] flex-col gap-4">
                <FeatureRow icon="offline" title="Offline First Architecture">
                  Data queues automatically when connectivity is lost and
                  syncs on recovery.
                </FeatureRow>

                <FeatureRow icon="target-ui" title="Large-Target UI">
                  Designed for use with gloves and in high-vibration
                  environments.
                </FeatureRow>
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            SECTION 5 — MULTI-AGENCY / ACCOUNTABILITY
        ====================================================== */}

        <section className="bg-[#0a2548] px-5 py-12 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-2.5 sm:grid-cols-2">
            <InfoCard icon="network-hub" title="When agencies need to work as one.">
              FAST is designed for multi-agency environments where police,
              fire, medical, and government bodies need to share a common
              operational picture while maintaining control of their own
              data.
            </InfoCard>

            <InfoCard icon="chart" title="Accountability built in from day one.">
              Every incident and response time is logged and available as a
              report. Export to PDF or CSV. Use this data to improve
              response times and demonstrate accountability.
            </InfoCard>
          </div>
        </section>


        
        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="bg-[#030c24] px-5 py-7 sm:px-8">
          <div className="mx-auto max-w-[1110px]">
            <div className="grid grid-cols-2 gap-7 sm:grid-cols-5">
              <div className="col-span-2 sm:col-span-1">
                <a
                  href="/"
                  className="text-[16px] font-bold tracking-[-0.07em] text-white"
                >
                  FAST
                </a>
                <p className="mt-3 text-[8.5px] leading-[1.5] text-slate-500">
                  Connect • Analyze • Respond
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-medium text-slate-200">
                  Platform
                </h3>
                <a
                  href="/platform"
                  className="mt-3 block text-[9px] text-slate-500 hover:text-white"
                >
                  Platform
                </a>
              </div>

              <div>
                <h3 className="text-[10px] font-medium text-slate-200">
                  Product
                </h3>
                <a
                  href="/product"
                  className="mt-3 block text-[9px] text-slate-500 hover:text-white"
                >
                  Product
                </a>
              </div>

              <div>
                <h3 className="text-[10px] font-medium text-slate-200">
                  Solution
                </h3>
                <a
                  href="/solution"
                  className="mt-3 block text-[9px] text-slate-500 hover:text-white"
                >
                  Solution
                </a>
              </div>

              <div>
                <h3 className="text-[10px] font-medium text-slate-200">
                  Company
                </h3>
                <a
                  href="/company"
                  className="mt-3 block text-[9px] text-slate-500 hover:text-white"
                >
                  Company
                </a>
              </div>
            </div>

            <div className="mt-7 flex flex-col justify-between gap-3 border-t border-white/[0.05] pt-5 sm:flex-row">
              <div>
                <p className="text-[8.5px] text-slate-500">
                  © 2026 FAST Operations Technologies Limited. All rights
                  reserved. Abuja, Nigeria.
                </p>
                <p className="mt-1 text-[8.5px] text-slate-600">
                  FAST Technologies Limited is a registered technology
                  company building Africa&apos;s first real-time operational
                  coordination platform.
                </p>
              </div>

              <div className="flex gap-5 text-[8.5px] text-slate-500">
                <a href="/terms" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
};

export default Product;