import './Styles/Contactme.css'
import ShinyText from './Components/ShinyText.jsx';
import { LuMessageSquareMore } from "react-icons/lu";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MailIcon } from "@animateicons/react/lucide";
import { PhoneCallIcon } from "@animateicons/react/lucide";
import { MapPinIcon } from "@animateicons/react/lucide";
import { UserPlusIcon } from "@animateicons/react/lucide";
import { RocketIcon } from "@animateicons/react/lucide";





function Contactme() {
    return (
        <>
            <section id="contactme">
                <div className="headings">
                    <span className='head'><ShinyText className='cm1' text="CONTACT " color='#deff0a'
                        delay={0.5}
                    />
                        <ShinyText className='cm1' text="ME" color='white'
                            delay={0.5} /></span>

                    <span>LET'S CONNECT AND CREATE SOMETHING AMAZING TOGETHER</span>
                </div>
                <div className="cm-main-box">
                    <div className="b1">
                        <div className='cm2'><LuMessageSquareMore size={30} color='#deff0a' /><h3>SEND ME A MESSEGE</h3></div>
                        <div className='inp-box'>
                            <input type="text" placeholder='Your Name' />
                            <input type="email" placeholder='Your Email' />
                        </div>

                        <textarea placeholder='Your Message' id=""></textarea>

                        <button className='cmbtn'>SEND MESSAGE <IoPaperPlaneOutline size={24} /></button>
                    </div>







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
                            <div className="icon-circle"></div>
                            <div className="icon-circle"></div>
                            <div className="icon-circle"></div>
                            <div className="icon-circle"></div>
                        </div>

                    </div>
                </div>


            </section>

        </>
    );
}
export default Contactme