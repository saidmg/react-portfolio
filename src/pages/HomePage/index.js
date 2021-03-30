import React from 'react'
import './style.css'
import Logo from '../../images/said-logo.png'
import middlePic from '../../images/1-4_Homepage BG Graphic.png'

function HomePage() {
    return (
        <>
            <div>
                <img class='logoTop' src={Logo} alt="Said's logo"/>
            </div>
            <div class="fade-in"  >
                <img class='barIcon' src={middlePic} alt="HomePage's logo" />
                <h1 class="homeText">
                    Hey there! I'm Said and I can code your thoughts into user interfaces</h1>
            </div>
        </>
    )
}


export default HomePage;