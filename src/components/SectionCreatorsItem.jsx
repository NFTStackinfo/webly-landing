import React from "react"
import { Icon } from "./UIKit"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function SectionCreators({
  itemImage,
  itemTitle,
  socialList,
  itemDescription,
}) {
  return (
    <div className="text-raisin-black flex flex-col w-full max-w-[262px] sm:max-w-[328px]">
      <GatsbyImage
        className="block max-w-full w-full"
        alt={itemTitle}
        image={getImage(itemImage)}
        objectFit={"contain"}
      />

      <div className="flex mt-[14px]">
        <span className="font-semibold text-body1">{itemTitle}</span>

        <ul className="grid grid-flow-col gap-2.5 auto-cols-max ml-2">
          {socialList.map(({ icon, url }, idx) => (
            <li key={`${itemTitle}_${idx}`}>
              <a href={url} target='_blank' rel='noreferrer'>
                <Icon name={icon} className="fill-raisin-black" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <span className="text-body3">{itemDescription}</span>
    </div>
  )
}

export default SectionCreators
