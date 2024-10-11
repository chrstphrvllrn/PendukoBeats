import React from 'react';
import { useParams } from 'react-router-dom';
import { Playlist } from '../constants'; // Import your playlist data

const Beat = () => {
  const { uid } = useParams(); // Extract 'id' from URL, it's a string

  // Find the beat in the playlist by comparing the 'uid' as a string
  const beat = Playlist.find(beat => beat.uid == uid);
    console.log(beat)
 
  if (!beat) {
     // If no beat is found, return a message
    return <div>Beat not found! uid:{uid}</div>;
  }

  return (
    <div className='w-full h-[100vh] bg-brand-zinc-100 flex items-center justify-center'>
            <div className="w-full md:w-1/4 mx-auto bg-brand-white shadow-lg rounded-lg overflow-hidden bg-black">
            <img 
            src={beat.thumbnail} 
            alt={beat.title} 
            className="w-full h-auto object-cover  aspect-square "
            />
            <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{beat.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
                {beat.tags.split(',').map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                    {tag.trim()}
                </span>
                ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
                <p>Duration: {beat.duration}</p>
                <p>BPM: {beat.bpm}</p>
            </div>
            <audio controls controlsList="nodownload noplaybackrate nofullscreen noremoteplayback" className="w-full bg-none">
                <source src={beat.file} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            </div>
        </div>
  </div>
  );
};

export default Beat;
