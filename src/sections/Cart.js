import React, { useState } from 'react'
// import Nav from './Nav';
import Remove from '../components/Remove'
import { licensePrices } from '../constants/index'

function Cart({ cart, setCart }) {
  // const [price, setPrice] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    address: '',
    city: '',
    state: '',
    postalCode: ''
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }
  // Handle license change and update the cart
  const handleLicenseChange = (itemId, selectedLicense) => {
    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, license: selectedLicense, price: licensePrices[selectedLicense] } : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    if (!cart || cart.length === 0) {
      return "0";
    }
    return cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(0);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order submitted:', { cart, formData, total: calculateTotal() })
    // Here you would typically send this data to a server
  }

  const handleRemoveItem = (itemToRemove) => {
    setCart(prevCart => prevCart.filter(item => item !== itemToRemove));
  };


  console.log(cart)
  return (
    <div className='w-full h-full px-4 md:px-16 pb-16 bg-brand-zinc-50'>
      {/* <Nav /> */}
      <h1 className='text-2xl font-bold  pt-10 pb-5'>Order Details</h1>

      <div className='w-full h-full flex flex-col md:flex-col lg:flex-row gap-5 md:gap-5 lg:gap-0'>

        <div className='w-full md:w-full lg:w-2/3 h-full flex flex-col  items-start justify-center pb-8 px-0 md:px-8 border rounded-lg mr-10  bg-brand-white '>



          <div className='w-full h-[16vh] gap-2 flex flex-col items-end justify-center pr-5 md:pr-0'>
            <h1>Total Payable</h1>
            <h1 className='text-2xl font-bold'>${calculateTotal()}</h1>

          </div>
          {/* {
            cart.map((item) => {
              return (
                <div className="w-full h-auto px-3 py-4 border-b" key={item.id}>

                  <li className="w-full h-full flex gap-0 items-center justify-between  ">

                    <div className="w-1/4 flex gap-4">
                    <div>
                      <img src={item.thumbnail} className="w-[3em] h-[3em] rounded-sm" />
                      </div>
                      <div>
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="text-xs text-brand-zinc-400">{item.tags}</p>
                      </div>
                    </div>
                
                    <div className="w-1/4 h-full flex flex-row pl-4 items-center justify-center">
                        <select id="colors" name="colors" className=' px-3 py-2 border rounded-md text-xs w-full cursor-pointer hover:text-bronze-primary'>
                          <option value="MP3">MP3</option>
                          <option value="WAV">WAV</option>
                          <option value="Trackout">Trackout</option>
                          <option value="Exclusive">Exclusive</option>
                        </select>
                    </div>
                    <div className="w-1/4 h-full flex flex-col gap-2 pl-4 justify-center items-end">
                    <div className="w-auto h-full text-sm font-medium">
                        <label for="colors"></label>
                        <p className="text-sm font-medium text-brand-zinc-700">$ {item.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-1/4 h-full justify-between items-end gap-0">
                      
                   
                      <div className='text-brand-zinc-500 hover:text-brand-zinc-800 cursor-pointer'>
                        <Remove />
                      </div>
                    </div>


                  </li>
                </div>
              );
            })
          } */}

          <div className="container mx-auto py-0">
            <div className="rounded-md border-0 md:border">
              <table className="w-full caption-bottom text-sm">

                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-brand-zinc-50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 w-[200px]">
                      Title
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      License
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Price
                    </th>
                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {cart && cart.map((item) => (
                    <tr
                      key={item.title}
                      className="border-b transition-colors hover:bg-brand-zinc-100 data-[state=selected]:bg-muted"
                    >
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">

                        <div className="flex gap-0 md:gap-5 items-center">
                          <div>
                            <img src={item.thumbnail} className="w-[3em] aspect-square rounded-sm hidden md:flex" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">{item.title}</p>
                            <p className="text-xs text-brand-zinc-400">{item.tags}</p>
                          </div>
                        </div>


                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        <select
                          value={item.license || 'MP3'}
                          onChange={(e) => handleLicenseChange(item.id, e.target.value)}
                          id="colors" name="colors" className=' px-3 py-2 border rounded-md text-xs w-full cursor-pointer hover:text-bronze-primary'>
                          <option selected value="MP3">MP3</option>
                          <option value="WAV">WAV</option>
                          <option value="Trackout">Trackout</option>
                          <option value="Exclusive">Exclusive</option>
                        </select>
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                        ${item.price ? item.price.toFixed(0) : '0'}
                      </td>
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                        <button onClick={() => handleRemoveItem(item)}
                          className="hover:text-bronze-primary inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
                        >
                          <Remove />
                        </button>
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>
              {
                cart && cart.length === 0 && <p className='w-full text-center text-brand-zinc-400 p-4 text-sm'>Add beats to your cart</p>
              }
            </div>
          </div>

        </div>



        <div className='w-full md:w-full lg:w-1/3 h-full flex flex-col items-start justify-start py-0 px-8 bg-primary border rounded-lg bg-brand-white'>

          <div className='w-full h-[0vh] gap-2 flex flex-col'>
         

          </div>
          <h1 className="text-md py-5 font-bold text-brand-zinc-600">Contact information</h1>

          <div className="w-full h-auto  py-3 " >

            {/* <input id="email-address" name="email-address" type="email" autocomplete="email" className="rounded-sm w-full"/> */}
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="Email address">Email address</label>
              <input type='text' autocomplete='cc-exp' class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="emailaddress" placeholder="" value={formData.email} onChange={handleInputChange} required />
            </div>

          </div>

          <h1 className="text-md  py-5 font-bold text-brand-zinc-600">Payment Details</h1>
          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="Card number">Card number</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="cardname" placeholder="0000 0000 0000 0000" value={formData.cardNumber} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="w-full h-auto py-3">
            <div className="grid gap-4 grid-cols-2">
              {/* Expiration Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " htmlFor="expirationdate">
                  Expiration Date
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="expirationdate"
                  placeholder="MM/YY"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* CVC */}
              <div className="flex flex-col  gap-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="cvc">
                  CVC
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="cvc"
                  placeholder="CVC/CVV"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <h1 className="text-md  py-5 font-bold text-brand-zinc-600">Billing address</h1>
          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="Address">Address</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="shippingaddress" placeholder="" value={formData.address} onChange={handleInputChange} required />
            </div>
          </div>

          <div className="w-full h-auto  py-3 " >
            <div class="grid gap-2">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="City">City</label>
              <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="city" placeholder="" value={formData.city} onChange={handleInputChange} required />
            </div>
          </div>
     

          <div className="w-full h-auto py-3">
            <div className="grid gap-4 grid-cols-2">
              {/* Expiration Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " htmlFor="expirationdate">
                  State / Province
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="expirationdate"
                  placeholder=""
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* CVC */}
              <div className="flex flex-col  gap-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="cvc">
                Postal code
                </label>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  id="Postal code"
                  placeholder=""
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" onClick={() => handleSubmit()} className='px-5 py-3 bg-brand-primary hover:bg-brand-secondary rounded-lg text-sm font-bold my-5'>Confirm Payment</button>



        </div>

      </div>
    </div>
  );
}

export default Cart