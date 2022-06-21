import React from 'react'
import Slider from 'react-slick'
import { useCollections } from '../fetchHooks/useCollections'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  adaptiveHeight: true,
  variableWidth: true,
  slidesToScroll: 1,
  // slidesToShow: 4,
  autoplay: true,
  pauseOnHover: false,
  autoplaySpeed: 0,
  speed: 3000,
  cssEase: 'linear'
}

const SectionCollectionsCarousel = () => {
  const { list } = useCollections()

  const enlargedList = [...list, ...list, ...list]
  return (
    <>
      <Slider {...settings}>
        {enlargedList.map(({ itemImage, itemName, url }, index) => (
          <div key={index} className="pr-6">
            <a href={url} target="_blank" rel="noreferrer"
               className="block rounded-[30px] webkit-mask-image overflow-hidden">
              <GatsbyImage
                className="block max-w-full w-full max-w-[350px]"
                alt={itemName}
                image={getImage(itemImage)}
                objectFit={'contain'}
              />
            </a>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default SectionCollectionsCarousel
