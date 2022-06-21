import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function SectionFeaturesCard({ img, title, description, delay }) {
  return (
    <div
      className="py-10 px-6 text-raisin-black text-center grid justify-items-center content-start border border-philippine-silver rounded-[30px] bg-white"
      data-sal="zoom-in"
      data-sal-duration="500"
      data-sal-delay={delay}
      data-sal-easing="ease"
    >

      <GatsbyImage
        className="block w-full max-w-[250px]"
        alt={title}
        image={getImage(img)}
        objectFit='contain'
      />

      <h4 className="text-s1 font-bold mt-6 font-primary h-14">{title}</h4>

      <p className="mt-2 text-body2">{description}</p>
    </div>
  )
}

export default SectionFeaturesCard
