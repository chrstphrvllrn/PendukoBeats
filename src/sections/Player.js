import React, { useState, useRef, useEffect } from 'react';
import { Playlist } from '../constants/index.js';
import Song from '../components/Song.js';
import Search from '../components/Search.js';
import Next from '../components/Next.js';
import Prev from '../components/Prev.js';
import Mute from '../components/Mute.js';
import Unmute from '../components/Unmute.js';
import Pause from '../components/Pause.js';
import Play from '../components/Play.js';

function Player({handleClick}) {
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentTime, setCurrentTime] = useState(0); // State to store current time of the audio
  const [volume, setVolume] = useState(1); // State to store the volume level (default: 1 = full volume)
  const [isMuted, setIsMuted] = useState(false); // State to track mute status
  const [songDurations, setSongDurations] = useState({}); // Store actual durations of all songs
  const [searchTerm, setSearchTerm] = useState('');  // Add search state
  const audioRef = useRef(null);
  const previousVolumeRef = useRef(volume); // Reference to store previous volume


  useEffect(() => {
    // Load actual durations of all songs when component mounts
    Playlist.forEach((item) => {
      const audio = new Audio(`http://localhost:3000${item.file}`);
      audio.addEventListener('loadedmetadata', () => {
        // Store the actual duration in state
        setSongDurations((prevDurations) => ({
          ...prevDurations,
          [item.id]: audio.duration // Store duration using item ID as the key
        }));
      });
    });
  }, []); // Empty dependency array means it runs once when the component mounts

  const playSound = (file, item) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setAudioIsPlaying(false);
    }

    const audioPath = `http://localhost:3000${file}`;
    const audio = new Audio(audioPath);
    audioRef.current = audio;
    audioRef.current.volume = volume; // Set the volume to the current volume state
    setCurrentAudio(item);  // Set the current playing song

    // Listen for time updates to get the current time
    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);  // Update current time
    });

    audio.onended = () => {
      audioRef.current = null;
      setAudioIsPlaying(false);
      setCurrentTime(0); // Reset time when the audio ends
      playNextSong();
    };

    audio.play()
      .then(() => {
        setAudioIsPlaying(true);

      })
      .catch((error) => {
        console.error('Error playing audio:', error);
      });
  };

  // Function to play the next song
  const playNextSong = () => {
    if (currentAudio) {
      const currentIndex = Playlist.findIndex(item => item.id === currentAudio.id);
      const nextIndex = (currentIndex + 1) % Playlist.length; // Loop to the start
      const nextSong = Playlist[nextIndex];
      playSound(nextSong.file, nextSong);

    }
  };

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

  // Function to format time as mm:ss
  const formatTime = (time) => {
    if (!time) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
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

  // Filter songs based on search input
  const filteredSongs = Playlist.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className='w-full h-auto px-8 sm:px-16 md:px-16 lg:px-16 flex justify-center'>
      <div className='w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-full flex flex-col items-start justify-start md:px-0 lg:px-8 py-10'>
        <div className='border-b w-full flex items-center relative mb-4 '>
          {/* Search Input */}
          <input
            type='textfield'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            className='w-full border-b rounded-md flex h-16 py-2 focus:outline-none focus:ring-zinc-200 focus:ring-1 px-3 text-sm transition-colors hover:text-primary font-small text-primary pl-10'
            placeholder='Search by title or tag'
          />
          <Search />
        </div>

        {/* Display current song info */}
        {currentAudio && (
          <div className='py-0 bg-black w-full flex items-center fixed bottom-0 left-0 px-2 md:px-10 text-white gap-4 backdrop-blur-md z-50'>
            <div className='w-full sm:w-12/12 md:w-6/12 lg:w-4/12 flex items-center'>
              {/* Album Art */}
              <div className='mr-4'>
                <img src={currentAudio.thumbnail} alt={currentAudio.title} className='w-12 h-12 rounded-md' />
              </div>

              {/* Song Details */}
              <div className='flex-1'>
                <h3 className='font-bold text-md'><strong className='text-zinc-400'> </strong>{currentAudio.title}</h3>
                <p className='text-xs text-zinc-400'><strong className='text-black'></strong> {currentAudio.tags}</p>
                {/* <p className='text-xs'><strong className='text-zinc-400'>Duration:</strong> {formatTime(songDurations[currentAudio.id])}</p> */}

              </div >
              <div className='flex items-center gap-2'>
              <button onClick={playPrevSong} className='p-2 text-white text-white rounded-md hover:text-zinc-400 cursor-pointer'>
                <Prev />
              </button>
              <button onClick={togglePlayPause} className='p-2 text-white text-white rounded-md hover:text-zinc-400 cursor-pointer'>
                { audioIsPlaying ?  <Pause/>  :  <Play/>  }
              </button>
              <button onClick={playNextSong} className='p-2 text-white text-white rounded-md hover:text-zinc-400 cursor-pointer'>
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
                className="relative w-full h-2 bg-gray-300 rounded-full  cursor-pointer absolute top-0 left-0 h-1 accent-brand-primary rounded-full"
              />
            </div>
            <div className="w-3/12 sm:w-0/12 md:w-1/12 lg:w-2/12 flex items-center hidden md:flex ">
              <label className="mr-2">
                {/* Mute/Unmute Button */}
                <button onClick={toggleMute} className='p-2 text-white text-white rounded-md hover:text-zinc-400 cursor-pointer'>
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
                className="w-full accent-brand-primary h-1"
              />
            </div>



          </div>
        )}




        {/* Song List - Filtered based on search */}
        {filteredSongs.length > 0 ? (
          filteredSongs.map((item) => (
            <div onClick={() => playSound(item.file, item)} className={`flex items-center justify-center w-full ${currentAudio?.id === item.id ? 'bg-ivory-primary' : ''}`}>
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
                handleClick={handleClick}
                item={item}
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
