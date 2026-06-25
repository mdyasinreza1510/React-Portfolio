import './Styles/Projects.css'
import { HugeiconsIcon } from '@hugeicons/react';
import ShinyText from './Components/ShinyText.jsx';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { VisualStudioCodeIcon } from '@hugeicons/core-free-icons';
import { BoxIcon } from '@hugeicons/core-free-icons'
import aniv from './assets/aniv.png'
import bmi from './assets/bmi.png'
import cc from './assets/cc.png'
import LOGIN from './assets/LOGIN.png'
import rps from './assets/rps.png'
import tic from './assets/tic.png'
import ElectricBorder from './Components/ElectricBorder.jsx'


function Projects() {
  return (
    <>
      <section id="myprojects">
        <div className="main-pro-cont">
          <div className="project-info">

            <span id="pr1">// MY WORKS</span>
            <span id="pr2"> <ShinyText className='PR2' text=" PROJECTS" color='#deff0a'
              style={{ fontFamily: "Black Ops One" }} delay={0.5} />
            </span>

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
                  <h3>CURRENCY CONVERTER</h3>
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
                  <img src={cc} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <h3>CURRENCY CONVERTER</h3>
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
                  <img src={cc} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <h3>CURRENCY CONVERTER</h3>
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
                  <img src={cc} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <h3>CURRENCY CONVERTER</h3>
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
                  <img src={cc} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <h3>CURRENCY CONVERTER</h3>
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
                  <img src={cc} alt="currency converter" />
                </div>
                <div className="pr-info">
                  <h3>CURRENCY CONVERTER</h3>
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