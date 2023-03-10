import React from "react";
import ProjNavbar from "../components/ProjNavbar";
import cocktailhour from "../images/cocktail-hour-ss.png";
import spamodel from "../media/spamodeljan23 (2).mp4";
import grocery from "../images/grocery-list-1.png";

const Projects = () => {
  return (
    <body className="projects-bg">
      <ProjNavbar />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <section>
          <div className="project-section mb-5">
            <h3 className="text-center project-titles">Cocktail Hour</h3>
            <img
              src={cocktailhour}
              alt="cocktail hour"
              className="project-image"
            ></img>

            <p className="mt-2">
              Cocktail Hour is a cocktail recipe website that uses the public
              API "The Cocktail DB" to allow users to search the extensive API
              database for recipes by name. Users have the additional option of
              viewing a recipe at random with the click of a button.
            </p>
            <p>
              <span className="project-titles">Technologies used:</span>{" "}
              Javascript, ReactJS, CSS, HTML, Bootstrap, Axios, The Cocktail DB
              API
            </p>
            <div className="d-flex justify-content-center project-links gap-3">
              <a href="https://github.com/Susie-Mars/cocktail-hour">Github</a>
              <p>|</p>
              <a href="https://cocktail-hour-app.netlify.app">Link</a>
            </div>
          </div>
          <div className="project-section mb-5">
            <h3 className="text-center project-titles">Spa Model</h3>
            <iframe src={spamodel} allowfullscreen title="spa model"></iframe>

            <p className="mt-2">
              Spa Model is a website I've wanted to exist for years. It's a site
              that allows spas and individual providers to register to create
              postings seeking models for training purposes. Login/Registration
              includes user validations, and a MySQL database was used to store
              user credentials, and hash user passwords. Users seeking free spa
              services are then able to browse available services in their area
              based on service type.
            </p>
            <p>
              <span className="project-titles">Technologies used:</span> C#,
              .NET, HTML, CSS, Bootstrap, MySQL
            </p>
            <div className="d-flex justify-content-center project-links gap-3">
              <a href="https://github.com/Susie-Mars/spamodel">Github</a>
            </div>
          </div>
          <div className="project-section mb-5">
            <h3 className="text-center project-titles">
              Grocery List with Dark/Light theme slider
            </h3>
            <img
              src={grocery}
              alt="grocery list"
              className="project-image"
            ></img>

            <p className="mt-2">
              Ah, the classic List project. Using ReactJS, I created a grocery
              list app that allows users to add to, edit or delete their grocery
              list. I also added a slider for users to toggle between a light
              and dark theme and alerts when a user either successfully
              adds/edits/deletes an item or leaves the input field blank.{" "}
            </p>
            <p>
              <span className="project-titles">Technologies used:</span>{" "}
              Javascript, ReactJS, CSS, HTML
            </p>
            <div className="d-flex justify-content-center project-links gap-3">
              <a href="https://github.com/Susie-Mars/grocery-list">Github</a>
              <p>|</p>
              <a href="https://grocery-list-theme.netlify.app">Link</a>
            </div>
          </div>
        </section>
      </div>
    </body>
  );
};

export default Projects;
