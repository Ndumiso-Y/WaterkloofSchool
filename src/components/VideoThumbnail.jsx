import React from 'react'

export default function VideoThumbnail({ title, description, thumbnailImage }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
      <div className="md:w-1/3 aspect-video bg-slate-200 flex items-center justify-center relative overflow-hidden">
        {thumbnailImage && (
          <img
            src={thumbnailImage}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="h-12 w-12 rounded-full bg-waterkloof-green text-white flex items-center justify-center text-xs font-semibold">
            ▶
          </div>
        </div>
      </div>
      <div className="p-4 flex-1">
        <h3 className="font-semibold text-sm mb-1 text-waterkloof-dark">
          {title}
        </h3>
        <p className="text-xs text-slate-600 mb-2">
          {description}
        </p>
        <button className="text-xs font-semibold text-waterkloof-green hover:underline">
          Play interview
        </button>
      </div>
    </div>
  )
}
