import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

<footer className="border-t border-black/10 bg-[#101312] text-white">
  <div className="container py-16 sm:py-20">
    <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
      <div>
        <div>
          <div className="mb-6 h-px w-12 bg-[#c9a35a]" />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a35a]">
            Technical Service • UAE
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            A L WADI ALSAREE
            <br />
            <span className="text-white/45">
              TECHNICAL SERVICE L.L.C
            </span>
          </h2>
        </div>
      </div>

      <div>
        <div className="lg:pt-8">
          <p className="text-sm leading-7 text-white/45">
            A clean digital space for presenting the company, its
            services, capabilities and future project work.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-[#c9a35a]"
              >
                <span>{label}</span>

                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © 2026 A L WADI ALSAREE TECHNICAL SERVICE L.L.C
      </p>

      <div className="flex items-center gap-5">
        <span>Dubai, UAE</span>

        <Link
          href="#"
          className="transition-colors duration-300 hover:text-[#c9a35a]"
        >
          Back to top ↑
        </Link>
      </div>
    </div>

    <div className="mt-5 text-xs text-white/25">
      Maintained by Mars
    </div>
  </div>
</footer>