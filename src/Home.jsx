
import { HugeiconsIcon } from '@hugeicons/react';
import { VisualStudioCodeIcon } from '@hugeicons/core-free-icons';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { WorkAlertIcon } from '@hugeicons/core-free-icons';
import { BoxIcon } from '@hugeicons/core-free-icons';
import { User03Icon } from '@hugeicons/core-free-icons';
import AnimatedContent from './Components/AnimatedContent';
import herome from '../src/assets/heroMe.png'


function Home() {

  function senderror(){
    alert("CV IS NOT AVAILABLE RIGHT NOW!!")
  }

  return (

    <section id='home'>

      {/* <div className="hero-content">

        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={true}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        > <span id='t1' className='s1'>/// HELLO, WELCOME TO MY PORTFOLIO</span></AnimatedContent>



        <AnimatedContent
          distance={300}
          direction="horizontal"
          reverse={true}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <span id='t2' className='s2'>MD</span>
        </AnimatedContent>


        <AnimatedContent
          distance={300}
          direction="horizontal"
          reverse={true}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.4}
        >
          <span id='t3' className='s2'>YASIN</span>
        </AnimatedContent>

        <AnimatedContent
          distance={300}
          direction="horizontal"
          reverse={true}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0.8}
        >
          <span id='t4' className='s2'>REZA</span>
        </AnimatedContent>

        <AnimatedContent
          id='t5'
          className='s3'
          distance={170}
          direction="vertical"
          reverse={false}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        > <span>Hi, I'm MD Yasin Reza, a passionate Frontend Developer and Computer Science student with a strong interest in creating modern and interactive web experiences. I enjoy turning ideas into responsive, user-friendly websites using HTML, CSS, JavaScript, and React.js. I believe in writing clean, efficient code and continuously learning new technologies to improve my skills. </span> </AnimatedContent>



        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          duration={2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={1.5}
        >
          <div className="herobutton">

            <button className='hbtn'>My Work<HugeiconsIcon className='iconss' icon={WorkAlertIcon} color='#C7E113' size={20} strokeWidth={2.5} /></button>



            <button onClick={senderror}
             className='hbtn'>Download CV <HugeiconsIcon icon={ArrowDown03Icon} className='iconss' size={20} color='#C7E113' strokeWidth={2.5}/></button>

          </div>
        </AnimatedContent>



      </div> */}

      <div className="hero-image-container">
        <img src={herome} alt="" />
      </div>

      <div className="minihero">
        <div className="miniwrapper">
          <HugeiconsIcon icon={VisualStudioCodeIcon} color='#C7E113' size={40} />
          <span><h3>2+</h3>YEARS EXP</span></div>
        <div className="miniwrapper">
          <HugeiconsIcon
            icon={BoxIcon}
            size={40}
            color="#C7E113"
            strokeWidth={1.5}
          />
          <span><h3>10+</h3>PROJECTS</span>
        </div>
        <div className="miniwrapper">
          <HugeiconsIcon
            icon={User03Icon}
            size={37}
            color="#C7E113"
            strokeWidth={1.5}
          />
          <span><h3>5+</h3>HAPPY CLIENTS</span>
        </div>


      </div>


    </section>



  );
}
export default Home