import React from 'react'
import { Icon } from './UIKit'

function SectionCreators({img, name, socials, position}) {
  return (
    <div className="text-raisin-black flex flex-col max-w-[262px]">
      <img src={img} alt={name} />

      <div className="flex mt-[14px]">
        <span className="font-[600] text-body1">
          {name}
        </span>

        <ul className={`grid grid-flow-col gap-2.5 auto-cols-max ml-2`}>
          {socials.map(({icon, url}, idx) => (
            <li key={`${name}_${url}_${idx}`}>
              <a href={url}>
                <Icon name={icon} className="fill-raisin-black"/>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <span className="text-body3">{position}</span>
    </div>
  )
}

export default SectionCreators
