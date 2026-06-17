import Navbar from './Navbar.jsx'
import About from './About.jsx';
import Skill from './Skills.jsx';
import Projects from './Projects.jsx';
import Contactme from './Contactme.jsx';
import heroimg from './assets/hrimage.png';
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
          <div className="mytext">

            <div className="myname"><ShinyText text="MD YASIN REZA"
              className='ogname' color='#93B1A6' speed={2} /></div>

            <div className="dev-title"><ShinyText text="Web Developer |Programmer |Learner"
              className='devtext' color='#93B1A6' speed={2.2} /></div>

            <div className="bio">


              <TextType
                text={["Hi, I’m Md Yasin Reza, a Computer Science Engineering student at Asansol Engineering College I’m passionate about building clean, user-friendly web experiences and continuously learning new technologies in the field of web development. Beyond coding, I’m a fitness enthusiast who enjoys pushing limits both in the gym and on the field. I actively follow and participate in sports and esports, finding excitement in both physical and digital arenas. These hobbies keep me disciplined, competitive, and motivated....Whether it's developing a responsive website or strategizing in an esports match, I love challenges that help me. Let’s connect and build something awesome!"]}
                typingSpeed={20}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
               
                deletingSpeed={0}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
                loop={false}
              />
            </div>

          </div>
          <div className="mainimg">
            <img src={heroimg} alt="pfp" />
          </div>
        </div>

      </div>


      <Skill />
      <Projects />
      <Contactme />
    </>



  );
}
export default App