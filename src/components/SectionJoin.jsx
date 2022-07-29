import React, { forwardRef } from "react"
import { Button } from './UIKit'
import { useJoinUs } from "../fetchHooks/useJoinUs"
import Footer from "./Footer"
import { StaticImage } from 'gatsby-plugin-image'

const SectionJoin = forwardRef(({ onLinkClick }, ref) => {
  const { sectionHeading, sectionText } = useJoinUs()

  return (
    <section
      className="section-join pt-10 mt-30 md:mt-20 relative bg-gradient-3 bg-no-repeat rounded-t-section overflow-hidden"
      ref={ref}
      id="section-join"
    >
      <div className="wrapper rounded-t-section relative z-2">
        <div className="wrapper-join pt-30 pb-40 sm:pb-36 sm:pt-20">
          <div className="container-sm">
            <div className="content text-center relative z-10">
              <h2 className="font-bold text-gradient-1 font-primary">
                {sectionHeading}
              </h2>

              <p className="mt-2">{sectionText}</p>

              <Button
                variant="secondary black"
                link="https://app.webly.pro/"
                newTab={false}
                className="w-fit mx-auto mt-12"
              >Go to dashboard</Button>
            </div>
          </div>
        </div>
        <Footer onLinkClick={onLinkClick} />
      </div>

      <div className="absolute bottom-0 left-0 max-h-full overflow-hidden z-1">
        <StaticImage src="../assets/images/join/left.png" alt="webly"/>
      </div>

      <div className="absolute right-0 top-0 max-h-full overflow-hidden z-1">
        <StaticImage src="../assets/images/join/right.png" alt="webly"/>
      </div>
    </section>
  )
})

export default SectionJoin
