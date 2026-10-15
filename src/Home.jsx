
import { HugeiconsIcon } from '@hugeicons/react';
import { AlignCenter, VisualStudioCodeIcon } from '@hugeicons/core-free-icons';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { WorkAlertIcon } from '@hugeicons/core-free-icons';
import { BoxIcon } from '@hugeicons/core-free-icons';
import { User03Icon } from '@hugeicons/core-free-icons';
import AnimatedContent from './Components/AnimatedContent';
import herome from '../src/assets/heroMe.png'

import WarpText from './Components/WarpText.jsx';
import DotField from './Components/DotField';


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
        <DotField
          dotRadius={1.3}
          dotSpacing={14}
          bulgeStrength={40}
          glowRadius={160}

          waveAmplitude={1}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#ececf2"
          gradientTo="#B497CF"
          glowColor="#f8f8f900"
        />
      </div>


      <div className='myname'>

        <WarpText
          className='nametext'
          text="YA SIN"
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