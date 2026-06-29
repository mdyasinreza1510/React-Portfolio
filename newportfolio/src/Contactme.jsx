import './Styles/Contactme.css'
import ShinyText from './Components/ShinyText.jsx';
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
                    <div className="b1"></div>
                    <div className="b2"></div>
                </div>
                <div className="footer"></div>


            </section>

        </>
    );
}
export default Contactme