import React from 'react'

export default function EventCard({ title, date, description }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <p className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">
        {date}
      </p>
      <h3 className="font-semibold text-sm mb-1 text-waterkloof-dark">
        {title}
      </h3>
      <p className="text-xs text-slate-600">
        {description}
      </p>
    </div>
  )
}
