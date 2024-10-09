import React, { useState } from 'react'
import Nav from './Nav';

function Cart({cart, setCart}) {
  const [price, setPrice] = useState(0);
  console.log(cart)
  return (
    <div>
      {/* <Nav /> */}
      <div className='w-full h-[90vh] px-16'>
        <div className='w-full h-full flex flex-col items-center justify-center bg-zinc-50'>
          {
            cart.map((item) => {
              return (
                <div className="w-full h-[20vh] bg-zinc-100 flex gap-20" key={item.id}>
                  <p>{item.id}</p>
                  <p>{item.price}</p>
                  <p>{item.title}</p>
                  <p>{item.amount}</p>
                </div>
              );
            })
          }
         
        </div>
      </div>
    </div>
  );
}

export default Cart