import React, { useEffect, useState } from "react"
import { Button } from "./UIKit"
import useLockedBody from '../hooks/useLockedBody'

function Header({ onLinkClick, sections = [] }) {
  const [isColored, setIsColored] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [locked, setLocked] = useLockedBody();

  const handleScroll = () => {
    const rect = sections[0].current.getBoundingClientRect()
    setIsColored(Math.abs(rect.top) - rect.height > -80)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    window.addEventListener("wheel", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMenuClick = to => {
    setIsMenuOpen(false)
    onLinkClick(to)
  }

  useEffect(() => {
      setLocked(isMenuOpen)
  }, [isMenuOpen])

  return (
    <header
      className="header z-40 w-full top-4 absolute"
    >
      <div className="container">
        <div
          className={`content ${isMenuOpen ? "active" : ""}`}
        >
          <div className="mobile-nav sm:flex sm:w-full sm:justify-between sm:items-center">
            <img
              src="/assets/logo.svg"
              alt="WEBLY"
              className="cursor-pointer max-w-[138px] w-full md:max-w-[108px]"
              onClick={() => handleMenuClick("#section-hero")}
            />

            <Button
              className="hidden sm:flex"
              suffixIcon="menu"
              variant="secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          <nav className="navbar">
            <ul className="list">
              <li
                onClick={() => handleMenuClick("#section-features")}
                className="cursor-pointer sm:mt-auto"
              >
                WHY WEBLY
              </li>
              <li
                onClick={() => handleMenuClick("#section-how-it-works")}
                className="cursor-pointer sm:mt-8"
              >
                How it works
              </li>

              <li
                onClick={() => handleMenuClick("#section-team")}
                className="cursor-pointer sm:mt-8"
              >
                Team
              </li>

              <li className="sm:mt-auto">
                <Button
                  variant="secondary black"
                  suffixIcon="arrow-forward"
                  onClick={() => handleMenuClick("#section-join")}
                >
                  Join the waitlist
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
