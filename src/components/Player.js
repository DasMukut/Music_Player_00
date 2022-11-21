import react,{useEffect, useRef, useState} from "react";
import Control from "./Control";
import Details from "./Details";

 const Player=(props)=>{
    const audioEl=useRef(null);
    const[isPlaying, setIsPlaying]=useState(false);

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    })
    const handleSkip=(forwards=true)=>{
        if(forwards){
            props.setCurrentSongIdx(()=>{
                let temp=props.currentSongIdx;
                temp++;
            
            if(temp>props.songs.length-1){
                temp=0;
            }
            return temp;
        })
    } else{
        props.setCurrentSongIdx(()=>{
            let temp=props.currentSongIdx;
            temp--;
            if(temp<0){
                temp=props.songs.length-1;
            }
            return temp;
        })
    }}
    return(
        <div className="player">
            <h4>Playing Now</h4>
            <Details 
              song={props.songs[props.currentSongIdx]}
            />

            <Control 
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              skipSong={handleSkip}
            />
            <audio className="player__audio"
               src={props.songs[props.currentSongIdx].src}
               ref={audioEl}
               controls
               type="mp3"/>
         

            <p>Next:<span>{props.songs[props.nextSongIdx].title} by 
             {" "}{ props.songs[props.nextSongIdx].artist}
            </span></p>
        </div>
    )
};
export default Player