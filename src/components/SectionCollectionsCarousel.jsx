import React from 'react'
import { useCollections } from '../fetchHooks/useCollections'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

const SectionCollectionsCarousel = () => {
  const { list } = useCollections()

  const enlargedList = [...list, ...list, ...list]
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        loop={true}
        speed={4000}
        spaceBetween={16}
        autoplay={{
          delay: 1,
          enabled: true,
          reverseDirection: true
        }}
        rewind={false}

        modules={[Autoplay]}
        className="collection-carousel"
      >
        {enlargedList.map(({ itemImage, itemName, url }, index) => (
          <SwiperSlide key={index}>
          <a href={url} target="_blank" rel="noreferrer"
             className="block rounded-[30px] max-w-full webkit-mask-image overflow-hidden">
            <GatsbyImage
              className="block max-w-full w-full"
              alt={itemName}
              image={getImage(itemImage)}
              objectFit={'contain'}
            />
          </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SectionCollectionsCarousel
