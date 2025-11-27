import React from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import principalImg from '../assets/PrincipalDeliaRossi.jpg'

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Our School"
            subtitle="A Young School with a Big Vision"
          />
          <p className="text-sm md:text-base text-slate-700 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
            dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie,
            enim est eleifend mi, non fermentum diam nisl sit amet erat.
          </p>
        </div>
      </section>

      <section className="section bg-waterkloof-offwhite">
        <div className="container">
          <SectionHeader
            title="Principal's Message"
            subtitle="From Principal Delia Rossi"
          />
          <div className="grid gap-8 md:grid-cols-[400px,1fr] items-start">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={principalImg}
                alt="Principal Delia Rossi"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4 text-sm md:text-base text-slate-700">
              <p>
                Welcome to Waterkloof Hills Primary School. Since opening our doors in 2022, we have been committed to providing quality education in a warm, supportive environment where every child can thrive.
              </p>
              <p>
                Our school was born from a partnership between the Department of Education, local mining companies, and dedicated parents who shared a vision for excellence in education. Today, we proudly serve over 1,000 learners from Grade R to Grade 7.
              </p>
              <p>
                At Waterkloof Hills, we believe in educating the whole child—nurturing not just academic excellence, but also physical fitness, cultural awareness, and strong values. Our learners are not just students; they are my children, and they are the future of our country.
              </p>
              <p className="font-semibold text-waterkloof-green">
                Education Par Excellence for Tomorrow's Leaders.
              </p>
              <p className="text-sm italic">
                — Principal Delia Rossi
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
