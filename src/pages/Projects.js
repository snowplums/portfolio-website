import React from "react";
import './page.css'; 
import Cell from "../components/Cell";

const Projects = () => {
    return(
        <div className="page">
            <h1>projects</h1>

            
            <Cell data={datum} />

        </div>
    );
}

export default Projects;


const datum = {
    title:"Bruh" ,
    link :'www.google.com' ,
    image :"/squashface.png" ,
    desc : "asdfasdfasdfasdf"
}