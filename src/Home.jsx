
import { HugeiconsIcon } from '@hugeicons/react';
import { AlignCenter, VisualStudioCodeIcon } from '@hugeicons/core-free-icons';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { WorkAlertIcon } from '@hugeicons/core-free-icons';
import { BoxIcon } from '@hugeicons/core-free-icons';
import { User03Icon } from '@hugeicons/core-free-icons';
import AnimatedContent from './Components/AnimatedContent';
import herome from '../src/assets/heroMe.png'
import WarpText from './Components/WarpText.jsx';
import PatternWave from './Components/PatternWave';


import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
}






function Home() {




  function senderror() {
    alert("CV IS NOT AVAILABLE RIGHT NOW!!")
  }

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (

    <section id='home'>

      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <PatternWave
          preset="silk"
          color="#ffffff"
          backgroundColor="#0a0a0a"
          fade="edges"
          interactive={true}
          cursorSize={50}
          cursorStrength={0.3}
          pattern="dot"
          wave="silk"
          spacing={9}
          markSize={0.95}
          depth={0.95}
          light={0}
          shine={0.8}
          contrast={1.2}
          speed={0.35}
          scale={1}
          direction={20}
          opacity={1}
          fadeSize={0.5}
          characters=".:-=+*#%@"
          intro
          paused={false}
        />
      </div>


      <div className='myname'>

        <WarpText
          className='nametext'
          text={isMobile ? "YASIN" : "YA SIN"}
          color="white"
          warpStrength={0.1}
          warpScale={1.7}
          speed={0.5}
          pointerInfluence={7}
          pointerStrength={1}
          refraction={0.018}
          ripple
          fontSize={isMobile ? 300 : 400}
          fontWeight={800}
          style={{
            height: isMobile ? "200px" : "400px",
            width: "100%",
            transform: isMobile ? "translate(0px,0px)" : "translate(45px,5px)",
          }}
          fontFamily="inherit"
          letterSpacing={isMobile ? 50 : 90} lineHeight={0.9}
        />
      </div>


      <div className="hero-image-container">
        <img className='hero-img' src={herome} alt="" />



      </div>


    </section>



  );
}
export default Home