import React, { useRef } from 'react'
import Button from '../components/Button'
import { HeroData } from '../constants/index.js';
import Chat from '../components/Chat.js';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay, Pagination, EffectFade} from 'swiper/modules';



function Hero() {

    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

    return (
        <div className='w-full h-[30vh] sm:h-[25vh] md:h-[24vh] lg:h-[40vh] xl:h-[40vh]
        flex md:flex 
  
        '>
               {/* bg-center
        bg-[url("https://e0.pxfuel.com/wallpapers/465/93/desktop-wallpaper-music-recording-sound-engineering-sound-mixer-sound-recording-sound-studio-k-in-2020-sound-studio-sound-engineer-sound-recordings-audio.jpg")]
    */}

            <Swiper
            rewind={true}
             slidesPerView={1}
             spaceBetween={0}
             effect={'Cube'}
             centeredSlides={true}
             loop={true}
             
             autoplay={{
               delay: 5000,
               disableOnInteraction: false,
             }}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={false}
                modules={[EffectFade, Autoplay, Pagination]} 
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    
   {/* https://e0.pxfuel.com/wallpapers/465/93/desktop-wallpaper-music-recording-sound-engineering-sound-mixer-sound-recording-sound-studio-k-in-2020-sound-studio-sound-engineer-sound-recordings-audio.jpg */}
            {/* bg-[url("https://e1.pxfuel.com/desktop-wallpaper/844/381/desktop-wallpaper-recording-studio-music-studio.jpg")] */}

            {/* bg-[url("https://e1.pxfuel.com/desktop-wallpaper/375/624/desktop-wallpaper-music-production-music-production-studio.jpg")] */}

            {/* bg-[url("https://e0.pxfuel.com/wallpapers/302/916/desktop-wallpaper-music-producer-production.jpg")] */}
            {/* bg-[url("https://wallpapercave.com/wp/wp9129521.jpg")] */}
            {/* bg-[url("https://as2.ftcdn.net/v2/jpg/03/17/10/31/1000_F_317103153_30l4TcizhBYAa9gkCJ95YMsDam2FVhGO.jpg")] bg-[center_top_0rem] */}
            {/* https://img.goodfon.com/wallpaper/nbig/c/cf/fl-studio-fruity-loops-virtual-studio.webp */}
            <div className='w-full h-[30vh] sm:h-[25vh] md:h-[24vh] lg:h-[40vh] xl:h-[40vh]
        flex md:flex 
        bg-center
        bg-[url("https://e0.pxfuel.com/wallpapers/465/93/desktop-wallpaper-music-recording-sound-engineering-sound-mixer-sound-recording-sound-studio-k-in-2020-sound-studio-sound-engineer-sound-recordings-audio.jpg")]
  
        '>
            <div className='w-full h-full flex items-center py-2 sm:py-14 md:py-16 backdrop-blur-md   '>
                {/* backdrop-blur-sm */}
                <div className='w-full  gap-4 sm:gap-9 flex flex-col items-start justify-center  px-8 sm:px-8 md:px-20 lg:px-20 xl:px-20 2xl:px-48 3xl:px-96 '>
                    <div className='flex flex-col items-start gap-1 md:gap-2'>
                        <h1   className="text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-brand-white font-extrabold select-none ">{HeroData.headline1}</h1>
                        <span className='text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-brand-white font-normal select-none '>{HeroData.headline2}</span>
                    </div>
                    {/* <p class="text-sm font-medium text-brand-zinc-400 select-none">{HeroData.subheadline1}<br></br>{HeroData.subheadline2}</p> */}

                    <div className='flex gap-4'>
                        <buton onClick={() => { const element = document.getElementById('pricing'); element?.scrollIntoView({ behavior: 'smooth' }) }} >
                            <Button text='Check Pricing' color='bg-brand-primary hover:bg-brand-secondary' />
                        </buton>
                        <buton onClick={() => { const element = document.getElementById('footer'); element?.scrollIntoView({ behavior: 'smooth' }) }} className='text-brand-white flex items-center cursor-pointer' >

                            <Button text='Get in touch' color=' text-brand-zinc-300 hover:border-brand-zinc-400 hover:text-brand-zinc-400' />
                        </buton>

                    </div>


                </div>

                {/* <div className='w-[37vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/files/twilight-update_1200x1200.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Melodic House</p></div> */}
              
                {/* <div className='w-[32vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/files/everything_bundle_collectors_edition_24_1200x1200.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Everything Bundle</p></div>
                <div className='w-[32vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/products/organicsoundsbundlebox.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Organic Sounds Bundle</p></div>
                <div className='w-[32vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/files/THAMainBox-adjust-darker.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Tech House Academy</p></div>
               */}
            </div>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-[30vh] sm:h-[25vh] md:h-[24vh] lg:h-[40vh] xl:h-[40vh]
        flex md:flex 
        bg-center
        bg-[url("https://e1.pxfuel.com/desktop-wallpaper/844/381/desktop-wallpaper-recording-studio-music-studio.jpg")]
   
        '>
            <div className='w-full h-full flex items-center py-2 sm:py-14 md:py-16   backdrop-blur-md'>
                {/* backdrop-blur-sm */}
                <div className='w-full  gap-4 sm:gap-9 flex flex-col items-start justify-center px-8 sm:px-8 md:px-20 lg:px-20 xl:px-20 2xl:px-48 3xl:px-96 '>
                    <div className='flex flex-col items-start gap-1 md:gap-2'>
                        <h1   className="text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-brand-white font-extrabold select-none ">{HeroData.headline1}</h1>
                        <span className='text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-brand-white font-normal select-none '>{HeroData.headline2}</span>
                    </div>
                    {/* <p class="text-sm font-medium text-brand-zinc-400 select-none">{HeroData.subheadline1}<br></br>{HeroData.subheadline2}</p> */}

                    <div className='flex gap-4'>
                        <buton onClick={() => { const element = document.getElementById('pricing'); element?.scrollIntoView({ behavior: 'smooth' }) }} >
                            <Button text='Check Pricing' color='bg-brand-primary hover:bg-brand-secondary' />
                        </buton>
                        <buton onClick={() => { const element = document.getElementById('footer'); element?.scrollIntoView({ behavior: 'smooth' }) }} className='text-brand-white flex items-center cursor-pointer' >

                            <Button text='Get in touch' color=' text-brand-zinc-300 hover:border-brand-zinc-400 hover:text-brand-zinc-400' />
                        </buton>

                    </div>


                </div>

                {/* <div className='w-[32vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/files/twilight-update_1200x1200.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Melodic House</p></div>
                <div className='w-[32vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/files/everything_bundle_collectors_edition_24_1200x1200.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Everything Bundle</p></div>
                <div className='w-[32vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/products/organicsoundsbundlebox.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Organic Sounds Bundle</p></div>
             */}
            </div>
            </div>

                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-[30vh] sm:h-[25vh] md:h-[24vh] lg:h-[40vh] xl:h-[40vh]
        flex md:flex 
        bg-center
        bg-[url("https://e0.pxfuel.com/wallpapers/302/916/desktop-wallpaper-music-producer-production.jpg")]
   
        '>
            <div className='w-full h-full flex items-center py-2 sm:py-14 md:py-16  backdrop-blur-md'>
                {/* backdrop-blur-sm */}
                <div className='w-full  gap-4 sm:gap-9 flex flex-col items-start justify-center px-8 sm:px-8 md:px-20 lg:px-20 xl:px-20 2xl:px-48 3xl:px-96 '>
                    <div className='flex flex-col items-start gap-1 md:gap-2'>
                        <h1   className="text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-brand-white font-extrabold select-none ">{HeroData.headline1}</h1>
                        <span className='text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-brand-white font-normal select-none '>{HeroData.headline2}</span>
                    </div>
                    {/* <p class="text-sm font-medium text-brand-zinc-400 select-none">{HeroData.subheadline1}<br></br>{HeroData.subheadline2}</p> */}

                    <div className='flex gap-4'>
                        <buton onClick={() => { const element = document.getElementById('pricing'); element?.scrollIntoView({ behavior: 'smooth' }) }} >
                            <Button text='Check Pricing' color='bg-brand-primary hover:bg-brand-secondary' />
                        </buton>
                        <buton onClick={() => { const element = document.getElementById('footer'); element?.scrollIntoView({ behavior: 'smooth' }) }} className='text-brand-white flex items-center cursor-pointer' >

                            <Button text='Get in touch' color=' text-brand-zinc-300 hover:border-brand-zinc-400 hover:text-brand-zinc-400' />
                        </buton>

                    </div>


                </div>

                {/* <div className='w-[32vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/files/twilight-update_1200x1200.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Melodic House</p></div>
                <div className='w-[32vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/files/everything_bundle_collectors_edition_24_1200x1200.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Everything Bundle</p></div>
                <div className='w-[32vw] h-[17vw] bg-no-repeat bg-contain bg-[url("https://www.productionmusiclive.com/cdn/shop/products/organicsoundsbundlebox.png")] flex items-end justify-center text-white font-bold'><p className='flex mt-20 text-sm'>Organic Sounds Bundle</p></div>
             */}
             </div>
            </div>


                </SwiperSlide>
                {/* <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
                <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className='text-xs'></span>
        </div>
            </Swiper>

        </div>
    )
}

export default Hero