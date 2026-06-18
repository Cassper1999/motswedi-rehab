"use client";
import { motion } from "framer-motion";
export default function CarpentryPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 md:pt-36">
      <section className="mx-auto max-w-7xl px-8">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-4xl ml-8"
>
  <p className="font-bold uppercase tracking-widest text-[#7ab648]">
    Vocational Training Programme
  </p>

  <motion.h1 className="mt-4 text-4xl md:text-6xl font-black leading-[1.05]">

  <motion.span
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="block text-[#014d57]"
  >
    CARPENTRY &
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.25, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    JOINERY
  </motion.span>

</motion.h1>

  <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The Carpentry & Joinery Programme at Motswedi Rehabilitation Centre
    equips persons with intellectual and learning disabilities with
    practical vocational skills in carpentry, joinery and production
    work. Through hands-on training and production-based learning,
    trainees develop valuable workplace skills that support independence,
    confidence and future employment opportunities.
  </p>
</motion.div>

<div
  className="
    group relative mt-10 overflow-hidden
    rounded-[2rem]
    border border-white/60
    bg-white/80
    backdrop-blur-md
    p-10
    shadow-[0_25px_70px_rgba(1,77,87,0.12)]
    transition-all duration-500
    hover:-translate-y-1
    hover:shadow-[0_35px_90px_rgba(1,77,87,0.18)]
  "
>
  <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100/40 blur-3xl" />

  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-[#014d57]">
      Programme Overview
    </h2>

    <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
      This is a structured two-year vocational programme offered at
      Level 3, combining practical skills development with production
      based learning. Trainees are equipped with carpentry and joinery
      competencies while gaining experience through real production work.
    </p>

    <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
      The programme places strong emphasis on practical application,
      allowing trainees to use their skills in meaningful work settings
      that simulate real workplace environments.
    </p>

    <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
      Products manufactured during training contribute to income
      generation for the centre, supporting sustainability and continued
      programme development.
    </p>
  </div>
</div>

<div
  className="
    relative mt-10 overflow-hidden
    rounded-[2rem]
    border border-white/60
    bg-white/80
    backdrop-blur-md
    p-10
    shadow-[0_25px_70px_rgba(1,77,87,0.12)]
  "
>
  <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100/40 blur-3xl" />

  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-[#014d57]">
      Accreditation
    </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The programme is officially accredited by the Botswana
    Qualifications Authority (BQA), ensuring that training meets
    nationally recognised vocational education standards.
  </p>
</div>
</div>


<div
  className="
    relative mt-10 overflow-hidden
    rounded-[2rem]
    border border-white/60
    bg-white/80
    backdrop-blur-md
    p-10
    shadow-[0_25px_70px_rgba(1,77,87,0.12)]
  "
>
  <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100/40 blur-3xl" />

  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-[#014d57]">
      Programme Capacity
    </h2>

    <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
      The programme accommodates up to 20 trainees and is open to both
      male and female participants between the ages of 18 and 30 years.
    </p>
  </div>
</div>

<section className="mt-10 rounded-[2rem] bg-[#014d57] p-12 text-white">
  <h2 className="text-4xl font-black">
    Production Based Learning
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    A key feature of the programme is production-based learning.
    Trainees participate in the manufacturing of furniture and other
    carpentry products, gaining practical workplace experience while
    strengthening technical competence.
  </p>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    The production component also supports income generation for the
    centre and contributes to programme sustainability.
  </p>
</section>

<div
  className="
    relative mt-10 overflow-hidden
    rounded-[2rem]
    border border-white/60
    bg-white/80
    backdrop-blur-md
    p-10
    shadow-[0_25px_70px_rgba(1,77,87,0.12)]
  "
>
  <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] via-cyan-400 to-[#014d57]" />

  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-100/40 blur-3xl" />

  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-[#014d57]">
    </h2>
  <h2 className="text-3xl font-bold text-[#014d57]">
    Impact
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The programme enables trainees to develop practical skills in
    carpentry, joinery and production work while promoting
    independence, confidence and workplace readiness.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">
  {[
    "Practical vocational skills development",
    "Increased confidence and independence",
    "Workplace readiness and production experience",
    "Income generation supporting sustainability",
  ].map((item) => (
    <div
      key={item}
      className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <p className="font-medium text-gray-600">
        {item}
      </p>
    </div>
  ))}
</div>
  </div>
</div>


<section className="mt-10 rounded-[2rem] bg-[#014d57] p-12 text-white">
  <h2 className="text-4xl font-black">
    Challenges & Opportunities
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    The programme continues to face challenges including limited
    industrial attachment opportunities and difficulties in securing
    formal employment placements for trainees after completion of
    training.
  </p>

  <ul className="mt-4 md:mt-6 space-y-3 text-base md:text-lg leading-relaxed text-white-80">
    <li>• Limited opportunities for industrial attachment placements</li>
    <li>• Difficulty securing formal employment opportunities</li>
  </ul>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    Despite these challenges, the programme remains committed to
    preparing trainees for meaningful participation in vocational and
    community-based work environments.
  </p>
</section>

<section className="mt-10 mb-24">
  <h2 className="text-4xl font-black text-[#014d57]">
    Career Pathways
  </h2>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
  {[
    "Furniture Production",
    "Carpentry Services",
    "Self Employment",
  ].map((item) => (
    <div
      key={item}
      className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl"
    >
      <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#7ab648] to-cyan-400" />

      <p className="font-medium text-gray-600">
        {item}
      </p>
    </div>
  ))}
</div>
  
</section>
</section>

</main>
  );
}