import ShinyText from './Components/ShinyText.jsx';
function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="heading"><ShinyText text="MD YASIN REZA" /></div>
                <div className="link_container">
                    <a href="#home">HOME</a>
                    <a id="aboutlink" href="#about">ABOUT</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#myprojects">PROJECTS</a>
                    <a href="#contactme">CONTACT ME</a>

                </div>
            </nav>

        </>
    );
}
export default Navbar