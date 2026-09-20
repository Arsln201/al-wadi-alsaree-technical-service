"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "px-3 pt-3 sm:px-5"
          : "px-0 pt-0"
      }`}
    >
      <div
        className={`container transition-all duration-500 ${
          scrolled
            ? "rounded-2xl border border-black/10 bg-[#f5f4ef]/90 shadow-xl shadow-black/5 backdrop-blur-xl"
            : ""
        }`}
      >
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-500 ${
            scrolled ? "min-h-[68px] px-4 sm:px-5" : "min-h-[82px]"
          }`}
        >
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="A L WADI ALSAREE Technical Service L.L.C"
            className="group flex flex-col leading-none"
          >
            <span
              className={`font-extrabold tracking-[-0.04em] text-[#C99A45] transition-all duration-500 group-hover:text-[#101312] ${
                scrolled
                  ? "text-[18px] sm:text-[21px]"
                  : "text-[20px] sm:text-[25px]"
              }`}
            >
              AL WADI ALSAREE
            </span>

            <span className="mt-1.5 text-[7px] font-bold tracking-[0.14em] text-[#101312]/65 transition-colors duration-300 group-hover:text-[#C99A45] sm:text-[9px]">
              TECHNICAL SERVICE L.L.C
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {links.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                className="group relative flex items-center gap-2 py-2 text-sm font-medium text-black/60 transition-colors duration-300 hover:text-black"
              >
                <span className="text-[9px] text-[#C99A45] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  0{index + 1}
                </span>

                <span>{label}</span>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C99A45] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#101312] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C99A45] hover:text-[#101312] hover:shadow-lg hover:shadow-black/10"
            >
              <span>Get a quote</span>

              <span className="grid size-6 place-items-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-black/10">
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={`grid size-11 place-items-center rounded-full border border-black/10 bg-[#101312] text-white transition-all duration-500 hover:bg-[#C99A45] hover:text-[#101312] md:hidden ${
              open ? "rotate-90" : "rotate-0"
            }`}
          >
            {open ? (
              <X size={19} strokeWidth={2} />
            ) : (
              <Menu size={19} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            open
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-black/10 px-4 pb-5 pt-2 sm:px-5">
            {links.map(([label, href], index) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-black/10 py-4 text-lg font-medium text-[#101312] transition-colors duration-300 hover:text-[#C99A45]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[9px] text-[#C99A45]">
                    0{index + 1}
                  </span>

                  <span>{label}</span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={closeMenu}
              className="group mt-5 inline-flex items-center gap-3 rounded-full bg-[#101312] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C99A45] hover:text-[#101312]"
            >
              <span>Get a quote</span>

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}