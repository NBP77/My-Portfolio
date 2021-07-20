import React from "react";
import "./style.css";
import parkFinder from "../../imgs/parkFinder.png";
import workDay from "../../imgs/workDay.png";
import eecommerceBackend from "../../imgs/eecommerceBackend.png";
import groupie from "../../imgs/groupie.png";
import budgetTracker from "../../imgs/budgetTracker.png";
import employeeDirectory from "../../imgs/employeeDirectory.png";
import boilerplateGif from "../../imgs/boilerplate.gif";
import warzoneGame from "../../imgs/warzoneGamePic.png";

function ProjectsPage() {
  return (
    <div className="background">
      <div className="container">
        <div className="projects-title">
          <h1>
            <span className="m">M</span>
            <span className="y">y </span>
            <span className="p">P</span>
            <span className="r">r</span>
            <span className="o">o</span>
            <span className="j">j</span>
            <span className="e">e</span>
            <span className="c">c</span>
            <span className="t">t</span>
            <span className="s">s</span>
          </h1>
        </div>
        <div className="section">
          <div className="row columns is-multiline">
            <div className="column is-12">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <a
                      href="https://nbp77.github.io/warzone-game/#/"
                      target="_blank"
                    >
                      <img src={warzoneGame} alt="Warzone Game" />
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 no-padding">Warzone Sound Game</p>
                      <p className="subtitle is-6">
                        A Call of Duty Warzone quiz game where the user has to guess the gun based on how it sounds when fired.
                        Think you know the sound of your favorite gun?!?!
                      </p>
                      <p className="subtitle is-6">
                        Techs: React and many more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-12">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <a
                      href="https://boilerplatenow.herokuapp.com/"
                      target="_blank"
                    >
                      <img src={boilerplateGif} alt="boilerplate" />
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 no-padding">boilerplate</p>
                      <p className="subtitle is-6">
                        A one stop shop for boilerplate code making life easier
                        for developers.
                      </p>
                      <p className="subtitle is-6">
                        Techs: Full MERN stack application
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <a
                      href="https://nbp77.github.io/Project-1/"
                      target="_blank"
                    >
                      <img src={parkFinder} alt="parkFinder" />

                      <div class="middle">
                        <div class="text">Click to view</div>
                      </div>
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 no-padding">Park Finder</p>
                      <p className="subtitle is-6">
                        An application gives the user information about nearby
                        parks while also giving the user a local weather update.
                      </p>
                      <p className="subtitle is-6">
                        Techs: HTML, CSS, Bulma and JavaScript.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <a
                      href="https://nbp77.github.io/Work-day-planner/"
                      target="_blank"
                    >
                      <img src={workDay} alt="workDay" />
                      <div class="middle">
                        <div class="text">Click to view</div>
                      </div>
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 no-padding">Work Day Planner</p>
                      <p className="subtitle is-6">
                        This work day planner lets the user save, delete and
                        customize daily task by also giving the correct time
                        brought by Moment.js.
                      </p>
                      <p className="subtitle is-6">
                        Techs: HTML, CSS, Bootstrap, MomentJS and JavaScript.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <a
                      href="https://github.com/NBP77/E-Commerce-Back-End"
                      target="_blank"
                    >
                      <img src={eecommerceBackend} alt="eecommerceBackend" />
                      <div class="middle">
                        <div class="text">Click to view</div>
                      </div>
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 no-padding">
                        E-commerce Back-end site
                      </p>
                      <p className="subtitle is-6">
                        This E-commerce back-end site has full crud
                        functionality showing the user POST, GET, PUT and DELETE
                        routes.
                      </p>
                      <p className="subtitle is-6">
                        Techs: Javascript, MySQL and Sequelize.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <a
                      href="http://sleepy-headland-27879.herokuapp.com/"
                      target="_blank"
                    >
                      <img src={groupie} alt="groupie" />
                      <div class="middle">
                        <div class="text">Click to view</div>
                      </div>
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4 no-padding">Groupie</p>
                      <p className="subtitle is-6">
                        Groupie is a full-stack application that allows users to
                        search touring scheduling of their favorite artists and
                        save concerts to their profile.
                      </p>
                      <p className="subtitle is-6">
                        Techs: HTML, CSS, MySQL, Sequelize, Handelbars.js and
                        many more...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <a
                      href="https://ancient-crag-04272.herokuapp.com/"
                      target="_blank"
                    >
                      <img src={budgetTracker} alt="budgetTracker" />
                      <div class="middle">
                        <div class="text">Click to view</div>
                      </div>
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p class="title is-4">Budget Tracker</p>
                      <p className="subtitle is-6">
                        This application is a fully functioning budget tracker
                        that allows you to add and subtract expenses online and
                        offline.
                      </p>
                      <p className="subtitle is-6">
                        Techs: MongoDB, Mongoose, IndexedDB, Javascript,
                        chart.jsExpress, Node and Compression.JS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card large">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <a
                      href="https://nbp77.github.io/employee-directory-/"
                      target="_blank"
                    >
                      <img src={employeeDirectory} alt="budgetTracker" />
                      <div class="middle">
                        <div class="text">Click to view</div>
                      </div>
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p class="title is-4">Employee Directory</p>
                      <p className="subtitle is-6">
                        This application is a Employee Directory where a user
                        can search and filter employees from name top or bottom.
                      </p>
                      <p className="subtitle is-6">
                        Techs: React, Javascript and Axios
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
