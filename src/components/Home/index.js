import React from "react";
import "./style.css";
import linkedInPic from "../../imgs/linkedInPic.jpg";

function Home() {
  return (
    <div>
      <div class="container">

        <div className="columns is-horizontal-center">
          <div class=" column is-6 is-horizontal-center box">
            <p id="about-me-title" class="title has-text-weight-semibold">
              About Me:
            </p>
            <p id="about-me-content" className="-10">
              Hello my name is Nick Pendergast and welcome to my page! What you
              will find is a collecting of my work/projects from Bootcamp and I
              hope you enjoy. So my last job was a technical recruiter for a big
              staffing agency in Philly where I specialized in working with
              Software Developers on a daily basis. Every day I focused on
              placing my Software Developers in full stack development
              opportunities so I learned a lot about the industry and it really
              started to admire the work they did. One day I realized that I
              wanted to learn the skill of being a Software Developer myself so
              I decided it was time for a career change! I have learned a lot so
              far and am excited to learn more moving forward!
            </p>
          </div>

          <div class="column is-half">
            <div>
              <a className="image is-3by3 " href="https://www.linkedin.com/in/nick-pendergast-273014123/" target="_blank">
                <img className="is-rounded" src={linkedInPic} alt="Pic of me" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
