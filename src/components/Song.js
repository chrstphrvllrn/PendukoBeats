import React from 'react'
import Download from './Download'
import AddToCart from './AddToCart'
import Share from './Share'
import PlayCover from './PlayCover'
import PauseCover from './PauseCover'
 

function Song({ id, thumbnail, title, tags, duration, price, bpm, file, isPlaying, currentAudioId, handleClick, item}) {

    const handleButtonClick = (event) => {
        // Stop the event from bubbling up to the list item
        event.stopPropagation()
        console.log('Button clicked!')
    }


    return (
        <div className='flex flex-row gap-5 mx-1 w-full py-2 px-0 sm:px-0 md:px-0 lg:px-5 hover:bg-lightgray-primary cursor-pointer border-b rounded-md hover:scale-[1.01] transition-all' >

            <div className='w-2/4 md:1/4 flex flex-row gap-0 sm:gap-0 md:gap-5 '>

                <div className='flex items-center justify-center'>
                    <p className={`hidden md:flex px-2 py-1  text-xs border rounded-2xl  ${currentAudioId === id ? (' font-bold text-black') : ('border')}`}>{id}</p>
                </div>
                <div className='w-[2.5em] h-[2.5em] bg-zinc-400 flex items-center justify-center hidden sm:flex md:flex ' style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover' }}>
                    <button className='text-white' >
                        {currentAudioId === id ? (
                            <PlayCover />
                        ) : (
                            <PauseCover />
                        )}
                    </button>
                </div>
                <div className='flex flex-col justify-center gap-1 pl-4 md:pl-0'>
                    <p className={`font-bold text-sm  ${currentAudioId === id ? ('text-bronze-primary') : ('text-black')}`}>{title}</p>
                    <p className='text-zinc-500 text-xs'>{tags}</p>
                </div>

            </div>

            <div className='w-1/4 items-center justify-center gap-5 hidden sm:hidden md:hidden lg:flex xl:flex'>
                <p className='text-zinc-500 text-xs inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground'>{duration}</p>
                <p className='text-zinc-500 text-xs inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground'>{bpm}</p>
            </div>

            <div className='w-2/4 flex items-center justify-end gap-2 md:gap-5'>
                <div onClick={handleButtonClick} className='flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-accent-foreground h-9 rounded-md px-3'>
                    <Download />
                    <p className='text-black text-xs font-medium hidden sm:hidden md:flex lg:flex xl:flex'>Download</p>
                </div>

                <div onClick={handleButtonClick} class=" items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-accent-foreground h-9 rounded-md px-3 hidden md:flex" data-id="33">
                    <Share />
                    <p className='text-black text-xs font-medium  hidden sm:hidden md:flex lg:flex xl:flex'>Share</p>
                </div>

                <div onClick={(event)=>{ 
                    event.stopPropagation()
                    handleClick(item)
                }
                } className='flex gap-2 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-accent-foreground h-9 rounded-md px-3'>
                    <AddToCart isWhite={false} />
      
                    <p className='text-black  text-xs font-medium'>Add</p>
                </div>

            </div>



        </div>
    )
}

export default Song