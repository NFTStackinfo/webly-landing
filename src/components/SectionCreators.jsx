import React, {forwardRef} from 'react';
// import data from '../data/creators-data'
import SectionCreatorsItem from './SectionCreatorsItem'
import {useTeam} from '../fetchHooks/useTeam';

const SectionCreators = forwardRef((props, ref) => {
  const {sectionHeading, list} = useTeam()
  console.log(list);
  return (
      <section
          className="section-creators pt-30 mt-12 lg:mt-0"
          ref={ref}
          id="section-team"
      >
      <div className="container">
        <div className="content">
          <h2 className="font-bold text-gradient-2 text-center font-primary">{sectionHeading}</h2>

          <div className="grid grid-cols-4 gap-6 mt-8 md:gap-4 sm:grid-cols-1 sm:justify-items-center">
            {list.map((item, index) => (
              <SectionCreatorsItem
                key={`creators-item-${index}`}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default SectionCreators
