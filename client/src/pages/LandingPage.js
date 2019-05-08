import React, {Fragment} from 'react';
import Logo from "./../img/logolarge.png"

function LandingPage() {
    return (
        <div className="body-splash">
            <img src={Logo}/>
            <hr/>
            <p>Wow it's great! It's our app!</p>
            <div>Made by Ogechi + Nick + Jaime + Izzy</div>
        </div>

    )
}

export default LandingPage;