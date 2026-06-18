"use client";
import { motion } from "framer-motion";
export default function ICTPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 md:pt-36">
      <section className="mx-auto max-w-7xl px-8">
       {/* HERO */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-4xl"
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
    ICT
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.25, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    BASIC COMPUTER STUDIES
  </motion.span>

</motion.h1>

  <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The ICT Department at Motswedi Rehabilitation Centre offers a
    foundational vocational programme designed to equip trainees with
    essential computer and digital communication skills for everyday
    use, further learning and future employment opportunities.
  </p>
</motion.div>

{/* PROGRAMME OVERVIEW */}
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
    Programme Overview
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    ICT (Information and Communication Technology), also known as
    Basic Computer Studies, introduces trainees to the practical use
    of technology within a structured and supportive learning
    environment.
  </p>

  <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The programme focuses on building confidence and competence in the
    use of digital tools for communication, learning and work-related
    tasks, preparing trainees for participation in an increasingly
    technology-driven world.
  </p>
</div>
</div>

{/* KEY LEARNING AREAS */}
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
    Key Learning Areas
  </h2>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Basic computer operations (hardware and software)
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Word processing and document creation
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Digital presentation skills
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Communication through technology platforms
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Digital devices and multimedia tools
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Practical technology applications
    </p>
  </div>
</div>
</div>
</div>

{/* LEARNING RESOURCES */}
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
    Learning Resources & Equipment
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    Training is supported by a range of modern tools and equipment
    that ensure an interactive and practical learning experience.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-3">

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Computers
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Projectors
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Digital Cameras
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Multimedia Screens
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Flip Boards
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Tablets
    </p>
  </div>
</div>
</div>
</div>

{/* PROGRAMME PURPOSE */}
<section className="mt-10 rounded-[2rem] bg-[#014d57] p-12 text-white">
  <h2 className="text-4xl font-black">
    Programme Purpose
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    The ICT programme was established to empower trainees with basic
    digital literacy skills and provide a foundation for lifelong
    learning, communication and workplace participation.
  </p>

  <ul className="mt-4 md:mt-6 space-y-3 text-base md:text-lg leading-relaxed text-white-80">
    <li>• Participate in modern learning environments</li>
    <li>• Access information and communication tools</li>
    <li>• Improve opportunities for employment</li>
    <li>• Adapt to technology-driven workplaces</li>
  </ul>
</section>

{/* ACCREDITATION */}
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
    Accreditation Status
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The ICT programme is currently registered with the Botswana
    Qualifications Authority (BQA), reflecting its alignment with
    national vocational training standards and quality assurance
    requirements.
  </p>
</div>
</div>

{/* IMPACT */}
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
    Impact
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    As a newly introduced programme, ICT is playing an important role
    in bridging the digital skills gap by preparing trainees for
    future learning opportunities and increasing readiness for
    entry-level employment opportunities.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Improved digital literacy
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Increased confidence with technology
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Better communication skills
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Enhanced employability readiness
    </p>
  </div>
</div>
  </div>
</div>

<div className="h-24" />
</section>
     
    </main>
  );
}





















