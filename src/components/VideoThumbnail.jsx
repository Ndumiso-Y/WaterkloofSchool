import React, { useState } from 'react'

export default function VideoThumbnail({ title, description, thumbnailImage, videoSrc }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  if (isPlaying && videoSrc) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
        <div className="aspect-video bg-black">
          <video
            controls
            autoPlay
            className="w-full h-full"
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-1 text-waterkloof-dark">
            {title}
          </h3>
          <p className="text-xs text-slate-600">
            {description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
      <button
        onClick={videoSrc ? handlePlay : undefined}
        className="relative aspect-video bg-slate-200 flex items-center justify-center overflow-hidden group"
        disabled={!videoSrc}
      >
        {thumbnailImage && (
          <img
            src={thumbnailImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
          <div className="h-16 w-16 rounded-full bg-waterkloof-green text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
            ▶
          </div>
        </div>
      </button>
      <div className="p-5 flex-1">
        <h3 className="font-semibold text-base mb-2 text-waterkloof-dark">
          {title}
        </h3>
        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
          {description}
        </p>
        {videoSrc ? (
          <button
            onClick={handlePlay}
            className="text-sm font-semibold text-waterkloof-green hover:underline inline-flex items-center gap-1"
          >
            Play interview →
          </button>
        ) : (
          <p className="text-xs text-slate-500 italic">
            Video will be available soon. Please check back later or contact the school for more information.
          </p>
        )}
      </div>
    </div>
  )
}
