import React, { useRef } from 'react'
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
  const inputRef = useRef(null)

  return (
    <div className={['text-field-group', className].join(' ')} {...props}>
      <form className="text-field" onSubmit={e => onSubmit(e, inputRef)}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={inputRef}
        />

        <Button variant="primary">{buttonText}</Button>
      </form>

      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  )
}

export default TextField
