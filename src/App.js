import React, { useState, useRef, useEffect } from 'react';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import './App.css';
import Player from './sections/Player';
import PlayerFloat from './sections/PlayerFloat';
import Footer from './sections/Footer';
import Pricing from './sections/Pricing';
import Cart from './sections/Cart';
import { Toaster, toast } from 'sonner';
import CheckNotifcation from './components/CheckNotifcation.js'
import WarningNotification from './components/WarningNotification';
import { Playlist } from './constants/index';
import ShareableLink from './components/ShareableLink'


function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)
  

  //Player & Playlist
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [songDurations, setSongDurations] = useState({}); // Store actual durations of all songs
  const [currentTime, setCurrentTime] = useState(0); // State to store current time of the audio
  const [volume, setVolume] = useState(1); // State to store the volume level (default: 1 = full volume)
  //Shareable link
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [itemShareableLink, setItemShareableLink] = useState(null)

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
  }
  
  
  //Add to cart
  const addToCart = (item) => {

    var isPresent = false;
    cart.forEach((product) => {
      // console.log(item.id, product.id)
      if (item.id === product.id) {
        isPresent = true
      } else {
      }
    })

    if (isPresent) {
      setWarning(true);
      toast('Item is already added to cart', { className: '', duration: 1000, icon: <WarningNotification />, });
      setTimeout(() => {
        setWarning(false)
      }, 500)
      return;
    } else {
      toast('Successfully Added!', { className: '', duration: 1000, icon: <CheckNotifcation />, });
      // setCart([...cart, item])
      setCart(prevCart => [...prevCart, { ...item, price: item.price || 30 }]);
    }
  }

 // Function to handle the div click
 const sharePopup = (item) => {
    setIsPopupVisible(!isPopupVisible); // Toggle the popup
    setItemShareableLink(item)
     console.log("sharePopup", isPopupVisible)
     
  };

  // Function to close the pop-up
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="App">
      <Nav size={cart.length} cart={cart} setCart={setCart} setShow={setShow} />
      {
        show ? (
          <>
            <Hero />
            <Player 
              currentAudio={currentAudio} 
              Playlist={Playlist} 
              addToCart={addToCart} 
              playSound={playSound} 
              songDurations={songDurations} 
              audioRef={audioRef} 
              volume={volume} 
              audioIsPlaying={audioIsPlaying} 
              setAudioIsPlaying={setAudioIsPlaying} 
              setVolume={setVolume} 
              currentTime={currentTime}
              cart={cart}
              sharePopup={sharePopup} 
            />
            <Pricing />
            <Footer />
          </>
        ) : (
          <>
            <Cart cart={cart} setCart={setCart} />
          </>
        )
      }
     <PlayerFloat 
      currentAudio={currentAudio} 
      Playlist={Playlist} 
      playNextSong={playNextSong} 
      playSound={playSound} 
      songDurations={songDurations} 
      audioRef={audioRef} 
      volume={volume} 
      audioIsPlaying={audioIsPlaying} 
      setAudioIsPlaying={setAudioIsPlaying} 
      setVolume={setVolume} 
      currentTime={currentTime}
    />
      <Toaster position="top-center" />

      {isPopupVisible && (
          <ShareableLink 
          closePopup={closePopup} 
          itemShareableLink={itemShareableLink}/>
         )
      }

    </div>
  )

}
export default App;
