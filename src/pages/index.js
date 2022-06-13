import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Link from "gatsby-link"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SectionHero from '../components/SectionHero';
import SectionCollections from '../components/SectionCollections';
import SectionHowItWorks from '../components/SectionHowItWorks';
import SectionTestimonials from '../components/SectionTestimonials';
import SectionCreators from '../components/SectionCreators';
import SectionJoin from '../components/SectionJoin';

const Landlords = () => {




  return (
    <Layout className="landing">
      {/*<Seo title={metaTitle} description={metaDescription} />*/}
      <Seo title='asd' description='asdasdasd' />
      <div className="main-wrapper">
        <SectionHero />

        <SectionCollections />

        <SectionHowItWorks />

        <SectionTestimonials />

        <SectionCreators />

        <SectionJoin />
      </div>
    </Layout>
  )
}

export default Landlords
