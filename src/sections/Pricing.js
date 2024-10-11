import React from 'react'
// import Nav from './Nav';
// import Footer from './Footer';
import Check from '../components/Check'
import { PricingData } from '../constants/index.js';


function Pricing() {
  return (
    <div id='pricing'>
        {/* <Nav/> */}

        <div className='w-full h-auto px-8 sm:px-16 bg-zinc-50  py-10 select-none flex flex-col items-center'>

        <h1 className='text-4xl xl:text-5xl font-bold my-10 select-none w-full flex items-center justify-center'>Licensing</h1>

          <p className='text-zinc-500 my-10 select-none w-3/4 flex items-center justify-center text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-y-10 w-full h-[auto] md:h-[auto] lg:h-[80vh] flex flex-col sm:flex-col md:flex-col lg:flex-row px-0 sm:px-0 md:px-0 lg:px-0 xl:px-10 items-start justify-center md:items-center gap-5 py-10'>
    
            { PricingData.map(( item, index) => (
                  // text-[#dfdfdf] bg-[rgb(17,24,39)]
                  // border

                    <div className='bg-white  h-[auto] p-6 flex flex-col gap-5 rounded-xl shadow-md hover:shadow-xl hover:scale-100 transition-all duration-300 transform hover:-translate-y-5'>
                    <div className='flex gap-1  items-center'>
                      <h2 className='text-3xl font-bold'>{item.title}</h2>
                      
                      { item.promo[0] ? (   <p className='px-2 py-0 text-xs border font-bold h-[2em] rounded-lg flex items-center justify-center text-red-400 border-red-200 bg-red-50'>{item.promo[1]}</p>
                       ) : ( 
                          <p></p>
                       )}
                      { item.most_popular ? (  <p className='px-1.5 py-0 text-xs border font-bold h-[2em] rounded-lg flex items-center justify-center text-blue-400 border-blue-200 bg-blue-50'>Most Popular</p>
                       ) : ( 
                          <p></p>
                       )}
                       
                    </div>
               
                      <p className='text-zinc-400 text-xs'>{item.description}</p>
                      <div className='flex items-center gap-2 '>
                        <p className='text-goldenyellow-primary text-xl'>{item.currency}</p>
                        <p className='text-4xl font-bold text-goldenyellow-primary'>{item.price}</p>
                      
                      </div>
                   
                      { item.list.map(( item, index) => (
                        <div className='flex items-center gap-2'>
                          <Check/>  <p className='text-sm'>{item}</p>
                        </div>
                       ))}  
                      <button className="py-3 rounded-xl  border text-sm  ">Read Full License</button>
                      </div>
               ))}  

                 

            </div>
            
            
            
        </div>
        {/* <Footer className=''/> */}
        </div>
        
  )
}

export default Pricing