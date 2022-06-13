import React from 'react'
import Button from './Button'

function TextField({
                     type = 'email',
                     placeholder = 'Email Address',
                     buttonText = 'JOIN WAITLIST',
                     value = '',
                     onChange,
                     className = '',
                     onSubmit,
                     helperText = '',
                     ...props
                   }) {
  return (
    <div className={['text-field-group', className].join(' ')} {...props}>
      <div className="text-field">
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>

        <Button variant="primary" onClick={onSubmit}>{buttonText}</Button>
      </div>

      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  )
}

export default TextField
