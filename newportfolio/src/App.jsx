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
          <span id='t1' className='s1'>/// HELLO WELCOME TO MY PORTFOLIO</span>
          <span id='t2' className='s2'>I BUILD</span>
          <span id='t3' className='s2'>DIGITAL</span>
          <span id='t4' className='s2'>EXPERIENCES</span>
          <span id='t5' className='s3'>HELLO FELLAS I AM YASIN YOUR FRIEND Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel dolore nihil dicta</span>


          <div className="herobutton">
            <button className='hbtn'>My Work</button>
            <button className='hbtn'>Download CV</button>
          </div>


        </div>

        <div className="minihero">

        </div>

      </div>


      <Skill />
      <Projects />
      <Contactme />
    </>



  );
}
export default App