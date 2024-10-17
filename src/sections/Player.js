import React, { useState, useEffect } from 'react';

import Song from '../components/Song.js';
import Search from '../components/Search.js';
import formatTime from '../components/FormatTime.js';



const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-4 space-x-4 text-xs">
      <button
        className="px-3 py-1 hover:bg-brand-zinc-50 rounded border"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button
        className="px-3 py-1 hover:bg-brand-zinc-50 rounded border"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};


function Player({ currentAudio, beats, addToCart, playSound, cart, sharePopup }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    if (beats.length > 0) {
      // Data has loaded, stop showing skeleton
      setIsLoading(false);
    }
  }, [beats]); // Effect depends on the beats array


  // Reset to page 1 whenever searchTerm changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Filter songs based on search input
  const filteredSongs = beats.filter((item) =>
    // item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // item.tags.toLowerCase().includes(searchTerm.toLowerCase())

    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (Array.isArray(item.tags)
      ? item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      : item.tags.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Calculate the current items to display based on filtered songs
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredSongs.slice(startIndex, startIndex + itemsPerPage);



  return (
    <div className='w-full h-auto   flex justify-center'>
      <div className='w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-full flex flex-col items-start justify-start py-10 px-8 sm:px-8 md:px-20 lg:px-20 xl:px-20 2xl:px-48 3xl:px-96 '>
        <div className='w-full flex items-center relative mb-4 '>
          {/* Search Input */}
          <input
            type='textfield'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            className='w-full rounded-md flex h-12 py-2 bg-brand-zinc-50 rounded-xl focus:outline-none focus:bg-brand-zinc-100 focus:ring-zinc-200 focus:ring-0 px-3 text-sm transition-colors hover:text-primary font-small text-primary pl-10'
            placeholder='Search by title or tag'
          />
          <Search />
        </div>
        {isLoading ? (
          // Skeleton Loader when data is being fetched
          // Skeleton Loader when data is not yet loaded
          <div className="w-full space-y-4">
            {Array(10).fill().map((_, index) => (
              <div key={index} className="py-2 flex items-center justify-center w-full animate-pulse space-x-4  px-0 sm:px-0 md:px-0  lg:px-6 ">
                <div className="w-6 h-6 bg-zinc-300 rounded-full animate-pulse hidden sm:flex md:flex"></div> {/* Placeholder for thumbnail */}
                <div className="w-10 h-10 bg-zinc-300 animate-pulse hidden sm:flex md:flex"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-zinc-300 rounded w-4/6 animate-pulse"></div> {/* Placeholder for title */}
                  <div className="h-4 bg-zinc-200 rounded w-2/6 animate-pulse"></div> {/* Placeholder for tags */}
                </div>
                <div className="w-24 h-4 bg-none rounded animate-pulse"></div>
                <div className="w-24 h-4 bg-zinc-300 rounded animate-pulse  hidden sm:hidden md:hidden lg:flex xl:flex"></div>
                <div className="w-24 h-4 bg-zinc-300 rounded animate-pulse  hidden sm:hidden md:hidden lg:flex xl:flex"></div>
                <div className="w-24 h-4 bg-none rounded animate-pulse  hidden sm:hidden md:hidden lg:flex xl:flex"></div>
                <div className="w-24 h-4 bg-zinc-300 rounded animate-pulse hidden sm:hidden md:flex lg:flex xl:flex"></div>
                <div className="w-24 h-4 bg-zinc-300 rounded animate-pulse"></div>
                <div className="w-24 h-4 bg-zinc-300 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        ) : currentItems.length > 0 ? (
          // Render the list of items when data is loaded and there are results
          currentItems.map((item, index) => (
            <div
              onClick={() => { playSound(item.mp3Url, item); }}
              key={item._id}
              className={`flex items-center justify-center w-full odd:bg-white even:bg-brand-zinc-0 ${currentAudio?._id === item._id ? 'bg-ivory-primary' : ''
                }`}
            >
              <Song
                currentAudioId={currentAudio?._id}
                _id={item._id}
                thumbnailUrl={item.thumbnailUrl}
                title={item.title}
                tags={item.tags}
                duration={item.duration}
                price={item.price}
                bpm={item.bpm}
                addToCart={addToCart}
                item={item}
                cart={cart}
                sharePopup={sharePopup}
              />
            </div>
          ))
        ) : (
          // Empty result state when data is loaded but no items are found
          <div className="text-center py-4">
            <p className="text-zinc-500 text-lg">No result found</p>
          </div>
        )}





        <Pagination
          totalItems={beats.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Player;
