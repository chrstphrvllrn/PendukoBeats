import React from 'react'

function Button({text, color}) {
  return (
    <div>
        <button className={`px-4 py-2 ${color} rounded-lg text-sm font-bold `}>{text}</button>

    </div>
  )
}

export default Button