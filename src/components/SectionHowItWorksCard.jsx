import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function SectionHowItWorksCard({ img, title, description }) {
  return (
    <div className="card-wrapper text-center text-white max-w-[358px] flex flex-col items-center
      sm:max-w-[235px]">
      <GatsbyImage
        className="block w-full max-w-[250px]"
        alt={title}
        image={getImage(img)}
      />

      <h4 className="text-s1 font-black mt-6 font-primary">{title}</h4>

      <p className="mt-2">{description}</p>
    </div>
  )
}

export default SectionHowItWorksCard
