import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AddToCart from '../components/AddToCart'

function Nav() {

  const location = useLocation(); // Get current location
  
  return (
    <div className='w-full h-[10vh] px-16 bg-black'>
            
    <div className='w-full h-full flex items-center justify-between'>

            <ul className='flex gap-2'>
                <Link to="/"      className=' font-medium text-xs text-zinc-200 bg-none hover:text-green-500 '> 
                                    <li className={`py-2 px-8 cursor-pointer  transition-all duration-300 ease-in-out 
                                      ${ location.pathname === '/' ? 'border-b-2 border-green-500' : ''}`
                                      }>HOME</li>
                </Link>

                <Link to="/pricing" className=' font-medium text-xs text-zinc-200 bg-none hover:text-green-500 '>  
                                       <li className={`py-2 px-8 cursor-pointer  transition-all duration-300 ease-in-out 
                                      ${ location.pathname === '/pricing' ? 'border-b-2 border-green-500' : ''}`
                                      }>PRICING</li>
                </Link>

                <Link to="/cart"  className=' font-medium text-xs text-zinc-200 bg-none hover:text-green-500 '>  
                                      <li className={`py-2 px-8 cursor-pointer  transition-all duration-300 ease-in-out 
                                      ${ location.pathname === '/cart' ? 'border-b-2 border-green-500' : ''}`
                                      }>CART</li>
                </Link>

            </ul>


            <div className='cursor-pointer px-8 flex gap-5'>
              <button>
                  <Link to="/login"  className=' font-medium text-xs text-zinc-200 bg-none hover:text-green-500 '>  
                      LOGIN
                  </Link>
              </button>
            <div className='flex gap-1'>         
                <AddToCart isWhite={true}/> 
                <p className='bg-green-500 px-2 py-0 rounded-3xl text-xs items-center flex items-center font-bold'>2</p>
            </div> 


            </div>

        </div>
 
        
        
    </div>
  )
}

export default Nav