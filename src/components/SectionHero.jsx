import React, { useState } from 'react'
import { TextField } from './UIKit'
import { useHomepageHero } from "../fetchHooks/useHomepageHero"

function SectionHero(props) {
  const [textField, setTextField] = useState('')
  const {sectionHeading, sectionText, sectionBtnText} = useHomepageHero()

  console.log(sectionHeading)

  return (
    <main className="section-hero pt-[216px] pb-[200px] rounded-b-section">
      <div className="container-sm">
        <div className="content text-center">
          <h1 className="font-bold text-gradient-1 font-primary">{sectionHeading}</h1>

          <p className="mt-4">{sectionText}</p>

          <TextField
            className="mx-auto mt-12"
            onChange={(e) => setTextField(e.target.value)}
            value={textField}w
            buttonText = {sectionBtnText}
          />
        </div>
      </div>
    </main>
  )
}

export default SectionHero
