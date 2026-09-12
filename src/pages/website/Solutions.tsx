import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

/* ============================================================
   IMAGE SOURCES
   
============================================================ */

const SOLUTION_IMAGES = {
  securityFirms: "/images/solutions/security-firms.jpg",
  emergencyAgencies: "/images/solutions/emergency-agencies.jpg",
  ngo: "/images/solutions/ngo.jpg",
  government: "/images/solutions/government.jpg",
};

/* ============================================================
   NAV ICONS (kept in sync with other website pages)
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
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
      );

    case "clipboard":
      return (
        <svg {...common}>
          <rect x="6" y="4.5" width="12" height="16" rx="1.5" />
          <path d="M9 4.5V3.5A1.5 1.5 0 0 1 10.5 2h3A1.5 1.5 0 0 1 15 3.5v1" />
          <path d="M9 11h6M9 15h6" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );

    case "alert":
      return (
        <svg {...common}>
          <path d="M12 3.5 21 19H3L12 3.5Z" />
          <path d="M12 10v4M12 17h.01" />
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

    case "report":
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h4M9 12h6M9 15h6" />
        </svg>
      );

    case "offline":
      return (
        <svg {...common}>
          <path d="M3 3l18 18" />
          <path d="M8.3 5.3A10.9 10.9 0 0 1 12 4.5c3.4 0 6.5 1.3 8.8 3.4" />
          <path d="M5.2 7.9A10.9 10.9 0 0 0 3.2 9.9" />
          <path d="M8.5 12.2a6.5 6.5 0 0 1 4.3-1.7" />
          <path d="M15.5 13.4a6.5 6.5 0 0 1 1.3.9" />
          <path d="M12 16.8a2.5 2.5 0 0 1 1.7.7" />
          <path d="M12 19.5h.01" />
        </svg>
      );

    default:
      return null;
  }
};

/* ============================================================
   REUSABLE PIECES
============================================================ */

const SectionImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="h-[190px] w-full overflow-hidden rounded-[5px] border border-white/[0.06] bg-[#0b1118] sm:h-[230px]">
    <img src={src} alt={alt} className="h-full w-full object-cover" />
  </div>
);

const StatFeatureBox = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) => (
  <div className="flex items-start gap-2 border border-white/[0.05] bg-white/[0.02] px-3 py-2.5">
    <Icon type={icon} className="mt-0.5 h-3 w-3 shrink-0 text-blue-400" />
    <div>
      <p className="text-[11px] font-medium text-slate-200 sm:text-[12px]">
        {title}
      </p>
      <p className="mt-0.5 text-[9.5px] leading-[1.4] text-slate-400">
        {children}
      </p>
    </div>
  </div>
);

const BulletItem = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2">
    <Icon type="check" className="h-2.5 w-2.5 shrink-0 text-emerald-400" />
    <span className="text-[10px] text-slate-400 sm:text-[11px]">
      {children}
    </span>
  </div>
);

const InlineFeature = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) => (
  <div className="flex items-start gap-2.5">
    <Icon type={icon} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
    <div>
      <p className="text-[11px] font-medium text-slate-200 sm:text-[12px]">
        {title}
      </p>
      <p className="mt-0.5 text-[9.5px] leading-[1.4] text-slate-400">
        {children}
      </p>
    </div>
  </div>
);

const Pill = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[9px] font-medium text-slate-300">
    {children}
  </span>
);

const NumberedFeatureBox = ({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: ReactNode;
}) => (
  <div className="border border-white/[0.05] bg-white/[0.02] p-3">
    <p className="text-[10px] font-semibold tracking-wide text-blue-400">
      {number}. {label}
    </p>
    <p className="mt-1 text-[9.5px] leading-[1.5] text-slate-400">
      {children}
    </p>
  </div>
);

/* ============================================================
   PAGE
============================================================ */

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Solutions - FAST Operational Technologies</title>
        <meta
          name="description"
          content="FAST adapts to the specific coordination needs of your sector — security firms, emergency agencies, NGOs, and government — while keeping every actor connected in one unified operational picture."
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
                className="text-[13px] font-medium text-slate-500 transition hover:text-slate-200"
              >
                Product
              </a>

              <a
                href="/solution"
                className="relative text-[13px] font-medium text-slate-200"
              >
                Solution
                <span className="absolute -bottom-[9px] left-0 right-0 h-px bg-slate-300" />
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
            HERO
        ====================================================== */}

        <section className="bg-[#0a2548] px-5 py-14 text-center sm:px-8 sm:py-20 lg:px-[58px]">
          <div className="mx-auto max-w-[720px]">
            <h1 className="text-[26px] font-bold leading-[1.25] text-slate-100 sm:text-[34px]">
              One platform. Built for every operational environment.
            </h1>
            <p className="mx-auto mt-4 max-w-[520px] text-[12px] leading-[1.6] text-slate-400 sm:text-[13px]">
              FAST adapts to the specific coordination needs of your sector —
              while keeping every actor connected in one unified operational
              picture.
            </p>
          </div>
        </section>


        {/* =====================================================
            SECTION 1 — SECURITY FIRMS
        ====================================================== */}

        <section className="bg-[#061525] px-5 py-12 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
            <div>
              <h2 className="text-[22px] font-semibold leading-[1.3] text-slate-100 sm:text-[26px]">
                For Security Firms. Command your entire operation in real
                time.
              </h2>

              <p className="mt-3 max-w-[430px] text-[12px] leading-[1.6] text-slate-400 sm:text-[13px]">
                Private security companies managing multiple sites, patrol
                teams, and response units need more than radios and phone
                calls. FAST gives security operations managers a live
                command picture — every patrol unit on the map, every
                incident tracked from report to resolution, every team
                accountable.
              </p>

              <div className="mt-4 grid max-w-[420px] grid-cols-2 gap-2.5">
                <StatFeatureBox icon="pin" title="Live GPS">
                  Real-time unit tracking
                </StatFeatureBox>
                <StatFeatureBox icon="clipboard" title="Tasking">
                  Instant app assignment
                </StatFeatureBox>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <BulletItem>Incident reporting via mobile app</BulletItem>
                <BulletItem>Full audit trail &amp; multi-site visibility</BulletItem>
              </div>
            </div>

            <SectionImage
              src={SOLUTION_IMAGES.securityFirms}
              alt="Security firm command center monitoring patrol units and incidents in real time"
            />
          </div>
        </section>


        {/* =====================================================
            SECTION 2 — EMERGENCY AGENCIES
        ====================================================== */}

        <section className="bg-[#0a2548] px-5 py-12 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
            <div className="order-2 sm:order-1">
              <SectionImage
                src={SOLUTION_IMAGES.emergencyAgencies}
                alt="Multi-agency emergency coordination center with critical alert dispatch"
              />
            </div>

            <div className="order-1 sm:order-2">
              <h2 className="text-[22px] font-semibold leading-[1.3] text-slate-100 sm:text-[26px]">
                For Emergency Agencies. Coordinate every responder. Every
                agency.
              </h2>

              <p className="mt-3 max-w-[430px] text-[12px] leading-[1.6] text-slate-400 sm:text-[13px]">
                Emergency response requires coordination across police, fire,
                medical, and government agencies simultaneously. FAST
                provides a shared operational picture that every agency can
                access — eliminating the radio silos and information delays
                that cost lives.
              </p>

              <div className="mt-5 grid max-w-[440px] grid-cols-1 gap-4 sm:grid-cols-2">
                <InlineFeature icon="alert" title="Incident escalation">
                  Automatic alerts to all relevant agencies
                </InlineFeature>
                <InlineFeature icon="network-hub" title="Multi-agency live map">
                  All responders visible to all coordinators
                </InlineFeature>
                <InlineFeature icon="pin" title="Resource tracking">
                  Ambulances, fire trucks, personnel — all on one map
                </InlineFeature>
                <InlineFeature icon="report" title="Post-incident reporting">
                  Automated response time analytics
                </InlineFeature>
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            SECTION 3 — NGOs
        ====================================================== */}

        <section className="bg-[#061525] px-5 py-12 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
            <div>
              <h2 className="text-[22px] font-semibold leading-[1.3] text-slate-100 sm:text-[26px]">
                For NGOs, Coordinate field operations across any environment.
              </h2>

              <p className="mt-3 max-w-[430px] text-[12px] leading-[1.6] text-slate-400 sm:text-[13px]">
                Humanitarian organizations operating in complex, often
                dangerous environments need reliable field coordination
                tools that work even when connectivity is limited. FAST is
                built for exactly those conditions.
              </p>

              <div className="relative mt-4 max-w-[430px] border border-white/[0.05] bg-white/[0.02] p-3">
                <span className="absolute right-3 top-3 text-[8.5px] font-semibold tracking-wide text-emerald-400">
                  OFFLINE_ACTIVE
                </span>

                <div className="flex items-start gap-2.5 pr-16">
                  <Icon type="offline" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-300" />
                  <div>
                    <p className="text-[11px] font-medium text-slate-200 sm:text-[12px]">
                      Offline-Capable Field App
                    </p>
                    <p className="mt-0.5 text-[9.5px] leading-[1.5] text-slate-400">
                      Field teams can log data, update incidents, and view
                      maps without active cellular data. Synchronization
                      occurs automatically once back in range.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Field Team Safety</Pill>
                <Pill>Donor Documentation</Pill>
                <Pill>Low-Bandwidth Optimized</Pill>
              </div>
            </div>

            <SectionImage
              src={SOLUTION_IMAGES.ngo}
              alt="NGO field team coordinating humanitarian operations using a rugged laptop"
            />
          </div>
        </section>


        {/* =====================================================
            SECTION 4 — GOVERNMENT AGENCIES
        ====================================================== */}

        <section className="bg-[#0a2548] px-5 py-12 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
            <div className="order-2 sm:order-1">
              <SectionImage
                src={SOLUTION_IMAGES.government}
                alt="Government unified command center with state emergency operations dashboard"
              />
            </div>

            <div className="order-1 sm:order-2">
              <h2 className="text-[22px] font-semibold leading-[1.3] text-slate-100 sm:text-[26px]">
                For Government Agencies — The unified command picture Nigeria
                needs.
              </h2>

              <p className="mt-3 max-w-[430px] text-[12px] leading-[1.6] text-slate-400 sm:text-[13px]">
                State and federal agencies managing security, emergency
                response, and public safety operations need a coordination
                platform built for Nigerian institutional realities. FAST is
                designed to complement existing security structures while
                dramatically improving operational effectiveness.
              </p>

              <div className="mt-5 grid max-w-[460px] grid-cols-1 gap-2.5 sm:grid-cols-2">
                <NumberedFeatureBox number="01" label="INTER-AGENCY">
                  Seamless data sharing between Police, Fire, and Civil
                  Defence.
                </NumberedFeatureBox>
                <NumberedFeatureBox number="02" label="STATE EOC">
                  Comprehensive oversight for State Emergency Operation
                  Centers.
                </NumberedFeatureBox>
                <NumberedFeatureBox number="03" label="ACCOUNTABILITY">
                  Immutable government accountability trails and audit
                  logs.
                </NumberedFeatureBox>
                <NumberedFeatureBox number="04" label="SCALABLE">
                  Built to handle state-wide deployments with ease.
                </NumberedFeatureBox>
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="bg-[#061525] px-5 py-10 sm:px-8 lg:px-[58px]">
          <div
            id="demo"
            className="
              mx-auto
              flex
              max-w-[1200px]
              flex-col
              items-start
              justify-between
              gap-6
              rounded-[5px]
              bg-[#2869ed]
              px-7
              py-7
              sm:flex-row
              sm:items-center
              sm:px-9
              sm:py-8
            "
          >
            <div>
              <h2 className="max-w-[440px] text-[20px] font-semibold leading-[1.2] text-white sm:text-[22px]">
                Find the right fit for your sector.
              </h2>

              <p className="mt-3 max-w-[500px] text-[9.5px] leading-[1.5] text-blue-100 sm:text-[10px]">
                Talk to our team about how FAST can be configured for your
                operational environment.
              </p>
            </div>

            <div className="shrink-0 text-center">
              <a
                href="/company"
                className="
                  flex
                  h-10
                  min-w-[105px]
                  items-center
                  justify-center
                  rounded
                  bg-white
                  px-5
                  text-[10px]
                  font-semibold
                  text-blue-600
                  shadow-sm
                  transition
                  hover:bg-blue-50
                "
              >
                Request Demo
              </a>

              <p className="mt-2 text-[8px] text-blue-100">
                Deployment support in &lt; 24 hours
              </p>
            </div>
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

export default Solutions;