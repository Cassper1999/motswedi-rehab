"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await emailjs.send(
        "service_uho5pxv",
        "template_wkfnr29",
        {
  from_name: name,
  from_email: email,
  reply_to: email,

  to_name: name,
  to_email: email,

  admin_email: "shalomkrex@gmail.com",

  subject: subject,
  message: message,
},
        {
          publicKey: "dps-Qy8lSOsyG7byg",
        }
      );

      console.log("EmailJS success:", response.status, response.text);

      setStatus("success");
      setStatusMessage("Thank you! Your message has been sent successfully.");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error: any) {
      console.error("EmailJS error:", error);

      setStatus("error");
      setStatusMessage(
        error?.text || "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f3efe6] via-[#e8f7ef] to-[#dff4ff] pt-28 md:pt-36">
      {/* FAINT BACKGROUND CHILD IMAGE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/images/about/africankidd.png"
          alt=""
          className="absolute right-0 top-20 h-[420px] w-full object-contain object-right opacity-[0.30] md:top-16 md:h-[620px] md:w-[48%] md:opacity-[0.45]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#f3efe6]/96 via-[#e8f7ef]/88 to-[#dff4ff]/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#dff4ff]/35" />

        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute left-0 top-40 h-[420px] w-[420px] rounded-full bg-[#7ab648]/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="pb-10">
          <div className="mx-auto max-w-7xl px-8">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6 }}
              className="font-bold uppercase tracking-[0.2em] text-[#7ab648]"
            >
              Contact Us
            </motion.p>

            <motion.h1 className="mt-4 text-4xl md:text-6xl font-black leading-[1.05]">
              <motion.span
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="block text-[#014d57]"
              >
                LET&apos;S TALK
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="block text-[#7ab648]"
              >
                ABOUT HOPE
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600 max-w-4xl"
            >
              Whether you need support, want to partner with us,
              volunteer, or learn more about our services,
              we would love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="pb-10">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { title: "Phone", text: "+267 5729340" },
                { title: "Email", text: "motswedirehab@btcmail.com" },
                {
                  title: "Location",
                  text: "Mochudi, along Raserura Ward, Mochudi-Rasesa Road.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ duration: 0.6, delay: 0.2 * i }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl bg-white/92 backdrop-blur-md p-10 shadow-sm"
                >
                  <h3 className="text-2xl font-bold text-[#014d57]">
                    {item.title}
                  </h3>

                  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="pb-10">
          <div className="mx-auto max-w-4xl px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[2rem] bg-white/94 backdrop-blur-md p-10 shadow-sm"
            >
              <motion.h2 className="text-4xl md:text-5xl font-black leading-[1.05]">
                <motion.span
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="block text-[#014d57]"
                >
                  SEND US
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, duration: 0.8 }}
                  className="block text-[#7ab648]"
                >
                  A MESSAGE
                </motion.span>
              </motion.h2>

              <form onSubmit={sendEmail} className="mt-8 space-y-6">
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-xl px-5 py-4 text-sm font-semibold ${
                      status === "success"
                        ? "border border-green-200 bg-green-50 text-green-700"
                        : "border border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {statusMessage}
                  </motion.div>
                )}

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 text-black placeholder:text-black outline-none"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 text-black placeholder:text-black outline-none"
                />

                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 text-black placeholder:text-black outline-none"
                />

                <textarea
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 text-black placeholder:text-black outline-none"
                />

                <motion.button
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-[#7ab648] px-8 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#014d57] py-10 text-white">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl px-8 text-center"
          >
            <motion.h2 className="text-4xl md:text-5xl font-black leading-[1.05]">
              <motion.span
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="block text-white"
              >
                A FOUNTAIN
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="block text-[#7ab648]"
              >
                OF HOPE
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block text-white"
              >
                FOR ALL
              </motion.span>
            </motion.h2>

            <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-white/80">
              Together we can build a future where every individual
              has the opportunity to thrive.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}