import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function UnsubscribeCard() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
      <div className="container-xs">
        <div className="content rounded-[30px] bg-white py-10 px-6 grid justify-items-center text-raisin-black text-center">
          <div className="max-w-[184px]">
            <StaticImage src="../../assets/images/watermark.png" alt="webly" className="max-h-full max-w-full block"/>
          </div>

          <h6 className="font-bold mt-16">
            YOU’VE Been successfully unsubscribed
          </h6>

          <p className="text-body1 mt-4">
            Your email address will no longer receive communications from Webly
          </p>
        </div>
      </div>
    </div>
  )
}

export default UnsubscribeCard
