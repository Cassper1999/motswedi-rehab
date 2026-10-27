"use client";

import { motion } from "framer-motion";
import AboutScrollBackground from "@/components/AboutScrollBackground";

type OrganisationBranch = {
  department: string;
  roles?: string[];
  teams?: string[][];
};

const organisationBranches: OrganisationBranch[] = [
  {
    department: "Physiotherapy",
    roles: ["Rehab Tech I", "Rehab Tech II", "Field Worker"],
  },
  {
    department: "Stimulation",
    roles: [
      "Special Education Teacher",
      "Pre-school Teacher I",
      "Pre-school Teacher II",
      "Teacher Aide",
    ],
  },
  {
    department: "Carpentry",
    roles: [
      "Carpentry Instructor I",
      "Carpentry Instructor II",
      "Assistant Carpentry Instructor",
    ],
  },
  {
    department: "Social Work",
    roles: ["Social Work Officer"],
  },
  {
    department: "Administration",
    roles: ["Finance Officer", "Accounts Clerk/Typist"],
    teams: [
      ["Security", "Security I", "Security II"],
      ["Transport", "Driver I", "Driver II", "Driver III"],
      ["Kitchen", "Senior Cook", "Cook", "Kitchen Hand"],
      ["Hostel", "House Mother", "House Carers", "Groundsman"],
      ["Cleaning", "Cleaner I", "Cleaner II"],
    ],
  },
  {
    department: "ICT",
    roles: ["Stock Controller"],
  },
  {
    department: "Agriculture",
    roles: ["Horticulture Instructor"],
    teams: [
      ["Horticulture Assistant I", "Horticulture Assistant II"],
      ["Poultry", "Poultry Attendant"],
    ],
  },
  {
    department: "Skills/Ability Training",
    roles: ["Dressmaking Instructor"],
  },
];

function RoleChain({ roles }: { roles: string[] }) {
  return (
    <div className="flex w-full flex-col items-center">
      {roles.map((role, index) => (
        <div key={role} className="flex w-full flex-col items-center">
          {index > 0 && <div className="h-4 w-0.5 bg-[#014d57]/25" />}

          <div
            className={`w-full rounded-xl border px-3 py-3 text-center text-xs font-bold leading-snug shadow-sm ${
              index === 0
                ? "border-[#6aa93b]/30 bg-[#eef8e9] text-[#014d57]"
                : "border-[#014d57]/10 bg-white text-[#062f36]"
            }`}
          >
            {role}
          </div>
        </div>
      ))}
    </div>
  );
}

function DepartmentBranch({
  branch,
}: {
  branch: OrganisationBranch;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#014d57]/12 bg-[#f7fbfc] shadow-[0_12px_30px_rgba(1,77,87,0.12)]">
      <div className="bg-gradient-to-br from-[#014d57] via-[#01616d] to-[#028090] px-4 py-4 text-center text-white">
        <h4 className="text-sm font-black leading-tight">
          {branch.department}
        </h4>
      </div>

      <div className="p-4">
        {branch.roles && <RoleChain roles={branch.roles} />}

        {branch.teams && (
          <>
            <div className="mx-auto h-5 w-0.5 bg-[#014d57]/25" />

            <div
              className={`grid gap-3 ${
                branch.teams.length > 1 ? "sm:grid-cols-2" : ""
              }`}
            >
              {branch.teams.map((team) => (
                <RoleChain key={team.join("-")} roles={team} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pb-16 pt-28 md:pt-36">
      {/* SCROLLING BACKGROUND PHOTOS */}
      <AboutScrollBackground />

      {/* BACKGROUND IMAGE */}
      <div className="hidden">
        <img
          src="/images/about/MOTSWEDIKID.webp"
          alt=""
          className="absolute right-0 top-20 h-[560px] w-full object-cover object-center opacity-[0.10] md:h-[760px] md:w-[65%] md:opacity-[0.14]"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#f3efe6]/95 via-[#e8f7ef]/88 to-[#dff4ff]/82" />

        <div className="absolute right-0 top-0 h-[850px] w-[850px] rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="absolute left-0 top-40 h-[500px] w-[500px] rounded-full bg-[#6aa93b]/10 blur-3xl" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1 className="mt-3 text-4xl font-black leading-[1.05] md:text-6xl">
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
              className="block text-[#6aa93b]"
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

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Motswedi Rehabilitation Centre is a community-based
            rehabilitation centre operating under the Mother&apos;s Union of
            the Dutch Reformed Church in Botswana Mochudi Congregation.
          </p>
        </motion.div>

        {/* WHO WE ARE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-[1.5rem] bg-white/90 p-6 shadow-xl backdrop-blur-md md:mt-12 md:rounded-[2rem] md:p-10"
        >
          <h2 className="text-2xl font-bold text-[#014d57] md:text-3xl">
            Who We Are
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Motswedi Rehabilitation Centre is a non-profit rehabilitation and
            vocational training centre dedicated to improving the quality of
            life for people living with disabilities. We provide
            rehabilitation, physiotherapy, education support, vocational
            skills training and empowerment programmes that promote
            independence, inclusion, dignity and self reliance. Our work
            focuses on creating opportunities for children, youth and adults
            with disabilities to develop their abilities, participate fully in
            society and live meaningful lives within their communities.
          </p>
        </motion.div>

        {/* OUR STORY */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="mt-8 rounded-[1.5rem] bg-[#014d57] p-6 shadow-xl backdrop-blur-md md:mt-12 md:rounded-[2rem] md:p-10"
>
  <h2 className="text-2xl font-bold text-white md:text-3xl">
    Our Story
  </h2>

  <p className="mt-4 text-base leading-relaxed text-white/90 md:mt-6 md:text-lg">
    The Community Based Rehabilitation Programme began in 1988 and the
    centre was officially opened in 1995. &ldquo;Motswedi&rdquo;
    meaning a fountain represents a fountain of hope for children,
    youth and adults living with disabilities. The organisation was
    established after the Mother&apos;s Union identified a growing
    need for rehabilitation, care, education and support services for
    people with disabilities. A survey conducted in 1992 revealed that
    many individuals lacked access to stimulation, education, therapy
    and proper care. In partnership with government, the community,
    Botswana Christian Council (BCC) and NORAD, the centre developed a
    Community Based Rehabilitation Programme. Over time it expanded
    into physiotherapy, stimulation, vocational training, horticulture,
    carpentry, dressmaking, cookery, poultry, hospitality and
    handcrafts. In 2012, vocational programmes were accredited by BOTA,
    now BQA.
  </p>
</motion.div>

        {/* WHY STARTED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-[1.5rem] bg-white/90 p-6 shadow-xl backdrop-blur-md md:mt-12 md:rounded-[2rem] md:p-10"
        >
          <h2 className="text-2xl font-bold text-[#014d57] md:text-3xl">
            Why the Organisation was Started
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            Motswedi Rehabilitation Centre was established to respond to the
            challenges faced by people living with disabilities who lacked
            access to care, education, rehabilitation and development
            opportunities. Many were isolated without support or opportunities
            to reach their full potential.
          </p>

          <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-600">
            <li>Provide rehabilitation and therapy services</li>
            <li>Support early childhood stimulation and education</li>
            <li>Equip individuals with vocational and life skills</li>
            <li>Reduce stigma and discrimination</li>
            <li>
              Strengthen families and communities through inclusive support
            </li>
          </ul>
        </motion.div>

       {/* COMMUNITY */}

{/* THE COMMUNITY WE SERVE */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="mt-8 rounded-[1.5rem] bg-[#014d57] p-6 shadow-xl backdrop-blur-md md:mt-12 md:rounded-[2rem] md:p-10"
>
  <h2 className="text-2xl font-bold text-white md:text-3xl">
    The Community We Serve
  </h2>

  <p className="mt-4 text-base leading-relaxed text-white/90 md:mt-6 md:text-lg">
    Motswedi Rehabilitation Centre serves children, youth and adults living
    with disabilities in Mochudi and surrounding communities across Botswana.
    We work closely with families, caregivers, schools, government, churches
    and stakeholders to promote inclusion and quality of life.
  </p>
</motion.div>


{/* MISSION, VISION, GOAL AND CORE VALUES */}
<motion.article
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="mt-8 rounded-[1.5rem] border border-white/70 bg-white/90 p-6 shadow-xl backdrop-blur-md md:mt-12 md:rounded-[2rem] md:p-10"
>
  <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
    <section>
      <h2 className="text-2xl font-black text-[#014d57] md:text-3xl">
        Our Mission
      </h2>

      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
        To provide integrated training with production and comprehensive
        rehabilitation services for people with intellectual and physical
        disabilities to enable them achieve maximum potential.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black text-[#014d57] md:text-3xl">
        Our Vision
      </h2>

      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
        Motswedi Rehabilitation Centre will be a centre of excellence in
        inclusive education and integrated productive rehabilitation.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black text-[#014d57] md:text-3xl">
        Our Goal
      </h2>

      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
        To enable people with intellectual and physical disabilities achieve
        their full potential through rehabilitation, education and skills
        training.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-black text-[#014d57] md:text-3xl">
        Core Values
      </h2>

      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
        Botho, Teamwork, Customer Satisfaction and Employee Empowerment.
      </p>
    </section>
  </div>
</motion.article>

{/* ORGANISATIONAL STRUCTURE */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.05 }}
  transition={{ duration: 0.7 }}
  className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:p-6 md:mt-12 md:rounded-[2rem] md:p-10"
>
  <div className="text-center">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6aa93b] sm:text-sm sm:tracking-[0.2em]">
      Leadership &amp; Departments
    </p>

    <h2 className="mt-3 text-3xl font-black text-[#014d57] md:text-4xl">
      Organisational Structure
    </h2>

    <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
      Our governance and management structure provides clear oversight,
      accountability and coordination across every department.
    </p>
  </div>

  <div className="mt-10">
    {/* BOARD OF TRUSTEES */}
    <motion.div
      whileHover={{ y: -4 }}
      className="relative mx-auto max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-[#014d57] via-[#01616d] to-[#028090] px-6 py-5 text-center text-white shadow-[0_18px_45px_rgba(1,77,87,0.24)]"
    >
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#6aa93b] via-cyan-400 to-white" />

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
        Strategic Oversight
      </p>

      <h3 className="mt-2 text-xl font-black">Board of Trustees</h3>

      <p className="mt-2 text-sm leading-relaxed text-white/75">
        Policy direction, accountability and long-term sustainability.
      </p>
    </motion.div>

    <div className="mx-auto h-8 w-0.5 bg-gradient-to-b from-[#014d57] to-[#6aa93b]" />

    {/* COORDINATOR */}
    <motion.div
      whileHover={{ y: -4 }}
      className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border-2 border-[#6aa93b]/40 bg-[#eef8e9] px-6 py-5 text-center shadow-[0_14px_35px_rgba(106,169,59,0.16)]"
    >
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#014d57] via-[#6aa93b] to-cyan-400" />

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6aa93b]">
        Centre Management
      </p>

      <h3 className="mt-2 text-xl font-black text-[#014d57]">
        Coordinator
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        Programmes, staff, partnerships, reporting and daily operations.
      </p>
    </motion.div>

    <div className="mx-auto h-8 w-0.5 bg-gradient-to-b from-[#6aa93b] to-[#014d57]/30" />

    {/* MOBILE REPORTING LABEL */}
    <div className="mx-auto mb-6 max-w-sm rounded-full border border-[#014d57]/15 bg-[#eef8e9] px-5 py-3 text-center text-xs font-black uppercase tracking-[0.16em] text-[#014d57] lg:hidden">
      Departments Reporting to the Coordinator
    </div>

    {/* DEPARTMENTS */}
    <div className="relative mx-auto max-w-6xl">
      {/* DESKTOP CONNECTING LINE */}
      <div className="absolute left-[16.666%] right-[16.666%] top-0 hidden h-0.5 bg-[#014d57]/30 lg:block" />

      <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {[
          {
            department: "Physiotherapy",
            units: ["Rehabilitation", "Hostel"],
          },
          
{
  department: "Programmes",
  units: [
    "Stimulation",
    "Carpentry & Joinery",
    "Horticulture",
    "Dressmaking and Tailoring",
    "Cookery and Housekeeping",
    "ICT",
  ],
},

          {
            department: "Administration",
            units: [
              "Accounts",
              "Stores",
              "Transport",
              "Kitchen",
              "Cleaning",
              "Grounds",
            ],
          },
        ].map((branch, index) => (
          <motion.article
            key={branch.department}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{ y: -5 }}
            className="relative h-full lg:pt-8"
          >
            {/* DESKTOP VERTICAL CONNECTOR */}
            <div className="absolute left-1/2 top-0 hidden h-8 w-0.5 -translate-x-1/2 bg-[#014d57]/30 lg:block" />

            <div className="h-full overflow-hidden rounded-2xl border border-[#014d57]/10 bg-[#f7fbf5] shadow-[0_16px_42px_rgba(1,77,87,0.12)]">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#014d57] via-[#01616d] to-[#028090] px-5 py-5 text-center text-white">
                <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#6aa93b] via-cyan-400 to-white" />

                <h3 className="text-lg font-black uppercase tracking-[0.05em]">
                  {branch.department}
                </h3>
              </div>

              <div
                className={`grid gap-3 p-4 ${
                  branch.units.length > 2
                    ? "sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
                    : ""
                }`}
              >
                {branch.units.map((unit) => (
                  <div
                    key={unit}
                    className="flex min-h-[4rem] items-center justify-center rounded-xl border border-[#014d57]/10 bg-white px-4 py-4 text-center text-sm font-bold leading-snug text-[#014d57] shadow-sm"
                  >
                    {unit}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </div>
</motion.section>
        {/* STATS */}
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-8">
          {[
            {
              value: "30+",
              text: "Learners Supported Annually",
              color: "text-[#6aa93b]",
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
          ].map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur-md md:rounded-3xl md:p-10"
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
