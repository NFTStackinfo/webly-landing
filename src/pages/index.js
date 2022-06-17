import React, { useRef, useState } from "react"
import scrollIntoView from "scroll-into-view"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionHero from "../components/SectionHero"
import SectionCollections from "../components/SectionCollections"
import SectionHowItWorks from "../components/SectionHowItWorks"
import SectionTestimonials from "../components/SectionTestimonials"
import SectionCreators from "../components/SectionCreators"
import SectionJoin from "../components/SectionJoin"
import Header from "../components/Header"
import ModalSuccess from "../components/ModalSuccess"
import { useSEO } from "../fetchHooks/useSEO"

const Landlords = () => {
  const [showModal, setShowModal] = useState(false)
  const { metaTitle, metaDescription } = useSEO()
  const howItWorksRef = useRef(null)
  const teamRef = useRef(null)
  const joinRef = useRef(null)
  const heroRef = useRef(null)

  const refMapping = {
    "#section-how-it-works": howItWorksRef,
    "#section-team": teamRef,
    "#section-join": joinRef,
    "#section-hero": heroRef,
  }

  const handleScrollIntoView = to => {
    scrollIntoView(refMapping[to]?.current, {
      align: {
        top: 0,
      },
    })
  }

  const toggleModal = isActive => {
    setShowModal(isActive)
  }

  return (
    <Layout className="landing">
      <Seo title={metaTitle} description={metaDescription} />
      <div className="main-wrapper">
        <Header onLinkClick={handleScrollIntoView} sections={[heroRef]} />
        <SectionHero ref={heroRef} toggleModal={toggleModal} />

        <SectionCollections />

        <SectionHowItWorks ref={howItWorksRef} />

        <SectionTestimonials />

        <SectionCreators ref={teamRef} />

        <SectionJoin
          ref={joinRef}
          onLinkClick={handleScrollIntoView}
          toggleModal={toggleModal}
        />

        <ModalSuccess show={showModal} toggleModal={toggleModal} />
      </div>
    </Layout>
  )
}

export default Landlords
