import React from "react";
import './page.css'; 
import Cell from "../components/Cell";

import projectCells from "../data/Projects.json";

const Projects = () => {
    return(
        <div className="page">
            <h1>projects</h1>

            
            {projectCells.map((proj) => (
                <Cell data={proj} key={proj.title} />
            ))}
        </div>
    );
}

export default Projects;


