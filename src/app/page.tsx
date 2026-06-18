"use client";

import Link from "next/link";
import Image from "next/image";
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className={`
        group relative overflow-hidden rounded-[2rem]
        border border-white/60 bg-white/80 p-6
        shadow-[0_25px_70px_rgba(1,77,87,0.12)]
        backdrop-blur-md transition-all duration-500
        hover:shadow-[0_35px_90px_rgba(1,77,87,0.18)]
        md:p-10
        ${className}
      `}
    >
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function DarkTile({ children, className = "" }: TileProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className={`
        relative overflow-hidden rounded-[2rem]
        bg-gradient-to-br from-[#014d57] via-[#01616d] to-[#028090]
        p-6 text-white
        shadow-[0_25px_70px_rgba(1,77,87,0.24)]
        transition-all duration-500
        hover:shadow-[0_35px_90px_rgba(1,77,87,0.32)]
        md:p-12
        ${className}
      `}
    >
      <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-white" />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#7ab648]/20 blur-3xl" />

      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}

function SmallTile({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-[#014d57]/10 bg-white/90 p-6 shadow-[0_18px_45px_rgba(1,77,87,0.12)] backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-[0_25px_60px_rgba(1,77,87,0.18)]"
    >
      {children}
    </motion.div>
  );
}

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
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff]">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-y-0 right-0 w-full md:w-[68%]"
        >
          <Image
            src="/images/home/motswedihome.webp"
            alt="Motswedi Rehabilitation Centre"
            fill
            priority
            className="object-cover object-[center_20%] md:object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f1] via-[#f7f5f1]/90 to-[#f7f5f1]/40 md:via-[#f7f5f1]/75 md:to-transparent" />
          <div className="absolute inset-0 bg-white/25 md:bg-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-28 md:px-8 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-[0_25px_70px_rgba(1,77,87,0.14)] backdrop-blur-md md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold uppercase tracking-[0.2em] text-[#7ab648] md:text-base"
            >
              Motswedi Is A
            </motion.p>

            <motion.h1 className="mt-3 font-black leading-none">
              <motion.span
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="block text-5xl text-[#014d57] sm:text-6xl md:text-[90px]"
              >
                FOUNTAIN
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block text-5xl text-[#7ab648] sm:text-6xl md:text-[90px]"
              >
                OF HOPE
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 90 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-6 h-1 rounded-full bg-cyan-400"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-6 text-base font-medium leading-relaxed text-gray-800 md:text-xl"
            >
              Motswedi Rehabilitation Centre is a project of the Mother’s Union
              of the Dutch Reformed Church in Botswana-Mochudi Congregation.
              The Community Based Rehabilitation Programme started in 1988 and
              the centre was officially opened in 1995.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="block w-full rounded-xl bg-[#6aa93b] px-8 py-4 text-center font-bold text-white shadow-[0_18px_45px_rgba(106,169,59,0.28)] transition hover:bg-[#5f9f34] sm:w-auto"
                >
                  GET HELP NOW
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/programmes"
                  className="block w-full rounded-xl border border-[#6aa93b] bg-white/90 px-8 py-4 text-center font-bold text-[#014d57] shadow-[0_18px_45px_rgba(1,77,87,0.1)] backdrop-blur transition hover:bg-white sm:w-auto"
                >
                  OUR PROGRAMMES
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="relative z-10 -mt-10 px-4 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[
            { value: "1988", label: "Programme Started" },
            { value: "1995", label: "Centre Officially Opened" },
            { value: "30+", label: "Learners Supported Annually" },
            { value: "20+", label: "Vocational Trainees" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-[1.5rem] border border-white/60 bg-white/85 p-6 text-center shadow-[0_20px_55px_rgba(1,77,87,0.12)] backdrop-blur-md"
            >
              <h3 className="text-4xl font-black text-[#014d57]">
                {item.value}
              </h3>
              <p className="mt-2 text-sm font-semibold text-gray-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <PremiumTile>
          <p className="font-bold uppercase tracking-[0.2em] text-[#7ab648]">
            Who We Are
          </p>

          <h2 className="mt-4 text-4xl font-black leading-[1.05] text-[#014d57] md:text-5xl">
            Rehabilitation, Skills Development & Inclusion
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
            Motswedi Rehabilitation Centre provides rehabilitation,
            physiotherapy, education support, vocational skills training and
            empowerment programmes that promote independence, dignity and
            meaningful participation in society.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex rounded-xl bg-[#014d57] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#01616d]"
          >
            Learn More About Us →
          </Link>
        </PremiumTile>
      </section>

      {/* PROGRAMMES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="mb-10">
          <p className="font-bold uppercase tracking-[0.2em] text-[#7ab648]">
            Our Programmes
          </p>

          <h2 className="mt-4 text-4xl font-black leading-[1.05] text-[#014d57] md:text-5xl">
            Creating Pathways To Independence
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {programmes.map((programme, i) => (
            <motion.div
              key={programme.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[2rem] border border-white/60 bg-white/85 shadow-[0_25px_70px_rgba(1,77,87,0.12)] backdrop-blur-md transition-all duration-500 hover:shadow-[0_35px_90px_rgba(1,77,87,0.18)]"
            >
              <Link href={programme.href}>
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#014d57]/50 to-transparent" />
                </div>

                <div className="relative p-6">
                  <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

                  <h3 className="mt-3 text-2xl font-bold text-[#014d57]">
                    {programme.title}
                  </h3>

                  <p className="mt-4 font-bold text-[#7ab648]">
                    Learn More →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/programmes"
            className="inline-flex rounded-xl border border-[#6aa93b] bg-white px-8 py-4 font-bold text-[#014d57] shadow-lg transition hover:bg-[#eef8e9]"
          >
            View All Programmes
          </Link>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#7ab648]">
              Who We Serve
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[1.05] text-[#014d57] md:text-5xl">
              Support For Every Ability
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
              We serve children, youth and adults living with disabilities,
              while working closely with families, caregivers, schools,
              government, churches and community stakeholders.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Children With Developmental Needs",
              "Youth With Disabilities",
              "Adults Requiring Rehabilitation",
              "Families & Caregivers",
            ].map((item) => (
              <SmallTile key={item}>
                <p className="text-base font-bold leading-relaxed text-[#014d57] md:text-lg">
                  {item}
                </p>
              </SmallTile>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <DarkTile>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-[#7ab648]">
                Support Services
              </p>

              <h2 className="mt-4 text-4xl font-black leading-[1.05] md:text-5xl">
                Care, Therapy & Practical Support
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                Our services support rehabilitation, personal development,
                family involvement and community inclusion.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Physiotherapy",
                "Occupational Therapy",
                "Speech Therapy",
                "Psychological Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md"
                >
                  <p className="font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </DarkTile>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <PremiumTile>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-[#7ab648]">
                Sustainability Projects
              </p>

              <h2 className="mt-4 text-4xl font-black leading-[1.05] text-[#014d57] md:text-5xl">
                Building Sustainability For Tomorrow
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600 md:text-lg">
                Income generating projects strengthen the centre’s long-term
                growth while creating practical learning and participation
                opportunities.
              </p>

              <Link
                href="/projects"
                className="mt-8 inline-flex rounded-xl bg-[#6aa93b] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#5f9f34]"
              >
                View Projects →
              </Link>
            </div>

            <div className="grid gap-5">
              {[
                "Sewing & Garment Services",
                "Fish Farming Project",
                "Vocational Production",
              ].map((item) => (
                <SmallTile key={item}>
                  <p className="text-base font-bold leading-relaxed text-[#014d57] md:text-lg">
                    {item}
                  </p>
                </SmallTile>
              ))}
            </div>
          </div>
        </PremiumTile>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <DarkTile>
          <div className="text-center">
            <h2 className="text-4xl font-black leading-[1.05] md:text-6xl">
              Partner With Us. <br />
              <span className="text-[#7ab648]">Support Hope.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
              Together we can build a future where every child, youth and adult
              living with disability has the opportunity to thrive.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/get-involved"
                className="rounded-xl bg-[#7ab648] px-8 py-4 text-center font-bold text-white shadow-lg transition hover:bg-[#5f9f34]"
              >
                Get Involved
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </DarkTile>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-gradient-to-br from-[#0f3d2e] via-[#145c3a] to-[#0b2f24] px-4 py-10 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-white md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-xl font-black">
              Motswedi Rehabilitation Centre
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
              A Fountain of Hope for children, youth and adults living with
              disabilities.
            </p>

            <p className="mt-4 text-sm text-white/70">
              Mochudi, Botswana
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Quick Links</h4>

            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p><Link href="/about" className="hover:text-white">About</Link></p>
              <p><Link href="/programmes" className="hover:text-white">Programmes</Link></p>
              <p><Link href="/support-services" className="hover:text-white">Support Services</Link></p>
              <p><Link href="/projects" className="hover:text-white">Projects</Link></p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Contact</h4>

            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>Mon–Fri, 8:00 AM – 5:00 PM</p>
              <p>motswedirehab@btcmail.com</p>
              <p>+267 5729340</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-center">
  <p className="text-xs text-white/50">
    © {new Date().getFullYear()} Motswedi Rehabilitation Centre. All rights reserved.
  </p>

  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.28em] text-white/65">
    DONATED BY LESEDI TRUST
  </p>
</div>
      </footer>
    </main>
  );
}