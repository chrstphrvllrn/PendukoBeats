import React, { useState, useEffect } from 'react'
import { SocialMediaData } from '../constants/index'


function Footer() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);



  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true); // Start loading

    const formData = {
      email,
      message,
    };


    try {
      // Simulate a POST request to the backend
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        setIsSuccess(true); // Success response
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false); // Stop loading after the response
    }
  };

     // Reset success state after 4 seconds
     useEffect(() => {
      if (isSuccess) {
        const timer = setTimeout(() => {
          setIsSuccess(false); // Reset to default after 4 seconds
        }, 4000);

        return () => clearTimeout(timer); // Cleanup timer on unmount or change
      }
    }, [isSuccess]);

  return (
    <div className='w-full h-auto bg-zinc-800 px-8 sm:px-8 md:px-20 lg:px-20 xl:px-20 2xl:px-48 3xl:px-96 '>

      <div className=' w-full h-auto  border-t flex py-16 flex-col md:flex-row' id='footer'>

        <div className='w-full md:w-1/2 pt-8 md:pt-0 gap-5 flex flex-col items-start justify-center md:justify-start '>

          {/* <p className='p-2 rounded-3xl'> Find me on</p> */}

          <div className='w-full h-full'>

            <div className="px-0 py-0 gap-4 flex flex-col ">
       
              <form onSubmit={handleSubmit} className="px-0 py-0 gap-4 flex flex-col ">
                <h1 className='text-white text-lg'>Get in touch</h1>

                <label htmlFor="emailaddress" className="text-zinc-500  text-sm">Please provide your email address so that I can reach out to you.</label>
                <input
                  type="email"
                  id="emailaddress"
                  className="text-zinc-50 w-full px-4 py-4 text-sm text-gray-900 bg-zinc-800 border rounded-md border-zinc-600 focus:outline-none focus:ring-0"
                  placeholder="you@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="message" className="text-zinc-500 text-sm">Message</label>
                <textarea
                  id="message"
                  rows="10"
                  className="text-zinc-50 w-full px-4 py-4 text-sm text-gray-900 bg-zinc-800 border rounded-md border-zinc-600 focus:outline-none focus:ring-0"
                  placeholder="Write a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <button type="submit"
                  disabled={isLoading}
                  className={`px-10 py-4 rounded-md text-black ${isLoading ? "bg-zinc-100 text-zinc-500" : "bg-brand-primary hover:bg-brand-secondary"
                    }`}
                >
                  {isLoading ? (
                     <div className='flex items-center justify-center'>
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> Loading...
                     </div>
                    
                    ) : (
                      
                      isSuccess ? (
                        <div className='flex items-center justify-center'>
                          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg> */}
                        Message sent!
                        </div>
                        
                      ) : 
                      ("Send")
                    )
                    }
                </button>
              </form>

            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2 pt-8 md:pt-0 gap-16 text-brand-zinc-400 text-sm flex items-center md:items-end justify-center md:justify-end'>

        <div className='flex flex-row gap-4'>
          {SocialMediaData.map((item, index) => (
            <a
              key={index}
              href={item.url}
              label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-white hover:text-brand-zinc-400 rounded-3xl"
            >
              <div className=" p-2 rounded-full">
                {item.icon}
              </div>
            </a>
          ))}
        </div>


        </div>


      </div>
      <div className='pb-8 flex items-center justify-center'>
        

      <p className='text-zinc-400 py-12 text-sm'>© {new Date().getFullYear()} Penduko Beats</p>
      </div>
    </div>
  )
}

export default Footer