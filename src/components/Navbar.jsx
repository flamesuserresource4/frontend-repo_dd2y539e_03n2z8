import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
              <Sparkles size={18} />
            </span>
            <span className="font-semibold text-gray-900">IskaHubi</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-800 transition-colors">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
