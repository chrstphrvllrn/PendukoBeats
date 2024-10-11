import React from 'react'
import { SocialMediaData } from '../constants/index'

function Footer() {

  return (
    <div className=' w-full h-[auto] bg-white border-t flex px-10 py-8 flex-col md:flex-row' id='footer'>

      

      <div className='w-full md:w-1/2   pt-0 pb-72  flex items-start  justify-center md:justify-start gap-5'>

      {SocialMediaData.map((item, index) => (
              <a
              key={index}
              href={item.url}
              label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 hover:text-black  rounded-3xl transition-colors duration-300"
              >
              <div className="bg-white p-2 rounded-full hover:text-zinc-500 transition-colors duration-300">
              {item.icon} {/* Render the SVG icon */}
              </div>
              </a>

       ))}
     
      </div>

      <div className='w-full md:w-1/2 pt-0 pb-72 text-zinc-400 text-sm flex items-start justify-center md:justify-end'> © {new Date().getFullYear()} Penduko Beats</div>
    

    </div>
  )
}

export default Footer