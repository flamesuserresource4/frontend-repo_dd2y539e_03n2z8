export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} IskaHubi. All rights reserved.</p>
          <nav className="flex items-center gap-5">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="/test" className="hover:text-gray-900">System Check</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
