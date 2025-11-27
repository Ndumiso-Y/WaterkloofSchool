import React from 'react'
import { Link } from 'react-router-dom'

export default function GalleryGrid({ items }) {
  return (
    <div className="grid gap-5 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col group">
          <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
            {item.images && item.images[0] && (
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            )}
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-base mb-2 text-waterkloof-dark">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 flex-1 leading-relaxed">
              {item.caption}
            </p>
            {item.linkLabel && (
              <Link
                to={item.href || '#'}
                className="mt-3 text-sm font-semibold text-waterkloof-green hover:underline inline-flex items-center gap-1"
              >
                {item.linkLabel} →
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
