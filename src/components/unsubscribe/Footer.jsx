import React from "react"
import { Button } from "../UIKit"
import { useSocials } from "../../fetchHooks/useSocials"

const Footer = ( ) => {
  const { socialList } = useSocials()

  return (
    <footer className="py-6 absolute bottom-0 w-full" >
      <div className="container">
        <div
          className="
          flex justify-between items-center
          sm:flex-col sm:items-center sm:h-auto sm:space-y-6
          "
        >
          <div className="flex items-center w-full justify-start sm:justify-center">
            <img src="/assets/logo.svg" alt="WEBLY" className="max-w-[80px] w-full" />
          </div>

          <div className="w-full flex justify-center">
            <span className="text-caption ml-2.5">
              ©All rights reserved. 2022
            </span>
          </div>

          <ul className="flex justify-end space-x-3 w-full sm:space-x-2 sm:justify-center">
            {socialList.map(({ icon, url }) => {
              return (
                <li key={icon}>
                  <Button suffixIcon={icon} link={url} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
