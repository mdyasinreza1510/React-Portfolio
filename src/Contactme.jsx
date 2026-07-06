import './Styles/Contactme.css'
import ShinyText from './Components/ShinyText.jsx';
import { LuMessageSquareMore } from "react-icons/lu";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MailIcon } from "@animateicons/react/lucide";
import { PhoneCallIcon } from "@animateicons/react/lucide";
import { MapPinIcon } from "@animateicons/react/lucide";
import { UserPlusIcon } from "@animateicons/react/lucide";
import { RocketIcon } from "@animateicons/react/lucide";
import { GithubIcon } from "@animateicons/react/lucide";
import { LinkedinIcon } from "@animateicons/react/lucide";
import { InstagramIcon } from "@animateicons/react/lucide";
import { TwitterIcon } from "@animateicons/react/lucide";
import AnimatedContent from './Components/AnimatedContent'
import { useRef } from 'react';


function Contactme() {
    const clearname= useRef(null);
    const clearemail= useRef(null);
    const clearmsg= useRef(null);

    function handleinputs(){
        clearname.current.value=" ";
        clearemail.current.value=" ";
        clearmsg.current.value=" "
    }

    return (
        <>
            <section id="contactme">
                <div className="headings">



                    <span className='head'>
                        <AnimatedContent
                            distance={300}
                            direction="horizontal"
                            reverse={true}
                            duration={2.5}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}>

                            <ShinyText className='cm1' text="CONTACT " color='#deff0a'
                                delay={0.5}
                            />
                        </AnimatedContent>

                        <AnimatedContent
                            distance={300}
                            direction="horizontal"
                            reverse={false}
                            duration={2.5}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}><ShinyText className='cm1' text="ME" color='white'
                                delay={0.5} />

                        </AnimatedContent>
                    </span>



                    <AnimatedContent
                        distance={50}
                        direction="vertical"
                        reverse={false}
                        duration={2}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}>
                        <span>LET'S CONNECT AND CREATE SOMETHING AMAZING TOGETHER</span>  </AnimatedContent>

                </div>
                <div className="cm-main-box">

                    <AnimatedContent
                        className="b1"
                        distance={300}
                        direction="horizontal"
                        reverse={true}
                        duration={2}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0.5}>
                        <div>
                            <div className='cm2'><LuMessageSquareMore size={30} color='#deff0a' /><h3>SEND ME A MESSEGE</h3></div>
                            <div className='inp-box'>
                                <input ref={clearname} type="text" placeholder='Your Name' />
                                <input ref={clearemail} type="email" placeholder='Your Email' />
                            </div>

                            <textarea ref={clearmsg} placeholder='Your Message'></textarea>

                            <button onClick={handleinputs} className='cmbtn'>SEND MESSAGE <IoPaperPlaneOutline size={24} /></button>
                        </div> </AnimatedContent>







                    <AnimatedContent
                        id="B2"
                        distance={300}
                        direction="horizontal"
                        reverse={false}
                        duration={2}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0.5}>
                        <div className="b2">
                            <h3>GET IN TOUCH</h3>
                            <div className="main-cont-via">

                                <div className="contact-via">
                                    <MailIcon className='cm-icon'
                                        size={40}
                                        duration={1}
                                        color="#C7E113" />
                                    <span><h4>EMAIL</h4>aec.cse.2024mdyasinreza@gmail.com</span>

                                </div>

                                <div className="contact-via">
                                    <PhoneCallIcon className='cm-icon'
                                        size={40}
                                        duration={1}
                                        color="#C7E113" />
                                    <span><h4>PHONE</h4>+91 7074307273</span>

                                </div>

                                <div className="contact-via">
                                    <UserPlusIcon className='cm-icon'
                                        size={40}
                                        duration={1}
                                        color="#C7E113" />
                                    <span><h4>AVAILABILITY</h4>MON-FRI  : 9AM-6PM</span>

                                </div>

                                <div className="contact-via">
                                    <MapPinIcon className='cm-icon'
                                        size={40}
                                        duration={1.5}
                                        color="#C7E113" />
                                    <span><h4>LOCATION</h4>ASANSOL , WEST BENGAL</span>

                                </div>



                            </div>


                        </div>
                    </AnimatedContent>

                </div>








                
                        
                    <div className="footer">
                    <div id='ic1' className="social-info">
                        <RocketIcon
                            size={55}
                            duration={1}
                            color="#C7E113"
                        />
                        <span><h3 style={{ color: "#C7E113" }}>LET'S WORK TOGATHER</h3>I am always open to discussing new projects, creative ideas or opportunities to be part of your vision</span>
                    </div>
                    <div className="divider"></div>

                    <div id='ic2' className="social-info">
                        <h3 style={{ color: "#C7E113" }}>FOLLOW ME</h3>
                        <div className="social-container">
                            <div className="icon-circle">
                                <a href="https://github.com/mdyasinreza1510" target='_main'><GithubIcon
                                    size={35}
                                    duration={1}
                                    color="#C7E113"
                                /></a> </div>


                            <div className="icon-circle">
                                <a href="https://www.linkedin.com/in/md-yasin-reza-a5a12b353/
                               " target='_main'><LinkedinIcon
                                        size={35}
                                        duration={1}
                                        color="#C7E113"
                                    /> </a>
                            </div>
                            <div className="icon-circle">
                                <InstagramIcon
                                    size={35}
                                    duration={1}
                                    color="#C7E113"
                                />
                            </div>
                            <div className="icon-circle">
                                <TwitterIcon
                                    size={35}
                                    duration={1}
                                    color="#C7E113"
                                />
                            </div>
                        </div>

                    </div>
                </div>
    
                


            </section>

        </>
    );
}
export default Contactme