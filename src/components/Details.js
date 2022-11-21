//import react from "react";

 const Details=(props)=>{
    return(
        <div className="details">
           <div className="details_img">
            <img src={props.song.img_src} alt=""/>
           </div>
           <h3 className="details_title">{props.song.title}</h3>
           <h6 className="details_artist">{props.song.artist}</h6>
        </div>
    )
};
export default Details;
