import React from "react";
import {useHistory} from "react-router-dom"



function Home() {
    const history = useHistory()
    
    return (
        <div>
            <div className="home-btns">
                <br/>
                <button className="se-btn" onClick={() => history.push('/software-engineer')}>SOFTWARE ENGINEER</button>
                <button className="filmmaker-btn" onClick={() => history.push('/filmmaker')}>FILMMAKER</button>
                <br/> 
            </div>
            <div className="click-above">
                <p>⬆ CLICK ABOVE TO SEE SKILL-SETS ⬆ </p>
            </div>
        </div>
    );
}

export default Home;