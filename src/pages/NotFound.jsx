import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-waterkloof-dark">
          Page Not Found
        </h1>
        <p className="text-sm md:text-base text-slate-700 mb-6 max-w-xl mx-auto">
          The page you are looking for could not be found. It may have been moved or no longer exists.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-waterkloof-green px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
