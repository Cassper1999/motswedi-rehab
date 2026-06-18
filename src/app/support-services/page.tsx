"use client";

import { motion } from "framer-motion";

export default function SupportServicesPage() {
  const services = [
{
title: "Physiotherapy Department",
description:
"Provides rehabilitation services for children and adults through assessments, therapy programmes, assistive devices and caregiver training.",
},
{
title: "Community Based Rehabilitation",
description:
"Delivers outreach clinics and home visits across Kgatleng District, bringing rehabilitation services directly into communities.",
},
{
title: "Group Therapy",
description:
"Monthly therapy sessions that encourage rehabilitation, caregiver support, peer learning and social inclusion.",
},
{
title: "In-Home Physiotherapy",
description:
"Individualised physiotherapy for children in the stimulation programme, focusing on mobility and independence.",
},
{
title: "Transport Services",
description:
"Provides daily transport for trainees, staff and outreach programmes throughout Mochudi and surrounding areas.",
},
{
title: "Residential Services",
description:
"Safe accommodation for up to 60 learners, supporting participation, independence and personal development.",
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
            Support Services
          </motion.p>

          <motion.h1 className="mt-4 text-4xl md:text-7xl font-black leading-[1.05]">

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
            className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600"
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
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
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
  className="rounded-[2rem] bg-white p-12 shadow-xl"
>
  <div className="mb-4 h-2 w-24 rounded-full bg-[#7ab648]" />

  <h2 className="text-4xl font-black text-[#014d57]">
    How We Support Our Community
  </h2>

  <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The Physiotherapy Department provides comprehensive rehabilitation
    services aimed at improving mobility, independence and quality of life
    for children and adults living with disabilities. Services include
    physical assessments, therapy programmes, assistive device support,
    caregiver training and outpatient rehabilitation.
  </p>

  <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    Through Community Based Rehabilitation, outreach clinics and home visits
    are conducted across Mochudi and surrounding villages. These services
    bring rehabilitation, monitoring and family support directly into the
    community, ensuring that individuals who cannot easily travel still
    receive assistance.
  </p>

  <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The centre also provides transport services and residential facilities
    that enable learners and trainees from different locations to access
    education, vocational training and rehabilitation programmes in a safe
    and supportive environment.
  </p>

  <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    By working closely with families, caregivers, schools, clinics and
    community stakeholders, Motswedi Rehabilitation Centre promotes
    inclusion, independence, dignity and opportunities for every individual
    to reach their full potential.
  </p>
</motion.div>

  </div>
</section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-black text-[#014d57]"
          >
            Supporting Ability.
            <br />
            Strengthening Hope.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600"
          >
            Our multidisciplinary approach ensures that every individual
            receives support tailored to their unique goals, abilities and
            aspirations.
          </motion.p>

        </div>
      </section>

    </main>
  );
}