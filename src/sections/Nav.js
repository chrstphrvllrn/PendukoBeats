import React, { useState, useEffect, useRef  } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AddToCart from '../components/AddToCart'
import Button from '../components/Button'
import Drawer from '../components/Drawer'

function Nav({ size, cart, setCart, setShow }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation(); // Get current location

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);


  return (
    <div className='w-full h-[10vh] sm:h-[6vh] md:h-[6vh] lg:h-[8vh]   bg-black  px-8 sm:px-8 md:px-20 lg:px-20 xl:px-20 2xl:px-48 3xl:px-96'>
      {/* bg-grey backdrop-blur-md backdrop-opacity-[0.9] fixed z-10 */}
      {/* bg-[rgba(17,24,39)] */}

      <div className='w-full h-full flex items-center justify-between'>

        <div className='flex gap-8 '>

          <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#ffffff"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#ffffff"></path>
          </svg>

          <ul className='gap-4 items-center hidden sm:flex'>
            <Link to="/" onClick={() => setShow(true)} className=' font-bold text-xs text-brand-zinc-200 bg-none hover:text-brand-primary '>
              <li className={`py-2 px-4 cursor-pointer  transition-all duration-300 ease-in-out 
                                      ${location.pathname === '/' ? 'border-b-0 text-brand-primary border-brand-primary ' : ''}`
              }>HOME</li>
            </Link>

            {/* <button onClick={() => { const element = document.getElementById('footer'); element?.scrollIntoView({ behavior: 'smooth' }) }}
            className=' font-bold text-xs text-brand-zinc-200 bg-none hover:text-brand-primary '>
              <li className={`py-2 px-4 cursor-pointer  transition-all duration-300 ease-in-out 
                                      ${location.pathname === '/contact' ? 'border-b-0 text-brand-primary border-brand-primary' : ''}`
              }>CONTACT</li>
            </button>
            
            <button onClick={() => { const element = document.getElementById('pricing'); element?.scrollIntoView({ behavior: 'smooth' }) }}
            className=' font-bold text-xs text-brand-zinc-200 bg-none hover:text-brand-primary '>
              <li className={`py-2 px-4 cursor-pointer  transition-all duration-300 ease-in-out 
                                      ${location.pathname === '/pricing' ? 'border-b-0 text-brand-primary border-brand-primary' : ''}`
              }>PRICING</li>
            </button> */}

            <div className='flex gap-1'>
              <button>
                <Link to="/login" className='font-bold text-xs text-brand-zinc-200 bg-none hover:text-brand-primary '>
                  <p className={`py-2 px-4 cursor-pointer  transition-all duration-300 ease-in-out 
                          ${location.pathname === '/login' ? 'text-brand-primary ' : ''}`
                  }>LOGIN</p>
                </Link>
              </button>
            </div>

          </ul>
        </div>

        <div className='cursor-pointer flex gap-0'>


          {/*  <div >
          <button onClick={()=>setShow(false)} className='flex gap-0 items-center'> 
            <p className='scale-[0.8] bg-brand-primary px-2 py-1 rounded-3xl text-xs items-center flex items-center font-bold'>{size}</p>
          </button> 
         </div>*/}

          <button
            onClick={toggleDrawer}
            className="px-0 py-2 rounded flex"
          >
            <AddToCart isWhite={true} />
           
            <p className=' scale-[0.8] bg-brand-primary px-2 py-1 rounded-3xl text-xs items-center flex items-center font-bold'>{size}</p>
            <p className='  animate-ping h-4 w-3 -left-20 opacity-75 scale-[0.8] bg-brand-primary px-2 py-1 rounded-3xl text-xs items-center flex items-center font-bold'></p>
        
            
          </button>

          <Drawer
            cart={cart}
            setCart={setCart}
            setShow={setShow}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleDrawer={toggleDrawer}
          />


        </div>

      </div>



    </div>
  )
}

export default Nav