"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 md:pt-36 pb-16">

      {/* FAINT BACKGROUND CHILD IMAGE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/images/about/MOTSWEDIKID.webp"
          alt=""
          className="absolute right-0 top-20 h-[560px] w-full object-cover object-center opacity-[0.10] md:h-[760px] md:w-[65%] md:opacity-[0.14]"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#f3efe6]/95 via-[#e8f7ef]/88 to-[#dff4ff]/82" />

        <div className="absolute right-0 top-0 h-[850px] w-[850px] rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute left-0 top-40 h-[500px] w-[500px] rounded-full bg-[#7ab648]/10 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1 className="mt-3 text-4xl md:text-6xl font-black leading-[1.05]">
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-[#014d57]"
            >
              A FOUNTAIN
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="block text-[#7ab648]"
            >
              OF HOPE
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-[#014d57]"
            >
              FOR EVERY ABILITY
            </motion.span>
          </motion.h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
            Motswedi Rehabilitation Centre is a community-based rehabilitation centre
            operating under the Mother’s Union of the Dutch Reformed Church in Botswana
            Mochudi Congregation.
          </p>
        </motion.div>

        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-8 md:mt-12 rounded-[1.5rem] md:rounded-[2rem] bg-white/90 backdrop-blur-md p-6 md:p-10 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#014d57]">
            Who We Are
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
            Motswedi Rehabilitation Centre is a non-profit rehabilitation and vocational training centre dedicated to improving the quality of life for people living with disabilities.
            We provide rehabilitation, physiotherapy, education support, vocational skills training and empowerment programmes that promote independence, inclusion, dignity and self reliance.
            Our work focuses on creating opportunities for children, youth and adults with disabilities to develop their abilities, participate fully in society and live meaningful lives within their communities.
          </p>
        </motion.div>

        {/* OUR STORY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-8 md:mt-12 rounded-[1.5rem] md:rounded-[2rem] bg-white/90 backdrop-blur-md p-6 md:p-10 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#014d57]">
            Our Story
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
            The Community Based Rehabilitation Programme began in 1988 and the centre was officially opened in 1995. “Motswedi” meaning a fountain represents a fountain of hope for children, youth and adults living with disabilities.
            The organisation was established after the Mother’s Union identified a growing need for rehabilitation, care, education and support services for people with disabilities.
            A survey conducted in 1992 revealed that many individuals lacked access to stimulation, education, therapy and proper care.
            In partnership with government, the community, Botswana Christian Council (BCC) and NORAD, the centre developed a Community Based Rehabilitation Programme.
            Over time it expanded into physiotherapy, stimulation, vocational training, horticulture, carpentry, dressmaking, cookery, poultry, hospitality and handcrafts.
            In 2012, vocational programmes were accredited by BOTA, now BQA.
          </p>
        </motion.div>

        {/* WHY STARTED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-8 md:mt-12 rounded-[1.5rem] md:rounded-[2rem] bg-white/90 backdrop-blur-md p-6 md:p-10 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#014d57]">
            Why the Organisation was Started
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
            Motswedi Rehabilitation Centre was established to respond to the challenges faced by people living with disabilities who lacked access to care, education, rehabilitation and development opportunities.
            Many were isolated without support or opportunities to reach their full potential.
          </p>

          <ul className="mt-6 list-disc pl-6 text-gray-600 space-y-2">
            <li>Provide rehabilitation and therapy services</li>
            <li>Support early childhood stimulation and education</li>
            <li>Equip individuals with vocational and life skills</li>
            <li>Reduce stigma and discrimination</li>
            <li>Strengthen families and communities through inclusive support</li>
          </ul>
        </motion.div>

        {/* COMMUNITY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-8 md:mt-12 rounded-[1.5rem] md:rounded-[2rem] bg-white/90 backdrop-blur-md p-6 md:p-10 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#014d57]">
            The Community We Serve
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
            Motswedi Rehabilitation Centre serves children, youth and adults living with disabilities in Mochudi and surrounding communities across Botswana.
            We work closely with families, caregivers, schools, government, churches and stakeholders to promote inclusion and quality of life.
          </p>
        </motion.div>

        {/* GOVERNANCE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-8 md:mt-12 rounded-[1.5rem] md:rounded-[2rem] bg-white/90 backdrop-blur-md p-6 md:p-10 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#014d57]">
            Governance & Structure
          </h2>

          <div className="mt-6 space-y-6 text-gray-600">
            <div>
              <h3 className="font-bold text-[#014d57]">Board of Trustees</h3>
              <p>
                Provides strategic leadership, policy direction, accountability and oversight of operations, finances and sustainability.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#014d57]">Coordinator</h3>
              <p>
                Oversees programmes, staff supervision, partnerships, implementation, reporting and daily operations.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#014d57]">Administration</h3>
              <p>
                Handles office operations, records, communication, procurement, scheduling and financial support.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#014d57]">Departments</h3>

              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <b>Physiotherapy:</b> Rehabilitation, mobility and therapeutic exercises
                </li>
                <li>
                  <b>Stimulation:</b> Cognitive, sensory and emotional development
                </li>
                <li>
                  <b>Carpentry:</b> Woodwork training and production for income generation
                </li>
                <li>
                  <b>Social Work:</b> Counselling, family support and advocacy
                </li>
                <li>
                  <b>ICT:</b> Digital literacy and technology training
                </li>
                <li>
                  <b>Agriculture:</b> Gardening, farming and food security skills
                </li>
                <li>
                  <b>Skills Training:</b> Life skills, vocational training and empowerment
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* STATS */}
        <div className="mt-8 md:mt-10 grid gap-4 md:gap-8 md:grid-cols-3">
          {[
            {
              value: "30+",
              text: "Learners Supported Annually",
              color: "text-[#7ab648]",
            },
            {
              value: "20+",
              text: "Vocational Trainees",
              color: "text-[#014d57]",
            },
            {
              value: "100%",
              text: "Commitment To Inclusion",
              color: "text-cyan-500",
            },
          ].map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="rounded-2xl md:rounded-3xl bg-white/90 backdrop-blur-md p-6 md:p-10 shadow-lg"
            >
              <h3 className={`text-5xl font-black ${item.color}`}>
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>

      </section>
    </main>
  );
}