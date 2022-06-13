import React, { useState } from 'react'
import { TextField } from './UIKit'

function SectionJoin(props) {
  const [textField, setTextField] = useState('')

  return (
    <section className="section-join rounded-t-section mt-40">
      <div className="wrapper-join py-30">
        <div className="container-sm">
          <div className="content text-center">
            <h2 className="font-bold text-gradient-1 font-primary">
              Join Other Creators and Teams Who’ve Used Webly to Launch And
              Manage
              Their NFT Projects
            </h2>

            <p className="mt-2">
              Launch your NFT collection directly on your website. The entire
              setup process of our NFT collection generator won't take more than
              two minutes.
            </p>

            <TextField
              value={textField}
              onChange={e => setTextField(e.target.value)}
              className="mx-auto mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionJoin
