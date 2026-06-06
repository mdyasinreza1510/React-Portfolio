import Navbar from './Navbar.jsx'
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contactme from './Contactme.jsx';
import LightRays from './Components/LightRays.jsx';

function App() {

  return (
    <>
      <Navbar />

      <div id="home" style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <LightRays
          raysOrigin="top-left"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.7}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
              <LightRays
          raysOrigin="top-right"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.7}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />

     
        
           <div className="hero-content">
    <h1>MD YASIN REZA</h1>
    <p>Frontend Developer | Programmer | Learner</p>
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