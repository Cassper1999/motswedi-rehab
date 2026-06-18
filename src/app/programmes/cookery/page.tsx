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

function DarkTile({ children, className = "" }: PremiumTileProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className={`
        relative mt-10 overflow-hidden
        rounded-[2rem]
        bg-[#014d57]
        p-6 md:p-12
        text-white
        shadow-[0_25px_70px_rgba(1,77,87,0.2)]
        transition-all duration-500
        hover:shadow-[0_35px_90px_rgba(1,77,87,0.28)]
        ${className}
      `}
    >
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-white" />

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

function SmallTile({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {children}
    </div>
  );
}

export default function CookeryPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 pb-16 md:pt-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/images/programmes/motswedichef.webp"
          alt=""
          className="h-full w-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="font-bold uppercase tracking-widest text-[#7ab648]">
            Vocational Training Programme
          </p>

          <motion.h1 className="mt-4 text-4xl font-black leading-[1.05] md:text-6xl">
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-[#014d57]"
            >
              COOKERY &
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="block text-[#7ab648]"
            >
              HOUSEKEEPING
            </motion.span>
          </motion.h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            The Cookery & Housekeeping Programme at Motswedi Rehabilitation
            Centre equips trainees with intellectual and learning disabilities
            with practical vocational and life skills in food preparation,
            housekeeping and workplace readiness. The programme promotes
            independence, confidence and employability through both theoretical
            learning and hands-on practical training.
          </p>
        </motion.div>

        {/* PROGRAMME OVERVIEW */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Programme Overview
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            This two-year vocational training programme provides structured
            learning opportunities that enable trainees to develop practical
            cookery, housekeeping and workplace skills. Training combines
            classroom instruction with practical experience to support
            independence and prepare trainees for future employment
            opportunities.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            The programme is open to both male and female trainees aged
            16–36 years and accommodates up to 10 trainees.
          </p>
        </PremiumTile>

        {/* PROGRAMME STRUCTURE */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Programme Structure
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            During the first year, trainees are introduced to core cookery and
            housekeeping competencies through classroom instruction and
            practical activities. Learning is assessed through oral
            assessments, theory tests and practical examinations.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Trainees complete six assessments annually, including mid-term
            tests and end-of-term examinations. To support continuous
            development, monthly progress reports are conducted for each
            trainee while term reports are shared with parents and caregivers.
          </p>
        </PremiumTile>

        {/* ACCREDITATION */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Accreditation & Assessment
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            The programme is assessed in line with standards established by
            the Botswana Qualifications Authority, BQA, and offers a Level 1
            qualification in Cookery and Housekeeping.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Final examinations are written at Motswedi Rehabilitation Centre.
            External examiners from institutions such as Molefi Senior
            Secondary School and Sedibelo Junior Secondary School are engaged
            to ensure fairness, quality assurance and compliance with
            assessment standards.
          </p>
        </PremiumTile>

        {/* INDUSTRIAL ATTACHMENT */}
        <DarkTile>
          <h2 className="text-4xl font-black">
            Industrial Attachment
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
            To provide practical workplace exposure, trainees participate in a
            four-week industrial attachment programme.
          </p>

          <ul className="mt-4 space-y-3 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
            <li>• Two weeks before final examinations</li>
            <li>• Two weeks after final examinations</li>
          </ul>

          <p className="mt-4 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
            These attachments allow trainees to apply their skills in real
            hospitality and housekeeping environments while building
            confidence, workplace experience and professional readiness.
          </p>
        </DarkTile>

        {/* IMPACT */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Impact
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Industrial attachment placements have provided trainees with
            valuable workplace exposure and positive learning experiences.
            Hospitality establishments have demonstrated interest in the
            skills and abilities shown by trainees during attachment periods.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Increased independence",
              "Improved employability skills",
              "Workplace experience",
              "Community participation",
            ].map((item) => (
              <SmallTile key={item}>
                <p className="font-medium text-gray-600">
                  {item}
                </p>
              </SmallTile>
            ))}
          </div>
        </PremiumTile>

        {/* CHALLENGES */}
        <DarkTile>
          <h2 className="text-4xl font-black">
            Challenges & Opportunities
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
            Although hospitality employers have shown interest in employing
            trainees, economic constraints and limited financial resources
            within the sector can sometimes affect long-term employment
            opportunities.
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
            Despite these challenges, the programme continues to prepare
            trainees with practical skills that support independence,
            employability and meaningful participation within their
            communities.
          </p>
        </DarkTile>

        {/* CAREER PATHWAYS */}
        <PremiumTile className="mb-20">
          <h2 className="text-4xl font-black text-[#014d57]">
            Career Pathways
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Catering Services",
              "Hospitality Industry",
              "Self Employment",
            ].map((item) => (
              <SmallTile key={item}>
                <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                  {item}
                </p>
              </SmallTile>
            ))}
          </div>
        </PremiumTile>

      </section>
    </main>
  );
}