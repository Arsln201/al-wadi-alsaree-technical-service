import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import MotionReveal from "../components/MotionReveal";
import Hero3DWrapper from "../components/Hero3DWrapper";
import Parallax from "../components/Parallax";
import MagneticButton from "../components/MagneticButton";
import ServiceHover from "../components/ServiceHover";
import ProjectHover from "../components/ProjectHover";
import SectionGlow from "../components/SectionGlow";

const services = [
  [
    "01",
    "Technical Maintenance",
    "Reliable technical support and maintenance solutions for residential and commercial requirements.",
  ],
  [
    "02",
    "Electrical Services",
    "Professional electrical inspection, installation, repair and maintenance support.",
  ],
  [
    "03",
    "Plumbing Services",
    "Practical plumbing solutions focused on quality workmanship and dependable service.",
  ],
  [
    "04",
    "AC & HVAC Services",
    "Maintenance and service support for comfortable, efficient indoor environments.",
  ],
  [
    "05",
    "Painting & Finishing",
    "Clean, professional finishing work for spaces that need a refreshed appearance.",
  ],
  [
    "06",
    "General Technical Services",
    "Flexible technical assistance tailored to the needs of each property and client.",
  ],
];

export default function Home() {
  return (
    <main>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[92svh] overflow-hidden bg-[#101312] text-[#f5f4ef] sm:min-h-[88vh]">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=85"
          alt="Modern building"
          fill
          priority
          className="object-cover opacity-25 transition-transform duration-[2000ms]"
          sizes="100vw"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(201,163,90,0.16),transparent_28%),linear-gradient(90deg,#101312_0%,rgba(16,19,18,0.92)_42%,rgba(16,19,18,0.48)_100%)]" />

        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -right-48 top-[18%] size-[620px] rounded-full bg-[#c9a35a]/10 blur-[140px]" />

        {/* Secondary glow */}
        <div className="pointer-events-none absolute -left-40 bottom-[-20%] size-[500px] rounded-full bg-[#c9a35a]/[0.04] blur-[130px]" />

        {/* Technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.065]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          }}
        />

        {/* Technical corner details */}
        <div className="pointer-events-none absolute right-8 top-32 hidden h-24 w-24 border-r border-t border-[#c9a35a]/30 lg:block" />

        <div className="pointer-events-none absolute bottom-20 left-8 hidden h-20 w-20 border-b border-l border-white/10 lg:block" />

        {/* 3D object */}
        <Hero3DWrapper />

        <div className="container relative flex min-h-[88vh] flex-col justify-end pb-10 pt-36 sm:pb-12">
          <MotionReveal className="relative z-10 max-w-5xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c9a35a]" />

              <span className="eyebrow text-white/65">
                Technical Service • UAE
              </span>
            </div>

            {/* Main heading */}
            <h1 className="display mt-7 max-w-5xl text-[13vw] leading-[0.95] sm:text-[10vw] lg:text-[7vw]">
              Technical service
              <br />
              built around{" "}
              <span className="relative inline-block text-[#c9a35a]">
                reliability.
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[#c9a35a]/70 transition-transform duration-700 group-hover:scale-x-100" />
              </span>
            </h1>

            {/* Supporting line */}
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Practical technical services with a focus on dependable
              workmanship, professional execution and client-focused support.
            </p>

            {/* CTA */}
            <MotionReveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <MagneticButton>
                <Link
                 href="#contact"
                 className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#f5f4ef] px-6 py-4 text-sm font-semibold text-[#101312] transition-all duration-500 hover:-translate-y-1 hover:bg-[#c9a35a] hover:shadow-2xl hover:shadow-black/20"
                  >
                  <span>Request a quote</span>

                  <span className="grid size-7 place-items-center rounded-full bg-black/[0.07] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
                </MagneticButton>

                <Link
                  href="#services"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-3 px-2 py-3 text-sm text-white/70 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span>Explore services</span>

                  <span className="grid size-7 place-items-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#c9a35a] group-hover:bg-[#c9a35a] group-hover:text-[#101312]">
                    <ArrowDownRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    />
                  </span>
                </Link>
              </div>
            </MotionReveal>
          </MotionReveal>

          {/* Trust strip */}
          <MotionReveal
            delay={0.35}
            className="relative z-10 mt-16 border-t border-white/15 pt-6"
          >
            <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-6">
              {[
                "Professional service",
                "Quality workmanship",
                "Reliable support",
                "Client focused",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.15em] text-[#c9a35a]">
                      0{index + 1}
                    </span>

                    <span className="h-px w-6 bg-white/15 transition-all duration-300 group-hover:w-10 group-hover:bg-[#c9a35a]" />
                  </div>

                  <p className="mt-2 text-xs text-white/55 transition-colors duration-300 group-hover:text-white/85 sm:text-sm">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>

          {/* Scroll indicator */}
          <MotionReveal
            delay={0.55}
            className="absolute bottom-8 right-6 z-10 hidden md:block"
          >
            <Link
              href="#about"
              className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/35 transition-colors duration-300 hover:text-white/70"
            >
              <span>Scroll to explore</span>

              <span className="relative h-10 w-px overflow-hidden bg-white/15">
                <span className="absolute left-0 top-0 h-1/2 w-full animate-pulse bg-[#c9a35a]" />
              </span>
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}
      <SectionGlow>
  <section id="about" className="section-pad relative overflow-hidden">
        {/* Decorative background number */}
        <div className="pointer-events-none absolute -right-8 top-16 select-none text-[180px] font-semibold leading-none tracking-[-0.1em] text-black/[0.025] sm:text-[240px] lg:text-[320px]">
          01
        </div>

        <div className="container relative">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Left column */}
            <MotionReveal>
              <div className="relative lg:sticky lg:top-32 lg:self-start">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[#c9a35a]" />

                  <span className="eyebrow">
                    About the company
                  </span>
                </div>

                <div className="mt-10 hidden lg:block">
                  <div className="relative h-32 w-px overflow-hidden bg-black/10">
                    <MotionReveal delay={0.2}>
                      <div className="h-16 w-px bg-[#c9a35a]" />
                    </MotionReveal>
                  </div>

                  <p className="mt-6 max-w-xs text-xs uppercase leading-6 tracking-[0.14em] text-[#737874]">
                    Technical service
                    <br />
                    Professional execution
                    <br />
                    Reliable support
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* Right column */}
            <MotionReveal delay={0.12}>
              <div>
                <h2 className="max-w-5xl text-4xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-[72px]">
                  Practical solutions.
                  <br />

                  <span className="text-[#737874]">
                    Professional execution.
                  </span>

                  <br />

                  <span className="relative inline-block">
                    Service you can depend on.
                    <span className="absolute -bottom-3 left-0 h-px w-16 bg-[#c9a35a] sm:w-24" />
                  </span>
                </h2>

                <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-[1fr_auto] sm:items-start">
                  <p className="max-w-2xl text-sm leading-8 text-[#737874] sm:text-base">
                    We provide technical support across a range of building maintenance needs,&apos;s
                    with a focus on quality execution, attention to detail, and dependable service. Our team
                    works to understand each client's requirements and deliver efficient solutions suited
                    to the property and scope of work.
                  </p>

                  <span className="text-xs uppercase tracking-[0.16em] text-[#c9a35a]">
                    UAE
                  </span>
                </div>

                <Link
                  href="#services"
                  className="group mt-10 inline-flex items-center gap-4"
                >
                  <span className="relative text-sm font-semibold">
                    Discover our approach

                    <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-100 bg-black/15 transition-transform duration-500 group-hover:scale-x-0" />
                  </span>

                  <span className="grid size-10 place-items-center rounded-full border border-black/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#c9a35a] group-hover:bg-[#c9a35a]">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
      </SectionGlow>
      {/* =========================================================
          SERVICES
      ========================================================== */}
      <SectionGlow>
  <section
    id="services"
    className="section-pad relative overflow-hidden"
  >
        {/* Background detail */}
        <div className="pointer-events-none absolute -right-20 top-20 size-[420px] rounded-full bg-[#c9a35a]/[0.035] blur-[120px]" />

        <div className="container relative">
          <MotionReveal>
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[#c9a35a]" />

                  <span className="eyebrow">
                    Our services
                  </span>
                </div>

                <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Technical support
                  <br />

                  <span className="text-[#737874]">
                    without the noise.
                  </span>
                </h2>
              </div>

              <p className="max-w-lg text-sm leading-7 text-[#737874] lg:justify-self-end lg:pb-1">
                A flexible service structure designed to present the
                company&apos;s technical capabilities clearly and
                professionally.
              </p>
            </div>
          </MotionReveal>

          {/* Service list */}
          <div className="mt-14 border-t border-black/10">
            {services.map(([number, title, text], index) => (
              <MotionReveal
  key={number}
  delay={index * 0.07}
>
             <ServiceHover>
              <div className="group relative overflow-hidden border-b border-black/10">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 top-1/2 size-56 -translate-y-1/2 rounded-full bg-[#c9a35a]/0 blur-[80px] transition-all duration-700 group-hover:bg-[#c9a35a]/[0.12]" />

                  {/* Large background number */}
                  <span className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 text-[110px] font-semibold leading-none tracking-[-0.08em] text-black/[0.025] transition-all duration-700 group-hover:-translate-x-5 group-hover:text-[#c9a35a]/[0.09] sm:text-[160px]">
                    {number}
                  </span>

                  {/* Gold hover line */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c9a35a] transition-all duration-700 ease-out group-hover:w-full" />

                  <div className="relative grid gap-6 py-8 transition-all duration-500 group-hover:px-3 sm:py-10 md:grid-cols-[70px_1fr_1.1fr_auto] md:items-center">
                    {/* Number */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-[#c9a35a]">
                        {number}
                      </span>

                      <span className="h-px w-0 bg-[#c9a35a] transition-all duration-500 group-hover:w-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-medium tracking-[-0.035em] transition-all duration-500 group-hover:translate-x-2 sm:text-3xl">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="max-w-lg text-sm leading-7 text-[#737874] transition-colors duration-500 group-hover:text-[#101312] md:pr-4">
                      {text}
                    </p>

                    {/* Arrow */}
                    <div className="flex justify-start md:justify-end">
                      <div className="grid size-12 shrink-0 place-items-center rounded-full border border-black/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#c9a35a] group-hover:bg-[#c9a35a]">
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ServiceHover>
              </MotionReveal>
            ))}
          </div>

          {/* Bottom service indicator */}
          <MotionReveal delay={0.25}>
            <div className="mt-7 flex flex-col gap-3 text-[10px] uppercase tracking-[0.17em] text-[#737874] sm:flex-row sm:items-center sm:justify-between">
              <span>
                Technical service capabilities
              </span>

              <span className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#c9a35a]" />

                <span>
                  {services.length.toString().padStart(2, "0")} services
                </span>
              </span>
            </div>
          </MotionReveal>
        </div>
      </section>
</SectionGlow>

      {/* =========================================================
          OUR APPROACH
      ========================================================== */}
      <SectionGlow>
  <section className="section-pad relative overflow-hidden">
        {/* Background number */}
        <div className="pointer-events-none absolute -left-10 top-10 select-none text-[180px] font-semibold leading-none tracking-[-0.1em] text-black/[0.025] sm:text-[240px] lg:text-[320px]">
          02
        </div>

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-40 top-1/3 size-[420px] rounded-full bg-[#c9a35a]/[0.035] blur-[120px]" />

        <div className="container relative">
          {/* Section heading */}
          <MotionReveal>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[#c9a35a]" />

                  <span className="eyebrow">
                    Our approach
                  </span>
                </div>

                <div className="mt-8 hidden lg:block">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#737874]">
                    02 / 04
                  </span>

                  <div className="mt-4 h-px w-28 bg-black/10">
                    <div className="h-px w-1/2 bg-[#c9a35a]" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                  A clear process.
                  <br />

                  <span className="text-[#737874]">
                    Professional execution.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-[#737874] sm:text-base">
                  From the first requirement to the final service,
                  every step is presented clearly so the work stays
                  focused, practical and easy to follow.
                </p>
              </div>
            </div>
          </MotionReveal>

          {/* Process */}
          <div className="relative mt-16 sm:mt-20">
            {/* Connecting line */}
            <div className="pointer-events-none absolute left-[23px] top-8 hidden h-[calc(100%-64px)] w-px bg-black/10 md:block">
              <div className="h-1/2 w-px bg-[#c9a35a]" />
            </div>

            <div className="border-t border-black/10">
              {[
                [
                  "01",
                  "Understand",
                  "Start by understanding the requirement, property needs and the work that needs to be addressed.",
                ],
                [
                  "02",
                  "Plan",
                  "Organise the required work into a practical service approach with clear communication.",
                ],
                [
                  "03",
                  "Execute",
                  "Carry out the service with attention to workmanship, detail and professional execution.",
                ],
                [
                  "04",
                  "Complete",
                  "Finish the requirement with a clear focus on quality, communication and dependable support.",
                ],
              ].map(([number, title, text], index) => (
                <MotionReveal
                  key={number}
                  delay={index * 0.08}
                >
                  <div className="group relative border-b border-black/10">
                    {/* Hover background */}
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-[#c9a35a]/[0.035] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Gold hover line */}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c9a35a] transition-all duration-700 ease-out group-hover:w-full" />

                    <div className="grid gap-6 py-8 md:grid-cols-[70px_1fr_1.4fr_auto] md:items-center md:gap-8 md:py-10">
                      {/* Number */}
                      <div className="relative flex items-center gap-3">
                        <span className="grid size-11 place-items-center rounded-full border border-black/10 bg-[#f5f4ef] text-[10px] font-medium text-[#c9a35a] transition-all duration-500 group-hover:border-[#c9a35a] group-hover:bg-[#c9a35a] group-hover:text-[#101312]">
                          {number}
                        </span>

                        <span className="h-px w-0 bg-[#c9a35a] transition-all duration-500 group-hover:w-8" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-medium tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                        {title}
                      </h3>

                      {/* Description */}
                      <p className="max-w-xl text-sm leading-7 text-[#737874] transition-colors duration-500 group-hover:text-[#101312]">
                        {text}
                      </p>

                      {/* Arrow */}
                      <div className="flex justify-start md:justify-end">
                        <div className="grid size-12 shrink-0 place-items-center rounded-full border border-black/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#c9a35a] group-hover:bg-[#c9a35a]">
                          <ArrowUpRight
                            size={17}
                            className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>

          {/* Bottom statement */}
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-6 text-[#737874] sm:text-sm">
                A structured service journey designed to keep
                communication clear and the work focused.
              </p>

              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#737874]">
                <span className="h-px w-8 bg-[#c9a35a]" />

                <span>Professional execution</span>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
</SectionGlow>
      {/* =========================================================
          PROJECTS
      ========================================================== */}
      <section
        id="projects"
        className="section-pad relative overflow-hidden bg-[#101312] text-white"
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute -right-40 top-20 size-[520px] rounded-full bg-[#c9a35a]/[0.08] blur-[140px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 size-[420px] rounded-full bg-white/[0.025] blur-[120px]" />

        <div className="container relative">
          {/* Heading */}
          <MotionReveal>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-[#c9a35a]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9a35a]">
                    Selected work
                  </span>
                </div>

                <div className="mt-8 hidden lg:block">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                    03 / 04
                  </span>

                  <div className="mt-4 h-px w-28 bg-white/10">
                    <div className="h-px w-1/2 bg-[#c9a35a]" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                  Work that speaks
                  <br />

                  <span className="text-white/35">
                    through execution.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                  A selection of technical service work and project
                  capabilities. Detailed project information can be
                  added as the company portfolio develops.
                </p>
              </div>
            </div>
          </MotionReveal>

          {/* Project cards */}
          <div className="mt-16 space-y-5 sm:mt-20">
            {[
              {
                number: "01",
                title: "Technical Service",
                category: "Maintenance & Support",
                description:
                  "Practical technical service support focused on organised execution, clear communication and dependable completion.",
                label: "Service capability",
              },
              {
                number: "02",
                title: "Property Support",
                category: "Technical Works",
                description:
                  "Structured support for property-related technical requirements, with attention to detail throughout the service process.",
                label: "Service capability",
              },
              {
                number: "03",
                title: "Project Execution",
                category: "Technical Solutions",
                description:
                  "A focused approach to completing technical requirements with professional coordination from initial planning through completion.",
                label: "Service capability",
              },
            ].map((project, index) => (
              <MotionReveal
  key={project.number}
  delay={index * 0.1}
>
  <ProjectHover>
    <article className="group relative overflow-hidden rounded-[22px] sm:rounded-[28px] border border-white/10 bg-white/[0.035] transition-all duration-700 hover:-translate-y-1 hover:border-[#c9a35a]/40">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[#c9a35a]/0 blur-[80px] transition-all duration-700 group-hover:bg-[#c9a35a]/10" />

                  {/* Gold edge */}
                  <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#c9a35a] transition-transform duration-700 group-hover:scale-y-100" />

                  <div className="grid min-h-[340px] lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Visual panel */}
                    <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 lg:min-h-[340px] lg:border-b-0 lg:border-r">
                      {/* Grid */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                          backgroundSize: "42px 42px",
                        }}
                      />

                      {/* Main technical shape */}
                      <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rotate-12 border border-[#c9a35a]/60 transition-transform duration-1000 group-hover:rotate-[32deg] group-hover:scale-110 sm:size-40">
                        <div className="absolute inset-4 border border-white/20" />

                        <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a35a] bg-[#101312] shadow-[0_0_35px_rgba(201,163,90,0.18)] sm:size-12">
                          <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a35a]" />
                        </div>
                      </div>

                      {/* Orbit lines */}
                      <div className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a35a]/20 transition-transform duration-1000 group-hover:scale-125 sm:size-64" />

                      <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] transition-transform duration-1000 group-hover:scale-110" />

                      {/* Project number */}
                      <div className="absolute left-6 top-6 flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a35a]">
                          Project
                        </span>

                        <span className="h-px w-8 bg-[#c9a35a]/50" />

                        <span className="text-[10px] text-white/35">
                          {project.number}
                        </span>
                      </div>

                      {/* Bottom label */}
                      <div className="absolute bottom-6 left-6">
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-white/45 backdrop-blur-md">
                          {project.label}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-12">
                      <div>
                        <div className="flex items-center justify-between gap-5">
                          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#c9a35a]">
                            {project.category}
                          </span>

                          <span className="text-[10px] tabular-nums text-white/25">
                            0{index + 1}
                          </span>
                        </div>

                        <h3 className="mt-8 max-w-xl text-3xl font-medium tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl lg:text-5xl">
                          {project.title}
                        </h3>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 transition-colors duration-500 group-hover:text-white/65 sm:text-base">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-12 flex items-end justify-between gap-6">
                        <div>
                          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                            Status
                          </span>

                          <div className="mt-2 flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-[#c9a35a]" />

                            <span className="text-xs text-white/55">
                              Portfolio capability
                            </span>
                          </div>
                        </div>

                        <div className="grid size-14 shrink-0 place-items-center rounded-full border border-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#c9a35a] group-hover:bg-[#c9a35a] group-hover:text-[#101312]">
                          <ArrowUpRight
                            size={18}
                            className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </ProjectHover>
              </MotionReveal>
            ))}
          </div>

          {/* Bottom note */}
          <MotionReveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-6 text-white/35 sm:text-sm">
                We will showcase completed projects, detailed case studies,
                and project images as portfolio materials become 
                available.
                
              </p>

              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/30">
                <span className="h-px w-8 bg-[#c9a35a]" />

                <span>Built with purpose</span>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================== */}
      <section
        id="contact"
        className="section-pad relative overflow-hidden"
      >
        {/* Background detail */}
        <div className="pointer-events-none absolute -right-20 top-20 size-80 rounded-full bg-[#c9a35a]/[0.04] blur-[100px]" />

        <div className="container relative">
          <MotionReveal>
            <div className="group relative overflow-hidden rounded-[30px] bg-[#c9a35a] p-7 sm:p-12 lg:p-16">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-white/20 blur-[80px] transition-transform duration-[1200ms] group-hover:scale-125" />

              <div className="pointer-events-none absolute -bottom-40 -left-32 size-96 rounded-full bg-black/10 blur-[100px]" />

              {/* Grid texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "70px 70px",
                }}
              />

              {/* Corner frame */}
              <div className="pointer-events-none absolute right-6 top-6 hidden h-20 w-20 border-r border-t border-black/15 sm:block" />

              <div className="relative">
                {/* Heading */}
                <div className="max-w-5xl">
                  <span className="eyebrow text-black/60">
                    Start a conversation
                  </span>

                  <h2 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[78px]">
                    Let&apos;s talk about
                    <br />
                    your next requirement.
                  </h2>
                </div>

                {/* Lower area */}
                <div className="mt-12 grid gap-10 border-t border-black/15 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <MotionReveal delay={0.15}>
                    <div>
                      <p className="max-w-xl text-sm leading-7 text-black/65 sm:text-base">
                        Have a technical service requirement or want to
                        discuss a project? Get in touch and start the
                        conversation.
                      </p>

                      {/* Contact details */}
                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        <div>
                          <span className="text-[9px] uppercase tracking-[0.18em] text-black/45">
                            Phone
                          </span>

                          <a
                            href="tel:+97172077082"
                            className="mt-2 block w-fit text-sm font-medium transition-transform duration-300 hover:translate-x-1"
                          >
                            +971 72 07 7082
                          </a>
                        </div>

                        <div>
                          <span className="text-[9px] uppercase tracking-[0.18em] text-black/45">
                            Email
                          </span>

                          <a
                            href="mailto:motiur@alwadiservice.com"
                            className="mt-2 block w-fit text-sm font-medium transition-transform duration-300 hover:translate-x-1"
                          >
                            motiur@alwadiservice.com
                          </a>
                        </div>

                        <div>
                          <span className="text-[9px] uppercase tracking-[0.18em] text-black/45">
                            Location
                          </span>

                          <p className="mt-2 text-sm font-medium">
                            Office no 42 Hor Al Anz, Ras Al Khaimah 
                          </p>
                        </div>

                        <div>
                          <span className="text-[9px] uppercase tracking-[0.18em] text-black/45">
                            Availability
                          </span>

                          <p className="mt-2 text-sm font-medium">
                            Open for enquiries
                          </p>
                        </div>
                      </div>
                    </div>
                  </MotionReveal>

                  {/* CTA */}
                  <MotionReveal delay={0.25}>
                    <a
                      href="mailto:motiur@alwadiservice.com"
                      className="group/button relative inline-flex w-fit items-center gap-4 overflow-hidden rounded-full bg-[#101312] px-7 py-4 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-[#1c211f] hover:shadow-2xl hover:shadow-black/20"
                    >
                      <span className="relative z-10">
                        Send an enquiry
                      </span>

                      <span className="relative z-10 grid size-8 place-items-center rounded-full bg-white/10 transition-all duration-500 group-hover/button:bg-[#c9a35a] group-hover/button:text-[#101312]">
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-500 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                        />
                      </span>
                    </a>
                  </MotionReveal>
                </div>

                {/* Bottom micro text */}
                <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-5 text-[10px] uppercase tracking-[0.16em] text-black/40 sm:flex-row sm:items-center sm:justify-between">
                  <span>
                    Technical Service • UAE
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-black/40" />

                    <span>Professional service</span>
                  </span>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
              <footer className="border-t border-black/10 bg-[#f5f4ef] px-6 py-6">
          <div className="container flex flex-col items-center justify-between gap-3 text-center text-[10px] font-medium tracking-wide text-black/45 sm:flex-row sm:text-left">
            <p>
              © 2026 A L WADI ALSAREE TECHNICAL SERVICE L.L.C
            </p>

            <p>
              Developed by{" "}
              <a
                href="https://mirza-arsalan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#101312] transition-colors duration-300 hover:text-[#c9a35a]"
              >
                MARS
              </a>
            </p>
          </div>
        </footer>
    </main>
  );
}