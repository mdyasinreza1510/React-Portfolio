import { section } from "motion/react-client";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown03Icon } from '@hugeicons/core-free-icons';
import { VisualStudioCodeIcon } from '@hugeicons/core-free-icons';

function Skills() {
  return (
    <section id="MYSkill">
      <div className="skill-main-box">
        <div className="skill-info">

          <span id="sk1">// MY EXPERTIES</span>
          <span id="sk2"> SKILLS</span>
          <span id="sk3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam obcaecati iure distinctio voluptate veritatis esse molestias mod</span>
          <button className="pagebutton ">DOWNLOAD CV <HugeiconsIcon icon={ArrowDown03Icon} className='iconss' size={20} color='#C7E113' strokeWidth={2.5} /></button>

          <div className="page-announce">
            <span className="ic"> <HugeiconsIcon icon={VisualStudioCodeIcon} color='#C7E113' size={45} /></span><span><h3>2+</h3>YEARS EXPEREINCE</span>
          </div>



        </div>
        <div className="true-skills">
          <div className="my-skill-text">// TECHNICAL SKILLS</div>
          <div className="skill-out-box">
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
          </div>
        </div>
      </div>




    </section>
  )
}
export default Skills