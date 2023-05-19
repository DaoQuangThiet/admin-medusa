import React from "react"
import IconProps from "../types/icon-type"

const PersonIcon: React.FC<IconProps> = ({
  size = "24",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M11.5 12C9.57 12 8 10.43 8 8.5S9.57 5 11.5 5 15 6.57 15 8.5 13.43 12 11.5 12zm0-6C10.122 6 9 7.122 9 8.5s1.122 2.5 2.5 2.5S14 9.878 14 8.5 12.878 6 11.5 6zM18.5 14c-1.378 0-2.5-1.122-2.5-2.5S17.122 9 18.5 9s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM4.571 14c-1.378 0-2.5-1.122-2.5-2.5S3.192 9 4.571 9s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM17.5 20a.5.5 0 0 1-.5-.5c0-3.033-2.467-5.5-5.5-5.5S6 16.467 6 19.5a.5.5 0 0 1-1 0c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a.5.5 0 0 1-.5.5z"
        fill="none"
        stroke={color}
        className="color000 svgShape"
      ></path>
      <path
        d="M22.5 20a.5.5 0 0 1-.5-.5 3.504 3.504 0 0 0-5.312-2.995.5.5 0 0 1-.519-.855A4.5 4.5 0 0 1 23 19.5a.5.5 0 0 1-.5.5zM.5 20a.5.5 0 0 1-.5-.5 4.503 4.503 0 0 1 6.83-3.851.5.5 0 1 1-.519.855A3.504 3.504 0 0 0 1 19.5a.5.5 0 0 1-.5.5z"
        fill="none"
        stroke={color}
        className="color000 svgShape"
      ></path>
    </svg>
  )
}

export default PersonIcon
