import React  from 'react'
import data from '../data/creators-data'
import SectionCreatorsItem from './SectionCreatorsItem'

function SectionCreators(props) {
  return (
    <section className="section-creators mt-42">
      <div className="container">
        <div className="content">
          <h2 className="font-bold text-gradient-2 text-center font-primary">
            We Empower Creators
          </h2>

          <div className="grid grid-cols-4 gap-6 mt-8">
            {data.map((item, index) => (
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
}

export default SectionCreators
