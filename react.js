import React from 'react';

function MyPortfolio() {
  const toggleMenu = () => {
    // Implement toggleMenu functionality here
  };

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="mediaqueries.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <nav id="desktop-nav">
          <div className="logo">Ava Jamora</div>
          <div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav">
          <div className="logo">Ava Jamora</div>
          <div className="hamburger-menu">
            <div className="hamburger-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu-links">
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </div>
          </div>
        </nav>
        <section id="profile">
          <div className="section_pic-container">
            <img
              className="profile-pic"
              src="images/pfp.jpg"
              alt="Ava Jamora's profile picture"
            />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Ava Jamora</h1>
            <p className="section__text__p2">Frontend Developer</p>
            <div className="btn-container">
              <button
                className="btn btn-color-2"
                onClick={() => window.open('images/resume_ava_jamora.jpg')}
              >
                Resume
              </button>
              <button className="btn btn-color-1" onClick={() => {window.location.href='./#contact'}}>
                Contact Info
              </button>
            </div>
            <div className="socials-container">
              <img
                src="./images/linkedin.png"
                alt="My LinkedIn profile"
                className="icon"
                onClick={() => {window.location.href='https://www.linkedin.com/in/ava-jamora-3516182a5/'}}
              />
              <img
                src="images/github.png"
                alt="My Github profile"
                className="icon"
                onClick={() => {window.location.href='https://github.com/afj511'}}
              />
            </div>
          </div>
        </section>
        <section id="about">
          <p className="section__text__p1">Who am I?</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="section__pic-container">
              <img
                src="images/aboutme.jpg"
                alt="Picture of Ava Jamora"
                className="about-pic"
              />
            </div>
            <div className="about-details-container">
              <div className="about-containers">
                <div className="details-container">
                  <h3>Experience</h3>
                  <p>
                    6 month coding course from University of Richmond <br />
                    Frontend + Backend
                  </p>
                </div>
                <div className="details-container">
                  <h3>Education</h3>
                  <p>
                    Highschool Graduate <br />
                    Canyon Highschool
                  </p>
                </div>
              </div>
              <div className="text-container">
                <p>
                  I transferred to this school fairly late and I studied Computer
                  Science for the remainder of my last two years before graduating to pursue the same subject in college.
                </p>
              </div>
            </div>
          </div>
          <img
            src="images/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
            onClick={() => {window.location.href='./#experience'}}
          />
        </section>
        <section id="experience">
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h2 className="experience-sub-title">Frontend Development</h2>
                <div className="article-container">
                  <article>
                    <img
                      src="images/checkmark.png"
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>HTML</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="images/checkmark.png"
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>CSS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="images/checkmark.png"
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="images/checkmark.png"
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>TypeScript</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="details-container">
                <h2 className="experience-sub-title">Frontend Development</h2>
                <div className="article-container">
                  <article></article>
                  <article>
                    <img
                      src="images/checkmark.png"
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Node JS</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="images/checkmark.png"
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Material UI</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src="images/checkmark.png"
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Git</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
            onClick={() => {window.location.href='./#projects'}}
          />
        </section>
        <section id="projects">
          <p className="section__text__p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container color-container">
                <div className="article-container">
                  <img
                    src="images/wack.jpg"
                    alt="Project 1"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">Wack-A-Mole</h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => {window.location.href='https://scratch.mit.edu/projects/784606073/fullscreen/'}}
                  >
                    Scratch
                  </button>
                </div>
              </div>
              <div className="details-container color-container">
                <div className="article-container">
                  <img
                    src="images/voyage.jpg"
                    alt="Project 2"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">Voyage</h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => {window.location.href='https://github.com/RuckusEnjoyer/travel-blog'}}
                  >
                    Github
                  </button>
                </div>
              </div>
              <div className="details-container color-container">
                <div className="article-container">
                  <img
                    src="images/poke.jpg"
                    alt="Project 3"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">PokeDisple</h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => {window.location.href='https://github.com/MadChazo/P1-pokedisple'}}
                  >
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            src="images/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
            onClick={() => {window.location.href='./#contact'}}
          />
        </section>
        <section id="contact">
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img
                src="images/email.png"
                alt="Email icon"
                className="icon contact-icon email-icon"
              />
              <p><a href="ajjamor4@gmail.com">ajjamor4@gmail.com</a></p>
            </div>
            <div className="contact-info-container">
              <img
                src="images/linkedin.png"
                alt="LinkedIn icon"
                className="icon contact-icon"
              />
              <p><a href="https://www.linkedin.com">LinkedIn</a></p>
            </div>
          </div>
        </section>
        <footer>
          <nav>
            <div className="nav-links-container">
              <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <p>Copyright &#169; 2023 Ava Jamora. All Rights Reserved.</p>
        </footer>
        <script src="script.js"></script>
      </body>
    </>
  );
}

export default MyPortfolio;
