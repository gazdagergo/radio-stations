import { FC } from 'react'

const ChevronLeft:FC<{size: number}> = ({
  size = 16,
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
    {...rest}
  >
    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg>
)

export default ChevronLeft
