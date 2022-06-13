import React from 'react'
import SectionHowItWorksCard from './SectionHowItWorksCard'
import cardImg1 from '../assets/images/how-it-works/card-1.png'
import cardImg2 from '../assets/images/how-it-works/card-2.png'
import cardImg3 from '../assets/images/how-it-works/card-3.png'

function SectionHowItWorks(props) {
  return (
    <section className="section-how-it-works rounded-section py-30">
      <div className="container">
        <div className="container-sm">
          <div className="content text-center">
            <h2 className="text-gradient-1 font-bold font-primary">HOW IT WORKS</h2>

            <p className="mt-6">
              Launch your NFT collection directly on your website. The entire
              setup process of our NFT collection generator won't take more than
              two minutes.
            </p>
          </div>
        </div>

        <div className="content grid grid-cols-3 gap-6 mt-8">
          <SectionHowItWorksCard
            img={cardImg1}
            title="CONNECT METAMASK"
            description="Use your metamask wallet to sign in a platform"
          />

          <SectionHowItWorksCard
            img={cardImg2}
            title="CREATE SMART CONTRACT"
            description="We support ERC 721, ERC 721A and ERC 1155"
          />

          <SectionHowItWorksCard
            img={cardImg3}
            title="DEPLOY SMART CONTRACT"
            description="Deploy your own smart contract"
          />
        </div>
      </div>
    </section>
  )
}

export default SectionHowItWorks
