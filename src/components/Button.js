import React from 'react'

function Button({text, color}) {
  return (
    <div>
        <button className={`px-5 py-2 ${color} rounded-lg text-sm font-bold h-[44px]`}>{text}</button>

    </div>
  )
}

export default Button