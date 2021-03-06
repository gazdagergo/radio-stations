import { FC } from 'react'

const PlusCircle:FC<{size?: number}> = ({
  size = 16,
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
    overflow="visible"
    {...rest}
    >
    <title>Plus Circle</title>
    <circle cx="8" cy="8" r="8" fill="transparent"/>
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
)

export default PlusCircle
