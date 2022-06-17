import React from 'react'
import { Button } from './UIKit'
import { useSocials } from '../fetchHooks/useSocials'
import { StaticImage } from 'gatsby-plugin-image'

const ModalSuccess = ({ show = false, toggleModal }) => {
  const { socialList } = useSocials()
  const handleClose = e => {
    e.stopPropagation()
    if (e.target.dataset.overlay) {
      toggleModal(false)
    }
  }

  const socialButtonText = icon => {
    if (icon === 'twitter') {
      return 'Follow us on Twitter'
    } else return 'Join our Discord'
  }

  return (
    <div
      className={`
        transition-opacity duration-300 fixed bg-modal-overlay z-50 inset-0
        flex items-center justify-center
        ${show ? 'block' : 'hidden'}
      `}
      data-overlay
      onClick={handleClose}
    >
      <div
        className={`
      container-xs transition-opacity duration-300 absolute z-10
      `}
      >
        <div className="content text-center text-raisin-black bg-white pt-4 pb-6 rounded-[30px]">
          <div className="px-4">
            <Button
              variant="secondary black"
              suffixIcon="close"
              className="ml-auto"
              onClick={() => toggleModal(false)}
            />
          </div>

          <div className="grid justify-items-center px-6 border-b border-very-light-azure pb-8">
            <StaticImage
              src="../assets/images/modal/party-popper.png"
              alt="Thank You?"
              className="w-15"
            />

            <h6 className="font-bold mt-8">
              Thanks for signing up to waitlist!
            </h6>
          </div>

          <div className="px-6 pt-12">
            <p className="uppercase text-s1 font-bold font-primary">
              Want to know more?
            </p>

            <div className="mt-8 grid justify-items-center gap-y-2">
              {socialList.map(({ icon, url }) => {
                return (
                  <Button
                    key={icon}
                    variant="secondary black"
                    prefixIcon={icon}
                    className="tracking-[.023em]"
                    link={url}
                  >
                    {' '}
                    {socialButtonText(icon)}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalSuccess
