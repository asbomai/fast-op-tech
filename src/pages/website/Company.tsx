import { Helmet } from "react-helmet-async";
import { useState } from "react";
import type { ReactNode, FormEvent } from "react";

type IconProps = {
  className?: string;
};

/* ============================================================
   IMAGE SOURCES
============================================================ */

const COMPANY_IMAGES = {
  heritage: "/images/company/heritage.jpg",
};

/* ============================================================
   NAV ICONS (kept in sync with Platform.tsx / Product.tsx)
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
    case "flag":
      return (
        <svg {...common}>
          <path d="M6 3v18" />
          <path d="M6 4h11l-2.2 3.5L17 11H6" />
        </svg>
      );

    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="2.7" />
          <path d="M5 6v6c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7V6" />
          <path d="M5 12v6c0 1.5 3.1 2.7 7 2.7s7-1.2 7-2.7v-6" />
        </svg>
      );

    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3.5 19 6v5.1c0 4.4-2.8 7.9-7 9.4-4.2-1.5-7-5-7-9.4V6l7-2.5Z" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
          <path d="m4 6.5 8 6 8-6" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common}>
          <path d="M6 3.5c1 0 2.4 1.9 2.4 2.9S7 8.2 7 9c0 2 4 6 6 7 .8 0 1.6-1.4 2.6-1.4s2.9 1.4 2.9 2.4-2 2.5-3.3 2.5C11.6 19.5 4.5 12.4 4.5 8.8c0-1.3 1.5-3.3 1.5-3.3Z" />
        </svg>
      );

    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
      );

    case "external":
      return (
        <svg {...common}>
          <path d="M9 15 20 4" />
          <path d="M13 4h7v7" />
          <path d="M19 13v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V8a1.5 1.5 0 0 1 1.5-1.5H12" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );

    case "chevron-down":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );

    default:
      return null;
  }
};

/* ============================================================
   REUSABLE PIECES
============================================================ */

const CoreValueCard = ({
  icon,
  iconBg,
  iconColor,
  title,
  children,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  children: ReactNode;
}) => (
  <div className="border border-white/[0.05] bg-[#0a1c30] p-4 sm:p-5">
    <div
      className={`flex h-7 w-7 items-center justify-center rounded ${iconBg} ${iconColor}`}
    >
      <Icon type={icon} className="h-3.5 w-3.5" />
    </div>

    <h3 className="mt-3 text-[11px] font-semibold text-slate-100 sm:text-[12px]">
      {title}
    </h3>

    <p className="mt-1.5 text-[9.5px] leading-[1.55] text-slate-400 sm:text-[10px]">
      {children}
    </p>
  </div>
);

const ContactInfoCard = ({
  icon,
  iconColor,
  label,
  value,
  href,
}: {
  icon: string;
  iconColor: string;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="flex h-full flex-col items-center justify-center gap-2 border border-white/[0.05] bg-[#0a1c30] px-3 py-5 text-center transition duration-200 hover:bg-[#0d2440]">
      <Icon type={icon} className={`h-4 w-4 ${iconColor}`} />
      <span className="text-[9px] font-semibold tracking-wide text-slate-300">
        {label}
      </span>
      <span className="text-[9px] leading-[1.5] text-slate-400">
        {value}
      </span>
    </div>
  );

  return href ? (
    <a href={href} className="block h-full">
      {content}
    </a>
  ) : (
    content
  );
};

const FormField = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <label className="mb-1.5 block text-[10px] font-medium text-slate-300">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
        w-full
        rounded
        border
        border-white/[0.08]
        bg-[#08172a]
        px-3
        py-2.5
        text-[11px]
        text-slate-200
        placeholder:text-slate-600
        outline-none
        transition
        focus:border-blue-500/60
      "
    />
  </div>
);

const ActionItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="flex items-start gap-2.5">
    <Icon
      type="check"
      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400"
    />
    <div>
      <h4 className="text-[11px] font-semibold text-slate-100">{title}</h4>
      <p className="mt-0.5 text-[9.5px] leading-[1.5] text-slate-400">
        {children}
      </p>
    </div>
  </div>
);

/* ============================================================
   HERITAGE VISUAL (stand-in for real photography)
============================================================ */

const HeritageVisual = () => (
  <div className="relative h-[220px] w-full overflow-hidden rounded-[5px] border border-white/[0.06] bg-[#060d16] sm:h-[260px]">
    <img
      src={COMPANY_IMAGES.heritage}
      alt="FAST Sentinel Command center, established 2026, defense logistics sector"
      className="h-full w-full object-cover"
    />

    <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded bg-[#0a1c30]/90 px-2.5 py-2 backdrop-blur">
      <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/15 text-blue-400">
        <Icon type="flag" className="h-3 w-3" />
      </div>
      <div>
        <p className="text-[9px] font-semibold text-slate-200">
          Established 2026
        </p>
        <p className="text-[8.5px] text-slate-400">Defense Logistics Sector</p>
      </div>
    </div>
  </div>
);

/* ============================================================
   PAGE
============================================================ */

const Company = () => {
  const [form, setForm] = useState({
    organization: "",
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    industry: "Emergency Management",
    message: "",
  });

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Wire this up to your backend / email service.
    console.log("Company contact form submitted:", form);
  };

  return (
    <>
      <Helmet>
        <title>Company - FAST Operational Technologies</title>
        <meta
          name="description"
          content="FAST is building an integrated Operational Technology ecosystem. Learn about our heritage, core values, and how to get in touch."
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
                className="text-[13px] font-medium text-slate-500 transition hover:text-slate-200"
              >
                Solution
              </a>

              <a
                href="/company"
                className="relative text-[13px] font-medium text-slate-200"
              >
                Company
                <span className="absolute -bottom-[9px] left-0 right-0 h-px bg-slate-300" />
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
                href="#contact-form"
                className="rounded border border-blue-500 bg-blue-600 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-blue-500 sm:px-4 sm:text-[12px]"
              >
                Request Demo
              </a>
            </div>
          </div>
        </header>


        {/* =====================================================
            OUR HERITAGE
        ====================================================== */}

        <section className="bg-[#0a2548] px-5 py-14 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
            <HeritageVisual />

            <div>
              <h2 className="text-[26px] font-bold leading-[1.2] text-slate-100 sm:text-[30px]">
                Our Heritage
              </h2>

              <div className="mt-4 max-w-[470px] space-y-3 text-[12px] leading-[1.65] text-slate-400 sm:text-[13px]">
                <p>
                  FAST is building an integrated Operational Technology
                  ecosystem designed to help organisations see what is
                  happening, understand what it means, and coordinate the
                  right response in real time.
                </p>
                <p>
                  Our platform brings together software, intelligence,
                  communications, sensing and edge technologies into one
                  connected operational environment.
                </p>
                <p>
                  At the centre is FAST OS — our command, control and
                  operational platform — designed to provide real-time
                  situational awareness across assets, personnel, incidents,
                  communications and field operations.
                </p>
                <p>
                  Around FAST OS, we are developing an ecosystem of edge
                  computing, tracking, intelligent sensing and AI-powered
                  decision support. Our longer-term technology roadmap
                  extends into specialised hardware, persistent sensing,
                  airborne infrastructure and autonomous systems.
                </p>
                <p>
                  Many organisations across emerging markets operate across
                  fragmented systems, challenging environments and
                  unreliable connectivity.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            CORE VALUES
        ====================================================== */}

        <section className="bg-[#061525] px-5 py-14 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <h2 className="text-[24px] font-bold text-slate-100 sm:text-[28px]">
                Core Values
              </h2>
              <p className="mt-2 text-[12px] text-slate-400 sm:text-[13px]">
                The pillars of mission-critical engineering.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <CoreValueCard
                icon="flag"
                iconBg="bg-blue-500/15"
                iconColor="text-blue-400"
                title="Integrity of Action"
              >
                Every command, every adjustment, and every response is
                logged with cryptographic certainty. We provide the
                transparency required for high-stakes accountability.
              </CoreValueCard>

              <CoreValueCard
                icon="database"
                iconBg="bg-emerald-500/15"
                iconColor="text-emerald-400"
                title="Sovereignty of Data"
              >
                National security requires absolute control. Our
                architecture ensures that agencies maintain full ownership
                and governance of their data at all times.
              </CoreValueCard>

              <CoreValueCard
                icon="shield"
                iconBg="bg-amber-500/15"
                iconColor="text-amber-400"
                title="Resilience by Design"
              >
                Engineered for the &quot;Worst-Day Scenario.&quot; Our
                systems are tested for continuous operation in air-gapped
                and degraded network environments.
              </CoreValueCard>
            </div>
          </div>
        </section>


        {/* =====================================================
            GET IN TOUCH
        ====================================================== */}

        <section className="bg-[#0a2548] px-5 py-14 sm:px-8 sm:py-16 lg:px-[58px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <h2 className="text-[24px] font-bold leading-[1.25] text-slate-100 sm:text-[28px]">
                Let&apos;s talk about your operational coordination.
              </h2>
              <p className="mx-auto mt-2 max-w-[480px] text-[12px] text-slate-400 sm:text-[13px]">
                Whether you want a demo, a pilot, a partnership, or an
                investment conversation — we&apos;re open.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <ContactInfoCard
                icon="mail"
                iconColor="text-blue-400"
                label="EMAIL"
                value="abubkaryahai@gmail.com"
                href="mailto:abubkaryahai@gmail.com"
              />
              <ContactInfoCard
                icon="phone"
                iconColor="text-emerald-400"
                label="PHONE"
                value="+234 813 488 5108"
                href="tel:+2348134885108"
              />
              <ContactInfoCard
                icon="pin"
                iconColor="text-amber-400"
                label="LOCATION"
                value="Abuja, Federal Capital Territory, Nigeria"
              />
              <ContactInfoCard
                icon="external"
                iconColor="text-blue-400"
                label="LINKEDIN"
                value="www.linkedin.com/in/yahaya-abubakar"
                href="https://www.linkedin.com/in/yahaya-abubakar"
              />
            </div>
          </div>
        </section>


        {/* =====================================================
            CONTACT FORM
        ====================================================== */}

        <section
          id="contact-form"
          className="bg-[#061525] px-5 py-14 sm:px-8 sm:py-16 lg:px-[58px]"
        >
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-[24px] font-bold text-slate-100 sm:text-[28px]">
              Send Us a Message
            </h2>
            <p className="mt-1.5 text-[12px] text-slate-400 sm:text-[13px]">
              Our mission specialists are ready to respond to your inquiry.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Organization Name"
                    placeholder="Emergency Ops Center"
                    value={form.organization}
                    onChange={update("organization")}
                  />
                  <FormField
                    label="Full Name"
                    placeholder="Enter Name"
                    value={form.fullName}
                    onChange={update("fullName")}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Job Title"
                    placeholder="Director of Operations"
                    value={form.jobTitle}
                    onChange={update("jobTitle")}
                  />
                  <FormField
                    label="Email Address"
                    placeholder="email@agency.gov"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    label="Phone Number"
                    placeholder="+234 ..."
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                  />

                  <div>
                    <label className="mb-1.5 block text-[10px] font-medium text-slate-300">
                      Industry
                    </label>
                    <div className="relative">
                      <select
                        value={form.industry}
                        onChange={(e) => update("industry")(e.target.value)}
                        className="
                          w-full
                          appearance-none
                          rounded
                          border
                          border-white/[0.08]
                          bg-[#08172a]
                          px-3
                          py-2.5
                          text-[11px]
                          text-slate-200
                          outline-none
                          transition
                          focus:border-blue-500/60
                        "
                      >
                        <option>Emergency Management</option>
                        <option>Defense &amp; Security</option>
                        <option>Law Enforcement</option>
                        <option>Aviation</option>
                        <option>Government</option>
                        <option>NGO / Humanitarian</option>
                        <option>Enterprise Security</option>
                        <option>Other</option>
                      </select>
                      <Icon
                        type="chevron-down"
                        className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[10px] font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message")(e.target.value)}
                    placeholder="How can we help your command center?"
                    rows={4}
                    className="
                      w-full
                      resize-none
                      rounded
                      border
                      border-white/[0.08]
                      bg-[#08172a]
                      px-3
                      py-2.5
                      text-[11px]
                      text-slate-200
                      placeholder:text-slate-600
                      outline-none
                      transition
                      focus:border-blue-500/60
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    rounded
                    bg-[#2869ed]
                    py-3
                    text-[12px]
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-500
                  "
                >
                  Request Demo
                </button>
              </form>

              {/* SIDE PANEL */}
              <div className="h-fit rounded-[5px] border border-white/[0.06] bg-[#0a1c30] p-5">
                <h3 className="text-[12px] font-semibold text-slate-100 sm:text-[13px]">
                  See FAST in Action
                </h3>

                <div className="mt-4 space-y-4">
                  <ActionItem title="Unified Theater View">
                    Aggregate all data streams into a single source of
                    truth.
                  </ActionItem>
                  <ActionItem title="Predictive Alerting">
                    AI-driven risk assessment and early warning systems.
                  </ActionItem>
                  <ActionItem title="Secure Communication">
                    End-to-end encrypted protocols for sensitive intel.
                  </ActionItem>
                </div>

                <a
                  href="#contact-form"
                  className="
                    mt-5
                    flex
                    h-9
                    w-full
                    items-center
                    justify-center
                    rounded
                    border
                    border-white/20
                    text-[11px]
                    font-semibold
                    text-slate-100
                    transition
                    hover:border-white/40
                    hover:bg-white/[0.03]
                  "
                >
                  Schedule Demo
                </a>
              </div>
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

export default Company;