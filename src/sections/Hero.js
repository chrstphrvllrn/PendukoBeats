import React from 'react'
import Button from '../components/Button'


function Hero() {
    return (
        <div className='w-full h-[40vh] px-16  bg-[url("https://as2.ftcdn.net/v2/jpg/03/17/10/31/1000_F_317103153_30l4TcizhBYAa9gkCJ95YMsDam2FVhGO.jpg")] bg-[center_top_0rem]'>
            {/* https://img.goodfon.com/wallpaper/nbig/c/cf/fl-studio-fruity-loops-virtual-studio.webp */}
            <div className='w-full h-full flex flex-col items-start justify-center py-16 px-8 gap-10 backdrop-blur-sm   '>
                {/* backdrop-blur-sm */}
    
            
                <h1 class="text-4xl text-white font-bold">Elevate Your Sound:<br></br>Buy Premium Beats for Your Next Hit</h1>

                <p class="text-sm font-medium text-zinc-400">Discover a curated collection of high-quality beats crafted by top producers.<br></br>Find the perfect sound to inspire your next track and make your music stand out.</p>

                <Button text='Explore more'/>

            </div>

        </div>
  )
}

export default Hero