import React from 'react'
import Button from '../components/Button'
import { HeroData } from '../constants/index.js';
import Chat from '../components/Chat.js';

function Hero() {
    return (
        <div className='w-full h-[40vh] 
 
        bg-center
        bg-[url("https://e0.pxfuel.com/wallpapers/465/93/desktop-wallpaper-music-recording-sound-engineering-sound-mixer-sound-recording-sound-studio-k-in-2020-sound-studio-sound-engineer-sound-recordings-audio.jpg")]
   
        '>
          {/* https://e0.pxfuel.com/wallpapers/465/93/desktop-wallpaper-music-recording-sound-engineering-sound-mixer-sound-recording-sound-studio-k-in-2020-sound-studio-sound-engineer-sound-recordings-audio.jpg */}
              {/* bg-[url("https://e1.pxfuel.com/desktop-wallpaper/844/381/desktop-wallpaper-recording-studio-music-studio.jpg")] */}
       
             {/* bg-[url("https://e1.pxfuel.com/desktop-wallpaper/375/624/desktop-wallpaper-music-production-music-production-studio.jpg")] */}
       
                    {/* bg-[url("https://e0.pxfuel.com/wallpapers/302/916/desktop-wallpaper-music-producer-production.jpg")] */}
            {/* bg-[url("https://wallpapercave.com/wp/wp9129521.jpg")] */}
            {/* bg-[url("https://as2.ftcdn.net/v2/jpg/03/17/10/31/1000_F_317103153_30l4TcizhBYAa9gkCJ95YMsDam2FVhGO.jpg")] bg-[center_top_0rem] */}
            {/* https://img.goodfon.com/wallpaper/nbig/c/cf/fl-studio-fruity-loops-virtual-studio.webp */}
            
            <div className='w-full h-full  py-14 px-8 sm:px-16 md:px-16  backdrop-blur-md'>
                {/* backdrop-blur-sm */}
                <div className='w-full gap-9 flex flex-col items-start justify-center'>
                
                    <h1 class="text-4xl xl:text-4xl 2xl:text-6xl text-white font-extrabold select-none ">{HeroData.headline1}<br></br><span className='text-white font-normal'>{HeroData.headline2}</span></h1>

                    {/* <p class="text-sm font-medium text-zinc-400 select-none">{HeroData.subheadline1}<br></br>{HeroData.subheadline2}</p> */}

                    <div className='flex gap-5'>
                    <buton onClick={() => { const element = document.getElementById('pricing'); element?.scrollIntoView({ behavior: 'smooth' }) }} >
                          <Button text='Check Pricing' color='bg-brand-primary hover:bg-brand-secondary' />
                    </buton>
                      <buton onClick={() => { const element = document.getElementById('footer'); element?.scrollIntoView({ behavior: 'smooth' }) }} className='text-white flex items-center cursor-pointer' >
                          
                          <Button text='Get in touch' color='border border-white text-white hover:border-zinc-500 hover:text-zinc-500' />
                    </buton>  
                  
                    </div>
                </div>

            </div>


        </div>
  )
}

export default Hero