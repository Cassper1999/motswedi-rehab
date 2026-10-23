"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SupportServicesPage() {
  const services = [
    {
      title: "Integrated Rehabilitation Services",
      description:
        "Provides centre-based physiotherapy, community outreach and personalised in-home support for children and adults. Services include assessments, therapy programmes, assistive devices, caregiver training and rehabilitation delivered within surrounding communities.",
    },
    {
      title: "Transport Services",
      description:
        "Provides daily transport for trainees, staff and outreach programmes throughout Mochudi and surrounding areas.",
    },
    {
      title: "Residential Services",
      description:
        "Provides safe accommodation for up to 60 learners, supporting participation, independence and personal development.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 md:pt-36">
      {/* HERO */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold uppercase tracking-[0.2em] text-[#7ab648]"
          >
            Support Services
          </motion.p>

          <motion.h1 className="mt-4 text-4xl font-black leading-[1.05] md:text-7xl">
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-[#014d57]"
            >
              CARE THAT CONTINUES
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="block text-[#7ab648]"
            >
              BEYOND THERAPY
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg"
          >
            Motswedi Rehabilitation Centre provides comprehensive support
            services that empower children, youth and adults living with
            disabilities to achieve greater independence, participation and
            quality of life.
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 h-3 w-16 rounded-full bg-[#7ab648]" />

                <h3 className="text-2xl font-bold text-[#014d57]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
{/* SERVICE OVERVIEW */}
<section className="pb-10">
  <div className="mx-auto max-w-7xl px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[2rem] bg-[#014d57] p-8 text-white shadow-xl md:p-12"
    >
      <div className="mb-4 h-2 w-24 rounded-full bg-[#7ab648]" />

      <h2 className="text-3xl font-black text-white md:text-4xl">
        How We Support Our Community
      </h2>

      <p className="mt-6 text-base leading-relaxed text-white md:text-lg">
        The Physiotherapy Department provides comprehensive
        rehabilitation services aimed at improving mobility,
        independence and quality of life for children and adults living
        with disabilities. Services include physical assessments,
        therapy programmes, assistive device support, caregiver training
        and outpatient rehabilitation.
      </p>

      <p className="mt-6 text-base leading-relaxed text-white md:text-lg">
        Through Community Based Rehabilitation, outreach clinics and
        home visits are conducted across Mochudi and surrounding
        villages. These services bring rehabilitation, monitoring and
        family support directly into the community, ensuring that
        individuals who cannot easily travel still receive assistance.
      </p>

      <p className="mt-6 text-base leading-relaxed text-white md:text-lg">
        The centre also provides transport services and residential
        facilities that enable learners and trainees from different
        locations to access education, vocational training and
        rehabilitation programmes in a safe and supportive environment.
      </p>

      <p className="mt-6 text-base leading-relaxed text-white md:text-lg">
        By working closely with families, caregivers, schools, clinics
        and community stakeholders, Motswedi Rehabilitation Centre
        promotes inclusion, independence, dignity and opportunities for
        every individual to reach their full potential.
      </p>
    </motion.div>
  </div>
</section>


      {/* CTA WITH IMAGE */}
      <section className="px-4 pb-12 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-xl"
        >
          {/* IMAGE — ONLY INSIDE THIS TILE */}
          <div className="absolute inset-0 md:left-auto md:w-[60%]">
            <Image
              src="/images/support/Designer.png"
              alt="Wheelchairs and rehabilitation support equipment"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />
          </div>

          {/* TEXT */}
          <div className="relative z-10 mx-auto max-w-4xl px-8 py-20 text-center md:mx-0 md:max-w-3xl md:px-14 md:py-24 md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black leading-tight text-[#014d57] md:text-5xl"
            >
              Supporting Ability.
              <br />
              Strengthening Hope.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg"
            >
              Our multidisciplinary approach ensures that every individual
              receives support tailored to their unique goals, abilities and
              aspirations.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}