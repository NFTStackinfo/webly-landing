import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const SectionTestimonials = ({
                               itemImage,
                               itemDescription,
                               // itemName,
                               itemCompany
                             }) => {
  return (
    <div className="content flex space-x-4 sm:space-x-0 sm:flex-col sm:space-y-6">
      <GatsbyImage
        className="max-w-[200px] max-h-[200px] w-full h-full sm:max-w-[60px] rounded-[20px] border-philippine-silver"
        alt={itemCompany}
        image={getImage(itemImage)}
      />

      <div>
        <p className="font-semibold text-granite-gray">
          “ {itemDescription} “
        </p>
        <span className="text-body3 mt-1 block text-granite-gray">
        {itemCompany}
      </span>
      </div>


      {/*<span className="text-body2 font-semibold mt-4 block text-raisin-black">*/}
      {/*  {itemName}*/}
      {/*</span>*/}


    </div>
  )
}

export default SectionTestimonials
