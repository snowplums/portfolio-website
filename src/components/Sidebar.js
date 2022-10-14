import React from "react";
import './Sidebar.css';
import PersonCard from './PersonCard.js';
import { Link } from "react-router-dom";


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
          


          <Link to="/home">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/links">Links</Link>

        </div>
        
        
      </div>
    );
}

export default Sidebar;