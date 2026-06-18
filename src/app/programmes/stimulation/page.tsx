"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type PremiumTileProps = {
  children: ReactNode;
  className?: string;
};

function PremiumTile({ children, className = "" }: PremiumTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className={`
        group relative mt-10 overflow-hidden
        rounded-[2rem]
        border border-white/60
        bg-white/80
        backdrop-blur-md
        p-6 md:p-10
        shadow-[0_25px_70px_rgba(1,77,87,0.12)]
        transition-all duration-500
        hover:shadow-[0_35px_90px_rgba(1,77,87,0.18)]
        ${className}
      `}
    >
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function StimulationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 pb-16 md:pt-36">
      <section className="mx-auto max-w-7xl px-4 md:px-8">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="font-bold uppercase tracking-widest text-[#7ab648]">
            Programme
          </p>

          <motion.h1 className="mt-4 text-4xl font-black leading-[1.05] md:text-6xl">
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-[#014d57]"
            >
              EARLY CHILDHOOD
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="block text-[#7ab648]"
            >
              STIMULATION
            </motion.span>
          </motion.h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            The Stimulation Programme provides specialised early childhood
            support for children with diverse developmental needs, building
            a strong foundation for lifelong learning, participation and
            independence.
          </p>
        </motion.div>

        {/* PROGRAMME OVERVIEW */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Programme Overview
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            The programme serves children aged 4–10 years with a range of
            developmental conditions including intellectual disabilities,
            cerebral palsy, Down syndrome, multiple disabilities and ADHD.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Children present with varying levels of need, from mild to
            profound, and receive individualised support tailored to their
            developmental stage.
          </p>
        </PremiumTile>

        {/* OBJECTIVES */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Programme Objectives
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Through early intervention, the programme aims to maximise each
            child’s developmental potential and support holistic growth.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Cognitive Development",
              "Physical Development",
              "Social Development",
              "Emotional Wellbeing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-semibold text-[#014d57]">{item}</p>
              </div>
            ))}
          </div>
        </PremiumTile>

        {/* PROGRAMME DETAILS */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Programme Details
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
              <h3 className="font-bold text-[#014d57]">Age Group</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                4–10 Years
              </p>
            </div>

            <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
              <h3 className="font-bold text-[#014d57]">Duration</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                1 Year
              </p>
            </div>

            <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
              <h3 className="font-bold text-[#014d57]">Annual Capacity</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                30 Learners
              </p>
            </div>
          </div>
        </PremiumTile>

        {/* KEY ACTIVITIES */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Key Activities
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Speech & Language Development",
              "Activities of Daily Living (ADL)",
              "Pre-Literacy Skills",
              "Pre-Writing Skills",
              "Physical Education",
              "Motor Development",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-medium text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </PremiumTile>

        {/* ADMISSION */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Admission Requirements
          </h2>

          <ul className="mt-4 space-y-3 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            <li>• Child medical card, 0–5 years</li>
            <li>• Psychometric assessment by a recognised educational psychologist</li>
            <li>• Copy of the child&apos;s birth certificate</li>
            <li>• Parent or caregiver involvement during the process</li>
          </ul>
        </PremiumTile>

        {/* OUTCOMES */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -6 }}
          className="relative mt-10 mb-20 overflow-hidden rounded-[2rem] bg-[#014d57] p-6 text-white shadow-[0_25px_70px_rgba(1,77,87,0.2)] transition-all duration-500 hover:shadow-[0_35px_90px_rgba(1,77,87,0.28)] md:p-10"
        >
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-white" />

          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold">
              Outcomes & Transition
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
              At the end of each academic year, learners are assessed for
              school readiness. Children who are ready are referred to the
              Central Resource Centre (CRC) for placement in either a special
              education unit or a mainstream school within their community.
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
              The programme plays a critical role in preparing children for
              formal education and improving participation in school and
              community life.
            </p>
          </div>
        </motion.div>

      </section>
    </main>
  );
}
























