"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programmes", href: "/programmes" },
  { name: "Support Services", href: "/support-services" },
  { name: "Impact", href: "/impact" },
  { name: "Projects", href: "/projects" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`
          relative mx-auto flex max-w-7xl items-center justify-between
          rounded-[1.7rem] border px-5 py-4 transition-all duration-500 md:px-7
          ${
            scrolled
              ? "border-white/60 bg-white/85 shadow-[0_20px_70px_rgba(1,77,87,0.18)] backdrop-blur-xl"
              : "border-white/40 bg-white/35 shadow-[0_15px_50px_rgba(1,77,87,0.08)] backdrop-blur-md"
          }
        `}
      >
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/logos/motswedilogo.png"
            alt="Motswedi Rehabilitation Centre"
            width={170}
            height={70}
            priority
            className="h-auto w-36 md:w-40"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-semibold text-[#062f36] transition hover:text-[#6aa93b]"
              >
                {link.name}

                <span
                  className={`
                    absolute -bottom-2 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#7ab648] to-cyan-400 transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-2xl bg-[#6aa93b] px-6 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(106,169,59,0.35)] transition hover:-translate-y-0.5 hover:bg-[#5f9f34]"
          >
            Need Assistance?
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="relative z-[60] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/80 shadow-[0_15px_40px_rgba(1,77,87,0.18)] backdrop-blur-md lg:hidden"
        >
          <div className="relative h-5 w-6">
            <span
              className={`
                absolute left-0 top-0 h-[3px] w-6 rounded-full bg-[#014d57] transition-all duration-300
                ${open ? "translate-y-2 rotate-45" : ""}
              `}
            />
            <span
              className={`
                absolute left-0 top-2 h-[3px] w-6 rounded-full bg-[#014d57] transition-all duration-300
                ${open ? "opacity-0" : "opacity-100"}
              `}
            />
            <span
              className={`
                absolute left-0 top-4 h-[3px] w-6 rounded-full bg-[#014d57] transition-all duration-300
                ${open ? "-translate-y-2 -rotate-45" : ""}
              `}
            />
          </div>
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-0 top-[82px] z-50 w-[min(88vw,350px)] lg:hidden"
            >
              <div className="absolute -top-2 right-6 h-4 w-4 rotate-45 border-l border-t border-white/70 bg-white/95" />

              <div className="overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/95 shadow-[0_30px_90px_rgba(1,77,87,0.28)] backdrop-blur-xl">
                <div className="h-1.5 bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

                <div className="p-3">
                  <p className="px-4 pb-2 pt-2 text-xs font-black uppercase tracking-[0.22em] text-[#7ab648]">
                    Navigation
                  </p>

                  <div className="space-y-1">
                    {links.map((link) => {
                      const active = pathname === link.href;

                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`
                            group flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] transition-all duration-300
                            ${
                              active
                                ? "bg-[#eef8e9] font-black text-[#6aa93b]"
                                : "font-semibold text-[#062f36] hover:bg-[#eef8e9] hover:text-[#6aa93b]"
                            }
                          `}
                        >
                          <span>{link.name}</span>

                          <span
                            className={`
                              transition-all duration-300
                              ${
                                active
                                  ? "translate-x-0 opacity-100"
                                  : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                              }
                            `}
                          >
                            →
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-gray-100 p-3">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl bg-[#6aa93b] px-5 py-3 text-center text-sm font-black text-white shadow-[0_16px_40px_rgba(106,169,59,0.28)] transition hover:bg-[#5f9f34]"
                  >
                    Need Assistance?
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}