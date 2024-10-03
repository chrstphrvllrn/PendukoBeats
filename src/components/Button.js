import React from 'react'

function Button({text}) {
  return (
    <div>
        <button className='px-5 py-2 bg-white hover:bg-zinc-300 rounded-3xl text-xs'>{text}</button>

    </div>
  )
}

export default Button