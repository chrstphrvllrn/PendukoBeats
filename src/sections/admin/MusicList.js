import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MusicList() {

  const [beats, setBeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchBeats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/beats');
        setBeats(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch beats. Please try again later.');
        setLoading(false);
      }
    };

    fetchBeats();
  }, []);


  return (
    <div>
 
 <div className="overflow-hidden rounded-lg ">
          <table className="min-w-full ">
            <thead className="bg-white  text-sm">
              <tr>
                <th className=" px-2 py-4 text-left text-zinc-600">Thumbnail</th>
                <th className=" px-2 py-4 text-left text-zinc-600">Title</th>
                <th className=" px-2 py-4 text-left text-zinc-600">ID</th>
                <th className=" px-2 py-4 text-left text-zinc-600">indexID</th>
                <th className=" px-2 py-4 text-left text-zinc-600">Duration</th>
                <th className=" px-2 py-4 text-left text-zinc-600">BPM</th>
                <th className=" px-2 py-4 text-left text-zinc-600">Status</th>
              </tr>
            </thead>
            <tbody>
            {beats && beats.map((beat) => (
                <tr key={beat.id} className="bg-white hover:bg-gray-50 text-xs">
                  <td className=" p-2">
                    <img src={beat.thumbnailUrl} alt={beat.title} className="w-12 h-12 rounded" />
                  </td>
                  <td className=" p-2">{beat.title}</td>
                  <td className=" p-2">{beat._id}</td>
                  <td className=" p-2">{beat.indexID}</td>
                  <td className=" p-2">{beat.duration}</td>
                  <td className=" p-2">{beat.bpm}</td>
                  <td className=" p-2">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full 
                      ${beat.status === 'sold' ? 'bg-red-200 text-red-600' : 'bg-green-200 text-green-600'}`}>
                      {beat.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
    </div>
  )
}

export default MusicList