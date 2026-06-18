"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type TileProps = {
  children: ReactNode;
  className?: string;
};

function PremiumTile({ children, className = "" }: TileProps) {
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

function DarkTile({ children, className = "" }: TileProps) {
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
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="
        rounded-3xl
        border border-[#014d57]/10
        bg-white/90
        p-6
        shadow-[0_18px_45px_rgba(1,77,87,0.12)]
        backdrop-blur-md
        transition-all duration-300
        hover:bg-white
        hover:shadow-[0_25px_60px_rgba(1,77,87,0.18)]
      "
    >
      {children}
    </motion.div>
  );
}

export default function ProjectsPage() {
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
            Sustainability Initiatives
          </p>

          <motion.h1 className="mt-4 text-4xl font-black leading-[1.05] md:text-6xl">
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-[#014d57]"
            >
              INCOME
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="block text-[#7ab648]"
            >
              GENERATING
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-[#014d57]"
            >
              PROJECTS
            </motion.span>
          </motion.h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Motswedi Rehabilitation Centre continues to develop sustainable
            initiatives that strengthen the long-term growth of the organisation
            while creating practical learning opportunities, skills development
            and community participation.
          </p>
        </motion.div>

        {/* INTRO */}
        <PremiumTile>
          <h2 className="text-3xl font-bold text-[#014d57]">
            Building Sustainability
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            These projects are designed not only to generate income but also
            to provide meaningful participation opportunities, practical
            learning experiences and vocational development for programme
            beneficiaries.
          </p>
        </PremiumTile>

        {/* PROJECTS */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          <PremiumTile className="mt-0">
            <h2 className="text-3xl font-bold text-[#014d57]">
              Sewing Project
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
              The Sewing Project provides affordable sewing and garment-related
              services to individuals, schools, businesses and community
              members while supporting operational sustainability.
            </p>

            <div className="mt-8 space-y-3 text-base font-medium text-gray-700 md:text-lg">
              <p>• Clothing repairs and alterations</p>
              <p>• School uniform production</p>
              <p>• Embroidery services</p>
              <p>• Custom sewing services</p>
            </div>
          </PremiumTile>

          <PremiumTile className="mt-0">
            <h2 className="text-3xl font-bold text-[#014d57]">
              Fish Farming Project
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
              The Fish Farming Project is a newly established initiative focused
              on sustainable income generation through agriculture and long-term
              project development.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
              The centre is currently breeding fish and preparing for future
              production that will contribute towards programme development and
              operational sustainability.
            </p>
          </PremiumTile>

        </div>

       {/* VISION */}
<div className="mt-12">
  <motion.h2 className="text-left text-4xl font-black leading-[1.05] md:text-5xl lg:text-center">
    <motion.span
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="block text-[#014d57]"
    >
      WHY THESE
    </motion.span>

    <motion.span
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.8 }}
      className="block text-[#7ab648]"
    >
      PROJECTS
    </motion.span>

    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="block text-[#014d57]"
    >
      MATTER
    </motion.span>
  </motion.h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Strengthen Financial Sustainability",
              "Support Programme Development",
              "Promote Practical Participation",
              "Create Vocational Learning Opportunities",
              "Reduce Dependence On External Funding",
              "Encourage Innovation & Self-Reliance",
            ].map((item) => (
              <SmallTile key={item}>
                <p className="text-base font-bold leading-relaxed text-[#014d57] md:text-lg">
                  {item}
                </p>
              </SmallTile>
            ))}
          </div>
        </div>

        {/* CTA */}
        <DarkTile className="mb-24 bg-gradient-to-br from-[#014d57] via-[#01616d] to-[#028090]">
          <motion.h2 className="text-4xl font-black leading-[1.05] md:text-5xl">
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="block text-white"
            >
              OUR
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="block text-[#7ab648]"
            >
              SHARED
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-white"
            >
              VISION
            </motion.span>
          </motion.h2>

          <p className="mt-4 text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
            Through these initiatives, Motswedi Rehabilitation Centre aims to
            build a more resilient, empowered and sustainable rehabilitation
            environment while creating opportunities for children, youth and
            adults living with disabilities.
          </p>

          <p className="mt-6 text-lg font-semibold text-white md:text-xl">
            Creating opportunities today. Building sustainability for tomorrow.
          </p>
        </DarkTile>

      </section>
    </main>
  );
}
