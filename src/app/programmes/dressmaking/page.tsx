"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const imageFolder = "/images/programmes/skills and dress making";

const heroImages = [
  `${imageFolder}/IMG_3709.JPG`,
  `${imageFolder}/IMG_3710.JPG`,
  `${imageFolder}/IMG_3711.JPG`,
  `${imageFolder}/IMG_3712.JPG`,
];

const impactItems = [
  "Reduced unemployment among persons with disabilities",
  "Increased independence and self-reliance",
  "Income generation opportunities",
  "Entrepreneurship and broader economic participation",
];

const careerOpportunities = [
  "Employment in Dressmaking Businesses",
  "Self Employment",
  "Small Scale Production Ventures",
];

type SmallTileProps = {
  children: ReactNode;
  className?: string;
};

function SmallTile({ children, className = "" }: SmallTileProps) {
  return (
    <div
      className={`rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f3faf7] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

export default function DressmakingPage() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const slideshow = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(slideshow);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pb-20 pt-28 md:pt-36">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* HERO TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-bold uppercase tracking-[0.2em] text-[#6aa93b]">
              Vocational Training Programme
            </p>

            <motion.h1 className="mt-4 text-4xl font-black leading-[1.05] md:text-6xl">
              <motion.span
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="block text-[#014d57]"
              >
                SKILLS &amp;
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="block text-[#6aa93b]"
              >
                DRESSMAKING
              </motion.span>
            </motion.h1>

            <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              The Skills and Dressmaking Programme at Motswedi Rehabilitation
              Centre is a full-time, two-year vocational training programme
              designed to equip persons with disabilities with practical and
              theoretical skills in garment construction and tailoring.
            </p>
          </motion.div>

          {/* TRANSITIONING HERO PHOTOS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_80px_rgba(1,77,87,0.22)] md:h-[470px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={heroImages[activeImage]}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[activeImage]}
                  alt="Skills and dressmaking practical training"
                  fill
                  priority={activeImage === 0}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#014d57]/85 via-[#014d57]/5 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8e291]">
                Creative Skills
              </p>

              <p className="mt-2 max-w-md text-xl font-bold leading-snug text-white md:text-2xl">
                Building confidence through practical dressmaking and
                production skills.
              </p>

              <div className="mt-5 flex gap-2">
                {heroImages.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    aria-label={`Show dressmaking image ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeImage === index
                        ? "w-9 bg-[#6aa93b]"
                        : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK DETAILS */}
      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Duration",
              value: "2 Years",
            },
            {
              number: "02",
              title: "Accreditation",
              value: "Botswana Qualifications Authority, BQA",
            },
            {
              number: "03",
              title: "Training Type",
              value: "Practical & Theoretical Instruction",
            },
          ].map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
            >
              <SmallTile className="h-full">
                <span className="text-sm font-black text-[#6aa93b]">
                  {detail.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#014d57]">
                  {detail.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {detail.value}
                </p>
              </SmallTile>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMME OVERVIEW */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 md:px-8"
      >
        <div className="grid overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 shadow-[0_25px_70px_rgba(1,77,87,0.12)] backdrop-blur-md lg:grid-cols-[1fr_0.9fr]">
          <div className="relative flex flex-col justify-center p-7 md:p-12">
            <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#6aa93b] via-cyan-400 to-[#014d57]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6aa93b]">
              About the Programme
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#014d57]">
              Programme Overview
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              The programme is registered and accredited by the Botswana
              Qualifications Authority, BQA, ensuring training meets national
              vocational standards. Learners receive both practical and
              theoretical instruction that prepares them for meaningful
              participation in the textile and clothing industry.
            </p>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[430px]">
            <Image
              src={`${imageFolder}/IMG_3713.JPG`}
              alt="Materials used during dressmaking training"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-transparent to-transparent" />
          </div>
        </div>
      </motion.section>

      {/* TARGET GROUP AND ASSESSMENT */}
      <section className="mx-auto mt-10 grid max-w-7xl gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 p-7 shadow-[0_25px_70px_rgba(1,77,87,0.12)] backdrop-blur-md md:p-10"
        >
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#6aa93b] to-cyan-400" />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6aa93b]">
            Entry Profile
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#014d57]">
            Target Group
          </h2>

          <ul className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
            {[
              "Trainable youth with moderate intellectual disabilities",
              "Able to communicate verbally",
              "Able to understand and follow instructions",
              "Able to handle tools and materials safely",
              "Able to remain active and engaged during training",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6aa93b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 p-7 shadow-[0_25px_70px_rgba(1,77,87,0.12)] backdrop-blur-md md:p-10"
        >
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-cyan-400 to-[#014d57]" />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6aa93b]">
            Learning Process
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#014d57]">
            Training &amp; Assessment
          </h2>

          <ul className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
            {[
              "Continuous practical and theoretical training throughout the two-year programme",
              "Final examinations conducted at the end of the programme",
              "Assessment carried out by BQA registered and accredited assessors",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* INDUSTRIAL ATTACHMENT */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 md:px-8"
      >
        <div className="grid overflow-hidden rounded-[2rem] bg-[#014d57] shadow-[0_30px_80px_rgba(1,77,87,0.24)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center p-7 text-white md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8e291]">
              Workplace Experience
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Industrial Attachment
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
              To strengthen workplace readiness, trainees participate in
              industrial attachment placements for two weeks before final
              examinations and two weeks after final examinations.
            </p>

            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
              These placements provide real-world experience and build
              confidence in applying acquired skills within professional work
              environments.
            </p>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[470px]">
            <Image
              src={`${imageFolder}/IMG_3714.JPG`}
              alt="Dressmaking workshop and training equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#014d57]/55 via-transparent to-transparent" />
          </div>
        </div>
      </motion.section>

      {/* PROGRAMME IMPACT */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 md:px-8"
      >
        <div className="grid overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 shadow-[0_25px_70px_rgba(1,77,87,0.12)] backdrop-blur-md lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-7 md:p-10">
            <div className="h-1.5 w-20 rounded-full bg-[#6aa93b]" />

            <h2 className="mt-5 text-3xl font-bold text-[#014d57]">
              Programme Impact
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              The programme equips graduates with practical vocational skills
              that increase employability and support quicker entry into the
              workforce compared to traditional academic pathways.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {impactItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#eef8e9] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="text-sm font-black text-[#6aa93b]">
                    0{index + 1}
                  </span>

                  <p className="mt-2 leading-relaxed text-gray-600">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[380px] lg:min-h-full">
            <Image
              src={`${imageFolder}/IMG_3715.JPG`}
              alt="Dressmaking practical learning environment"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />
          </div>
        </div>
      </motion.section>

      {/* CAREER OPPORTUNITIES */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 md:px-8"
      >
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(1,77,87,0.16)] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[350px] lg:min-h-[500px]">
            <Image
              src={`${imageFolder}/IMG_3716.JPG`}
              alt="Trainee participating in dressmaking activities"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30" />
          </div>

          <div className="flex flex-col justify-center p-7 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6aa93b]">
              Beyond Training
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#014d57] md:text-4xl">
              Career Opportunities
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              Graduates are prepared for diverse career pathways including:
            </p>

            <div className="mt-8 space-y-4">
              {careerOpportunities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl border border-[#014d57]/10 bg-gradient-to-r from-[#eef8e9] to-white p-5 shadow-sm transition-all duration-300 hover:translate-x-1 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6aa93b] text-sm font-black text-white">
                    0{index + 1}
                  </span>

                  <p className="font-bold text-[#014d57]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
