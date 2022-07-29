import React from "react"
import { Icon } from "./index"

function Button({
  children,
  link,
  newTab = true,
  disabled = false,
  onClick,
  className = "",
  variant = "",
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
          href={link}
          className={[
            "btn",
            ...variant.split(" "),
            children ? "px-6" : "px-3",
            className,
          ].join(" ")}
          target={newTab ? "_blank" : "_self"}
          rel="noopener noreferrer"
          {...props}
        >
          {prefixIcon && <Icon name={prefixIcon} />}
          {children && <span>{children}</span>}
          {suffixIcon && <Icon name={suffixIcon} />}
        </a>
      ) : (
        <button
          className={[
            "btn",
            ...variant.split(" "),
            children ? "px-6" : "px-3",
            className,
          ].join(" ")}
          onClick={onClick}
          disabled={disabled}
          {...props}
        >
          {prefixIcon && (
            <Icon
              name={prefixIcon}
              className="btn__prefix"
              onClick={onPrefixClick}
            />
          )}
          {children && <span>{children}</span>}
          {suffixIcon && (
            <Icon
              name={suffixIcon}
              className="btn__suffix"
              onClick={onSuffixClick}
            />
          )}
        </button>
      )}
    </>
  )
}

export default Button
