import React from 'react'
import { SocialMediaData } from '../constants/index.js'

function Footer() {

  return (
    <div className=' w-full h-[20vh] bg-white border-t flex px-10 py-8' id='footer'>

      

      <div className='w-1/2 h-full px-16  flex items-start  justify-start gap-5'>

      {SocialMediaData.map((item, index) => (
              <a
              key={index}
              href={item.url}
              label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 hover:text-black  rounded-3xl transition-colors duration-300"
              >
              <div className="bg-white p-2 rounded-full hover:bg-zinc-200 transition-colors duration-300">
              {item.icon} {/* Render the SVG icon */}
              </div>
              </a>

       ))}
     
      </div>

      <div className='w-1/2 h-full px-16 text-zinc-400 text-sm  flex items-start justify-end'> © {new Date().getFullYear()} Penduko Beats</div>
    

    </div>
  )
}

export default Footer