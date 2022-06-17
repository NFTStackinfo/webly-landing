import React, { forwardRef } from "react"
import SectionHowItWorksCard from "./SectionHowItWorksCard"
import { useHowItWorks } from "../fetchHooks/useHowItWorks"
import { StaticImage } from 'gatsby-plugin-image'

const SectionHowItWorks = forwardRef((props, ref) => {
  const { sectionHeading, sectionText, list: howItWorksList } = useHowItWorks()

  return (
    <section
      className="section-how-it-works pt-10 mt-30 lg:mt-20 relative bg-gradient-3 bg-no-repeat rounded-section"
      ref={ref}
      id="section-how-it-work"
    >
      <div className="wrapper py-30 sm:py-20 rounded-section">
        <div className="container">
          <div className="container-sm">
            <div className="content text-center">
              <h2 className="text-gradient-1 font-bold font-primary">
                {sectionHeading}
              </h2>

              <p className="mt-6">{sectionText}</p>
            </div>
          </div>

          <div className="content grid grid-cols-3 gap-6 mt-8 md:gap-4 sm:grid-cols-1 sm:justify-items-center">
            {howItWorksList.map(({ itemTitle, itemDescription, itemImage }) => {
              return (
                <SectionHowItWorksCard
                  img={itemImage}
                  title={itemTitle}
                  description={itemDescription}
                />
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 max-h-full">
        <StaticImage src="../assets/images/how-it-works/left.png" alt="webly"/>
      </div>

      <div className="absolute top-0 right-0 max-h-full">
        <StaticImage src="../assets/images/how-it-works/right.png" alt="webly"/>
      </div>
    </section>
  )
})

export default SectionHowItWorks
