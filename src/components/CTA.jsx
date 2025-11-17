export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 px-6 py-16 sm:px-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-16 right-16 h-40 w-40 rounded-full bg-blue-500/30 blur-2xl" />
            <div className="absolute -bottom-16 left-16 h-40 w-40 rounded-full bg-indigo-500/30 blur-2xl" />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Ready to modernise your website?</h2>
            <p className="mt-3 text-sm text-gray-300">Tell us a bit about your goals and we’ll come back with a plan.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              <input
                type="email"
                placeholder="Your email"
                className="rounded-full bg-white/10 px-4 py-3 text-white placeholder:text-gray-300 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:col-span-2"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow hover:bg-gray-100"
              >
                Request a callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
