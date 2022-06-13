import React from 'react'

function SectionHowItWorksCard({img, title, description}) {
  return (
    <div className="card-wrapper text-center text-white max-w-[358px] grid justify-items-center">
      <img src={img} alt={title} className="max-w-full"/>

      <h4 className="text-s1 font-black mt-6 font-primary">{title}</h4>

      <p className="mt-2">{description}</p>
    </div>
  )
}

export default SectionHowItWorksCard
