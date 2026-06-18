"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const helpActions = [
  {
    label: "WhatsApp Us",
    description: "Quick chat support",
    href: "https://wa.me/2675729340",
    icon: "💬",
    external: true,
  },
  {
    label: "Call Centre",
    description: "+267 5729340",
    href: "tel:+2675729340",
    icon: "📞",
    external: true,
  },
  {
    label: "Email Us",
    description: "Send an email",
    href: "mailto:motswedirehab@btcmail.com",
    icon: "✉️",
    external: true,
  },
  {
    label: "Contact Page",
    description: "Full contact form",
    href: "/contact",
    icon: "📝",
    external: false,
  },
];

export default function FloatingHelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[70] md:bottom-8 md:right-8">

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto mb-4 w-[min(90vw,360px)] overflow-hidden rounded-[2rem] border border-white/70 bg-white/95 shadow-[0_30px_90px_rgba(1,77,87,0.28)] backdrop-blur-xl"
          >
            <div className="h-1.5 bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

            <div className="relative overflow-hidden p-4">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100/60 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#7ab648]/20 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4 rounded-3xl bg-gradient-to-br from-[#014d57] via-[#01616d] to-[#028090] p-5 text-white shadow-[0_18px_45px_rgba(1,77,87,0.24)]">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7ab648]">
                    Need Assistance?
                  </p>

                  <h3 className="mt-2 text-2xl font-black leading-tight">
                    We are here to help.
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    Contact Motswedi Rehabilitation Centre for support,
                    programmes, partnerships or general enquiries.
                  </p>
                </div>

                <div className="space-y-2">
                  {helpActions.map((action, i) => {
                    const content = (
                      <motion.div
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="group flex items-center gap-3 rounded-2xl border border-[#014d57]/10 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eef8e9] hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7ab648] to-cyan-400 text-lg shadow-md">
                          {action.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-[#014d57]">
                            {action.label}
                          </p>

                          <p className="text-xs font-medium text-gray-500">
                            {action.description}
                          </p>
                        </div>

                        <span className="translate-x-2 text-[#7ab648] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          →
                        </span>
                      </motion.div>
                    );

                    if (action.external) {
                      return (
                        <a
                          key={action.label}
                          href={action.href}
                          target={action.href.startsWith("https") ? "_blank" : undefined}
                          rel={action.href.startsWith("https") ? "noopener noreferrer" : undefined}
                          onClick={() => setOpen(false)}
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={action.label}
                        href={action.href}
                        onClick={() => setOpen(false)}
                      >
                        {content}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto flex items-center justify-end gap-3">
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              className="hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm font-bold text-[#014d57] shadow-[0_18px_50px_rgba(1,77,87,0.16)] backdrop-blur-md sm:block"
            >
              Need help?
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-[#7ab648] via-[#6aa93b] to-[#014d57] text-2xl text-white shadow-[0_22px_60px_rgba(1,77,87,0.32)]"
          aria-label="Open help menu"
        >
          <span className="absolute inset-0 rounded-[1.4rem] bg-white/20 opacity-0 transition group-hover:opacity-100" />

          {!open && (
            <>
              <span className="absolute inset-0 animate-ping rounded-[1.4rem] bg-[#7ab648]/30" />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-cyan-400" />
            </>
          )}

          <motion.span
            key={open ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            {open ? "×" : "?"}
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}