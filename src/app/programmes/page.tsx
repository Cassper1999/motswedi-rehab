"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const programmes = [
  {
    title: "Early Childhood Stimulation",
    image: "/images/programmes/motswedikids.webp",
    href: "/programmes/stimulation",
  },
  {
    title: "Skills & Dressmaking",
    image: "/images/programmes/motswediteach.webp",
    href: "/programmes/dressmaking",
  },
  {
    title: "Cookery & Housekeeping",
    image: "/images/programmes/motswedichef.webp",
    href: "/programmes/cookery",
  },
  {
    title: "Carpentry & Joinery",
    image: "/images/programmes/motswedioutside.webp",
    href: "/programmes/carpentry",
  },
  {
    title: "Horticulture",
    image: "/images/programmes/motswediclassroom.webp",
    href: "/programmes/horticulture",
  },
  {
    title: "ICT",
    image: "/images/programmes/motswedinurse.webp",
    href: "/programmes/ict",
  },
];

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* HERO TEXT */}
        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bold uppercase tracking-widest text-[#7ab648]"
          >
            Our Programmes
          </motion.p>

          {/* ?? FIXED ANIMATED HEADING */}
          <motion.h1 className="mt-4 text-4xl md:text-6xl font-black text-[#014d57] leading-[1.05]">

            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-[#014d57]"
            >
              CREATING
PATHWAYS
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
             className="block text-[#7ab648]"
            >
              TO
INDEPENDENCE
            </motion.span>

          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 h-1 rounded-full bg-cyan-400"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-base md:text-xl leading-relaxed text-gray-700"
          >
            Training, rehabilitation and empowerment programmes designed to
            unlock potential and build confidence.
          </motion.p>

        </div>

        {/* GRID */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {programmes.map((programme, i) => (
            <motion.div
              key={programme.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 backdrop-blur-md shadow-[0_25px_70px_rgba(1,77,87,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(1,77,87,0.18)]"
            >
              <Link href={programme.href}>

                <div className="relative h-56 md:h-72 overflow-hidden">
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                  />
                </div>

               <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#014d57]">
                    {programme.title}
                  </h3>

                  <p className="mt-4 text-[#7ab648] font-semibold">
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

