import { motion } from "motion/react";
import {
  ArrowRight,
  Phone,
  Thermometer,
  Wind,
  ShieldCheck,
} from "lucide-react";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D0D0D] text-white selection:bg-white/30 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 md:px-12 backdrop-blur-md bg-[#0D0D0D]/50 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Wind className="h-6 w-6 text-blue-400" />
          <span className="font-serif text-xl font-semibold tracking-wide">
            Aura HVAC
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Testimonials
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="tel:+14075550199"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>(407) 555-0199</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
          >
            Book Now
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-dvh w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
              alt="Beautifully lit comfortable living room"
              className="h-full w-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-transparent to-[#0D0D0D]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10 mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-medium uppercase tracking-wider text-white/90">
                24/7 Emergency Service Available
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-medium leading-[1.05] tracking-tight max-w-5xl"
            >
              Orlando's #1 Trusted <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Cooling Experts
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 font-light"
            >
              Premium, fast, and effortlessly trustworthy HVAC services. We
              bring cinematic comfort to your home, exactly when you need it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
            >
              <a
                href="#emergency"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
              >
                <span>Get Emergency Service Now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="relative flex min-h-dvh items-center justify-center py-24 px-6">
          <div className="max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white/90"
            >
              Comfort isn't a luxury. <br />
              <span className="text-white/40">It's a standard.</span>
            </motion.h2>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 px-6 bg-[#111111]">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Thermometer,
                  title: "Precision Climate Control",
                  desc: "State-of-the-art installations that keep your home perfectly tempered year-round.",
                },
                {
                  icon: ShieldCheck,
                  title: "Trusted Professionals",
                  desc: "Our uniformed, smiling technicians are fully licensed, insured, and rigorously trained.",
                },
                {
                  icon: Wind,
                  title: "Pristine Air Quality",
                  desc: "Advanced filtration systems that ensure the air you breathe is as clean as it is cool.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="flex flex-col items-start p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="rounded-full bg-blue-500/20 p-4 mb-6">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0D0D0D] py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-blue-400" />
            <span className="font-serif text-lg font-semibold">Aura HVAC</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <span>© 2026 Aura HVAC. All rights reserved.</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
