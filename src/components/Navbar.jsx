import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/wishes', label: 'Wishes' },
  { to: '/about', label: 'About Krishnali' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-emerald-800/30 text-emerald-50'
        : 'text-emerald-50/90 hover:text-emerald-50 hover:bg-emerald-800/20'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-emerald-900/60 border-b border-emerald-800/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[gold] ring-2 ring-emerald-700 shadow-md" />
            <span className="text-emerald-50 font-semibold tracking-wide">Krishnali • 20</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label.toUpperCase()}
              </NavLink>
            ))}
            <Link
              to="/wishes"
              className="ml-2 px-4 py-2 rounded-full bg-[gold] text-emerald-900 font-semibold shadow hover:shadow-lg transition-shadow"
            >
              Send a Wish
            </Link>
          </div>

          <button
            className="md:hidden text-emerald-50/90 p-2 rounded hover:bg-emerald-800/30"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)} end={l.to === '/'}>
                  {l.label.toUpperCase()}
                </NavLink>
              ))}
              <Link
                to="/wishes"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-full bg-[gold] text-emerald-900 font-semibold text-center"
              >
                Send a Wish
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
