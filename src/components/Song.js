import React,{ useState, useEffect, useRef  } from 'react'
import Download from './Download'
import AddToCart from './AddToCart'
import Share from './Share'
import PlayCover from './PlayCover'
import PauseCover from './PauseCover'
 
function Song({ _id, thumbnailUrl,  title, tags, price, bpm, mp3Url, isPlaying, currentAudioId, addToCart, item, isPresent, cart, sharePopup}) {


    return (
        <div className='flex flex-row gap-5 mx-1 w-full py-2 px-0 sm:px-0 md:px-0  lg:px-5 hover:bg-lightgray-primary cursor-pointer  rounded-md hover:scale-[1.01] transition-all  ' >

            <div className='w-2/4 md:1/4 flex flex-row gap-0 sm:gap-0 md:gap-5  '>

                <div className='flex items-center justify-center '>
                    <p className={`hidden md:flex px-2 py-1  border text-xs  rounded-2xl  flex items-center${currentAudioId === _id ? (' text-black') : ('border')}`} >{item.indexID}</p>
                </div>
                <div className='w-[2.5em] h-[2.5em] bg-brand-zinc-400 flex items-center justify-center hidden sm:flex md:flex ' style={{ backgroundImage: `url(${thumbnailUrl})`, backgroundSize: 'cover' }}>
                    <button className='text-brand-white' >
                        {currentAudioId === _id ? (
                            <PlayCover />
                        ) : (
                            <PauseCover />
                        )}
                    </button>
                </div>
                <div className='flex flex-col justify-center gap-1 pl-4 md:pl-0'>
                    <p className={`font-bold text-sm  ${currentAudioId === _id ? ('text-bronze-primary') : ('text-black')}`}>{title}</p>
                    <p className='text-brand-zinc-500 text-xs'>{tags}</p>
                </div>

            </div>

            <div className='w-1/4 items-center justify-center gap-5 hidden sm:hidden md:hidden lg:flex xl:flex'>
                <p className='text-black text-xs inline-flex items-center rounded-md  px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 '>{item.duration}</p>
                <p className='text-black text-xs inline-flex items-center rounded-md  px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 '>{bpm}</p>
            </div>

            <div className='w-2/4 flex items-center justify-end gap-2 md:gap-5'>
                <div onClick={(event)=>{ 
                    event.stopPropagation()
                    // sharePopup(item);
                    }  } className='border flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input bg-brand-white hover:bg-brand-zinc-50 hover:text-accent-foreground h-9 rounded-md px-3 hidden md:flex'>
                    <Download />
                    <p className='text-black text-xs font-medium hidden sm:hidden md:flex lg:flex xl:flex'>Download</p>
                </div>

                <div onClick={(event)=>{ 
                    event.stopPropagation()
                    sharePopup(item);
                    }  }  class="border flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input bg-brand-white hover:bg-brand-zinc-50 hover:text-accent-foreground h-9 rounded-md px-3 " data-id="33">
                    <Share />
                    <p className='text-black text-xs font-medium  hidden sm:hidden md:flex lg:flex xl:flex'>Share</p>
                </div>

                <div onClick={(event)=>{ 
                    event.stopPropagation()
                    addToCart(item)  }  } 
                 
                    className='border flex gap-2 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input bg-brand-white hover:bg-brand-zinc-50 hover:text-accent-foreground h-9 rounded-md px-3'>
                    <AddToCart isWhite={false} />
                   
                    <p className='text-black  text-xs font-medium'> {cart.find((product) => product._id === item._id) ? <p className="text-brand-zinc-400">Added</p> : 'Add'} </p>
                </div>

            </div>


            



        </div>
    )
}

export default Song