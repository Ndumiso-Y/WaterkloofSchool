import React from 'react'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-2 mb-8 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-wide text-waterkloof-gold uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-waterkloof-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
