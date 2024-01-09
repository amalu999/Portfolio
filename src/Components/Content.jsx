import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../content.css";
import Education from "./Education";
import Emplyment from "./Emplyment";
import Skillset from "./Skillset";
import Acheivement from "./Acheivement";

const Content = () => {
  return (
    <div>
      <div>
      
      <div className="navbar justify-content-end">
        <ul>
          <NavLink to="employment">
            <span>Employment Details</span>
          </NavLink>

          <NavLink to="skillset">
            <span>Skillset</span>{" "}
          </NavLink>

          <NavLink to="projects">
            {" "}
            <span>Projects</span>{" "}
          </NavLink>

          <NavLink to="education">
            {" "}
            <span>Education</span>{" "}
          </NavLink>

          {/* <NavLink to="contact">
            {" "}
            <span>Contact</span>{" "}
          </NavLink> */}
        </ul>
      </div>
      </div>
      

      <Emplyment />
      <hr />
      <Skillset />
      <hr />
      <Acheivement />
      <hr />
      <Education />
      <div>
        <h2 className="headings">Language</h2>
        <ul>
          <li>English</li>
          <li>Malayalam</li>
          <li>Hindi</li>
          <li>Tamil</li>
        </ul>
      </div>

      <div>
        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
              <a
                href="/"
                class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              >
                <svg class="bi" width="30" height="24">
                  <use href="#bootstrap"></use>
                </svg>
              </a>
              <span class="mb-3 mb-md-0 text-body-secondary">
                © Amalu Susan Basil
              </span>
            </div>

           
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Content;
