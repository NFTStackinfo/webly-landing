import React, { forwardRef } from "react"
import SectionFeaturesCard from './SectionFeaturesCard'
import { useFeatures } from "../fetchHooks/useFeatures"


const SectionHowItWorks = forwardRef((props, ref) => {
  const {sectionHeading, list} = useFeatures()
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
              <h2 className="text-gradient-2 font-bold font-primary">{sectionHeading}</h2>
            </div>
          </div>

          <div  className="content grid grid-cols-3 gap-6 mt-12 md:gap-4 sm:grid-cols-1 sm:justify-items-center">
            {list.map(({ itemImage, itemHeading, itemDescription }, index) => {
              return (
                  <SectionFeaturesCard
                    delay={index * 500}
                    key={index}
                    img={itemImage}
                    title={itemHeading}
                    description={itemDescription}
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
