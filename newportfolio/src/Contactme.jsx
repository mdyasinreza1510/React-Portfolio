import './Styles/Contactme.css'
import ShinyText from './Components/ShinyText.jsx';
import { LuMessageSquareMore } from "react-icons/lu";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MailIcon } from "@animateicons/react/lucide";


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
                                size={28}
                                duration={1}
                                color="#C7E113"/>

                        </div>
                        
                        </div>

                        
                    </div>
                </div>









                <div className="footer"></div>


            </section>

        </>
    );
}
export default Contactme