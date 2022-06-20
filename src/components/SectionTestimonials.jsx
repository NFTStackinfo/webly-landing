import React, { useMemo } from 'react'
import Slider from 'react-slick'
import SectionTestimonialsItem from './SectionTestimonialsItem'
import { useTestimonials } from '../fetchHooks/useTestimonials'

const SectionTestimonials = props => {
  const { list } = useTestimonials()

  const settings = useMemo(() => ({
    dots: list.length > 2,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: 0,
    pauseOnHover: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }), [list])

  console.log(list)
  return (
    <section className="section-testimonials mt-40 md:mt-30 pb-18">
      <div className="container-md">
        <Slider {...settings}>
          {list.map((props, index) => (
            <SectionTestimonialsItem key={index} {...props} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default SectionTestimonials
