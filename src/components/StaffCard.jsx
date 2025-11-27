import React from 'react'

export default function StaffCard({ name, role, bio }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="h-20 w-20 rounded-full bg-slate-200 mb-3" />
      <h3 className="font-semibold text-sm text-waterkloof-dark">
        {name}
      </h3>
      <p className="text-xs text-waterkloof-green mb-2">{role}</p>
      <p className="text-xs text-slate-600">{bio}</p>
    </div>
  )
}
