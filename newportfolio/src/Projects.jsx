import aniv from './assets/aniv.png'
import bmi from './assets/bmi.png'
import cc from './assets/cc.png'
import LOGIN from './assets/LOGIN.png'
import rps from './assets/rps.png'
import tic from './assets/tic.png'

function Projects(){
    return(
        <>
        <section id="myprojects">
    <h2>MY PROJECTS</h2>
    <div className="project-conatiner" >

        <div className="project-content">
          <img className="pro-img" src={cc} alt="currency-converter"/>
        <a href="https://mdyasinreza1510.github.io/currency_converter/"target="_blank">ONLINE CURRENCY CONVERTER</a>
        </div>
        

        <div className="project-content">
          <img className="pro-img" src={aniv} alt="anniversary-wisher"/>
        <a href="https://mdyasinreza1510.github.io/Wish_anniversary/"target="_blank">ANNIVERSARY WISH (DEMO)</a>
        </div>


                <div className="project-content">
          <img className="pro-img" src={rps} alt="rock-paper-scissor"/>
        <a href="https://mdyasinreza1510.github.io/ROCK_PAPER_SCISSOR/"target="_blank">ONLINE ROCK PAPER SCISSOR</a>
        </div>


        
        <div className="project-content">
          <img className="pro-img" src={tic} alt="tic-tac-toe"/>
        <a href="https://mdyasinreza1510.github.io/TIC-TAC-TOE/"target="_blank">ONLINE TIC-TAC-TOE GAME</a>
        </div>
        
        
        <div className="project-content">
        <img className="pro-img" src={bmi} alt="BMICAL"/>
       <a href="https://mdyasinreza1510.github.io/BMI-CALCULATOR/"target="_blank">ONLINE BMI CALCULATOR</a>
        </div>
        
        
        <div className="project-content">
        <img className="pro-img" src={LOGIN} alt="LOGINPAGE"/>
        <a href="https://mdyasinreza1510.github.io/LOGIN_PAGE/"target="_blank">ONLINE LOGIN PAGE DEMO</a>
        </div>
         
    </div>

 </section>
        
        </>
    );
} 
export default Projects