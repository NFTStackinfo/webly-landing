import * as React from "react"
import IcomoonReact from "icomoon-react"
import iconSet from "./selection.json"

const Icon = ({ size = 24, name, className = "", onClick }) => {
  return (
    <IcomoonReact
      onClick={onClick}
      className={["icon", className].join(" ")}
      iconSet={iconSet}
      size={size}
      icon={name}
    />
  )
}

export default Icon
