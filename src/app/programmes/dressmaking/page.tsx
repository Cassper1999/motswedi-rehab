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

function SmallTile({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {children}
    </div>
  );
}

export default function DressmakingPage() {
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
            Vocational Training Programme
          </p>

          <motion.h1 className="mt-4 text-4xl font-black leading-[1.05] md:text-6xl">
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-[#014d57]"
            >
              SKILLS &
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="block text-[#7ab648]"
            >
              DRESSMAKING
            </motion.span>
          </motion.h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            The Skills and Dressmaking Programme at Motswedi Rehabilitation
            Centre is a full-time, two-year vocational training programme
            designed to equip persons with disabilities with practical and
            theoretical skills in garment construction and tailoring.
          </p>
        </motion.div>

        {/* QUICK DETAILS */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SmallTile>
              <h3 className="font-bold text-[#014d57]">Duration</h3>
              <p className="mt-4 text-gray-600">2 Years</p>
            </SmallTile>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <SmallTile>
              <h3 className="font-bold text-[#014d57]">Accreditation</h3>
              <p className="mt-4 text-gray-600">
                Botswana Qualifications Authority, BQA
              </p>
            </SmallTile>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <SmallTile>
              <h3 className="font-bold text-[#014d57]">Training Type</h3>
              <p className="mt-4 text-gray-600">
                Practical & Theoretical Instruction
              </p>
            </SmallTile>
          </motion.div>
        </div>

        {/* PROGRAMME OVERVIEW */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Programme Overview
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            The programme is registered and accredited by the Botswana
            Qualifications Authority, BQA, ensuring training meets national
            vocational standards. Learners receive both practical and
            theoretical instruction that prepares them for meaningful
            participation in the textile and clothing industry.
          </p>
        </PremiumTile>

        {/* TARGET GROUP */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Target Group
          </h2>

          <ul className="mt-4 space-y-3 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            <li>• Trainable youth with moderate intellectual disabilities</li>
            <li>• Able to communicate verbally</li>
            <li>• Able to understand and follow instructions</li>
            <li>• Able to handle tools and materials safely</li>
            <li>• Able to remain active and engaged during training</li>
          </ul>
        </PremiumTile>

        {/* TRAINING & ASSESSMENT */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Training & Assessment
          </h2>

          <ul className="mt-4 space-y-3 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            <li>
              • Continuous practical and theoretical training throughout the
              two-year programme
            </li>
            <li>
              • Final examinations conducted at the end of the programme
            </li>
            <li>
              • Assessment carried out by BQA registered and accredited
              assessors
            </li>
          </ul>
        </PremiumTile>

        {/* INDUSTRIAL ATTACHMENT */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -6 }}
          className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#014d57] p-6 text-white shadow-[0_25px_70px_rgba(1,77,87,0.2)] transition-all duration-500 hover:shadow-[0_35px_90px_rgba(1,77,87,0.28)] md:p-12"
        >
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-white" />

          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl font-black">
              Industrial Attachment
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
              To strengthen workplace readiness, trainees participate in
              industrial attachment placements for two weeks before final
              examinations and two weeks after final examinations.
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
              These placements provide real-world experience and build confidence
              in applying acquired skills within professional work environments.
            </p>
          </div>
        </motion.section>

        {/* PROGRAMME IMPACT */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Programme Impact
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            The programme equips graduates with practical vocational skills
            that increase employability and support quicker entry into the
            workforce compared to traditional academic pathways.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              "Reduced unemployment among persons with disabilities",
              "Increased independence and self-reliance",
              "Income generation opportunities",
              "Entrepreneurship and broader economic participation",
            ].map((item) => (
              <SmallTile key={item}>
                <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                  {item}
                </p>
              </SmallTile>
            ))}
          </div>
        </PremiumTile>

        {/* CAREER OPPORTUNITIES */}
        <PremiumTile className="mb-20">
          <h2 className="text-3xl font-bold text-[#014d57]">
            Career Opportunities
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Graduates are prepared for diverse career pathways including:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              "Employment in Dressmaking Businesses",
              "Self Employment",
              "Small Scale Production Ventures",
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
