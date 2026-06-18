"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GetInvolvedPage() {
  const ways = [
    {
      title: "Donations",
      description:
        "Support rehabilitation services, vocational training programmes, assistive devices and inclusive opportunities through financial contributions.",
    },
    {
      title: "Volunteering",
      description:
        "Share your skills, experience and time to support trainees, programmes and community activities at Motswedi Rehabilitation Centre.",
    },
    {
      title: "Partnership",
      description:
        "Partner with Motswedi Rehabilitation Centre to strengthen programmes, expand opportunities and create sustainable impact.",
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
            Get Involved
          </motion.p>

          <motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="mt-4 text-4xl md:text-6xl font-black leading-[1.05]"
>
  <motion.span
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1, duration: 0.8 }}
    className="block text-[#014d57]"
  >
    BE THE REASON
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    SOMEONE HAS
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="block text-[#014d57]"
  >
    HOPE
  </motion.span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600"
          >
            Every act of support helps create opportunities, transform lives
            and build a more inclusive future for individuals living with
            disabilities.
          </motion.p>

        </div>
      </section>

      {/* BANNER */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-8">

          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/images/get-involved/HANDSHELP.webp"
              alt="Get Involved"
              width={1600}
              height={900}
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#014d57]/80 to-transparent" />

            <div className="absolute left-12 top-1/2 max-w-xl -translate-y-1/2 text-white">

              <motion.h2 className="text-4xl md:text-5xl font-black leading-[1.05]">
  <motion.span
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="block text-white"
  >
    TOGETHER WE
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    CREATE CHANGE
  </motion.span>
</motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white/90"
              >
                Join our mission and become part of a community committed
                to dignity, empowerment and inclusion.
              </motion.p>

            </div>

          </motion.div>

        </div>
      </section>

      {/* WAYS TO HELP */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-bold uppercase tracking-[0.2em] text-[#7ab648]">
              Ways To Help
            </p>

            <motion.h2 className="mt-4 text-4xl md:text-5xl font-black leading-[1.05]">

  <motion.span
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="block text-[#014d57]"
  >
    MAKE
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.25, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    A
  </motion.span>

  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="block text-[#014d57]"
  >
    DIFFERENCE
  </motion.span>

</motion.h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">

            {ways.map((way, i) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.8 }}
                className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 h-3 w-16 rounded-full bg-[#7ab648]" />

                <h3 className="text-3xl font-bold text-[#014d57]">
                  {way.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {way.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

