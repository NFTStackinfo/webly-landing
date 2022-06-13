import React from 'react'
import { Icon } from './index'

function Button({
                  children,
                  link,
                  disabled = false,
                  onClick,
                  className = '',
                  variant,
                  prefixIcon,
                  onPrefixClick,
                  onSuffixClick,
                  suffixIcon,
                  ...props
                }) {
  return (
    <>
      {link ? (
        <a
          href={link} className={['btn', ...variant.split(' '), className].join(' ')}
          onClick={e => {
            e.preventDefault()
            onClick()
          }}
          {...props}
        >
          {prefixIcon && <Icon name={prefixIcon} />}
          <span>{children}</span>
          {suffixIcon && <Icon name={suffixIcon} />}
        </a>
      ) : (
        <button
          className={['btn', ...variant.split(' '), className].join(' ')}
          onClick={onClick} disabled={disabled}
          {...props}
        >
          {prefixIcon && <Icon name={prefixIcon} className="btn__prefix" onClick={onPrefixClick}/>}
          <span>{children}</span>
          {suffixIcon && <Icon name={suffixIcon} className="btn__suffix" onClick={onSuffixClick}/>}
        </button>
      )}
    </>
  )
}

export default Button
