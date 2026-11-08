import React from "react";
import "./Styles/AboutSection.css";


const AboutSection = () => {
  return (
    <section className="about" id="about">
      {/* Heading */}
      <p className="about__label">01. ABOUT ME</p>
      <h2 className="about__title">
        GREAT POWER COMES WITH
        <br />
        GREAT<span className="about__title-accent">Responsibilities</span>
      </h2>

      <div className="about__grid">
        {/* Left column: photo and stats */}
        <div>
          <div className="about__photo-frame">
            <img className="about__photo" alt="Yasin Reza at his workstation" />
            <p className="about__photo-caption">Yasin Reza</p>
          </div>

          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">2+</span>
              <span className="about__stat-text">
                Years of
                <br />
                Experience
              </span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">10+</span>
              <span className="about__stat-text">
                Completed
                <br />
                Projects
              </span>
            </div>
            <div className="about__stat about__stat--location">
              Location:
              <br />
              Asansol, West Bengal
            </div>
          </div>
        </div>

        {/* Middle column: story and pillars */}
        <div>
          <h3 className="about__lead">
            A visual craftsman straddling the line between artistic intuition and engineering precision.
          </h3>
          <p className="about__body">
            Based in Asansol, West Bengal, I build digital experiences, brand identity, and interface
            systems that don't just look spectacular—they solve real-world problems. With years of
            testing limits across design and development, my goal is to bridge the gap between
            abstract creative vision and seamless interactive motion.
          </p>

          <div className="about__pillars">
            <div className="about__pillar">
              <div className="about__pillar-head">
                <span className="about__pillar-icon">✦</span>
                <h4 className="about__pillar-title">Aesthetic Precision</h4>
              </div>
              <p className="about__pillar-text">
                Every pixel, every micro-interaction has a role to play. Subdued elegance over noisy flash.
              </p>
            </div>

            <div className="about__pillar">
              <div className="about__pillar-head">
                <span className="about__pillar-icon">✶</span>
                <h4 className="about__pillar-title">Functional Delight</h4>
              </div>
              <p className="about__pillar-text">
                Interfaces must be felt, not just seen. Seamless systems that evoke instinct and flow.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: credentials sidebar */}
        <aside className="about__side">
          <div className="about__side-block">
            <h4 className="about__side-heading">The Credentials</h4>
            <p className="about__side-text about__side-text--gold">
              Graphic Design
              <br />
              B.C.A Candidate
            </p>
            <p className="about__side-text" style={{ marginTop: 14 }}>
              University Degree &amp;
              <br />
              Freelance Practitioner
            </p>
          </div>

          <div className="about__side-block">
            <h4 className="about__side-heading">Interests &amp; Trivia</h4>
            <div className="about__trivia-icons" aria-hidden="true">
              <span>🎥</span>
              <span>🎧</span>
              <span>📖</span>
            </div>
            <p className="about__side-text">
              Photography, Gaming,
              <br />
              Motion Capture, Music
            </p>
          </div>

        </aside>
      </div>
    </section>
  );
};

export default AboutSection;