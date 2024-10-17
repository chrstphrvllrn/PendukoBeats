import React, { useState } from 'react'
// import Nav from './Nav';
import Remove from '../components/Remove'

function Cart({ cart, setCart }) {
  // const [price, setPrice] = useState(0);
  console.log(cart)
  return (
    <div className='w-full h-full px-16'>
      {/* <Nav /> */}
      <h1 className='text-2xl my-14 font-bold'>Payment information</h1>
       
      <div className='w-full h-full flex flex-row'>

     
        <div className='w-2/3 h-full flex flex-col items-start justify-center py-5 px-8 border rounded-lg mr-10  '>
       
        
          <div className='w-full h-[0vh] gap-2 flex flex-col'>
            <h1> </h1>
            <h1 className='text-5xl font-bold'></h1>

          </div>
          <h1 className="text-md py-2 font-medium">Contact information</h1>

          <div className="w-full h-auto  py-3 " >

            {/* <input id="email-address" name="email-address" type="email" autocomplete="email" className="rounded-sm w-full"/> */}
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="Email address">Email address</label>
              <input type='text' autocomplete='cc-exp' class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="emailaddress" placeholder="" />
            </div>

          </div>

          <h1 className="text-md  py-2 font-medium">Payment Details</h1>
          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="Card number">Card number</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="cardname" placeholder="0000 0000 0000 0000" />
            </div>
          </div>
          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2 grid-row-2 grid-4">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="Expiration date (MM/YY)">Expiration date (MM/YY)</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="expirationdate" placeholder="" />

            </div>
          </div>
          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2 grid-row-2 grid-4">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="CVC">CVC</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="cvc" placeholder="CVC/CVV" />
            </div>
          </div>

          <h1 className="text-md  py-2 font-medium">Billing address</h1>
          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="Address">Address</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="shippingaddress" placeholder="" />
            </div>
          </div>

          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="City">City</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="city" placeholder="" />
            </div>
          </div>
          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="StateProvince">State / Province</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="state" placeholder="" />
            </div>
          </div>
          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="Postal code">Postal code</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="postalcode" placeholder="" />
            </div>
          </div>
          <button className='px-5 py-3 bg-brand-primary hover:bg-brand-secondary rounded-lg text-sm font-bold my-5'>Confirm Payment</button>
        </div>



        <div className='w-1/3 h-full flex flex-col items-center justify-start py-0 px-8 bg-primary border rounded-lg'>
          {/* <h1 className="text-md  py-2">Order Summary</h1> */}
          <div className='w-full h-[16vh] gap-2 flex flex-col items-end justify-center border-b'>
            <h1>Amount Due</h1>
            <h1 className='text-4xl font-bold'>$232.00</h1>

          </div>
          {
            cart.map((item) => {
              return (
                <div className="w-full h-auto px-3 py-4 border-b" key={item.id}>

                  <li className="w-full h-full flex gap-0 items-start justify-between  ">

                    <div className="w-1/4">
                      <img src={item.thumbnail} className="w-[5em] h-[5em] rounded-sm" />
                    </div>
                    <div className="w-2/4 h-full flex flex-col gap-2 pl-4 justify-between">
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="text-xs text-brand-zinc-400">{item.tags}</p>
                      <select id="colors" name="colors" className=' px-2 py-1 border rounded-sm text-xs w-[7vw] cursor-pointer hover:text-bronze-primary'>
                          <option value="MP3">MP3</option>
                          <option value="WAV">WAV</option>
                          <option value="Trackout">Trackout</option>
                          <option value="Exclusive">Exclusive</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-1/4 h-full justify-between items-end gap-9">
                      
                      <p className="w-auto h-auto text-sm font-medium">
                        <label for="colors"></label>
                        <p className="text-sm font-medium text-brand-zinc-700">$ {item.price}</p>
                    
                      </p>
                      <div className='text-brand-zinc-500 hover:text-brand-zinc-800 cursor-pointer'>
                        <Remove />
                      </div>
                    </div>


                  </li>
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