import React, { useMemo, useRef } from 'react'
import Slider from 'react-slick'
import SectionTestimonialsItem from './SectionTestimonialsItem'
import { useTestimonials } from '../fetchHooks/useTestimonials'
import { Button } from './UIKit'

const SectionTestimonials = props => {
  const { list } = useTestimonials()
  const sliderRef = useRef()

  const settings = useMemo(() => ({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: false,
    speed: 500,
    adaptiveHeight: true,
    // autoplay: true,
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

  return (
    <section className="section-testimonials mt-40 md:mt-30 pb-18">
      <div className="container-sm">
        <Slider {...settings} ref={sliderRef}>
          {list.map((props, index) => (
            <SectionTestimonialsItem key={index} {...props} />
          ))}
        </Slider>

        <div className="flex justify-center mt-8">
          <Button
            prefixIcon="arrow-back"
            variant="secondary black"
            className="mr-4"
            onClick={() => sliderRef.current.slickPrev()}
          />

          <Button
            prefixIcon="arrow-forward"
            variant="secondary black"
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </div>
    </section>
  )
}

export default SectionTestimonials
