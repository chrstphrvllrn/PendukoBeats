import { useState} from 'react'
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import './App.css';
import Player from './sections/Player';
import Footer from './sections/Footer';
import Pricing from './sections/Pricing';
import Cart from './sections/Cart';
import { Toaster, toast } from 'sonner';
import CheckNotifcation from './components/CheckNotifcation'
import WarningNotification from './components/WarningNotification';

function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)

  const handleClick = (item) => {

          var isPresent = false;
          cart.forEach((product) => {
            // console.log(item.id, product.id)
            if (item.id === product.id) {
              isPresent = true
            } else {
            }
          })

          if (isPresent) {
            setWarning(true); 
            toast('Item is already added to cart', { className: '',  duration: 1000, icon: <WarningNotification />, });
            setTimeout(() => {
              setWarning(false)
            }, 500)
            return;
          } else {
            toast('Successfully Added!', { className: '', duration: 1000, icon: <CheckNotifcation />, });
            setCart([...cart, item])
          }
          
  }
  return (
    <div className="App">
      <Nav size={cart.length} setShow={setShow} />

      {
        show ? (
          <>
            <Hero />
            <Player handleClick={handleClick} />
            <Pricing />
            <Footer />
          </>
        ) : (
          <>
            <Cart cart={cart} setCart={setCart} />
          </>
        )
      }
    <Toaster position="top-center" />


    </div>
  )

}
export default App;
