import React, { useState, useRef, useEffect } from 'react';
import Next from '../components/Next.js';
import Prev from '../components/Prev.js';
import Mute from '../components/Mute.js';
import Unmute from '../components/Unmute.js';
import Pause from '../components/Pause.js';
import Play from '../components/Play.js';
import formatTime from '../components/FormatTime.js';

function PlayerFloat({currentAudio, Playlist, playNextSong, playSound, songDurations, audioRef, volume, audioIsPlaying, setAudioIsPlaying, setVolume, currentTime}) {

 const previousVolumeRef = useRef(volume); // Reference to store previous volume
 const [isMuted, setIsMuted] = useState(false); // State to track mute status

  // Function to play the previous song
  const playPrevSong = () => {
    if (currentAudio) {
      const currentIndex = Playlist.findIndex(item => item.id === currentAudio.id);
      const prevIndex = (currentIndex - 1 + Playlist.length) % Playlist.length; // Loop to the end
      const prevSong = Playlist[prevIndex];
      playSound(prevSong.file, prevSong);
    }
  };

  // Toggle between playing and pausing the current audio
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioIsPlaying) {
        audioRef.current.pause();
        setAudioIsPlaying(false);
      } else {
        audioRef.current.play();
        setAudioIsPlaying(true);
      }
    }
  };

   // Function to handle dragging the progress bar
   const handleProgressChange = (e) => {
    const progress = e.target.value;
    if (audioRef.current) {
      audioRef.current.currentTime = progress;
    }
  };

  // Function to handle volume change
  const handleVolumeChange = (e) => {
    const volumeValue = e.target.value;
    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
    }
    setVolume(volumeValue); // Update the volume state
  };


    // Function to toggle mute/unmute
    const toggleMute = (event) => {
        console.log("toggleMute", isMuted)
        event.preventDefault();
        if (isMuted) {
          audioRef.current.volume = previousVolumeRef.current; // Restore previous volume
          setVolume(previousVolumeRef.current); // Set volume state to previous
        } else {
          previousVolumeRef.current = volume; // Store current volume before muting
          audioRef.current.volume = 0; // Set volume to 0
          setVolume(0); // Update volume state to 0
        }
        setIsMuted(!isMuted); // Toggle mute state
      };
    

  return (
    <div>

  {/* Display current song info */}
  {currentAudio && (
          <div className='py-0 bg-black w-full flex items-center fixed bottom-0 left-0 px-2 md:px-10 text-brand-white gap-4 backdrop-blur-md z-40'>
            <div className='w-full sm:w-12/12 md:w-6/12 lg:w-4/12 flex items-center'>
              {/* Album Art */}
              <div className='mr-4'>
                <img src={currentAudio.thumbnail} alt={currentAudio.title} className='w-12 h-12 rounded-md' />
              </div>

              {/* Song Details */}
              <div className='flex-1'>
                <h3 className='font-bold text-md'><strong className='text-brand-gray-400'> </strong>{currentAudio.title}</h3>
                <p className='text-xs text-brand-zinc-400'> {currentAudio.tags}</p>
                {/* <p className='text-xs'><strong className='text-brand-zinc-400'>Duration:</strong> {formatTime(songDurations[currentAudio.id])}</p> */}

              </div >
              <div className='flex items-center gap-2'>
              <button onClick={playPrevSong} className='p-2 text-brand-gray-400 rounded-md hover:text-brand-zinc-400 cursor-pointer'>
                <Prev />
              </button>
              <button onClick={togglePlayPause} className='p-2 text-brand-gray-400  rounded-md hover:text-brand-zinc-400 cursor-pointer'>
                { audioIsPlaying ?  <Pause/>  :  <Play/>  }
              </button>
              <button onClick={playNextSong} className='p-2 text-brand-gray-400 rounded-md hover:text-brand-zinc-400 cursor-pointer'>
                <Next />
              </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-3/12 sm:w-0/12 md:w-5/12 lg:w-6/12  items-center 1/6 gap-3 hidden md:flex">
              <p className='text-xs'>{formatTime(currentTime)} </p> 
              {/* {currentAudio && ( */}
              <input
                type="range"
                min={0}
                max={songDurations[currentAudio.id] || 0}
                value={currentTime}
                onChange={handleProgressChange}
                className="relative w-full rounded-full  cursor-pointer absolute top-0 left-0 h-[0.125rem] accent-brand-primary rounded-full"
              />
            </div>
            <div className="w-3/12 sm:w-0/12 md:w-1/12 lg:w-2/12 flex items-center hidden md:flex ">
              <label className="mr-2">
                {/* Mute/Unmute Button */}
                <button onClick={toggleMute} className='p-2 text-brand-white rounded-md hover:text-brand-zinc-400 cursor-pointer'>
                  { isMuted ? <Mute/>  :  <Unmute/>  }
                </button>
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-brand-primary bg-brand-primary fill-brand-primary text-brand-primary h-[0.125rem]"
              />
            </div>



          </div>
        )}


    </div>
  )
}

export default PlayerFloat