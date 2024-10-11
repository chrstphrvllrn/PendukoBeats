import React from 'react';
import DrawerCartTable from './DrawerCartTable';

const Drawer = ({ cart, setCart, setShow, isOpen, setIsOpen, toggleDrawer  }) => {
  
    return (
        <div className="relative">
          
            {/* Overlay (when drawer is open) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleDrawer}
                ></div>
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 w-full md:w-3/4 lg:w-1/2 h-full bg-brand-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <h2 className="text-2xl font-bold text">Cart</h2>
                    {/* <p className="text-brand-zinc-500 text-sm">This is the item inside the Cart</p> */}

                    <DrawerCartTable cart={cart} setCart={setCart}  />
                    <div className='absolute bottom-5 right-0 w-full flex gap-2 float'>
                            <button
                                onClick={toggleDrawer}
                                className="w-1/2 mt-4 px-4 ml-4 mr-2 py-2 text-black font-bold border rounded-lg"
                            >
                                Close
                            </button>

                            <button
                                onClick={() => {
                                    setShow(false);
                                    toggleDrawer();
                                }}
                                className="cursor-pointer w-1/2 mt-4 px-4 mr-4 ml-2 py-2 text-black font-bold bg-brand-primary rounded-lg"
                            >
                                Check out
                            </button>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Drawer;
