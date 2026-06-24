
import { HugeiconsIcon } from '@hugeicons/react';
import ShinyText from './Components/ShinyText.jsx';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { VisualStudioCodeIcon } from '@hugeicons/core-free-icons';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import './Styles/Skills.css'


function Skills() {
  return (
    <section id="MYSkill">
      <div className="skill-main-box">
        <div className="skill-info">

          <span id="sk1">// MY EXPERTIES</span>
          <span id="sk2"> <ShinyText className='SK2' text=" SKILLS" color='#c5e113d5' 
          style={{fontFamily: "Black Ops One"}}  /></span>
          <span id="sk3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam obcaecati iure distinctio voluptate veritatis esse molestias mod</span>
          <button className="pagebutton ">DOWNLOAD CV <HugeiconsIcon icon={ArrowDown03Icon} className='iconss' size={20} color='#C7E113' strokeWidth={2.5} /></button>

          <div className="page-announce">
            <span className="ic"> <HugeiconsIcon icon={VisualStudioCodeIcon} color='#C7E113' size={45} /></span><span><h3>2+</h3>YEARS EXPEREINCE</span>
          </div>



        </div>
        <div className="true-skills">
          <div className="my-skill-text">// TECHNICAL SKILLS</div>
          <div className="skill-out-box">


            <div className="skill">

              <div className="box1">
                <FaHtml5 size={50} color='#C7E113' />
                <span><h3>HTML</h3> 85%</span>
              </div>

              <div className="box2">
                <div className="bar-box">
                  <div className="bar"style={{"--width":"85%"}} ></div>
                </div>
                <span>85%</span>
              </div>
            </div>

            <div className="skill">

              <div className="box1">
                <FaCss3Alt size={50} color='#C7E113' />
                <span><h3>CSS</h3> 73%</span>
              </div>

              <div className="box2">
                <div className="bar-box">
                  <div className="bar" style={{"--width":"73%"}}></div>
                </div>
                <span>73%</span>
              </div>
            </div>

            <div className="skill">

              <div className="box1">
                <FaJsSquare size={50} color='#C7E113' />
                <span><h3>JS</h3> 60%</span>
              </div>

              <div className="box2">
                <div className="bar-box">
                  <div className="bar" style={{"--width":"60%"}}></div>
                </div>
                <span>60%</span>
              </div>
            </div>


            <div className="skill">

              <div className="box1">
                <FaHtml5 size={50} color='#C7E113' />
                <span><h3>REACT</h3> 68%</span>
              </div>

              <div className="box2">
                <div className="bar-box">
                  <div className="bar" style={{"--width":"68%"}}></div>
                </div>
                <span>68%</span>
              </div>
            </div>


            <div className="skill">

              <div className="box1">
                <FaHtml5 size={50} color='#C7E113' />
                <span><h3>C</h3> 80%</span>
              </div>

              <div className="box2">
                <div className="bar-box">
                  <div className="bar"style={{"--width":"80%"}}></div>
                </div>
                <span>80%</span>
              </div>
            </div>


            <div className="skill">

              <div className="box1">
                <FaHtml5 size={50} color='#C7E113' />
                <span><h3>C++</h3> 75%</span>
              </div>

              <div className="box2">
                <div className="bar-box">
                  <div className="bar"style={{"--width":"75%"}}></div>
                </div>
                <span>75%</span>
              </div>
            </div>


            <div className="skill">

              <div className="box1">
                <FaPython size={50} color='#C7E113' />
                <span><h3>PYTHON</h3> 50%</span>
              </div>

              <div className="box2">
                <div className="bar-box">
                  <div className="bar" style={{"--width":"50%"}}></div>
                </div>
                <span>50%</span>
              </div>
            </div>

            <div className="skill">

              <div className="box1">
                <FaHtml5 size={50} color='#C7E113' />
                <span><h3>NODE</h3> 10%</span>
              </div>

              <div className="box2">
                <div className="bar-box">
                  <div className="bar" style={{"--width":"10%"}}></div>
                </div>
                <span>10%</span>
              </div>
            </div>


            <div className="skill">

              <div className="box1">
                <FaHtml5 size={50} color='#C7E113' />
                <span><h3>EXPRESS</h3> 5%</span>
              </div>

              <div className="box2">
                <div className="bar-box">
                  <div className="bar" style={{"--width":"5%"}}></div>
                </div>
                <span>5%</span>
              </div>
            </div>







          </div>
        </div>
      </div>




    </section>
  )
}
export default Skills