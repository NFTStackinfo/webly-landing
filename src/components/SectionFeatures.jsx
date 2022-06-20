import React, { forwardRef } from "react"
import SectionHowItWorksCard from "./SectionHowItWorksCard"
import { useHowItWorks } from "../fetchHooks/useHowItWorks"
import { StaticImage } from 'gatsby-plugin-image'
import SectionFeaturesCard from './SectionFeaturesCard'

const data = [
  {
    img: '/assets/features/increase-productivity.svg',
    title: 'Increase productivity',
    description: 'Deploy your contract yourself, with no previous coding knowledge required. Stay organized and compliant. With less people involved there’s less room for confusion and errors.'
  },
  {
    img: '/assets/features/accelerate-time-to-launch.svg',
    title: 'Accelerate time to launch',
    description: 'Reduce the cost of your project and shorten the time between creating and launching your collection. With less people involved there’s more room for a fast and efficient launch.'
  },
  {
    img: '/assets/features/protect-you-collection.svg',
    title: 'Protect your collection',
    description: 'With deploying your own Smart Contract, the control is in your hands. With a secure and reliable system only you have access to your codes',
  }
]

const SectionHowItWorks = forwardRef((props, ref) => {
  return (
    <section
      className="section-how-it-works pt-10 -mb-10 mt-30 lg:mt-20 relative rounded-t-section overflow-hidden"
      ref={ref}
      id="section-how-it-work"
    >
      <div className="wrapper bg-cultured pt-30 pb-50 lg:pb-40 rounded-t-section">
        <div className="container">
          <div className="container-sm">
            <div className="content text-center relative z-10">
              <h2 className="text-gradient-2 font-bold font-primary">
                No-Code Smart Contract in just a few clicks
              </h2>
            </div>
          </div>

          <div className="content grid grid-cols-3 gap-6 mt-12 md:gap-4 sm:grid-cols-1 sm:justify-items-center">
            {data.map(({ title, description, img }) => {
              return (
                <SectionFeaturesCard
                  img={img}
                  title={title}
                  description={description}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
})

export default SectionHowItWorks
