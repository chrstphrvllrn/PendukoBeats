import React, { useState, useRef } from 'react'
import { Playlist } from '../constants/index.js';
import Song from '../components/Song.js'

function Player() {

    const [audioIsPlaying, setAudioIsPlaying] = useState(false);
    const [currentAudio, setCurrentAudio] = useState(null);
    const audioRef = useRef(null);
  
    const playSound = (file, item) => {
     
        console.log(item.title, currentAudio?.title, audioIsPlaying)

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setAudioIsPlaying(false);
      }
  
      // Debugging: Check if file is a valid string
    //   console.log('Playing audio file:', file); // This should log the file path or name
  
      // Make sure the file path is correct for the public folder
      const audioPath = `http://localhost:3000${file}`;
    //   console.log('Resolved audio path:', audioPath); // This should be /beats/floating.mp3
  
      const audio = new Audio(audioPath);
      audioRef.current = audio;
      setCurrentAudio(item);  // Set the current playing song

      audio.onended = () => {
        audioRef.current = null;
        setAudioIsPlaying(false);
      };
  
      audio.play()
        .then(() => {
          setAudioIsPlaying(true);
        //   console.log('Audio is playing');
        })
        .catch((error) => {
          console.error('Error playing audio:', error);
        });
    };


    
  return (
    <div className='w-full h-auto px-16 flex justify-center'>
            
            <div className='w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-full flex flex-col items-start justify-start px-8 py-10'>
            
            <h2 className='font-bold text-xl mb-4'>Browse</h2>
            <div className='border-b w-full'>

                    <input type='textfield' 
                    className='border rounded-md flex h-7 py-5 mb-3 px-4 text-sm transition-colors hover:text-primary  font-small text-primary' placeholder='search'></input>
            </div>



            { Playlist.map(( item, index) => (
                
               
                <div onClick={() => playSound(item.file, item)} 
                className={`flex items-center justify-center w-full ${currentAudio?.id === item.id ? 'bg-green-50' : ''}`}
                // odd:bg-white even:bg-zinc-50 
                >
               
                    <Song 
                    currentAudioId={currentAudio?.id} 
                    key={item.id} 
                    id={item.id} 
                    thumbn={item.thumbnail} 
                    title={item.title} 
                    tags={ item.tags } 
                    duration={item.duration} 
                    price={item.price} 
                    bpm={item.bpm} ></Song>           
               
                 </div>
             
             ))}  
              
            </div>

        </div>
  )
}

export default Player