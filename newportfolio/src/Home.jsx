
import { HugeiconsIcon } from '@hugeicons/react';
import { VisualStudioCodeIcon } from '@hugeicons/core-free-icons';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { WorkAlertIcon } from '@hugeicons/core-free-icons';
import { BoxIcon } from '@hugeicons/core-free-icons'
import { User03Icon } from '@hugeicons/core-free-icons';


function Home() {
  return (

    <section id='home'>

      <div className="hero-content">
        <span id='t1' className='s1'>/// HELLO, WELCOME TO MY PORTFOLIO</span>
        <span id='t2' className='s2'>MD</span>
        <span id='t3' className='s2'>YASIN</span>
        <span id='t4' className='s2'>REZA</span>
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