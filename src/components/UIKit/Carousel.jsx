import React from 'react'
import Slider from "react-slick"
import { forwardRef } from "react"

const Carousel = forwardRef(
  ({ children, settings, className, ...props }, ref) => {
    return (
      <div className={className}>
        <Slider {...settings} {...props} ref={ref}>
          {children}
        </Slider>
      </div>
    )
  }
)

export default Carousel
