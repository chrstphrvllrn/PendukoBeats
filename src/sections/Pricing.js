import React from 'react'
import Nav from './Nav';
import Check from '../components/Check'

function Beats() {
  return (
    <div>
        <Nav/>

        <div className='w-full h-[80vh] px-16'>

        <h1 className='text-4xl font-bold my-10'>Licensing</h1>

          <p className='text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            
            <div className='w-full h-full flex items-center justify-center gap-5'>
    
                    <div className='w-1/4 h-[50vh] p-6 flex flex-col gap-5 border rounded-md'>
                      <h2 className='text-3xl font-bold'>MP3</h2>
                      <p>Instant Delivery</p>
                      <div className='flex items-center gap-2'>
                        <p>$</p>
                        <p className='text-3xl font-bold'>30</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Untagged MP3</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Sell up to 3,000 units</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Non-Exclusive Rights</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Keep 100% Royalties</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Instant Delivery</p>
                      </div>
                     
                      
                  </div>

                  <div className='w-1/4 h-[50vh] p-6 flex flex-col gap-5 border rounded-md'>
                      <h2 className='text-3xl font-bold'>WAV</h2>
                      <p>Instant Delivery</p>
                      <div className='flex items-center gap-2'>
                        <p>$</p>
                        <p className='text-3xl font-bold'>50</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Untagged MP3</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Sell up to 3,000 units</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Non-Exclusive Rights</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Keep 100% Royalties</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Instant Delivery</p>
                      </div>
                  </div>

                  <div className='w-1/4 h-[50vh] p-6 flex flex-col gap-5 border rounded-md'>
                      <h2 className='text-3xl font-bold'>Trackout</h2>
                      <p>Instant Delivery</p>
                      <div className='flex items-center gap-2'>
                        <p>$</p>
                        <p className='text-3xl font-bold'>100</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Untagged MP3</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Sell up to 3,000 units</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Non-Exclusive Rights</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Keep 100% Royalties</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Instant Delivery</p>
                      </div>
                  </div>

                  <div className='w-1/4 h-[50vh] p-6 flex flex-col gap-5 border rounded-md'>
                      <h2 className='text-3xl font-bold'>Unlimited</h2>
                      <p>Instant Delivery</p>
                      <div className='flex items-center gap-2'>
                        <p>$</p>
                        <p className='text-3xl font-bold'>150</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Untagged MP3</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Sell up to 3,000 units</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Non-Exclusive Rights</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Keep 100% Royalties</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Check/>  <p className='text-sm'>Instant Delivery</p>
                      </div>
                  </div>

            </div>
            
            
            
        </div>
        
        </div>
  )
}

export default Beats