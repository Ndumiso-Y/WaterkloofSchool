import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-waterkloof-green text-white mt-16">
      <div className="container py-10 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Waterkloof Hills Primary School
          </h3>
          <p className="text-waterkloof-softgold text-xs mb-2">
            Education Par Excellence
          </p>
          <p className="text-slate-100 text-sm">
            Grade R to Grade 7 • Adjacent High School on the same campus.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Tel: 010 000 0000</p>
          <p>Email: info@waterkloofhills.school</p>
          <p>Address: Placeholder Road, Waterkloof Hills</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <div className="flex flex-col gap-1">
            <Link to="/admissions" className="hover:text-waterkloof-softgold">
              Admissions
            </Link>
            <Link to="/news-events" className="hover:text-waterkloof-softgold">
              News & Events
            </Link>
            <Link to="/parents" className="hover:text-waterkloof-softgold">
              Parent Information
            </Link>
            <Link to="/contact" className="hover:text-waterkloof-softgold">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-900">
        <div className="container flex flex-col md:flex-row items-center justify-between py-4 text-xs text-slate-200 gap-2">
          <p>© {year} Waterkloof Hills Primary School. Mock-up website.</p>
          <p className="text-slate-300">
            Designed by Embark Digitals • Built for demonstration only.
          </p>
        </div>
      </div>
    </footer>
  )
}
