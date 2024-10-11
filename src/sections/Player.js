import React, { useState } from 'react';

import Song from '../components/Song.js';
import Search from '../components/Search.js';
import formatTime from '../components/FormatTime.js';

function Player({currentAudio, Playlist, addToCart,  playSound,  songDurations, cart, sharePopup, closePopup}) {

  const [searchTerm, setSearchTerm] = useState('');  // Add search state


  // Filter songs based on search input
  const filteredSongs = Playlist.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className='w-full h-auto px-8 sm:px-16 md:px-16 lg:px-16 flex justify-center'>
      <div className='w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-full flex flex-col items-start justify-start md:px-0 lg:px-8 py-10'>
        <div className='w-full flex items-center relative mb-4 '>
          {/* Search Input */}
          <input
            type='textfield'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            className='w-full rounded-md flex h-12 py-2 focus:outline-none focus:bg-brand-zinc-100 focus:ring-zinc-200 focus:ring-0 px-3 text-sm transition-colors hover:text-primary font-small text-primary pl-10'
            placeholder='Search by title or tag'
          />
          <Search />
        </div>


        {/* Song List - Filtered based on search */}
        {filteredSongs.length > 0 ? (
          filteredSongs.map((item) => (
            <div onClick={() => 
              {playSound(item.file, item);

            }} className={`flex items-center justify-center w-full ${currentAudio?.id === item.id ? 'bg-ivory-primary' : ''}`}>
              <Song
                currentAudioId={currentAudio?.id}
                key={item.id}
                id={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                tags={item.tags}
                duration={songDurations[item.id] ? formatTime(songDurations[item.id]) : 'Loading...'}
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
          <div className="text-center py-4">
            <p className="text-zinc-500 text-lg">No result found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Player;
