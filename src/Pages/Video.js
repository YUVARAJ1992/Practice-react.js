import React, {useState} from "react";

const VideoPage = () => {

    const handleVideoClip = (event) =>{
        
    }


    return(
        <div>
            <h1>Videoclips Page</h1>
            <div>
                <label>Select your favorite pet video clips: </label>
                <input type="radio" onChange={handleVideoClip} name="videoclips" value="deer"/><label>deer</label>
                <input type="radio" onChange={handleVideoClip} name="videoclips" value="snail"/><label>snail</label>
                <input type="radio" onChange={handleVideoClip} name="videoclips" value="cat"/><label>cat</label>
                <input type="radio" onChange={handleVideoClip} name="videoclips" value="spider"/><label>spider</label>
            </div>
        </div>
    )
}

export default VideoPage;