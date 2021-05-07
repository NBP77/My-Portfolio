import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import parkFinder from "../../imgs/parkFinder.png";
import workDay from "../../imgs/workDay.png";
import eecommerceBackend from "../../imgs/eecommerceBackend.png";
import groupie from "../../imgs/groupie.png";
import budgetTracker from "../../imgs/budgetTracker.png";
import employeeDirectory from "../../imgs/employeeDirectory.png";

function Projects() {
  return (
    <div>

      <div class="card">
        <div class="card-image">
          <figure class="image is-3by3">
            <a href="https://nbp77.github.io/Project-1/" target="_blank">
            <img src={parkFinder} alt="parkFinder" />
            </a>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-2">Park Finder</p>
            </div>
          </div>
          <div class="content">
            An application gives the user information about nearby parks 
            while also giving the user a local weather update.
            <br />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <figure class="image is-3by3">
            <a href="https://nbp77.github.io/Work-day-planner/" target="_blank">
            <img src={workDay} alt="workDay" />
            </a>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-2">Work Day Planner</p>
            </div>
          </div>
          <div class="content">
            This work day planner lets the user save, delete and customize daily task 
            by also giving the correct time brought by Moment.js. 
            <br />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <figure class="image is-3by3">
            <a href="https://github.com/NBP77/E-Commerce-Back-End" target="_blank">
            <img src={eecommerceBackend} alt="eecommerceBackend" />
            </a>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-2">E-commerce Back-end site</p>
            </div>
          </div>
          <div class="content">
           This E-commerce back-end site has full crud functionality 
           showing the user POST, GET, PUT and DELETE routes. 
            <br />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <figure class="image is-3by3">
            <a href="http://sleepy-headland-27879.herokuapp.com/" target="_blank">
            <img src={groupie} alt="groupie" />
            </a>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-2">Groupie</p>
            </div>
          </div>
          <div class="content">
          Groupie is a full-stack application that allows a user, a groupie if you will, to search touring scheduling of their favorite musical artists and save concerts under their groupie profile. 
            <br />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <figure class="image is-3by3">
            <a href="https://ancient-crag-04272.herokuapp.com/" target="_blank">
            <img src={budgetTracker} alt="budgetTracker" />
            </a>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-2">Budget Tracker</p>
            </div>
          </div>
          <div class="content">
          This application is a fully functioning budget tracker that allows you to 
          add and subtract expenses online and offline.
            <br />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-image">
          <figure class="image is-3by3">
            <a href="https://nbp77.github.io/employee-directory-/" target="_blank">
            <img src={employeeDirectory} alt="budgetTracker" />
            </a>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-2">Budget Tracker</p>
            </div>
          </div>
          <div class="content">
          This application is a Employee Directory where a user can search 
          and filter employees from name top or bottom.
            <br />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;
