import React, { useEffect, useMemo, useState } from 'react'
import { Carousel } from "components/UIKit"

const AboutCarousel = ({ rtl }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      speed: 1000,
      cssEase: "linear",
      rtl: !!rtl,
      // responsive: [
      //   {
      //     breakpoint: theme.breakpoints.xl,
      //     settings: {
      //       slidesToShow: 3,
      //     },
      //   },
      //   {
      //     breakpoint: theme.breakpoints.sm,
      //     settings: {
      //       slidesToShow: 2,
      //     },
      //   },
      // ],
    }
  }, [rtl])

  return (
    <div>
      <Carousel settings={settings}>
        {[...Array(4)].map((item, index) => {
          return (
            <div className="carousel-item" key={`carousel-${index}`}>
              <img src={`/assets/collections/${index + 1}.png`} alt="collection" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default AboutCarousel
