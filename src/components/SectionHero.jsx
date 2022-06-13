import React, { useState } from 'react'
import { TextField } from './UIKit'

function SectionHero(props) {
  const [textField, setTextField] = useState('')

  return (
    <main className="section-hero pt-[216px] pb-[200px] rounded-b-section">
      <div className="container-sm">
        <div className="content text-center">
          <h1 className="font-bold text-gradient-1 font-primary">
            NO-CODE NFT SOLUTIONS FOR
            INDIVIDUAL ARTISTS &
            BRANDS
          </h1>

          <p className="mt-4">
            Webly makes it easy to lunch a smart contract in a minute for your
            NFT collection without any technical knowledge required
          </p>

          <TextField
            className="mx-auto mt-12"
            onChange={(e) => setTextField(e.target.value)}
            value={textField}
          />
        </div>
      </div>
    </main>
  )
}

export default SectionHero
