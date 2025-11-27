import React from 'react'

export default function GalleryGrid({ items }) {
  return (
    <div className="grid gap-5 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
          <div className="aspect-video bg-slate-200 overflow-hidden">
            {item.images && item.images[0] && (
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-sm mb-1 text-waterkloof-dark">
              {item.title}
            </h3>
            <p className="text-xs text-slate-600 flex-1">
              {item.caption}
            </p>
            {item.linkLabel && (
              <a
                href={item.href || '#'}
                className="mt-3 text-xs font-semibold text-waterkloof-green hover:underline"
              >
                {item.linkLabel}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
