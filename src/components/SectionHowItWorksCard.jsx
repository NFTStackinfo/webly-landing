import React from 'react'
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

function SectionHowItWorksCard({img, title, description}) {
  return (
    <div className="card-wrapper text-center text-white max-w-[358px] grid justify-items-center">
      <GatsbyImage
          className="max-w-full"
          alt={title}
          image={getImage(img)}
          objectFit={'contain'}
      />

      <h4 className="text-s1 font-black mt-6 font-primary">{title}</h4>

      <p className="mt-2">{description}</p>
    </div>
  )
}

export default SectionHowItWorksCard
