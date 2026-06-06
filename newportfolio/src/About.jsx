import pfp from './assets/pfp.jpg'
function About() {
    return (
        <>
            <section id="about">
                <h2>ABOUT ME</h2>
                <div id="main-info">
                    <div className="data">Hi, I’m <strong>Md Yasin Reza</strong>, a Computer Science Engineering student at <strong>Asansol Engineering College
                    </strong>I’m passionate about building clean, user-friendly web experiences and continuously learning new
                        technologies in the field of web development. Beyond coding, I’m a fitness enthusiast who enjoys
                        pushing limits both in the gym and on the field. I actively follow and participate in <strong>sports</strong> and <strong>esports</strong>,
                        finding excitement in both physical and digital arenas. These hobbies keep me disciplined, competitive,
                        and motivated....Whether it's developing a responsive website or strategizing in an esports match, I love
                        challenges that help me.
                        Let’s connect and build something awesome!
                    </div>
                    <div className="picture"><img src={pfp} alt="my-pic" /></div>
                </div>
            </section>
        </>
    );
}
export default About