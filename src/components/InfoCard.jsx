import React from 'react'

export default function InfoCard({ title, description, children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-waterkloof-dark">
        {title}
      </h3>
      <p className="text-sm text-slate-600 flex-1">
        {description}
      </p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  )
}
