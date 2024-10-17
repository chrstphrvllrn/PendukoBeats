import React, { useState, useEffect } from "react"

function ShareableLink({ closePopup, itemShareableLink}) {
    const [text, setText] = useState(`http://localhost:3000/beat/${itemShareableLink._id}`)
    const [isCopied, setIsCopied] = useState(false)
     
  
    const copyToClipboard = async () => {
        
        if (text) {
          try {
            await navigator.clipboard.writeText(text)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
          } catch (err) {
            console.error("Failed to copy text: ", err)
            alert("Failed to copy text. Please try again.")
          }
        }
      }


    return (
        <div>

            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-lg"
                onClick={closePopup} // Close pop-up when clicking on the background
            >
                <div
                    className="w-full max-w-lg h-auto max-h-screen p-8 rounded-lg shadow-lg  max-w-[425px]"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the pop-up
                >

                    {/* <button onClick={closePopup} className="text-black float-right">X</button> */}
                 
                    {/* <button onClick={closePopup} type="button" class=" float-right rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close</span>
                    </button> */}
                   

                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-brand-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
                <div className='flex gap-5'> 
                    <div>
                        <img src={itemShareableLink.thumbnailUrl} className="w-[3em] aspect-square rounded-sm  flex" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                            {itemShareableLink.title}
                        </h3>
                        <p className="text-xs text-brand-zinc-400">{itemShareableLink.tags}</p>
                    </div>
                </div>
          <button
            onClick={closePopup}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right" for="name">Shareable Link</label>
              <input class="flex h-9 w-full 
              rounded-md border border-input bg-transparent px-3 
              py-1 text-sm  transition-colors file:border-0 
              file:bg-transparent file:text-sm file:font-medium file:text-foreground 
              placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-ring disabled:cursor-not-allowed 
              disabled:opacity-50 col-span-3
              " 
              id="name" 
              value={`http://localhost:3000/beat/${itemShareableLink._id}`}/>
        
        </div>
        <div className="flex items-center justify-start p-6 border-t border-gray-200 rounded-b">
          
          
          {/* <button
            onClick={closePopup}
            className="text-black bg-brand-primary hover:bg-brand-secondary focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Close
          </button> */}

          <button
        onClick={copyToClipboard}
        disabled={!text}
        className={`w-full text-black  bg-brand-zinc-100 hover:bg-brand-zinc-50 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center flex flex-row  justify-center align-center${
          text ? 'bg-brand-zinc-200 hover:bg-brand-zinc-100' : 'bg-gray-300 cursor-not-allowed'
        }`}
      >
        {isCopied ? (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            Copy to Clipboard
          </>
        )}
      </button>


        </div>
      </div>
    </div>



                    {/* <div class="flex flex-col space-y-10 text-center sm:text-left">
                    
                      <h2 id="radix-:r13t:" class="text-lg font-semibold leading-none tracking-tight">{itemShareableLink.title}</h2>
                      <div className='border'></div>
                      <div class="grid grid-cols-4 items-center gap-4"><label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right" for="name">Shareable Link</label>
                      <input class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 col-span-3" id="name" value={itemShareableLink.file}/></div>
                    
                    </div> */}
                    {/* <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"><button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2" type="submit">Save changes</button></div> */}
                </div>
            </div>



        </div>
    )
}

export default ShareableLink