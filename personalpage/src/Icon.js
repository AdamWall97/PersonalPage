import React from 'react'
import ReactDOM from 'react-dom'

// keep a list of the icon ID's
const icons = ['icon-1', 'icon-2']

function Icon ({ id, ...props }) {
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
