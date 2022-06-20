import React from "react"
import { Button } from "./UIKit"
import { useSocials } from "../fetchHooks/useSocials"

const links = [
  {
    name: "Home",
    to: "#section-hero",
  },
  {
    name: "How it works",
    to: "#section-how-it-works",
  },
  {
    name: "Team",
    to: "#section-team",
  },
  // {
  //   name: "Terms of Use",
  // },
]

const Footer = ({ onLinkClick }) => {
  const { socialList } = useSocials()

  return (
    <footer className="py-[26px]">
      <div className="container">
        <div className="flex justify-center w-full text-white">
          <ul
            className="
          flex space-x-8 text-body2 font-semibold
          sm:flex-col sm:space-y-4 sm:space-x-0 sm:text-center
          "
          >
            {links.map(({ name, to }) => (
              <li
                key={name}
                onClick={() => onLinkClick(to)}
                className={[to ? "cursor-pointer" : "cursor-default"].join(" ")}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="
          flex justify-between items-center pt-6 border-t border-very-light-azure mt-6
          sm:flex-col sm:items-center sm:h-auto sm:space-y-6
          "
        >
          <div className="flex items-center w-full justify-start sm:justify-center">
            <img src="/assets/logo.svg" alt="WEBLY" className="max-w-[80px] w-full" />

            <span className="text-caption ml-2.5">
              ©All rights reserved. 2022
            </span>
          </div>

          <div className="w-full flex justify-center">
            <img
              className="max-w-[134px]"
              src="/assets/certik.png"
              alt="CERTIK"
            />
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
