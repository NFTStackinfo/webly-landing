import React from 'react'

function SectionTestimonials(props) {
  return (
    <section className="section-testimonials mt-40">
      <div className="container-md">
        <div className="content grid grid-cols-2 gap-6">
          <div className="text py-[30px]">
            <img
              src="/assets/testimonials/racing-logo.svg" alt="Racing Social Club"
              className="w-[80px]"
            />

            <p className="font-[600] mt-6 text-granite-gray">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              facilisis interdum nunc eget tincidunt. “
            </p>

            <span className="text-body2 font-[600] mt-4 block text-raisin-black">
              Jonh Svarovski
            </span>

            <span className="text-body3 mt-1 block text-granite-gray">
              Racing Social Club
            </span>
          </div>

          <div className="img">
            <img src="/assets/testimonials/racing-img.png"
                 alt="Racing Social Club" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTestimonials
