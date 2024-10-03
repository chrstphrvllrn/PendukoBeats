import React from 'react'
import Download from './Download'
import AddToCart from './AddToCart'


function Song({id, thumbn, title, tags, duration, price, bpm, file, isPlaying, currentAudioId  }) {


  return (
    <div className='flex flex-row gap-5  w-full py-2 px-5 hover:bg-zinc-200 cursor-pointer border-b rounded-md' >
        
        <div className='w-1/4 flex flex-row gap-5'>

                <div className='flex items-center justify-center'>
                    <p className='px-2 py-1 text-xs border rounded-2xl'>{id}</p>
                </div>
                <div className='w-[2.5em] h-[2.5em] bg-zinc-400 flex items-center justify-center '  style={{ backgroundImage: `url(${thumbn})`, backgroundSize:'cover' }}>
                    <button className='text-white' >
                        {currentAudioId === id ? (
                                // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                // <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                // </svg>
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path d="M4.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1ZM10.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-1Z" />
                                </svg>

                        ) : (
                                // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                // <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                // </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
                                </svg>

                        )}
                    </button>
                </div>
                <div className='flex flex-col justify-center gap-1'>
                    <p className='font-medium text-sm'>{title}</p>
                    <p className='text-zinc-500 text-xs'>{tags}</p>
                </div>

        </div>

        <div className='w-1/4 flex items-center justify-center'>
             <p className='text-zinc-500 text-xs inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground'>{duration}</p>
            
        </div>

        <div className='w-1/4 flex items-center justify-center'>
            <p className='text-zinc-500 text-xs inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground'>{bpm}</p>
           
        </div>

        <div className='w-1/4 flex items-center justify-center gap-12'>
            <Download/>
            <AddToCart isWhite={false}/>
             <p className='text-zinc-500 text-xs'>{price}</p>
        </div>

        

    </div>
  )
}

export default Song