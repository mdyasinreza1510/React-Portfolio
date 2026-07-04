import './Styles/Projects.css'
import { HugeiconsIcon } from '@hugeicons/react';
import ShinyText from './Components/ShinyText.jsx';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { VisualStudioCodeIcon } from '@hugeicons/core-free-icons';
import { BoxIcon } from '@hugeicons/core-free-icons'
import { FaExternalLinkAlt } from "react-icons/fa";
import aniv from './assets/aniv.png'
import bmi from './assets/bmi.png'
import cc from './assets/cc.png'
import LOGIN from './assets/LOGIN.png'
import rps from './assets/rps.png'
import tic from './assets/TTT.png'
import ElectricBorder from './Components/ElectricBorder.jsx'
import AnimatedContent from './Components/AnimatedContent'


function Projects() {
  return (
    <>
      <section id="myprojects">
        <div className="main-pro-cont">
          <div className="project-info">

            <AnimatedContent
              distance={200}
              direction="horizontal"
              reverse={true}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.4}
            > <span id="pr1">// MY WORKS</span> </AnimatedContent>



            <AnimatedContent
              distance={200}
              direction="horizontal"
              reverse={true}
              duration={2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
            > <span id="pr2"> <ShinyText className='PR2' text=" PROJECTS" color='#deff0a'
              delay={0.5} />
              </span>  </AnimatedContent>


            <span id="pr3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam obcaecati iure distinctio voluptate veritatis esse molestias mod</span>
            <button className="pagebutton ">DOWNLOAD CV <HugeiconsIcon icon={ArrowDown03Icon} className='iconss' size={20} color='#C7E113' strokeWidth={2.5} /></button>

            <div className="page-announce-p">
              <span className="pic"> <HugeiconsIcon icon={BoxIcon} color='#C7E113' size={45} /></span><span><h3>10+</h3>PROJECTS </span>
            </div>

            <div className="page-announce-p">
              <span className="pic"> <HugeiconsIcon icon={BoxIcon} color='#C7E113' size={45} /></span><span><h3>2+</h3>YEARS EXPEREINCE</span>
            </div>



          </div>


          <div className="project-box">
            <ElectricBorder
              color="#C7E113"
              speed={1.5}
              chaos={0.06}
              thickness={5}
              style={{ borderRadius: 12 }}>

              <div className="pr-box">
                <div className="pr-img" >
                  <img src={cc} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <span className='textspan'>CURRENCY CONVERTER<a className='pr-link' href="https://mdyasinreza1510.github.io/currency_converter/" target="_main"><FaExternalLinkAlt color='#C7E113' /> </a>
                  </span>
                  <span className='prlinkinfo'>A responsive Currency Converter that provides real-time exchange rates using a live API.</span>
                  <div className="techstack">
                    <span>HTML</span><span>CSS</span><span>JS</span>
                  </div>
                </div>

              </div>
            </ElectricBorder>










            <ElectricBorder
              color="#C7E113"
              speed={1.5}
              chaos={0.06}
              thickness={5}
              style={{ borderRadius: 12 }}>

              <div className="pr-box">
                <div className="pr-img" >
                  <img src={aniv} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <span className='textspan'>ANNIVERSARY WISHER<a className='pr-link' href="https://mdyasinreza1510.github.io/Wish_anniversary/" target="_main"><FaExternalLinkAlt color='#C7E113' /> </a>
                  </span>
                  <span className='prlinkinfo'>Celebrate every special moment with a beautifully designed Anniversary Wisher that delivers heartfelt wishes.</span>
                  <div className="techstack">
                    <span>HTML</span><span>CSS</span><span>JS</span>
                  </div>
                </div>

              </div>
            </ElectricBorder>








            <ElectricBorder
              color="#C7E113"
              speed={1.5}
              chaos={0.06}
              thickness={5}
              style={{ borderRadius: 12 }}>

              <div className="pr-box">
                <div className="pr-img" >
                  <img src={rps} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <span className='textspan'>ROCK-PAPER -SCISSOR<a className='pr-link' href="https://mdyasinreza1510.github.io/ROCK_PAPER_SCISSOR/" target="_main"><FaExternalLinkAlt color='#C7E113' /> </a>
                  </span>
                  <span className='prlinkinfo'>Enjoy the timeless Rock Paper Scissors game with an interactive neon-themed interface, real-time score tracking,</span>
                  <div className="techstack">
                    <span>HTML</span><span>CSS</span><span>JS</span>
                  </div>
                </div>

              </div>
            </ElectricBorder>








            <ElectricBorder
              color="#C7E113"
              speed={1.5}
              chaos={0.06}
              thickness={5}
              style={{ borderRadius: 12 }}>

              <div className="pr-box">
                <div className="pr-img" >
                  <img src={tic} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <span className='textspan'>TIC-TAC-TOE<a className='pr-link' href="https://mdyasinreza1510.github.io/TIC-TAC-TOE/" target="_main"><FaExternalLinkAlt color='#C7E113' /> </a>
                  </span>
                  <span className='prlinkinfo'>A classic Tic Tac Toe game reimagined with a sleek modern interface, smooth gameplay, and instant win detection.</span>
                  <div className="techstack">
                    <span>HTML</span><span>CSS</span><span>JS</span>
                  </div>
                </div>

              </div>
            </ElectricBorder>











            <ElectricBorder
              color="#C7E113"
              speed={1.5}
              chaos={0.06}
              thickness={5}
              style={{ borderRadius: 12 }}>

              <div className="pr-box">
                <div className="pr-img" >
                  <img src={bmi} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <span className='textspan'>BMI-CALCULATOR<a className='pr-link' href="https://mdyasinreza1510.github.io/BMI-CALCULATOR/" target="_main"><FaExternalLinkAlt color='#C7E113' /> </a>
                  </span>
                  <span className='prlinkinfo'>A modern BMI Calculator that instantly measures your Body Mass Index using height and weight inputs.It provides accurate health</span>
                  <div className="techstack">
                    <span>HTML</span><span>CSS</span><span>JS</span>
                  </div>
                </div>

              </div>
            </ElectricBorder>










            <ElectricBorder
              color="#C7E113"
              speed={1.5}
              chaos={0.06}
              thickness={5}
              style={{ borderRadius: 12 }}>

              <div className="pr-box">
                <div className="pr-img" >
                  <img src={LOGIN} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <span className='textspan'>LOGIN PAGE (DEMO)<a className='pr-link' href="https://mdyasinreza1510.github.io/LOGIN_PAGE/" target="_main"><FaExternalLinkAlt color='#C7E113' /> </a>
                  </span>
                  <span className='prlinkinfo'>A sleek and responsive authentication interface showcasing modern frontend design principles with form validation,</span>
                  <div className="techstack">
                    <span>HTML</span><span>CSS</span><span>JS</span>
                  </div>
                </div>

              </div>
            </ElectricBorder>




          </div>


        </div>

      </section>

    </>
  );
}
export default Projects