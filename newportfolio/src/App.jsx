import Navbar from './Navbar.jsx'
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contactme from './Contactme.jsx';
import heroimg from './assets/hrimage.png';
import SideRays from './Components/SideRays.jsx';
import ShinyText from './Components/ShinyText.jsx';
import SplitText from "./Components/SplitText";


function App() {

  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

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
          <div className="mytext">

            <div className="myname"><ShinyText text="MD YASIN REZA"
              className='ogname' color='#93B1A6' speed={2} /></div>

            <div className="dev-title"><ShinyText text="Web Developer |Programmer |Learner"
              className='devtext' color='#93B1A6' speed={2.2} /></div>

            <div className="bio">
            

              
            </div>
            
          </div>
          <div className="mainimg">
            <img src={heroimg} alt="pfp" />
          </div>
        </div>

      </div>

      <About />
      <Skills />
      <Projects />
      <Contactme />
    </>



  );
}
export default App