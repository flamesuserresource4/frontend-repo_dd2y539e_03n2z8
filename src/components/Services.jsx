import { Code2, Globe, Shield, Cpu } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Design',
    desc: 'Clean, responsive, and accessible interfaces that feel modern and premium.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Robust frontend and backend engineering with best practices baked in.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Hardened setups, audits, and guidance to keep your site safe and compliant.',
  },
  {
    icon: Cpu,
    title: 'Automation',
    desc: 'Workflow automation and integrations to save time and reduce errors.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Practical services focused on outcomes. Designed to make your online presence look and feel exceptional.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
