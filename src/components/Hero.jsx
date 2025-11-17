import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-gray-900/10 to-gray-900/0 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[clamp(2rem,6vw,3.5rem)] font-semibold tracking-tight text-gray-900"
            >
              Slick. Smooth. Modern.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-[15px] leading-7 text-gray-600 max-w-xl"
            >
              Minimal content. Maximum clarity. A fast, elegant experience that feels effortless.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">
                Start a project
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 ring-1 ring-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50">
                See the work
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gray-900/10 to-gray-900/0 blur-2xl" />
              <div className="relative aspect-[4/3] rounded-2xl bg-white ring-1 ring-black/5 shadow-xl p-4 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="rounded-xl bg-gray-50 ring-1 ring-black/5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
