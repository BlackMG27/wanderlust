import React from 'react';
import Logo from "./../img/logolarge.png"

function LandingPage() {
    return (
        <div className="body-splash">
            <div>
                <img className="header__logo" src={Logo} alt="Wanderlust Logo"/>
            </div>

            <hr className="header__rule"/>
            <p className="header__copy">A study abroad semester can be an incredible
                experience. We want to make finding that incredible experience easier.
                Wanderlust lets you travel the globe with just the click of the mouse. Use our
                service to find real student’s reviews of study abroad trips in the countries
                that you want to visit. Take a trip you trust with Wanderlust.</p>
            <p class="contributors">Made by Ogechi + Nick + Jaime + Izzy</p>
            <p className="header__caution">**Best Viewed in Landscape**</p>
        </div>

    )
}

export default LandingPage;