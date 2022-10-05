import React from "react";
import './Sidebar.css';
import PersonCard from './PersonCard.js';

const Sidebar = () => {
    return(
        <div class="sidebar">
        <div>
          <div>
            <PersonCard />
          </div>
          
          <p>
            Hello! Welcome to my site!
          </p>

        </div>
        <a href="./about">About</a>
        <a href="./projects">Projects</a>
        <a href="./links">Links</a>
      </div>
    );
}

export default Sidebar;