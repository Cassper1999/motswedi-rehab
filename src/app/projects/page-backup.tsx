import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Community Outreach",
      description:
        "Bringing rehabilitation and support services closer to communities through outreach initiatives and partnerships.",
    },
    {
      title: "Inclusive Education",
      description:
        "Supporting learners with disabilities through accessible learning opportunities and educational resources.",
    },
    {
      title: "Skills Development",
      description:
        "Empowering youth and adults with practical vocational skills that promote independence and employment.",
    },
    {
      title: "Accessibility Initiative",
      description:
        "Promoting environments, services and opportunities that are accessible and inclusive for all.",
    },
  ];

  return (
    <main className="bg-[#f7f5f1]">

      {/* HERO */}
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-8">

          <p className="font-bold uppercase tracking-[0.2em] text-[#7ab648]">
            Projects
          </p>

          <h1 className="mt-4 text-6xl md:text-7xl font-black leading-none text-[#014d57]">
            BUILDING
            <br />
            INCLUSIVE
            <br />
            COMMUNITIES
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-gray-600">
            Through innovative projects and partnerships, Motswedi
            Rehabilitation Centre creates opportunities that improve lives,
            strengthen communities and promote inclusion.
          </p>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="relative overflow-hidden rounded-[2rem]">

            <Image
              src="/images/projects/COMMUNITYHELP.webp"
              alt="Projects"
              width={1600}
              height={900}
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#014d57]/80 to-transparent" />

            <div className="absolute left-12 top-1/2 max-w-xl -translate-y-1/2 text-white">

              <h2 className="text-5xl font-black">
                Projects That
                <br />
                Create Change
              </h2>

              <p className="mt-4 text-lg text-white/90">
                Every project is designed to create meaningful impact and
                expand opportunities for people living with disabilities.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="grid gap-8 md:grid-cols-2">

            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 h-3 w-16 rounded-full bg-[#7ab648]" />

                <h3 className="text-3xl font-bold text-[#014d57]">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {project.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="text-center">

            <p className="font-bold uppercase tracking-[0.2em] text-[#7ab648]">
              Focus Areas
            </p>

            <h2 className="mt-4 text-5xl font-black text-[#014d57]">
              Driving Sustainable Impact
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="font-bold text-[#014d57]">Accessibility</h3>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="font-bold text-[#014d57]">Education</h3>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="font-bold text-[#014d57]">Employment</h3>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="font-bold text-[#014d57]">Community Inclusion</h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#014d57] py-24 text-white">

        <div className="mx-auto max-w-4xl px-8 text-center">

          <h2 className="text-5xl font-black">
            Partner With Us
          </h2>

          <p className="mt-6 text-xl text-white/80">
            Collaborate with us to create lasting change and expand
            opportunities for individuals and communities.
          </p>

          <button className="mt-10 rounded-xl bg-[#7ab648] px-8 py-4 font-bold">
            Become A Partner
          </button>

        </div>

      </section>

    </main>
  );
}
