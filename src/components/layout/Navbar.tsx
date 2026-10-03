import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/cn'

const links = [
  { to: '/projects', label: 'projects' },
  { to: '/about', label: 'about' },
  { to: '/blog', label: 'blog' },
  { to: '/contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="container-x flex items-center justify-between py-6">
          <Link
            to="/"
            className="font-display text-lg lowercase tracking-tight text-paper md:text-xl"
          >
            studio null
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    'text-label lowercase tracking-[0.2em] text-paper/80 transition-colors hover:text-paper',
                    isActive && 'text-paper'
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="text-paper md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[60] bg-ink md:hidden"
          >
            <div className="container-x flex items-center justify-between py-6">
              <span className="font-display text-lg lowercase text-paper">studio null</span>
              <button
                onClick={() => setOpen(false)}
                className="text-paper"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="container-x mt-24 flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 80, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05 * i,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-5xl lowercase tracking-tight text-paper sm:text-6xl"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}