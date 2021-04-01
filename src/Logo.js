import React from "react";
import {useHistory} from "react-router-dom"


function Logo() {
    const history = useHistory()
    
    return (
        <div>
            <h1 className="logo" onClick={() => history.push('/')}>Logo</h1>
        </div>
    );
}

export default Logo;