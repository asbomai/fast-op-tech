import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

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

const ArrowIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h13" />
    <path d="m13 7 5 5-5 5" />
  </svg>
);

const ShieldIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <path d="M12 3.5 19 6v5.1c0 4.4-2.8 7.9-7 9.4-4.2-1.5-7-5-7-9.4V6l7-2.5Z" />
  </svg>
);

const BuildingIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 20h18" />
    <path d="M5 20V9l7-4 7 4v11" />
    <path d="M9 12h1M14 12h1M9 16h1M14 16h1" />
  </svg>
);

const GlobeIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.8 9h16.4M3.8 15h16.4" />
    <path d="M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.1-3.3-8.5S9.8 5.8 12 3.5Z" />
  </svg>
);

const CommandIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
  >
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <path d="M4 10h3M4 14h3M17 10h3M17 14h3" />
    <path d="M10 4v3M14 4v3M10 17v3M14 17v3" />
  </svg>
);

const MobileIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
  >
    <rect x="7.5" y="3" width="9" height="18" rx="1.5" />
    <path d="M10 6h4M11 18h2" />
  </svg>
);

const EdgeIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3.5 19 7v10l-7 3.5L5 17V7l7-3.5Z" />
    <path d="m8.5 9 3.5 2 3.5-2M12 11v6" />
  </svg>
);

const DeployIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="m8 10 4 2 4-2M12 12v5" />
  </svg>
);

const BeaconIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
  >
    <path d="M12 5v2M12 17v2M5 12H3M21 12h-2" />
    <path d="M8 8a5.7 5.7 0 0 0 0 8M16 8a5.7 5.7 0 0 1 0 8" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

const IntelligenceIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="7" />
    <path d="M12 8v4l2.7 2.2M12 3v2M21 12h-2" />
  </svg>
);

const EmergencyIcon = ({ className = "" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
  >
    <path d="M4 19h16" />
    <path d="M6 17V8h12v9" />
    <path d="M8 8V5h8v3" />
    <path d="M9 11h6M9 14h6" />
  </svg>
);

const AudienceItem = ({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) => (
  <div className="flex items-center justify-center gap-2 text-[12px] text-slate-500 sm:text-[13px]">
    {icon}
    <span>{children}</span>
  </div>
);

const ProductCard = ({
  icon,
  name,
  description,
  accent = false,
}: {
  icon: ReactNode;
  name: string;
  description: string;
  accent?: boolean;
}) => (
  <div className="flex h-[62px] flex-col items-center justify-center border border-white/[0.025] bg-[#071d33] transition duration-200 hover:bg-[#0a2340]">
    <div className={accent ? "text-emerald-400" : "text-slate-400"}>
      {icon}
    </div>

    <h3 className="mt-1 text-[11px] font-semibold tracking-wide text-slate-200">
      {name}
    </h3>

    <span
      className={`mt-0.5 text-[9px] ${
        accent ? "text-emerald-400" : "text-slate-500"
      }`}
    >
      {description}
    </span>
  </div>
);

/* ============================================================
   INDUSTRY CARD
   Holds an array of { image, title } entries and auto-crossfades
   between them — swapping BOTH the photo and the label together,
   one pair at a time, forever, while the card is on screen.
============================================================ */

type IndustryEntry = {
  image: string;
  title: string;
};

const IndustryCard = ({
  entries,
  intervalMs = 3500,
}: {
  entries: IndustryEntry[];
  intervalMs?: number;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (entries.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % entries.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [entries.length, intervalMs]);

  return (
    <div className="group relative h-[190px] overflow-hidden rounded-[5px] bg-[#09243b] shadow-lg">
      {entries.map((entry, i) => (
        <div
          key={entry.title}
          className={`
            absolute inset-0
            transition-opacity duration-[1200ms] ease-in-out
            ${i === activeIndex ? "opacity-100" : "opacity-0"}
          `}
        >
          <img
            src={entry.image}
            alt={entry.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030d18]/95 via-[#030d18]/35 to-transparent" />

          <h3 className="absolute bottom-3 left-3 right-3 text-[13px] font-semibold leading-[1.25] text-white sm:text-[14px]">
            {entry.title}
          </h3>
        </div>
      ))}

      {entries.length > 1 && (
        <div className="absolute right-3 top-3 z-10 flex gap-1">
          {entries.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-1 rounded-full transition-colors duration-300 ${
                i === activeIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};


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
    case "message":
      return (
        <svg {...common}>
          <path d="M5 5.5h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-12a2 2 0 0 1 2-2Z" />
          <path d="M8 9h7M8 12h5" />
        </svg>
      );

    case "hidden":
      return (
        <svg {...common}>
          <path d="m3 3 18 18" />
          <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
          <path d="M9.9 5.3A11 11 0 0 1 12 5c5.5 0 9 5 9 7s-2.1 4.1-5.1 5.7" />
          <path d="M6.6 6.6C4.3 8 3 10.5 3 12c0 2 3.5 7 9 7 1 0 2-.2 2.9-.5" />
        </svg>
      );

    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7v5l3 2" />
        </svg>
      );

    case "share":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="m8 11 8-4M8 13l8 4" />
        </svg>
      );

    case "file":
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h4M9 12h6M9 15h6" />
        </svg>
      );

    case "info":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 11v5M12 8h.01" />
        </svg>
      );

    case "map":
      return (
        <svg {...common}>
          <path d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      );

    case "incident":
      return (
        <svg {...common}>
          <path d="M6 4h12v16H6z" />
          <path d="M9 8h6M9 12h6M9 16h3" />
        </svg>
      );

    case "task":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );

    case "mobile":
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10 6h4M11 18h2" />
        </svg>
      );

    case "role":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="3" />
          <path d="M4 19c.7-3 2.3-4.5 5-4.5s4.3 1.5 5 4.5" />
          <path d="M15 7h4M17 5v4" />
        </svg>
      );

    case "ai":
      return (
        <svg {...common}>
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
          <path d="m6.5 6.5 1.4 1.4M16.1 16.1l1.4 1.4M17.5 6.5l-1.4 1.4M7.9 16.1l-1.4 1.4" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );

    case "secure":
      return (
        <svg {...common}>
          <path d="M12 3 19 6v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "network":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="17" r="2" />
          <circle cx="19" cy="17" r="2" />
          <circle cx="12" cy="13" r="2" />
          <path d="M11 7 6 15M13 7l5 8M7 17h10M12 7v4" />
        </svg>
      );

    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.8 9h16.4M3.8 15h16.4" />
          <path d="M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.1-3.3-8.5S9.8 5.8 12 3.5Z" />
        </svg>
      );

    case "signal":
      return (
        <svg {...common}>
          <path d="M5 18a10 10 0 0 1 0-12" />
          <path d="M9 15a6 6 0 0 1 0-6" />
          <circle cx="13" cy="12" r="1" />
        </svg>
      );

    case "people":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20c.6-4 2.6-6 6-6s5.4 2 6 6" />
        </svg>
      );

    case "bulb":
      return (
        <svg {...common}>
          <path d="M9 18h6M10 21h4" />
          <path d="M8.5 14.5a6 6 0 1 1 7 0c-.8.7-1.2 1.4-1.3 2.5h-4.4c-.1-1.1-.5-1.8-1.3-2.5Z" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );

    case "step1":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="3" />
          <path d="M4 19c.5-3.5 2.2-5 5-5s4.5 1.5 5 5" />
          <path d="M16 7h4M18 5v4" />
        </svg>
      );

    case "step2":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        </svg>
      );

    case "step3":
      return (
        <svg {...common}>
          <circle cx="12" cy="6" r="2" />
          <circle cx="6" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
          <path d="M12 8v4M10 13l-3 2M14 13l3 2" />
        </svg>
      );

    case "step4":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="m8 12 2 2 5-5" />
        </svg>
      );

    default:
      return null;
  }
};


/* ============================================================
   REUSABLE CARD
============================================================ */

const DarkCard = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <div
      className="
        min-h-[92px]
        border
        border-white/[0.025]
        bg-[#061727]
        p-4
        transition-all
        duration-200
        hover:-translate-y-[1px]
        hover:bg-[#071d31]
        hover:border-blue-500/10
        sm:p-5
      "
    >
      <Icon
        type={icon}
        className="mb-3 h-[15px] w-[15px] text-[#91a9df]"
      />

      <h3 className="mb-2 text-[11px] font-medium text-slate-200 sm:text-[12px]">
        {title}
      </h3>

      <p className="text-[9.5px] leading-[1.45] text-slate-400 sm:text-[10px]">
        {children}
      </p>
    </div>
  );
};


/* ============================================================
   IMAGE CARD
============================================================ */

const ImageCard = ({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="group relative h-[145px] overflow-hidden rounded-[4px] border border-white/[0.04] bg-[#071b2e] sm:h-[165px]">

      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#04111e]
          via-[#04111e]/65
          to-[#04111e]/10
        "
      />

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">

        <h3 className="mb-1 text-[12px] font-medium text-white sm:text-[13px]">
          {title}
        </h3>

        <p className="text-[9px] leading-[1.45] text-slate-300 sm:text-[10px]">
          {children}
        </p>

      </div>
    </div>
  );
};

const Platform = () => {
  return (
    <>
      <Helmet>
        <title>Platform - FAST Operational Technologies</title>
        <meta
          name="description"
          content="FAST unifies field teams, command centres, emergency responders, security providers, NGOs and government agencies into one real-time platform for action."
        />
      </Helmet>

      <main className="min-h-screen overflow-hidden bg-[#061525] text-white">



        {/* =====================================================
            NAVIGATION
        ====================================================== */}

        <header className="h-[58px] border-b border-white/[0.035] bg-[#07182a] px-5 sm:px-8 lg:px-[58px]">

          <div className="mx-auto flex h-full max-w-[1400px] items-center">

            {/* LOGO */}
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
            {/* NAV */}
            <nav className="mx-auto hidden items-center gap-7 md:flex">

              <a
                href="/platform"
                className="relative text-[13px] font-medium text-slate-200"
              >
                Platform

                <span className="absolute -bottom-[9px] left-0 right-0 h-px bg-slate-300" />
              </a>

              <a
                href="/product"
                className="text-[13px] font-medium text-slate-500 transition hover:text-slate-200"
              >
                Product
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

            {/* ACTIONS */}
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

        <section className="bg-[#0a2548]">

          <div className="mx-auto flex min-h-[292px] max-w-[1400px] items-center justify-center px-5 py-14 text-center sm:px-8">

            <div>

              <h1 className="text-[28px] font-bold leading-[1.18] tracking-[-0.035em] text-slate-100 sm:text-[34px] lg:text-[40px]">
                Building Africa&apos;s Next Generation of Command,
                <br className="hidden sm:block" />
                Coordination &amp; Operational Technology
              </h1>

              <p className="mx-auto mt-4 max-w-[900px] text-[12px] leading-[1.6] text-slate-400 sm:text-[14px] lg:text-[15px]">
                FAST unifies field teams, command centres, emergency responders,
                security providers, NGOs and government
                <br className="hidden sm:block" />
                agencies into one real-time platform for action.
              </p>

              <div className="mt-5 flex justify-center gap-2">

                <a
                  href="#demo"
                  className="flex h-[34px] items-center gap-2 rounded bg-[#256bf0] px-4 text-[12px] font-semibold text-white transition hover:bg-blue-500 sm:text-[13px]"
                >
                  Request a Demo
                  <ArrowIcon className="h-3 w-3" />
                </a>

                <a
                  href="#platform"
                  className="flex h-[34px] items-center rounded bg-[#1c5bce] px-4 text-[12px] font-semibold text-white transition hover:bg-blue-500 sm:text-[13px]"
                >
                  See how it works
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            AUDIENCE STRIP
        ====================================================== */}

        <section className="border-b border-white/[0.025] bg-[#061727] px-5 py-6 sm:px-8">

          <div className="mx-auto max-w-[1100px]">

            <p className="mb-5 text-center text-[10px] font-semibold tracking-[0.09em] text-slate-400 sm:text-[11px]">
              BUILT FOR MISSION-CRITICAL ORGANIZATIONS
            </p>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">

              <AudienceItem
                icon={<ShieldIcon className="h-3.5 w-3.5" />}
              >
                Security Agencies
              </AudienceItem>

              <AudienceItem
                icon={<EmergencyIcon className="h-3.5 w-3.5" />}
              >
                Emergency Response
              </AudienceItem>

              <AudienceItem
                icon={<BuildingIcon className="h-3.5 w-3.5" />}
              >
                Government Agencies
              </AudienceItem>

              <AudienceItem
                icon={<GlobeIcon className="h-3.5 w-3.5" />}
              >
                NGO &amp; Humanitarian
              </AudienceItem>

            </div>

          </div>

        </section>


        {/* =====================================================
            COMMAND WITHOUT BOUNDARIES
        ====================================================== */}

        <section
          id="platform"
          className="bg-[#0a2949] px-5 py-7 sm:px-8 lg:py-8"
        >

          <div className="mx-auto max-w-[1135px]">

            <div className="mb-5">

              <h2 className="text-[21px] font-bold tracking-[-0.02em] text-slate-200 sm:text-[22px]">
                COMMAND WITHOUT BOUNDARIES
              </h2>

              <p className="mt-1.5 text-[11px] leading-[1.5] text-slate-400 sm:text-[12px]">
                Deep integration across hardware, software, and human intelligence
                <br className="hidden sm:block" />
                systems for total situational awareness.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">

              <ProductCard
                icon={<CommandIcon className="h-3.5 w-3.5" />}
                name="FAST COMMAND"
                description="Command & Control Hub"
              />

              <ProductCard
                icon={<MobileIcon className="h-3.5 w-3.5" />}
                name="FAST MOBILE"
                description="Field Operations App"
              />

              <ProductCard
                icon={<EdgeIcon className="h-3.5 w-3.5" />}
                name="FAST EDGE"
                description="COMING SOON"
                accent
              />

              <ProductCard
                icon={<DeployIcon className="h-3.5 w-3.5" />}
                name="FAST DEPLOY"
                description="Deployment"
              />

              <ProductCard
                icon={<BeaconIcon className="h-3.5 w-3.5" />}
                name="FAST BEACON"
                description="Tracker"
              />

              <ProductCard
                icon={<IntelligenceIcon className="h-3.5 w-3.5" />}
                name="FAST INTELLIGENCE"
                description="Powered AI"
                accent
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            WHO ITS FOR
        ====================================================== */}

        <section
          id="solution"
          className="bg-[#061b2e] px-5 py-7 sm:px-8 lg:py-8"
        >

          <div className="mx-auto max-w-[1135px]">

            <div className="mb-5">

              <h2 className="text-[21px] font-bold tracking-[-0.02em] text-slate-200 sm:text-[22px]">
                WHO ITS FOR
              </h2>

              <p className="mt-1.5 text-[11px] text-slate-400 sm:text-[12px]">
                Specialized command modules for the world&apos;s most critical industries.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">

              {/* Defense & Security <-> Ports & Maritime */}
              <IndustryCard
                entries={[
                  {
                    image: "/images/platform/defense.jpg",
                    title: "Defense & Security",
                  },
                  {
                    image: "/images/platform/ports-maritime.jpg",
                    title: "Ports & Maritime",
                  },
                ]}
              />

              {/* Emergency Response Agencies <-> Critical Infrastructure */}
              <IndustryCard
                entries={[
                  {
                    image: "/images/platform/emergency.jpg",
                    title: "Emergency Response Agencies",
                  },
                  {
                    image: "/images/platform/critical-infrastructure.jpg",
                    title: "Critical Infrastructure",
                  },
                ]}
              />

              {/* NGOs & Humanitarian Organizations <-> Mining */}
              <IndustryCard
                entries={[
                  {
                    image: "/images/platform/ngo.jpg",
                    title: "NGOs & Humanitarian Organizations",
                  },
                  {
                    image: "/images/platform/mining.jpg",
                    title: "Mining",
                  },
                ]}
              />

              {/* Aviation & Airports <-> Oil & Gas */}
              <IndustryCard
                entries={[
                  {
                    image: "/images/platform/aviation.jpg",
                    title: "Aviation & Airports",
                  },
                  {
                    image: "/images/platform/oil-gas.jpg",
                    title: "Oil & Gas",
                  },
                ]}
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            SIMPLE DEMO TARGET
        ====================================================== */}

        <section
          id="demo-preview"
          className="bg-[#061525] px-5 py-16 text-center"
        >
          <div className="mx-auto max-w-3xl">

            <h2 className="text-2xl font-bold text-white">
              Ready to see FAST in action?
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              Request a demonstration of the FAST operational technology platform.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex h-10 items-center rounded bg-blue-600 px-6 text-sm font-semibold transition hover:bg-blue-500"
            >
              Request a Demo
            </a>

          </div>
        </section>

      




        {/* ====================================================
            IMAGE 1
            THE PROBLEM
        ===================================================== */}

        <section className="bg-[#0b2340] px-5 py-7 sm:px-8 sm:py-9">

          <div className="mx-auto max-w-[1110px]">

            <div className="mb-5">

              <h1 className="text-[21px] font-semibold tracking-wide text-slate-100 sm:text-[22px]">
                THE PROBLEM
              </h1>

              <p className="mt-1.5 text-[10px] text-slate-400 sm:text-[11px]">
                Operational coordination in Africa is broken.
              </p>

              <p className="mt-2 max-w-[600px] text-[9.5px] leading-[1.5] text-slate-400 sm:text-[10px]">
                Every day across Nigeria and Africa — security teams
                coordinate through WhatsApp groups, command centres have
                no live view of their field units, and agencies operate
                in silos with no shared operational picture. When
                something goes wrong, the response is slow. Because no
                one has the same information at the same time.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">

              <DarkCard
                icon="message"
                title="Teams coordinate through WhatsApp and phone calls — no structure, no audit trail."
              >
                Teams coordinate through WhatsApp and phone calls —
                no structure, no audit trail.
              </DarkCard>

              <DarkCard
                icon="hidden"
                title="Command centres operate blind — no live map, no real-time field visibility."
              >
                Command centres operate blind — no live map, no
                real-time field visibility.
              </DarkCard>

              <DarkCard
                icon="clock"
                title="Delayed response times due to fragmented information flow."
              >
                Delayed response times due to fragmented information
                flow.
              </DarkCard>

              <DarkCard
                icon="share"
                title="Agencies and NGOs cannot share operational data in real time."
              >
                Agencies and NGOs cannot share operational data in
                real time.
              </DarkCard>

              <DarkCard
                icon="file"
                title="Incident reports are manual — paper-based or spreadsheet-driven."
              >
                Incident reports are manual — paper-based or
                spreadsheet-driven.
              </DarkCard>

              <DarkCard
                icon="info"
                title="No purpose-built coordination platform exists for African operational environments."
              >
                No purpose-built coordination platform exists for
                African operational environments.
              </DarkCard>

            </div>

          </div>

        </section>


        {/* ====================================================
            THE SOLUTION
        ===================================================== */}

        <section className="bg-[#071b2d] px-5 py-8 sm:px-8 sm:py-9">

          <div className="mx-auto max-w-[1110px]">

            <h2 className="text-[21px] font-semibold tracking-wide text-slate-100 sm:text-[22px]">
              THE SOLUTION
            </h2>

            <p className="mt-2 text-[10px] text-slate-400 sm:text-[11px]">
              One Platform. Every Actor. Real Time.
            </p>

            <p className="mt-3 max-w-[650px] text-[9.5px] leading-[1.55] text-slate-400 sm:text-[10px]">
              FAST is the coordination layer that connects every actor
              in an operation — from the field officer to the command
              centre — into one shared, live, actionable environment.
              Purpose-built for Africa. Designed for low-bandwidth and
              intermittent connectivity.
            </p>


            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">

              <DarkCard
                icon="map"
                title="Live Command Map"
              >
                All units and incidents visible in real time on a
                shared map.
              </DarkCard>

              <DarkCard
                icon="incident"
                title="Incident Management"
              >
                Create, escalate, and resolve incidents with full
                audit trail.
              </DarkCard>

              <DarkCard
                icon="task"
                title="Task Assignment"
              >
                Assign units to incidents and track response status
                live.
              </DarkCard>

              <DarkCard
                icon="mobile"
                title="Field Mobile App"
              >
                Lightweight app for field officers, works on weak
                4G connections.
              </DarkCard>

              <DarkCard
                icon="role"
                title="Role-Based Access"
              >
                Commanders, coordinators, and field units each see
                what they need.
              </DarkCard>

              <DarkCard
                icon="ai"
                title="AI-Ready Architecture"
              >
                Predictive alerts and pattern recognition in Phase 2.
              </DarkCard>

            </div>

          </div>

        </section>


        {/* ====================================================
            QUANTIFIABLE OPERATIONAL EXCELLENCE
        ===================================================== */}

        <section className="bg-[#17304a] px-5 py-7 sm:px-8 sm:py-9">

          <div className="mx-auto max-w-[1110px]">

            <h2 className="text-[20px] font-semibold text-slate-100 sm:text-[22px]">
              QUANTIFIABLE OPERATIONAL EXCELLENCE
            </h2>

            <p className="mt-1 text-[10px] text-slate-400 sm:text-[11px]">
              Measurable benefits of FAST platform.
            </p>


            <div className="mt-5 grid grid-cols-3 gap-2.5">

              {/* 75 */}
              <div>

                <div className="relative h-[80px] overflow-hidden rounded-t bg-[#09233b] sm:h-[105px]">
                  <img
                    src="/images/platform/fast-response.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="bg-[#0a2744] px-3 py-3">

                  <div className="text-[27px] font-bold text-blue-200 sm:text-[32px]">
                    75%
                  </div>

                  <h3 className="mt-1 text-[10px] font-semibold text-white">
                    Faster Incident Response
                  </h3>

                  <p className="mt-1 text-[8.5px] leading-[1.45] text-slate-400 sm:text-[9px]">
                    Automated dispatch and real-time coordination
                    significantly reduce critical response windows.
                  </p>

                </div>

              </div>


              {/* 90 */}
              <div>

                <div className="relative h-[80px] overflow-hidden rounded-t bg-[#09233b] sm:h-[105px]">
                  <img
                    src="/images/platform/operational-transparency.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="bg-[#0a2744] px-3 py-3">

                  <div className="text-[27px] font-bold text-blue-200 sm:text-[32px]">
                    90%
                  </div>

                  <h3 className="mt-1 text-[10px] font-semibold text-white">
                    Operational Transparency
                  </h3>

                  <p className="mt-1 text-[8.5px] leading-[1.45] text-slate-400 sm:text-[9px]">
                    Eliminate information silos with a unified
                    tactical picture across all units and agencies.
                  </p>

                </div>

              </div>


              {/* 30K */}
              <div>

                <div className="relative h-[80px] overflow-hidden rounded-t bg-[#09233b] sm:h-[105px]">
                  <img
                    src="/images/platform/missions.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="bg-[#0a2744] px-3 py-3">

                  <div className="text-[27px] font-bold text-blue-200 sm:text-[32px]">
                    30k+
                  </div>

                  <h3 className="mt-1 text-[10px] font-semibold text-white">
                    Missions Orchestrated
                  </h3>

                  <p className="mt-1 text-[8.5px] leading-[1.45] text-slate-400 sm:text-[9px]">
                    Proven reliability in managing large-scale,
                    high-stakes operations across diverse theatres.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
            WHY FAST
        ===================================================== */}

        <section className="bg-[#071b2d] px-5 py-7 sm:px-8 sm:py-9">

          <div className="mx-auto max-w-[1110px]">

            <h2 className="text-[20px] font-semibold text-slate-100 sm:text-[22px]">
              Why FAST?
            </h2>


            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">

              <DarkCard
                icon="signal"
                title="Offline-First Architecture"
              >
                Purpose-built for low-bandwidth and intermittent
                connectivity in remote environments.
              </DarkCard>

              <DarkCard
                icon="network"
                title="Multi-agency Coordination"
              >
                Seamlessly bridge silos between police, fire,
                medical, and NGOs on a single map.
              </DarkCard>

              <DarkCard
                icon="ai"
                title="AI-Ready Architecture"
              >
                Foundation built for predictive alerts and
                automated pattern recognition.
              </DarkCard>

              <DarkCard
                icon="secure"
                title="Secure by Design"
              >
                End-to-end encryption and military-grade security
                protocols for mission-critical data.
              </DarkCard>

              <DarkCard
                icon="network"
                title="Vendor-Neutral Integration"
              >
                Open standards to connect with existing systems,
                hardware, and software.
              </DarkCard>

              <DarkCard
                icon="globe"
                title="Built for Africa, Scalable Globally"
              >
                Engineered for the continent's specific operational
                challenges with global performance standards.
              </DarkCard>

            </div>

          </div>

        </section>


        {/* ====================================================
            WHY NOW
        ===================================================== */}

        <section className="bg-[#17304a] px-5 py-7 sm:px-8 sm:py-9">

          <div className="mx-auto max-w-[1110px]">

            <div className="text-center">

              <h2 className="text-[20px] font-semibold text-slate-100 sm:text-[22px]">
                WHY NOW?
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                The cost of operational latency has never been higher.
              </p>

            </div>


            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">

              <ImageCard
                image="/images/platform/complexity.jpg"
                title="Increasing Complexity"
              >
                Modern threats are multi-domain and asymmetric. Legacy
                systems can't keep pace with the volume and velocity
                of incoming data.
              </ImageCard>

              <ImageCard
                image="/images/platform/fragmented.jpg"
                title="Fragmented Response"
              >
                Inter-agency silos lead to critical delays. Every
                second lost to manual coordination is a second gained
                by the adversary.
              </ImageCard>

              <ImageCard
                image="/images/platform/sovereignty.jpg"
                title="Data Sovereignty"
              >
                Control over operational data is national security.
                Sentinel command ensures absolute data ownership in a
                rapidly evolving geopolitical landscape.
              </ImageCard>

            </div>

          </div>

        </section>


        {/* ====================================================
            FROM INCIDENT TO RESOLUTION
        ===================================================== */}

        <section className="bg-[#071b2d] px-5 py-8 sm:px-8 sm:py-10">

          <div className="mx-auto max-w-[1110px]">

            <div className="text-center">

              <h2 className="text-[20px] font-semibold text-slate-100 sm:text-[22px]">
                FROM INCIDENT TO RESOLUTION
              </h2>

              <p className="mt-1 text-[10px] text-slate-400">
                Our 4-step framework for mission-critical coordination.
              </p>

            </div>


            <div className="relative mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-0">

              {/* connecting line */}
              <div className="absolute left-[12%] right-[12%] top-[18px] hidden h-px bg-slate-600/40 sm:block" />


              {/* STEP 1 */}
              <div className="relative text-center">

                <div className="relative mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#263b52] text-blue-200">

                  <Icon
                    type="step1"
                    className="h-4 w-4"
                  />

                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-300 text-[6px] font-bold text-[#071b2d]">
                    1
                  </span>

                </div>

                <h3 className="mt-3 text-[10px] font-medium text-slate-200">
                  Incident Reporting
                </h3>

                <p className="mx-auto mt-1 max-w-[145px] text-[8.5px] leading-[1.5] text-slate-400">
                  A field officer or coordinator reports an incident on
                  the live map, instantly notifying all connected
                  coordinators.
                </p>

              </div>


              {/* STEP 2 */}
              <div className="relative text-center">

                <div className="relative mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#263b52] text-blue-200">

                  <Icon
                    type="step2"
                    className="h-4 w-4"
                  />

                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-300 text-[6px] font-bold text-[#071b2d]">
                    2
                  </span>

                </div>

                <h3 className="mt-3 text-[10px] font-medium text-slate-200">
                  Task Assignment
                </h3>

                <p className="mx-auto mt-1 max-w-[145px] text-[8.5px] leading-[1.5] text-slate-400">
                  The coordinator reviews the incident and assigns the
                  nearest available field unit to respond.
                </p>

              </div>


              {/* STEP 3 */}
              <div className="relative text-center">

                <div className="relative mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#263b52] text-blue-200">

                  <Icon
                    type="step3"
                    className="h-4 w-4"
                  />

                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-300 text-[6px] font-bold text-[#071b2d]">
                    3
                  </span>

                </div>

                <h3 className="mt-3 text-[10px] font-medium text-slate-200">
                  Response &amp; Tracking
                </h3>

                <p className="mx-auto mt-1 max-w-[145px] text-[8.5px] leading-[1.5] text-slate-400">
                  The assigned field unit receives the task on their
                  mobile app, acknowledges it, and their response is
                  tracked in real time.
                </p>

              </div>


              {/* STEP 4 */}
              <div className="relative text-center">

                <div className="relative mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-600/60 bg-[#263b52] text-blue-200">

                  <Icon
                    type="step4"
                    className="h-4 w-4"
                  />

                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-300 text-[6px] font-bold text-[#071b2d]">
                    4
                  </span>

                </div>

                <h3 className="mt-3 text-[10px] font-medium text-slate-200">
                  Automatic Reporting
                </h3>

                <p className="mx-auto mt-1 max-w-[145px] text-[8.5px] leading-[1.5] text-slate-400">
                  Once the incident is closed, the system automatically
                  generates a complete incident report with a full
                  audit trail.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
            ADVISORY BOARD
        ===================================================== */}

        <section className="bg-[#1b3044] px-5 py-8 sm:px-8 sm:py-10">

          <div className="mx-auto max-w-[1110px]">

            <p className="text-[9px] font-semibold tracking-[0.18em] text-blue-300">
              ADVISORY BOARD
            </p>

            <h2 className="mt-2 text-[19px] font-semibold text-slate-100 sm:text-[21px]">
              Strategic guidance from world-class experts.
            </h2>

            <p className="mt-3 max-w-[550px] text-[9.5px] leading-[1.5] text-slate-400">
              Strategic guidance from world-class experts in security,
              emergency management, and defense technology.
            </p>


            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">

              {/* ADVISOR 1 */}

              <div className="flex h-[112px] flex-col items-center justify-center border border-white/[0.025] bg-[#061727]">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#273b50] text-slate-400">

                  <Icon
                    type="people"
                    className="h-5 w-5"
                  />

                </div>

                <h3 className="mt-3 text-[10px] font-medium text-slate-200">
                  National Security Advisor
                </h3>

                <span className="mt-1 rounded-full border border-blue-400/30 px-2 py-0.5 text-[8px] text-blue-300">
                  COMING SOON
                </span>

              </div>


              {/* ADVISOR 2 */}

              <div className="flex h-[112px] flex-col items-center justify-center border border-white/[0.025] bg-[#061727]">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#273b50] text-slate-400">

                  <Icon
                    type="ai"
                    className="h-5 w-5"
                  />

                </div>

                <h3 className="mt-3 text-[10px] font-medium text-slate-200">
                  Emergency Management Expert
                </h3>

                <span className="mt-1 rounded-full border border-blue-400/30 px-2 py-0.5 text-[8px] text-blue-300">
                  COMING SOON
                </span>

              </div>


              {/* ADVISOR 3 */}

              <div className="flex h-[112px] flex-col items-center justify-center border border-white/[0.025] bg-[#061727]">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#273b50] text-slate-400">

                  <Icon
                    type="bulb"
                    className="h-5 w-5"
                  />

                </div>

                <h3 className="mt-3 text-[10px] font-medium text-slate-200">
                  Technology &amp; AI Advisor
                </h3>

                <span className="mt-1 rounded-full border border-blue-400/30 px-2 py-0.5 text-[8px] text-blue-300">
                  COMING SOON
                </span>

              </div>

            </div>


            {/* =================================================
                CTA
            ================================================== */}

            <div
              id="demo"
              className="
                mt-12
                flex
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
                  Ready to elevate your operational readiness?
                </h2>

                <p className="mt-3 max-w-[500px] text-[9.5px] leading-[1.5] text-blue-100 sm:text-[10px]">
                  Join 500+ agencies worldwide who rely on Sentinel
                  Command for mission-critical safety and security.
                </p>

              </div>


              <div className="shrink-0 text-center">

                <a
                  href="/contact"
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

          </div>

        </section>


        {/* ====================================================
            FOOTER
        ===================================================== */}

        <footer className="bg-[#030c24] px-5 py-7 sm:px-8">

          <div className="mx-auto max-w-[1110px]">

            <div className="grid grid-cols-2 gap-7 sm:grid-cols-5">

              {/* BRAND */}

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


              {/* PLATFORM */}

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


              {/* PRODUCT */}

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


              {/* SOLUTION */}

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


              {/* COMPANY */}

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


            {/* COPYRIGHT */}

            <div className="mt-7 flex flex-col justify-between gap-3 border-t border-white/[0.05] pt-5 sm:flex-row">

              <div>

                <p className="text-[8.5px] text-slate-500">
                  © 2026 FAST Operations Technologies Limited. All
                  rights reserved. Abuja, Nigeria.
                </p>

                <p className="mt-1 text-[8.5px] text-slate-600">
                  FAST Technologies Limited is a registered technology
                  company building Africa&apos;s first real-time
                  operational coordination platform.
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

export default Platform;