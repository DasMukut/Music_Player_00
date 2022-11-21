import react from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faForward, faPlay, faPause} from "@fortawesome/free-solid-svg-icons"
 const Control=(props)=>{
    return(
        <div className="control">
           <button className="control_skipBtn" onClick={()=>props.skipSong(false)
           }>
            <FontAwesomeIcon icon={faBackward}/>
           </button>

           <button className="control_playbutton" onClick={()=>props.setIsPlaying(!props.isPlaying)}>
               <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay}/> 
           </button>

           <button className="control_skipBtn" onClick={()=>props.skipSong()}>
                <FontAwesomeIcon icon={faForward}/>
           </button>
        </div>
    )
};
export default Control;