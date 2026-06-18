"use client";
import { motion } from "framer-motion";
export default function HorticulturePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 md:pt-36">
      <section className="mx-auto max-w-7xl px-8">
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
    HORTI
  </motion.span>

  <motion.span
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.25, duration: 0.8 }}
    className="block text-[#7ab648]"
  >
    CULTURE
  </motion.span>

</motion.h1>
  <div className="mt-6 h-1 w-24 rounded-full bg-cyan-400" />

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The Horticulture Programme at Motswedi Rehabilitation Centre equips
    trainees with practical agricultural skills focused on crop production,
    plant care and sustainable farming practices. Through hands-on
    learning and field experience, trainees develop skills that support
    self-reliance, employability and participation in agricultural
    activities.
  </p>
</motion.div>

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
    Programme Aim
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The programme guides trainees through the complete crop production
    cycle, from soil preparation to harvesting, while building practical
    agricultural skills that promote independence and active participation
    in farming activities.
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
    Programme Structure
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The programme is delivered by one instructor and one assistant who
    provide practical training in crop production, plant care and farm
    management activities.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Soil preparation and land development
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Seed sowing and transplanting
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Crop care and maintenance
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Harvesting and post-harvest handling
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Fruit tree cultivation
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Sustainable farming practices
    </p>
  </div>

</div>
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
    Core Training Activities
  </h2>

  <h3 className="mt-8 text-2xl font-bold text-[#014d57]">
    Land Preparation
  </h3>

  <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
    Trainees learn tilling, land levelling and seedbed preparation to
    improve soil quality, encourage healthy root development and support
    successful crop production.
  </p>

  <h3 className="mt-8 text-2xl font-bold text-[#014d57]">
    Planting Techniques
  </h3>

  <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
    Training covers broadcasting, drilling, dibbling and transplanting
    methods, with emphasis on correct spacing and planting depth for
    optimal crop growth.
  </p>

  <h3 className="mt-8 text-2xl font-bold text-[#014d57]">
    Crop Management
  </h3>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    Trainees learn fertilisation, irrigation, weed control and pest
    management techniques to support healthy crop development and
    improved yields.
  </p>

  <h3 className="mt-8 text-2xl font-bold text-[#014d57]">
    Harvesting & Post-Harvest Handling
  </h3>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    Practical training includes harvesting crops at maturity and proper
    storage techniques to reduce post-harvest losses and maintain
    produce quality.
  </p>
</div>
</div>

<section className="mt-10 rounded-[2rem] bg-[#014d57] p-12 text-white">
  <h2 className="text-4xl font-black">
    Practical Exposure
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    Trainees participate in educational site visits where they learn
    about forestry, agronomy and broader agricultural practices from
    real-world environments.
  </p>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    Industrial attachment opportunities are provided for:
  </p>

  <ul className="mt-4 md:mt-6 space-y-3 text-base md:text-lg leading-relaxed text-white-80">
    <li>• Two weeks before examinations</li>
    <li>• Two weeks after examinations</li>
  </ul>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    These experiences strengthen workplace readiness and practical
    application of horticultural skills.
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
    Additional Skills Development
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    In addition to crop production, trainees are introduced to a range
    of supporting agricultural activities that strengthen sustainable
    farming practices and broaden their practical knowledge.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Compost making
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Organic fertiliser production
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Herb production
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Irrigation system installation
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Shade net installation
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Basic borehole maintenance support
    </p>
  </div>

</div>
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
    The programme accommodates up to 20 trainees between the ages of
    18 and 28 years.
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
    Impact
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
    The programme has enabled some trainees to secure permanent
    employment opportunities within agricultural and related sectors,
    demonstrating the value of practical vocational training in
    preparing individuals for real-world work environments.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-2">

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Agricultural production skills
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Sustainable farming knowledge
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Workplace readiness
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-6 shadow-sm">
    <p className="font-medium text-gray-600">
      Employment opportunities
    </p>
  </div>

</div>
  </div>
</div>


<section className="mt-10 rounded-[2rem] bg-[#014d57] p-12 text-white">
  <h2 className="text-4xl font-black">
    Challenges & Opportunities
  </h2>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    The programme continues to face challenges that affect trainees
    after completion of training and impact ongoing production
    activities.
  </p>

  <ul className="mt-4 md:mt-6 space-y-3 text-base md:text-lg leading-relaxed text-white-80">
    <li>
      • Limited access to start-up capital for trainees wishing to
      begin their own agricultural projects
    </li>

    <li>
      • Financial constraints affecting operational requirements such
      as water costs and production expenses
    </li>
  </ul>

  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white-80">
    Despite these challenges, the programme remains committed to
    empowering trainees with practical skills that support sustainable
    livelihoods and economic participation.
  </p>
</section>

<section className="mt-10 mb-24">
  <h2 className="text-4xl font-black text-[#014d57]">
    Career Pathways
  </h2>

  <div className="mt-10 grid gap-6 md:grid-cols-3">

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-8 shadow-sm">
    <p className="font-medium text-gray-600">
      Crop Production
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-8 shadow-sm">
    <p className="font-medium text-gray-600">
      Agricultural Enterprises
    </p>
  </div>

  <div className="rounded-2xl border border-[#014d57]/10 bg-gradient-to-br from-white to-[#f7fbfc] p-8 shadow-sm">
    <p className="font-medium text-gray-600">
      Self Employment
    </p>
  </div>

</div>
  
</section>
</section>
</main>
  );
}