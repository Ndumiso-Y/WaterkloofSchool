import React from 'react'

export default function StatHighlight({ value, label }) {
  return (
    <div className="bg-white rounded-xl border border-waterkloof-softgold/70 px-5 py-4 shadow-sm text-center">
      <div className="text-2xl md:text-3xl font-bold text-waterkloof-green mb-1">
        {value}
      </div>
      <div className="text-xs md:text-sm text-slate-600">
        {label}
      </div>
    </div>
  )
}
