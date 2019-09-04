import React from "react";
import "./Projects.scss";
import Project from "./Project";
import GEA from "../../../../constants/Images/gea.png";
import RelationshipWeb from "../../../../constants/Images/relationship.png";
import Navigation from "../../../Navigation/Navigation";

export default class Projects extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Panel">
                    <div className="Content">
                        <Project 
                            image={GEA}
                            description={
                                "Launched in December 2018, George Eliot Archive is an online archive documenting everything related to the celebrated Victorian novelist best known as George Eliot. The website was created for the Omeka platform, and written with HTML, CSS, and JavaScript with a quick dash of PHP."
                            }
                            link="https://www.georgeeliotarchive.org"
                        />
                        <Project 
                            image={RelationshipWeb}
                            description={
                                "The George Eliot relationship web was built for the George Eliot Archive. The web outlines individuals that George Eliot knew throughout her life, and places them on the map based on a \"closeness\" rating assigned by the team based on research. Clicking on an individual's node gives a brief description and significant details about their relationship with Eliot. The web was created with D3.js library."
                            }
                            link="https://www.georgeeliotarchive.org/relationship-web"
                        />
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}