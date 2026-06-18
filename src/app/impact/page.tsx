"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImpactPage() {
  const stats = [
    { number: "500+", label: "Families Supported" },
    { number: "1000+", label: "Lives Impacted" },
    { number: "25+", label: "Community Programmes" },
    { number: "10+", label: "Years of Service" },
  ];

  const stories = [
    {
      title: "Transforming Childhood Development",
      text: "Through rehabilitation and early intervention services, children gain confidence, mobility and opportunities to participate fully in life.",
    },
    {
      title: "Empowering Youth Through Skills",
      text: "Vocational training programmes equip young people with practical skills that open pathways to employment and independence.",
    },
    {
      title: "Strengthening Families",
      text: "Families receive guidance, support and resources that improve quality of life and strengthen community inclusion.",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 md:pt-36">

      {/* HERO */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-8">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold uppercase tracking-[0.2em] text-[#7ab648]"
          >
            Our Impact
          </motion.p>

          <motion.h1 className="mt-4 text-4xl md:text-7xl font-black leading-[1.05]">

  <motion.span
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="block text-[#014d57]"
  >
    CHANGING LIVES
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.25, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    BUILDING
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="block text-[#014d57]"
  >
    FUTURES
  </motion.span>

</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600"
          >
            Every programme, every service and every partnership contributes
            to a future where people living with disabilities can thrive,
            participate and achieve their full potential.
          </motion.p>

        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="pb-5">
        <div className="mx-auto max-w-7xl px-4">

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/images/impact/realimpact.webp"
              alt="Impact"
              width={1600}
              height={900}
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#014d57]/80 to-transparent" />

            <div className="absolute left-12 top-1/2 max-w-xl -translate-y-1/2 text-white">
              <h2 className="text-5xl font-black">
                Real Impact.
                <br />
                Real Change.
              </h2>

              <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90">
                Empowering individuals, strengthening families and building
                inclusive communities across Botswana.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-5xl font-black text-[#7ab648]">
                  {stat.number}
                </h3>
                <p className="mt-4 text-gray-600">{stat.label}</p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* STORIES */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-12 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-bold uppercase tracking-[0.2em] text-[#7ab648]"
            >
              Success Stories
            </motion.p>

            <motion.h2 className="mt-4 text-4xl md:text-5xl font-black leading-[1.05]">

  <motion.span
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="block text-[#014d57]"
  >
    IMPACT
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.25, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    BEYOND
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="block text-[#014d57]"
  >
    NUMBERS
  </motion.span>

</motion.h2>
</div>

          <div className="grid gap-8 lg:grid-cols-3">

            {stories.map((story, i) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 h-3 w-16 rounded-full bg-[#7ab648]" />

                <h3 className="text-2xl font-bold text-[#014d57]">
                  {story.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {story.text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* JOURNEY */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white p-12"
          >

            <motion.h2 className="text-center text-4xl md:text-5xl font-black leading-[1.05]">

  <motion.span
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="block text-[#014d57]"
  >
    THE JOURNEY
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.25, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    OF
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="block text-[#014d57]"
  >
    IMPACT
  </motion.span>

</motion.h2>
<div className="mt-12 grid gap-4 md:gap-8 md:grid-cols-4">
  {["Assessment", "Support", "Empowerment", "Inclusion"].map(
    (item, i) => (
      <motion.div
        key={item}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        className="text-center"
      >
        <div className="text-5xl font-black text-[#7ab648]">
          0{i + 1}
        </div>

        <h3 className="mt-4 text-lg font-bold text-black">
          {item}
        </h3>
      </motion.div>
    )
  )}
</div>

</motion.div>
</div>
</section>

      {/* CTA */}
      <section className="bg-[#014d57] py-24 text-white">
        <div className="mx-auto max-w-4xl px-8 text-center">

          <motion.h2 className="text-center text-4xl md:text-5xl font-black leading-[1.05]">

  <motion.span
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="block text-white"
  >
    BE PART
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.25, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    OF THE
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="block text-white"
  >
    IMPACT
  </motion.span>

</motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white/80"
          >
            Together we can continue creating opportunities, changing lives
            and building a more inclusive future.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 rounded-xl bg-[#7ab648] px-8 py-4 font-bold"
          >
            Support Our Mission
          </motion.button>

        </div>
      
      </section>

    </main>
  );
}
