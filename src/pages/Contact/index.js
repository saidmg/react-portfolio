import React from 'react';
import Logo from '../../images/said-logo.png'
import Bar from '../../images/long-bar.png'
import Phone from '../../images/phone.png'
import linkedin from '../../images/logos/Linkedin-logo.png'
import Github from '../../images/logos/Github-logo.png'
import Gmail from '../../images/logos/Gmail-logo.png'
import './style.css'

function Contact() {
    return <>
        <div>
            <img class="logoTop" src={Logo} alt="Said's logo"  />
        </div>
        <div class= "container fade-in lowerOnPhone">
        <div class="row" style={{ marginLeft: '10%'}}>
            <div class="col-lg-1 col-sm-12">
            </div>
            <div class="col-6 ">
                <h1 class="endingText">Looking forward to hearing from you!</h1>
                <div >
                <img class="phoneImage display1" src={Phone} alt="Said's phone" />
                <a  target="_blank" rel="noreferrer" href="https://github.com/saidmg/" >
                    <img class="socialMediaIcon" src={Github} alt="Said's phone" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/said-mghabghab/">
                    <img class="socialMediaIcon" src={linkedin} alt="Said's phone" /></a>
                <a target="_blank" rel="noreferrer" href="mailto: saidmghabghab@gmail.com">
                    <img class="socialMediaIcon" src={Gmail} alt="Said's phone"  /></a>
                    </div>
            </div>
            <div class="col spacee"><div>
                <img class="barIcon2" src={Bar} alt="long bar"/>
               
            </div>
            </div>
        </div>
        </div>
    </>
}

export default Contact;