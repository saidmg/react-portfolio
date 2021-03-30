import React from 'react'
import './style.css'
import Logo1 from '../../images/said-logo.png'
import Logo from '../../images/1-4_Bout Page Graphic.png'
import buttonPic2 from '../../images/resume-btn1.png'
import buttonPic from '../../images/resume-btn2.png'
import resume from '../../images/resume/Resume - Said Mghabghab.pdf'
import '../../fonts/stylesheet.css'
function About() {
  return (
    <>
      <div>
        <img class="logoSize logoTop" src={Logo1} alt="Said's logo " />
      </div>
      <div class="container fade-in pushDown" >
        <div class="row" style={{ marginLeft: '10%', }}>
          <div class="col-lg-4 col-sm-12 phoneLogo" ><img src={Logo} class="circleIcon" alt="Said's logo"  />
            <a class="resume" target="_blank" rel="noreferrer" href={resume}>
              <img class='resumeIcon' src={buttonPic}  onMouseOver={e => (e.currentTarget.src = buttonPic2)}
              onMouseOut={e => (e.currentTarget.src = buttonPic)}
             alt="my resume"/>
            </a>
          </div>
          <div class="col"><div class ="textBorder topMarg rightMarg">
            <h5 class='mobileFont' style={{ color: 'white' }}><span  style={{ color: 'lightgrey',fontFamily: 'gilroylight'  }}>Graduated as a computer engineer (2019).</span></h5></div>
            <div class ="textBorder rightMarg" style={{ marginTop: '6%' }}>
              <h5 class='mobileFont' style={{ color: 'white',fontFamily: 'gilroysemibold' }}><span style={{ color: 'lightgrey',fontFamily: 'gilroylight' }}>Experienced in:</span> PHP, SQL, HTML, CSS, Javascript, JQuery, Python, C#, Scrum, WAMP, GITHub, C++.
            </h5></div>
            <div style={{ marginTop: '10%' }}>
              <h5 class='mobileFont rightMarg' style={{ color: 'lightgrey',fontFamily: 'gilroylight'  }}>Being a Scout for 10 years provided me with a variety of life skills. Not only has it taught me
            to be responsible nad persistent, but it also enhanced my teamwork and leadership skills.</h5></div>
            <div style={{ marginTop: '5%' }}>
              <h5 class='mobileFont rightMarg' style={{ color: 'lightgrey',fontFamily: 'gilroythin' }}>Fluent in English, French, and Arabic.</h5></div>
          </div>
        </div>
      </div>
    </>
  )
}


export default About;