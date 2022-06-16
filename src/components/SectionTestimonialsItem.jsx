import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SectionTestimonials = ({
  itemImage,
  itemDescription,
  itemName,
  itemCompany,
}) => {
  return (
    <div className="content grid">
      <GatsbyImage
        className="w-[80px] lg:w-[60px]"
        alt={itemCompany}
        image={getImage(itemImage)}
      />

      <p className="font-semibold mt-6 text-granite-gray">
        “ {itemDescription} “
      </p>

      <span className="text-body2 font-semibold mt-4 block text-raisin-black">
        {itemName}
      </span>

      <span className="text-body3 mt-1 block text-granite-gray">
        {itemCompany}
      </span>
    </div>
  )
}

export default SectionTestimonials
