import React, { forwardRef } from "react"
import { Button } from './UIKit'
import { useHomepageHero } from "../fetchHooks/useHomepageHero"
import { StaticImage } from 'gatsby-plugin-image'

const SectionHero = forwardRef(({ }, ref) => {
  const { sectionHeading, sectionText } = useHomepageHero()

  return (
    <main
      className="
        section-hero pt-54 pb-50 rounded-b-section relative overflow-hidden
        lg:pb-40 sm:pt-34 sm:pb-18 bg-gradient-3 bg-no-repeat
      "
      id="section-hero"
      ref={ref}
    >
      <div className="container-sm">
        <div className="content text-center relative z-10">
          <h1 className="font-bold text-gradient-1 font-primary">
            {sectionHeading}
          </h1>

          <p className="mt-4">{sectionText}</p>

          <Button
            variant="secondary black"
            link="https://app.webly.pro/"
            newTab={false}
            className="w-fit mx-auto mt-3"
          >Go to dashboard</Button>
        </div>
      </div>

      <div className="absolute top-0 left-0 max-h-full overflow-hidden z-1">
        <StaticImage src="../assets/images/hero/left.png" alt="webly"/>
      </div>

      <div className="absolute top-0 right-0 max-h-full overflow-hidden z-1">
        <StaticImage src="../assets/images/hero/right.png" alt="webly"/>
      </div>
    </main>
  )
})

export default SectionHero
