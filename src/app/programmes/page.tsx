"use client";

import ProgrammesBackgroundSlideshow from "@/components/ProgrammesBackgroundSlideshow";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const programmes = [
  {
    title: "Early Childhood Stimulation",
    image: "/images/programmes/EARLLY.JPG",
    href: "/programmes/stimulation",
  },
  {
    title: "Skills & Dressmaking",
    image: "/images/programmes/SKIIILL.JPG",
    href: "/programmes/dressmaking",
  },
  {
    title: "Cookery & Housekeeping",
    image: "/images/programmes/motswedichef.webp",
    href: "/programmes/cookery",
  },
  {
    title: "Carpentry & Joinery",
    image: "/images/programmes/carp.JPG",
    href: "/programmes/carpentry",
  },
  {
    title: "Horticulture",
    image: "/images/programmes/garden.jpeg",
    href: "/programmes/horticulture",
  },
  {
    title: "ICT",
    image: "/images/programmes/ICTPIC.jpeg",
    href: "/programmes/ict",
  },
];

const requirements = [
  {
    title: "Stimulation Programme Requirements",
    age: "4 to 9 years",
    documents: [
      "Copy of Birth Certificate",
      "Copy of Psychometric Evaluation Report",
      "Primary Guardian must be present",
      "Child must be present",
      "Under 5 Birth Medical Card",
    ],
  },
  {
    title: "Vocational Training Requirements",
    age: "18 to 35 years",
    documents: [
      "Copy of Birth Certificate / Omang / National ID",
      "Copy of Psychometric Evaluation Report (if available)",
      "Child must be present",
      "Primary Guardian must be present",
      "Medical Card",
      "Disability Card (if available)",
    ],
  },
];

export default function ProgrammesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pb-20 pt-28 md:pt-36">
      <ProgrammesBackgroundSlideshow />
      <div className="mx-auto max-w-7xl px-5 md:px-8">

  
{/* HERO TEXT - FIXED FOREGROUND VISIBILITY */}
<div className="relative z-20 max-w-3xl">

  {/* OUR PROGRAMMES LABEL */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative z-20 font-bold uppercase tracking-widest text-[#7ab648]"
  >
    Our Programmes
  </motion.p>

  {/* MAIN HEADING */}
  <motion.h1 className="relative z-20 mt-4 text-4xl font-black leading-[1.05] text-[#014d57] md:text-6xl">

    <motion.span
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="block text-[#014d57]"
    >
      CREATING PATHWAYS
    </motion.span>

    <motion.span
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25, duration: 0.8 }}
      className="block text-[#7ab648]"
    >
      TO INDEPENDENCE
    </motion.span>

  </motion.h1>

  {/* ACCENT LINE */}
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: 80 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    className="relative z-20 mt-6 h-1 rounded-full bg-cyan-400"
  />

  {/* DESCRIPTION */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.8 }}
    className="relative z-20 mt-6 text-base leading-relaxed text-gray-700 md:text-xl"
  >
    Training, rehabilitation and empowerment programmes designed to
    unlock potential and build confidence.
  </motion.p>



        </div>

        {/* PROGRAMME REQUIREMENTS */}
        <section className="mt-10 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {requirements.map((programme, index) => (
              <motion.article
                key={programme.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_20px_60px_rgba(1,77,87,0.10)] backdrop-blur-md"
              >
                <div className="h-1.5 bg-gradient-to-r from-[#6aa93b] via-cyan-400 to-[#014d57]" />

                <div className="p-6 md:p-8">
                  <h2 className="text-xl font-black leading-snug text-[#014d57] md:text-2xl">
                    {programme.title}
                  </h2>

                  <div className="mt-5 inline-flex rounded-full border border-[#6aa93b]/20 bg-[#eef8e9] px-5 py-2 text-sm font-bold text-[#014d57]">
                    Age: {programme.age}
                  </div>

                  <div className="my-6 h-px bg-[#014d57]/10" />

                  <h3 className="text-base font-bold text-[#014d57] md:text-lg">
                    Documents Required
                  </h3>

                  <ul className="mt-5 space-y-4">
                    {programme.documents.map((document) => (
                      <li
                        key={document}
                        className="flex items-start gap-3 text-base leading-relaxed text-gray-600"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#6aa93b]"
                        />
                        <span>{document}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* PROGRAMMES GRID */}
        <div className="mb-16 mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme, i) => (
            <motion.div
              key={programme.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-[0_25px_70px_rgba(1,77,87,0.12)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(1,77,87,0.18)]"
            >
              <Link href={programme.href}>
                <div className="relative h-56 overflow-hidden md:h-72">
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-[#014d57] md:text-2xl">
                    {programme.title}
                  </h3>

                  <p className="mt-4 font-semibold text-[#7ab648]">
                    Learn More
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}




