function Skills() {

    return (

        <>
            <section id="skills">
                <h2> MY SKILLS</h2>
                <div className="main_container">
                    <div className="skill_container_out">
                        <div className="heading"><h3>LANGUAGES</h3></div>


                        <div className="skill_box">
                            <div className="skill">
                                <div className="spans">
                                    <span>HTML</span> <span>90%</span>
                                </div>
                                <div className="bar-box">
                                    <div className="bar" style={{ "--my-width": "90%" }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="spans">
                                    <span>CSS</span> <span>75%</span>
                                </div>
                                <div className="bar-box">
                                    <div className="bar" style={{ "--my-width": "75%" }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="spans">
                                    <span>JS</span> <span>60%</span>
                                </div>
                                <div className="bar-box">
                                    <div className="bar" style={{ "--my-width": "60%" }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="spans">
                                    <span>C</span> <span>70%</span>
                                </div>
                                <div className="bar-box">
                                    <div className="bar" style={{ "--my-width": "70%" }}></div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="spans">
                                    <span>C++</span> <span>75%</span>
                                </div>
                                <div className="bar-box">
                                    <div className="bar" style={{ "--my-width": "75%" }}></div>
                                </div>
                            </div>
                                                        <div className="skill">
                                <div className="spans">
                                    <span>PYTHON</span> <span>40%</span>
                                </div>
                                <div className="bar-box">
                                    <div className="bar"style={{"--my-width":"40%"}}></div>
                                </div>
                            </div>





                        </div>
                    </div>
                    <div className="skill_container_out">
                        <div className="heading"><h3>FRAMEWORKS</h3></div>

                        <div className="skill_box">

                            <div className="skill">TAILWIND</div>
                            <div className="skill">EXPRESS.JS</div>
                            <div className="skill">VUE.JS</div>
                            <div className="skill">REACT.JS</div>
                            <div className="skill">ANGULAR</div>
                            <div className="skill">DJANGO</div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    );
}
export default Skills