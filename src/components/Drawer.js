import React from 'react';
import DrawerCartTable from './DrawerCartTable';

const Drawer = ({ cart, setCart, setShow, isOpen, setIsOpen, toggleDrawer  }) => {
  
    return (
        <div className="relative">
          
            {/* Overlay (when drawer is open) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 "
                    onClick={toggleDrawer}
                ></div>
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 w-full md:rounded-lg md:w-3/4 lg:w-1/2 h-[96%] my-4 bg-brand-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${isOpen ? '-translate-x-4' : 'translate-x-full'
                    }`}
            >
                <div className="p-4  m-4">
                    <h2 className="text-3xl font-bold text  text-center">Shopping Cart</h2>
                    <div className="border-b py-2"></div>

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
