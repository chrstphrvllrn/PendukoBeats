import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import { Playlist } from '../constants'; // Import your playlist data
import axios from 'axios';

const Beat = () => {
  const { _id } = useParams(); // Extract 'id' from URL, it's a string
  const [beats, setBeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBeats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/beats');
        setBeats(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch beats. Please try again later.');
        setLoading(false);
      }
    };

    fetchBeats();
  }, []);


  // Find the beat in the playlist by comparing the 'uid' as a string
  const beat = beats.find(beatt => beatt._id == _id);
    console.log(_id)
 
  if (!beat) {
     // If no beat is found, return a message
    return <div>Beat not found! _id:{_id}</div>;
  }


    // Handle beat.tags: If it's an array, use it. If it's a string, split it. Otherwise, use an empty array.
    const tags = Array.isArray(beat.tags)
        ? beat.tags
        : typeof beat.tags === 'string'
        ? beat.tags.split(',')
        : [];

  return (
    <div className='w-full h-[100vh] bg-brand-zinc-100 flex items-center justify-center'>
            <div className="w-full md:w-1/4 mx-auto bg-brand-white shadow-lg rounded-lg overflow-hidden bg-black">
            <img 
            src={beat.thumbnailUrl} 
            alt={beat.title} 
            className="w-full h-auto object-cover  aspect-square "
            />
            <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">{beat.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
         

              {tags.length > 0 ? (
                    tags.map((tag, index) => <span key={index}>{tag.trim()}</span>)
                ) : (
                    <p></p>
                )}
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
                <p>Duration: {beat.duration}</p>
                <p>BPM: {beat.bpm}</p>
            </div>
            <audio controls controlsList="nodownload noplaybackrate nofullscreen noremoteplayback" className="w-full bg-none">
                <source src={beat.mp3Url} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            </div>
        </div>
  </div>
  );
};

export default Beat;
