import React from "react";
import "./style.css";
import profilePic from "../../imgs/linkedInPic.jpg";

function Home() {
  return (
    <div>
      <div className="container is-fullhd">
        <div className="name">
          <h1 className="my-name">
            <span className="n">N</span>
            <span className="i">i</span>
            <span className="c">c</span>
            <span className="k">k </span>
            <span className="p">P</span>
            <span className="e">e</span>
            <span className="n">n</span>
            <span className="d">d</span>
            <span className="e">e</span>
            <span className="r">r</span>
            <span className="g">g</span>
            <span className="a">a</span>
            <span className="s">s</span>
            <span className="t">t</span>
          </h1>
        </div>
        <section className="section">
          <div className="columns is-vcentered">
            <div className="column is-6 profile-pic">
              <figure>
                <img className="img" src={profilePic} alt="profilePic" />
              </figure>
            </div>
            <div className="column is-6 outer-box">
              <div className="about-me box">
                <h1 className="title is-4">About Me:</h1>
                <p>
                  Welcome to my portfolio!
                  <br />
                  <br />
                  My name is Nick Pendergast and I am recent graduate of the
                  Penn LPS Fullstack Coding Bootcamp. In this 24-week-long
                  bootcamp I learned a range of skills, starting with basic HTML
                  and CSS then eventually being able to build a fullstack
                  application from scratch. One of the biggest technologies we
                  focused on and was the foundation for our final project was
                  the MERN stack. React became one of my favorite technologies
                  to work with along with many others that I was able to improve
                  on during the course. In total we had 3 big projects that were
                  milestones within the course, each project consists of a group
                  of 3-4 other classmates that have to work together to build an
                  application from scratch. I had a such a great time working
                  with other classmates to achieve the goal of building an
                  application based on certain requirements. Each project had
                  its own challenges but nothing we couldn't handle, I love
                  working in a team environment so not only was it fun but most
                  my groups were very successful.
                  <br />
                  <br />
                  As far as background wise before the bootcamp I was a
                  technical recruiter, needless to say I am very happy to have
                  made a career change as I actually have fun when I am coding
                  and am extremely excited to learn and grow as an entry level
                  developer in the professional world of Software Engineering.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
