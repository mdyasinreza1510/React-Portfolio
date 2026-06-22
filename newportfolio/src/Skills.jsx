import { section } from "motion/react-client";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { VisualStudioCodeIcon } from '@hugeicons/core-free-icons';

function Skills() {
  return (
    <section id="MYSkill">
      <div className="skill-main-box">
        <div className="skill-info">
          <span id='sk1' className='skl1'>// MY EXPERTIES</span>
          <span id='sk2' className='s2'>SKILLS</span>
          <span id='sk3' className='s3'>HELLO FELLAS I AM YASIN YOUR FRIEND Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel dolore nihil dicta</span>
          <button id="skbtn">DOWNLOAD CV</button>
        <div className="indvdl">
          <HugeiconsIcon icon={VisualStudioCodeIcon} color='#C7E113' size={40} />
          <span><h3>2+</h3>YEARS EXP</span></div>
        
                      
        </div>
        <div className="true-skills"></div>
      </div>




    </section>
  )
}
export default Skills