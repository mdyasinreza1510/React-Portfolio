import { HugeiconsIcon } from '@hugeicons/react';
import { VisualStudioCodeIcon } from '@hugeicons/core-free-icons';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { WorkAlertIcon } from '@hugeicons/core-free-icons';
import Navbar from './Navbar.jsx'
import About from './About.jsx';
import Skill from './Skills.jsx';
import Projects from './Projects.jsx';
import Contactme from './Contactme.jsx';
import heroimg from './assets/herobg.png';
import SideRays from './Components/SideRays.jsx';
import ShinyText from './Components/ShinyText.jsx';
import TextType from './Components/TextType.jsx';

function App() {


  return (
    <>
      <Navbar />


      <div id='home' style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />




        <div className="hero-content">
          <span id='t1' className='s1'>/// HELLO, WELCOME TO MY PORTFOLIO</span>
          <span id='t2' className='s2'>I BUILD</span>
          <span id='t3' className='s2'>DIGITAL</span>
          <span id='t4' className='s2'>EXPERIENCES</span>
          <span id='t5' className='s3'>HELLO FELLAS I AM YASIN YOUR FRIEND Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel dolore nihil dicta</span>


          <div className="herobutton">
            <button className='hbtn'>My Work <HugeiconsIcon className='iconss' icon={WorkAlertIcon} color='#C7E113' size={20} strokeWidth={2.5} /></button>
            <button className='hbtn'>Download CV <HugeiconsIcon icon={ArrowDown03Icon} className='iconss' size={20} color='#C7E113' strokeWidth={2.5} /></button>
          </div>


        </div>

        <div className="minihero">
          <div className="miniwrapper">
             <HugeiconsIcon icon={VisualStudioCodeIcon} color='#C7E113' size={40} />
              <span><h3>2+</h3>YEARS EXP</span></div>
          <div className="miniwrapper">

          </div>
          <div className="miniwrapper"></div>
          <div className="miniwrapper"></div>

        </div>

      </div>


      <Skill />
      <Projects />
      <Contactme />
    </>



  );
}
export default App