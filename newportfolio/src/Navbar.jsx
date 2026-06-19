import ShinyText from './Components/ShinyText.jsx';
function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="heading"><ShinyText text="MD YASIN REZA" color='#c5e113d5' /></div>
                <div className="link_container">
                    <a href="#home">HOME</a>
                
                    <a href="#MYSkill">SKILLS</a>
                    <a href="#myprojects">PROJECTS</a>
                    <a href="#contactme">CONTACT ME</a>

                </div>
            </nav>

        </>
    );
}
export default Navbar