import React from 'react'
import SectionCollectionsCarousel from './SectionCollectionsCarousel'
import {useCollections} from '../fetchHooks/useCollections';

const SectionCollections = () => {
  const {sectionHeading} = useCollections()
  return (
    <section className="section-collections mt-40 lg:mt-30">
      <div className="container">
        <h3 className="text-gradient-2 text-center font-bold font-primary text-s1">{sectionHeading}</h3>
      </div>
      <div className="mt-6">
        <SectionCollectionsCarousel />
      </div>
    </section>
  )
}

export default SectionCollections
