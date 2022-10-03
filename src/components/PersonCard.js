import React from "react";
import "./PersonCard.css";

const PersonCard = (props) => {

    return (
        <div className="PersonCard">
            <img src="./squashface.png" alt="squashface"></img>
            <h1>Wayne Mei</h1>

            <a href="mailto:waynemm14@gmail.com">waynemm14@gmail.com</a>
            <a href="https://www.google.com/">Google</a>
            



        </div>
    );
}

export default PersonCard;