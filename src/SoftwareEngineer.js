import React from "react";
import {useHistory} from "react-router-dom"


function SoftwareEngineer() {
    
    return (
        <div >
            <h4 className="se-projects-header">PROJECTS</h4>
            <div className="se-projects">
                <div className="se-rocket-fuel" >
                    <p>ROCKET FUEL</p>
                    <iframe
                        className="se-rocket-fuel-website" 
                        src="https://rocket-fuel.netlify.app/cruise" 
                        width="400" 
                        height="300" 
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen
                    >
                    </iframe>
                    <br></br>
                    <a className="se-rocket-fuel-link" href={"https://rocket-fuel.netlify.app/"}>ttps://rocket-fuel.netlify.app/</a>
                    <br/>
                    <br/>   
                </div>
                <div className="se-yourseum" >
                    <p>YOURSEUM</p>
                    <iframe
                        className="se-yourseum-website" 
                        src="http://yourseum.netlify.app/" 
                        width="400" 
                        height="300"  
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen
                    >
                    </iframe>
                    <br></br>
                    <a className="se-yourseum-link" href={"http://yourseum.netlify.app/"}>http://yourseum.netlify.app/</a>
                    <br/>
                    <br/>   
                </div>
            </div>      
        </div>
        
    );
}

export default SoftwareEngineer;