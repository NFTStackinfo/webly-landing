import React, {forwardRef, useState} from 'react';
import {TextField} from './UIKit';
import {useJoinUs} from '../fetchHooks/useJoinUs';
import Footer from './Footer';
import useEmailTextField from '../hooks/useEmailTextField';

const SectionJoin = forwardRef(({onLinkClick, toggleModal}, ref) => {
  const {sectionHeading, sectionText, sectionBtnText} = useJoinUs();
  const {textField, onSubmit, onChange, errorMessage} = useEmailTextField(
      onSuccess);

  function onSuccess() {
    toggleModal(true);
  }

  return (
      <section className="section-join pt-10 mt-30 md:mt-20" ref={ref}
               id="section-join">
        <div className="wrapper rounded-t-section">
          <div className="wrapper-join pt-30 pb-40 sm:pb-36 sm:pt-20">
            <div className="container-sm">
              <div className="content text-center">
                <h2 className="font-bold text-gradient-1 font-primary">{sectionHeading}</h2>

                <p className="mt-2">{sectionText}</p>

                <TextField
                    onChange={onChange}
                    value={textField}
                    onSubmit={onSubmit}
                    helperText={errorMessage}
                    className="mx-auto mt-12"
                />
              </div>
            </div>
          </div>
          <Footer onLinkClick={onLinkClick}/>
        </div>
      </section>
  );
});

export default SectionJoin;
