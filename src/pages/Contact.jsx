import React from 'react'
import SectionHeader from '../components/SectionHeader.jsx'

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title="Get in Touch with Us"
          subtitle="Our office team is ready to assist with enquiries, admissions and general information."
        />
        <p className="text-sm md:text-base text-slate-700 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
          dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
          ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
          enim est eleifend mi, non fermentum diam nisl sit amet erat.
        </p>
      </div>
    </section>
  )
}
