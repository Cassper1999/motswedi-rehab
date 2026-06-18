import Image from "next/image";
export default function Home() {
  return (
    <section className="min-h-screen bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-8 pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Fountain of Hope
            </span>
            <h1 className="mt-8 text-6xl md:text-7xl font-black leading-none text-[var(--teal)]">
              MOTSWEDI
              <br />
              IS A
              <br />
              FOUNTAIN
              <br />
              OF HOPE
            </h1>
            <p className="mt-8 text-lg text-gray-600 max-w-xl">
              Motswedi Rehabilitation Centre is a project of the Mother’s Union of the Dutch Reformed 
Church in Botswana-Mochudi Congregation. The Community based Rehabilitation 
programme started in 1988 and the centre was officially opened in 1995. Motswedi means 
a “Fountain”. For us it is a fountain of Hope. 
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[var(--primary)] px-8 py-4 font-semibold text-white">
                Get Help
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold">
                Explore Programmes
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-yellow-200 blur-3xl opacity-50"></div>
            <Image
              src="/images/home/motswedihome.webp"
              alt="Motswedi"
              width={700}
              height={700}
              priority
              className="rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
