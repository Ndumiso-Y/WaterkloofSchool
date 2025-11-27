import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImg from '../assets/WaterkloodLogo1.jpg'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our School' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/academics', label: 'Academics' },
  { to: '/co-curricular', label: 'Sport & Culture' },
  { to: '/news-events', label: 'News & Events' },
  { to: '/parents', label: 'Parent Info' },
  { to: '/contact', label: 'Contact' },
  { to: '/high-school', label: 'High School' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const baseLink =
    'px-3 py-2 text-sm font-medium transition-colors rounded-md'
  const activeClasses = 'bg-waterkloof-green text-white'
  const inactiveClasses =
    'text-waterkloof-dark hover:bg-waterkloof-green/10 hover:text-waterkloof-green'

  return (
    <header className="bg-white shadow sticky top-0 z-20">
      <nav className="container flex items-center justify-between py-3 gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Waterkloof Hills School Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="font-semibold text-sm md:text-base text-waterkloof-dark">
              Waterkloof Hills
            </div>
            <div className="text-[11px] md:text-xs text-slate-600">
              Education Par Excellence
            </div>
          </div>
        </Link>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-200 px-2 py-1 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="material-icons text-base">menu</span>
        </button>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  baseLink,
                  isActive ? activeClasses : inactiveClasses,
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            className="ml-2 inline-flex items-center rounded-full bg-waterkloof-green px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
          >
            Apply Now
          </Link>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container flex flex-col py-2 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    baseLink,
                    'w-full text-left',
                    isActive ? activeClasses : inactiveClasses,
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-waterkloof-green px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
