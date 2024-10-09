import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AddToCart from '../components/AddToCart'
import Button from '../components/Button'

function Nav({size, setShow}) {

  const location = useLocation(); // Get current location

  return (
    <div className='w-full h-[10vh] px-0 md:px-16 lg:px-16 bg-black'>
      {/* bg-grey backdrop-blur-md backdrop-opacity-[0.9] fixed z-10 */}
      {/* bg-[rgba(17,24,39)] */}

      <div className='w-full h-full flex items-center justify-between'>

        <div className='flex gap-10 px-8'>
          <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#ffffff"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#ffffff"></path> </svg>
          <ul className='gap-5 items-center hidden sm:flex'>
            <Link to="/" onClick={()=>setShow(true)} className=' font-bold text-xs text-zinc-200 bg-none hover:text-[#FFD700] '>
              <li className={`py-2 px-4 cursor-pointer  transition-all duration-300 ease-in-out 
                                      ${location.pathname === '/' ? 'border-b-0 text-[#FFD700] border-[#FFD700]' : ''}`
              }>HOME</li>
            </Link>

            <Link to="/contact" className=' font-bold text-xs text-zinc-200 bg-none hover:text-[#FFD700] '>
              <li className={`py-2 px-4 cursor-pointer  transition-all duration-300 ease-in-out 
                                      ${location.pathname === '/contact' ? 'border-b-0 text-[#FFD700] border-[#FFD700]' : ''}`
              }>CONTACT</li>
            </Link>



          </ul>
        </div>

        <div className='cursor-pointer px-8 flex gap-5'>



          <div className='flex gap-1'>

            {/* <buton onClick={() => { const element = document.getElementById('footer'); element?.scrollIntoView({ behavior: 'smooth' }) }} >
          <Button text='Get in touch' color='bg-none border border-1 text-white hover:bg-zinc-0 hover:border-green-500 hover:text-green-500' />
        </buton> */}

            <button>
              <Link to="/login" className='font-bold text-xs text-zinc-200 bg-none hover:text-green-500 '>
                <p className={`py-2 px-4 cursor-pointer  transition-all duration-300 ease-in-out 
                          ${location.pathname === '/login' ? 'border-b-0 text-green-500 border-green-500' : ''}`
                }>LOGIN</p>
              </Link>
            </button>
          </div>

          <div >
         
          <button onClick={()=>setShow(false)} className='flex gap-1 items-center'> 
            {/* <Link to="/cart"> */}
                 <AddToCart isWhite={true} />
            {/* </Link> */}
            <p className='scale-[0.7] bg-[#FFD700] px-2 py-0 rounded-3xl text-xs items-center flex items-center font-bold'>{size}</p>
          </button>
          
         </div>



        </div>

      </div>



    </div>
  )
}

export default Nav