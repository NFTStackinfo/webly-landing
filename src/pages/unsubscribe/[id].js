import React, { useEffect, useRef, useState } from 'react'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { useSEO } from "../../fetchHooks/useSEO"
import Footer from '../../components/unsubscribe/Footer'
import { StaticImage } from 'gatsby-plugin-image'
import UnsubscribeCard from '../../components/unsubscribe/UnsubscribeCard'

const Landlords = ({location, data}) => {
  const { metaTitle, metaDescription } = useSEO()
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        await fetch('https://nftsstack.io/api/v1/unsubscribe/' + id, { method: 'POST' })
      } catch (e) {}
    }

    unsubscribe()
  }, [])

  console.log('id', id)

  return (
    <Layout className="unsubscribe">
      <Seo title={metaTitle} description={metaDescription} />
      <div className="main-wrapper bg-gradient-3">
        <div className="absolute z-10 inset-0 w-full">
          <UnsubscribeCard />

          <Footer/>
        </div>

        <div className="absolute top-0 left-0 max-h-full overflow-hidden z-1">
          <StaticImage src="../../assets/images/hero/left.png" alt="webly"/>
        </div>

        <div className="absolute top-0 right-0 max-h-full overflow-hidden z-1">
          <StaticImage src="../../assets/images/hero/right.png" alt="webly"/>
        </div>
      </div>
    </Layout>
  )
}

export default Landlords
