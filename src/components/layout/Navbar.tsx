
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programmes", href: "/programmes" },
  { name: "Support Services", href: "/support-services" },
  {
    name: "Centre Facilities and Services",
    href: "/centre-facilities-and-services",
  },
  { name: "Impact", href: "/impact" },
  { name: "Projects", href: "/projects" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 pt-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex max-w-[1400px] items-center justify-between px-0 py-2 md:px-4 md:py-3"
      >
        {/* LOGO — LARGER ON MOBILE */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative flex h-12 w-12 shrink-0 items-center justify-center xl:h-auto xl:w-auto xl:translate-x-[30px] xl:-translate-y-[20px]"
        >
          <Image
            src="/logos/motswedilogo-transparent.png"
            alt="Motswedi Rehabilitation Centre"
            width={120}
            height={120}
            priority
            className="h-[72px] w-[72px] max-w-none shrink-0 object-contain xl:h-[120px] xl:w-[120px]"
          />
        </Link>

        {/* DESKTOP NAV — ORIGINAL POSITIONING */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 xl:flex 2xl:gap-5"
          style={{
            marginLeft: "0px",
            marginTop: "-30px",
          }}
        >
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative whitespace-nowrap text-sm font-semibold text-[#062f36] transition hover:text-[#6aa93b] 2xl:text-[15px]"
              >
                {link.name}

                <span
                  className={`
                    absolute -bottom-2 left-0 h-[3px] rounded-full
                    bg-gradient-to-r from-[#7ab648] to-cyan-400
                    transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE HAMBURGER — 48PX × 48PX */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="motswedi-mobile-menu"
          className="relative z-[60] flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/85 shadow-[0_15px_40px_rgba(1,77,87,0.18)] backdrop-blur-md xl:hidden"
        >
          <div className="relative h-5 w-6">
            <span
              className={`
                absolute left-0 top-0 h-[3px] w-6 rounded-full
                bg-[#014d57] transition-all duration-300
                ${open ? "translate-y-2 rotate-45" : ""}
              `}
            />

            <span
              className={`
                absolute left-0 top-2 h-[3px] w-6 rounded-full
                bg-[#014d57] transition-all duration-300
                ${open ? "opacity-0" : "opacity-100"}
              `}
            />

            <span
              className={`
                absolute left-0 top-4 h-[3px] w-6 rounded-full
                bg-[#014d57] transition-all duration-300
                ${open ? "-translate-y-2 -rotate-45" : ""}
              `}
            />
          </div>
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="motswedi-mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-0 top-full z-50 mt-3 w-[min(88vw,370px)] xl:hidden"
            >
              <div className="absolute -top-2 right-6 h-4 w-4 rotate-45 border-l border-t border-white/70 bg-white/95" />

              <div className="overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/95 shadow-[0_30px_90px_rgba(1,77,87,0.28)] backdrop-blur-xl">
                <div className="h-1.5 bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

                <div className="max-h-[68vh] overflow-y-auto p-3">
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
                            group flex items-center justify-between rounded-2xl
                            px-4 py-3 text-[15px] transition-all duration-300
                            ${
                              active
                                ? "bg-[#eef8e9] font-black text-[#6aa93b]"
                                : "font-semibold text-[#062f36] hover:bg-[#eef8e9] hover:text-[#6aa93b]"
                            }
                          `}
                        >
                          <span>{link.name}</span>

                          <span
                            aria-hidden="true"
                            className={`
                              ml-3 shrink-0 transition-all duration-300
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}


