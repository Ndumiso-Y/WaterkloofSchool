import React from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import games1 from '../assets/WaterkloofGames1.jpg'
import games2 from '../assets/WaterkloofGames2.jpg'
import games3 from '../assets/WaterkloofGames3.jpg'
import chess1 from '../assets/waterkloofChess1.jpg'
import chess2 from '../assets/waterkloofChess2.jpg'
import chess3 from '../assets/waterkloofChess3.jpg'
import farm1 from '../assets/WaterkloofFarm1.jpg'
import farm2 from '../assets/WaterkloofFarm2.jpg'
import farm3 from '../assets/WaterkloofFarm3.jpg'
import farm4 from '../assets/WaterkloofFarm4.jpg'
import staff1 from '../assets/waterkloofStaff1.jpg'
import staff2 from '../assets/waterkloofStaff2.jpg'
import staff3 from '../assets/waterkloofStaff3.jpg'

export default function NewsEvents() {
  const galleries = [
    {
      title: 'Game Days',
      description: 'Learners enjoy energetic game days that build fitness, fun and teamwork.',
      images: [games1, games2, games3]
    },
    {
      title: 'Chess Club',
      description: 'Focused minds gather at our chess boards to practise strategy and concentration.',
      images: [chess1, chess2, chess3]
    },
    {
      title: 'Our Gardens & Farm',
      description: 'Calm, green spaces give learners room to breathe, reflect and connect with nature.',
      images: [farm1, farm2, farm3, farm4]
    },
    {
      title: 'Staff in Action',
      description: 'Dedicated teachers and support staff work together to keep the school running smoothly.',
      images: [staff1, staff2, staff3]
    }
  ]

  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeader
            title="News & Events"
            subtitle="Stay up to date with announcements, celebrations and important dates."
          />
          <p className="text-sm md:text-base text-slate-700 max-w-3xl">
            Welcome to our News & Events page. Here you can explore photo galleries showcasing life at Waterkloof Hills Primary School, from exciting game days to peaceful moments in our gardens.
          </p>
        </div>
      </section>

      {/* Photo Galleries */}
      {galleries.map((gallery, idx) => (
        <section key={gallery.title} className={idx % 2 === 0 ? 'section bg-waterkloof-offwhite' : 'section'}>
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-waterkloof-dark mb-2">
              {gallery.title}
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              {gallery.description}
            </p>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {gallery.images.map((img, imgIdx) => (
                <div key={imgIdx} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                  <img
                    src={img}
                    alt={`${gallery.title} ${imgIdx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
