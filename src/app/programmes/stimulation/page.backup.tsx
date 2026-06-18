"use client";
import { motion } from "framer-motion";
export default function StimulationPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-[#f8faf9] to-white pt-36">

  <div className="pointer-events-none absolute inset-0">

    <div className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-[#7ab648]/20 blur-[140px]" />

    <div className="absolute top-[30%] -right-40 h-[650px] w-[650px] rounded-full bg-cyan-300/20 blur-[160px]" />

    <div className="absolute bottom-[-200px] left-[25%] h-[600px] w-[600px] rounded-full bg-[#014d57]/10 blur-[160px]" />

  </div>
      <section className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-4xl"
        >
          <p className="font-bold uppercase tracking-widest text-[#7ab648]">
            Programme
          </p>
          <h1 className="mt-4 text-6xl font-black text-[#014d57] transition-colors duration-300 group-hover:text-white">
            Early Childhood
            Stimulation
          </h1>
          <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />
          <p className="mt-8 text-xl leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-white">
            A specialised programme focused on nurturing development,
            communication, independence and confidence in young children
            living with disabilities.
          </p>
        </motion.div>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="group rounded-[32px] bg-white p-8 border border-slate-100 shadow-[0_20px_60px_rgba(1,77,87,0.08)] transition-all duration-300 hover:-translate-y-2 hover:bg-[#7ab648] hover:border-[#7ab648] hover:shadow-[0_35px_80px_rgba(122,182,72,0.35)]">
            <h3 className="text-xl font-bold text-[#014d57] transition-colors duration-300 group-hover:text-white transition-colors duration-300 group-hover:text-white transition-colors duration-300 group-hover:text-white transition-colors duration-300 group-hover:text-white">
              Age Group
            </h3>
            <p className="mt-4 text-lg text-gray-600 transition-colors duration-300 group-hover:text-white/90 transition-colors duration-300 group-hover:text-white/90 transition-colors duration-300 group-hover:text-white/90">
              Early childhood learners
            </p>
          </div>
          <div className="group rounded-[32px] bg-white p-8 border border-slate-100 shadow-[0_20px_60px_rgba(1,77,87,0.08)] transition-all duration-300 hover:-translate-y-2 hover:bg-[#7ab648] hover:border-[#7ab648] hover:shadow-[0_35px_80px_rgba(122,182,72,0.35)]">
            <h3 className="text-xl font-bold text-[#014d57] transition-colors duration-300 group-hover:text-white transition-colors duration-300 group-hover:text-white transition-colors duration-300 group-hover:text-white transition-colors duration-300 group-hover:text-white">
              Capacity
            </h3>
            <p className="mt-4 text-lg text-gray-600 transition-colors duration-300 group-hover:text-white/90 transition-colors duration-300 group-hover:text-white/90 transition-colors duration-300 group-hover:text-white/90">
              30 learners
            </p>
          </div>
          <div className="group rounded-[32px] bg-white p-8 border border-slate-100 shadow-[0_20px_60px_rgba(1,77,87,0.08)] transition-all duration-300 hover:-translate-y-2 hover:bg-[#7ab648] hover:border-[#7ab648] hover:shadow-[0_35px_80px_rgba(122,182,72,0.35)]">
            <h3 className="text-xl font-bold text-[#014d57] transition-colors duration-300 group-hover:text-white transition-colors duration-300 group-hover:text-white transition-colors duration-300 group-hover:text-white transition-colors duration-300 group-hover:text-white">
              Focus
            </h3>
            <p className="mt-4 text-lg text-gray-600 transition-colors duration-300 group-hover:text-white/90 transition-colors duration-300 group-hover:text-white/90 transition-colors duration-300 group-hover:text-white/90">
              Development & inclusion
            </p>
          </div>
        </div>
        <section className="mt-24">
          <h2 className="text-4xl font-black text-[#014d57] transition-colors duration-300 group-hover:text-white">
            Key Activities
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Sensory stimulation",
              "Communication development",
              "Motor skills training",
              "Social interaction",
              "Life skills development",
              "Educational preparation"
            ].map((item) => (
              <div
                key={item}
                className="group rounded-[24px] bg-white/90 backdrop-blur-sm p-6 border border-white/60 shadow-[0_15px_40px_rgba(1,77,87,0.10)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#7ab648] hover:border-[#7ab648] hover:shadow-[0_35px_80px_rgba(122,182,72,0.35)]"
              >
                <p className="font-semibold text-gray-700 transition-colors duration-300 group-hover:text-white">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-24 rounded-[2rem] bg-[#014d57] p-12 text-white">
          <h2 className="text-4xl font-black">
            Expected Outcomes
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold">
                Confidence
              </h3>
              <p className="mt-3 text-white/80">
                Improved self-esteem and participation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Independence
              </h3>
              <p className="mt-3 text-white/80">
                Stronger daily living abilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Inclusion
              </h3>
              <p className="mt-3 text-white/80">
                Better social integration and support.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}























