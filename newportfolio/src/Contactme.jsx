import './Styles/Contactme.css'
import ShinyText from './Components/ShinyText.jsx';
import { LuMessageSquareMore } from "react-icons/lu";
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
                        <div>
                            <input type="text" placeholder='Your Name' />
                            <input type="email" placeholder='Your Email' />
                        </div>

                        <div>
                            <textarea placeholder='Your messege' id=""></textarea>
                        </div>
                        <button>SEND MESSEGE</button>
                    </div>







                    <div className="b2"></div>
                </div>









                <div className="footer"></div>


            </section>

        </>
    );
}
export default Contactme