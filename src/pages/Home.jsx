import React from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import InfoCard from '../components/InfoCard.jsx'
import StatHighlight from '../components/StatHighlight.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import VideoThumbnail from '../components/VideoThumbnail.jsx'
import { Link } from 'react-router-dom'
import heroImg from '../assets/WaterkloofHero.jpg'
import metroImg from '../assets/PrincipalMetroDeliaRossi.jpg'
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-waterkloof-green text-white">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-waterkloof-softgold uppercase mb-2">
              Waterkloof Hills Primary School
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Education Par Excellence for Tomorrow&apos;s Leaders.
            </h1>
            <p className="text-sm md:text-base text-slate-100 mb-6 max-w-xl">
              Waterkloof Hills Primary School is a growing, future-focused school
              offering quality education from Grade R to Grade 7 in a warm, supportive
              environment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-waterkloof-green shadow-sm hover:bg-waterkloof-softgold"
              >
                Apply Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Book a School Tour
              </Link>
            </div>
            <p className="text-[11px] mt-3 text-slate-100">
              Grade R–7 primary school with an adjacent high school on the same campus.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 h-56 md:h-72 overflow-hidden">
            <img
              src={heroImg}
              alt="Waterkloof Hills School Campus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Quick Access for Parents & Learners"
            subtitle="Find the information you need most often with just one click."
          />
          <div className="grid gap-5 md:grid-cols-4">
            <InfoCard
              title="Term Dates"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <InfoCard
              title="Latest News"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <InfoCard
              title="Announcements"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <InfoCard
              title="School Fees & Admissions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            >
              <Link
                to="/admissions"
                className="text-xs font-semibold text-waterkloof-green hover:underline"
              >
                View admissions information
              </Link>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Pillars & stats */}
      <section className="section bg-waterkloof-offwhite">
        <div className="container grid gap-10 md:grid-cols-[1.3fr,1fr] items-start">
          <div>
            <SectionHeader
              title="A Balanced Education for Every Child"
              subtitle="We believe in strong academics, active bodies and a values-driven culture that shapes character."
            />
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard
                title="Strong Academics"
                description="Learners build solid foundations in literacy, numeracy and life skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
              <InfoCard
                title="Sport & Physical Development"
                description="From the athletics track to the netball court, learners are encouraged to stay active and healthy. Lorem ipsum dolor sit amet."
              />
              <InfoCard
                title="Arts, Culture & Clubs"
                description="Cultural activities help learners discover talents in music, art, drama and public speaking. Lorem ipsum dolor sit amet."
              />
              <InfoCard
                title="Values & Life Skills"
                description="A values-driven environment helps children grow into responsible, respectful young people. Lorem ipsum dolor sit amet."
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <StatHighlight value="2022" label="Year the school opened" />
            <StatHighlight value="1000+" label="Learners currently enrolled" />
            <StatHighlight value="R–7" label="Primary school grade range" />
          </div>
        </div>
      </section>


      {/* Metro FM feature */}
      {/* NOTE: In your real project, you can replace the placeholder thumbnail
          with your actual images located on your machine at:
          F:\\Digital Agency\\waterkloof\\Website\\PrincipalMetroDeliaRossi.jpg
          F:\\Digital Agency\\waterkloof\\Website\\PrincipalDeliaRossi.jpg
          Copy them into src/assets with the same filenames and then import them
          into this section or the VideoThumbnail component. */}

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 items-start">
          <div>
            <SectionHeader
              title="As Heard on Metro FM"
              subtitle="Principal Rossi recently joined Metro FM to share the story behind Waterkloof Hills Primary School, our rapid growth and our passion for excellence."
            />
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>
                Opened in 2022 through a partnership between the Department of Education, local mines and parents.
              </li>
              <li>
                Grew from a handful of learners to more than a thousand in just a few years.
              </li>
              <li>
                Powered by a committed senior management team, teaching staff and support staff.
              </li>
              <li>
                Supported by parents who wholeheartedly back their children every day.
              </li>
              <li>
                Learners are seen as &quot;my children&quot; and the future of our country.
              </li>
            </ul>
          </div>
          <VideoThumbnail
            title="Metro FM Interview with Principal Rossi"
            description="A radio conversation about the school's inception, growth and commitment to excellence. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            thumbnailImage={metroImg}
          />
        </div>
      </section>

      {/* Campus life preview */}
      <section className="section bg-waterkloof-offwhite">
        <div className="container">
          <SectionHeader
            title="Life at Waterkloof Hills"
            subtitle="From game days on the field to quiet focus in the chess room and peaceful gardens, our campus is full of moments that help children grow."
          />
          <GalleryGrid
            items={[
              {
                title: 'Game Days',
                caption:
                  'Learners enjoy energetic game days that build fitness, fun and teamwork. Lorem ipsum dolor sit amet.',
                href: '/news-events#galleries',
                linkLabel: 'View gallery',
                images: [games1, games2, games3],
              },
              {
                title: 'Chess Club',
                caption:
                  'Focused minds gather at our chess boards to practise strategy and concentration. Lorem ipsum dolor sit amet.',
                href: '/news-events#galleries',
                linkLabel: 'View gallery',
                images: [chess1, chess2, chess3],
              },
              {
                title: 'Our Gardens',
                caption:
                  'Calm, green spaces give learners room to breathe, reflect and connect with nature. Lorem ipsum dolor sit amet.',
                href: '/news-events#galleries',
                linkLabel: 'View gallery',
                images: [farm1, farm2, farm3, farm4],
              },
              {
                title: 'Staff in Action',
                caption:
                  'Dedicated teachers and support staff work together to keep the school running smoothly. Lorem ipsum dolor sit amet.',
                href: '/news-events#galleries',
                linkLabel: 'View gallery',
                images: [staff1, staff2, staff3],
              },
            ]}
          />
        </div>
      </section>

      {/* CTA strip */}
      <section className="section">
        <div className="container bg-waterkloof-green rounded-2xl px-6 py-8 md:px-10 md:py-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Join the Waterkloof Hills Family?
            </h2>
            <p className="text-sm md:text-base text-slate-100 max-w-xl">
              We look forward to welcoming new families who share our passion for learning and growth.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/admissions"
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-waterkloof-green shadow-sm hover:bg-waterkloof-softgold"
            >
              View Admissions
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact the School
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
