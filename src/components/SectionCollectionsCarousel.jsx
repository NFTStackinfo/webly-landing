import React, { useState } from 'react'
import Slider from "react-slick";
import {useCollections} from '../fetchHooks/useCollections';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  variableWidth: true,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  autoplaySpeed: 0,
  speed: 3000,
  cssEase: "linear",
};

const SectionCollectionsCarousel = () => {

  const {list} = useCollections()
  return (
    <>
      <Slider {...settings}>
        {list.map(({itemImage, itemName}, index) => (
          <div key={index} className="pr-6">
            <GatsbyImage
                className="block max-w-full w-full"
                alt={itemName}
                image={getImage(itemImage)}
                // title={itemName}
                objectFit={'contain'}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SectionCollectionsCarousel
