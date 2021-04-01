import React from "react";


function Filmmaker() {
    
    return (
        <div>
            <br/>
            <br/>
            <iframe
                className="reel" 
                src="https://player.vimeo.com/video/375538495" 
                width="480" 
                height="260" 
                frameborder="0" 
                allow="autoplay; fullscreen" 
                allowfullscreen
            >
            </iframe>
            <div classname="video-btns">
                <br/>
                <button className="videos-btn">Featured Videos</button>
                <button className="videos-btn">Commercials</button>
                <button className="videos-btn">Music Videos</button>
                <button className="videos-btn">Dance Films</button>
                <button className="videos-btn">Film Trailers</button>
                <button className="videos-btn">Short Films</button>
                <button className="videos-btn">Experimental</button>
                <button className="videos-btn">Animation</button>
                <button className="videos-btn">Documentaries</button>
                <button className="videos-btn">Promos & Clips</button>
                <button className="videos-btn">Showreels</button>
                <button className="videos-btn">Behind the Scenes</button>
            </div>
        </div>
    );
}

export default Filmmaker;

