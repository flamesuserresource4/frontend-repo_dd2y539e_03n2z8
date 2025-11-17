import { Code2, Globe, Shield, Cpu } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Web Design' },
  { icon: Code2, title: 'Development' },
  { icon: Shield, title: 'Security' },
  { icon: Cpu, title: 'Automation' },
]

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Services</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title }) => (
            <div key={title} className="group rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">Sharp, reliable, and built to last.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
