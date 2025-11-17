import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 opacity-40">
        <svg className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <path d="M120,-164.2C154.5,-145.6,182.6,-116.2,209.2,-82C235.8,-47.7,260.7,-8.6,259.8,31.1C258.8,70.7,231.9,110.9,199.6,146.6C167.3,182.2,129.6,213.2,88.9,223.7C48.2,234.2,4.6,224.2,-36.3,210.9C-77.1,197.6,-115.3,181,-151.7,157.2C-188.1,133.5,-222.7,102.6,-235.6,64.2C-248.6,25.8,-239.9,-19.5,-221.9,-59.7C-203.9,-99.9,-176.6,-135,-142.2,-154.7C-107.8,-174.3,-66.3,-178.5,-27.3,-184.4C11.7,-190.3,46.9,-197.8,81.9,-189.6C116.8,-181.4,151.5,-157,120,-164.2Z" fill="url(#grad)" />
          </g>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900"
            >
              A modern home for your services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              Elevate iskahubi.co.uk with a clean, modern interface, smooth animations and a design system that scales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-gray-800">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 ring-1 ring-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50">
                Explore Services
              </a>
            </motion.div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              {[
                'Responsive by default',
                'Accessible and fast',
                'Built with Tailwind',
                'Motion-first design',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                    <Check size={14} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/3] rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-4">
              <div className="grid grid-cols-3 gap-3 h-full">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-xl bg-gradient-to-br from-white to-gray-50 ring-1 ring-black/5 shadow-sm" />
                ))}
              </div>
              <p className="absolute bottom-4 left-4 text-xs text-gray-500">Preview of a modern cards layout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
