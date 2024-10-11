import React from 'react'
import { licensePrices } from '../constants/index'
import Remove from './Remove'

function CartTable({cart, setCart}) {

     // Handle license change and update the cart
  const handleLicenseChange = (itemId, selectedLicense) => {
    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, license: selectedLicense, price: licensePrices[selectedLicense] } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (itemToRemove) => {
    setCart(prevCart => prevCart.filter(item => item !== itemToRemove));
  };

  const calculateTotal = () => {
    if (!cart || cart.length === 0) {
      return "0";
    }
    return cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(0);
  }

  return (
    <div>
          <div className='  w-full h-[16vh] gap-2 flex flex-col items-end justify-center pr-5 md:pr-0 z-50 '>
            <h1>Total Payable</h1>
            <h1 className='text-2xl font-bold'>${calculateTotal()}</h1>

          </div>
        <div className=" container mx-auto py-0 ">
            <div className="rounded-md border-0 md:border overflow-y-auto flex-1 max-h-[50vh] md:max-h-[65vh]">
              <table className="w-full caption-bottom text-sm">

                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-zinc-50 data-[state=selected]:bg-muted">
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
                      className=" text-xs border-b transition-colors hover:bg-zinc-100 data-[state=selected]:bg-muted"
                    >
                      <td className="px-4 py-2 align-middle [&:has([role=checkbox])]:pr-0 font-medium">

                        <div className="flex gap-0 md:gap-4 items-center">
                          <div>
                            <img src={item.thumbnail} className="w-[3em] aspect-square rounded-sm hidden md:flex" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">{item.title}</p>
                            <p className="text-xs text-zinc-400">{item.tags}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 align-middle [&:has([role=checkbox])]:pr-0">
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
                      <td className="px-4 py-2 align-middle [&:has([role=checkbox])]:pr-0">
                        ${item.price ? item.price.toFixed(0) : '0'}
                      </td>
                      <td className="px-4 py-2 align-middle [&:has([role=checkbox])]:pr-0 text-right">
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
                cart && cart.length === 0 && <p className='w-full text-center text-zinc-400 p-4 text-sm'>Add beats to your cart</p>
              }
            </div>
          </div>


    </div>
  )
}

export default CartTable