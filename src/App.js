// import logo from './logo.svg';
import './App.css';

import { useState,useEffect } from "react";
import Player from "./components/Player"
function App() {
  const[songs]=useState([
    {
      title:"What About Me",
      artist:"Rex orange county",
      img_src:"/images/WhatAboutMe.png",
      src:"https://www.mboxdrive.com/WRM.mp3"
    },
    {
      title:"Atlantis",
      artist:"Seafret",
    
      img_src:"/images/Atlantis.png",
      src:"https://www.mboxdrive.com/Atlantis.mp3"
    },
    {
      title:"Another love",
      artist:"Tom odell",
      
      img_src:"/images/AnotherLove1.png",
      src:"https://www.mboxdrive.com/Another%20love.mp3"
    },
    {
      title:"Strong",
      artist:"One Direction",
      img_src:"/images/WhatAboutMe.png",
      src:"https://www.mboxdrive.com/Eri6.mp3"
    },
    {
      title:"Without You",
      artist:"Avici",
      img_src:"/images/WithoutYou.png",
      src:"https://www.mboxdrive.com/AviciiTribute.mp3.mp3"
    },
    {
      title:"Oil of Every Pearl's",
      artist:"SOPHIE",
      img_src:"/images/Sophy.png",
      src:"https://www.mboxdrive.com/Sophie_-_Faceshopping_61094124.mp3"
    },
    {
      title:"Perfect",
      artist:"Unkwown",
      img_src:"/images/Perfect.png",
      src:"https://www.mboxdrive.com/Perfect(PagalWorld).mp3"
    },
    {
      title:"Barbaadiyan",
      artist:"Nikhita & Sachet",
      img_src:"/images/Barbaadiyyan.png",
      src:"https://www.mboxdrive.com/Barbaadiyan(PagalWorld.com.se).mp3"
    }
  ])

  const [currentSongIdx,setCurrentSongIdx]=useState(0);
  const [nextSongIdx,setNextSongIdx]=useState(0);
  
  useEffect(() => {
     setNextSongIdx(()=>{
      if(currentSongIdx+1>songs.length-1){
        return 0;
      }else{
        return currentSongIdx+1;
      }
     })
  }, [currentSongIdx,songs.length])



  return (
    <div className="App">
     <Player
        currentSongIdx={currentSongIdx}
        setCurrentSongIdx={setCurrentSongIdx}
        nextSongIdx={nextSongIdx}
        songs={songs}

     />
    </div>
  );
}

export default App;
