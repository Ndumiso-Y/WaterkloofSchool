import React from 'react'

export default function NewsCard({ title, date, excerpt }) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col gap-2">
      <p className="text-[11px] uppercase tracking-wide text-slate-500">
        {date}
      </p>
      <h3 className="font-semibold text-waterkloof-dark">{title}</h3>
      <p className="text-sm text-slate-600">{excerpt}</p>
      <button className="mt-2 text-xs font-semibold text-waterkloof-green hover:underline self-start">
        Read more
      </button>
    </article>
  )
}
