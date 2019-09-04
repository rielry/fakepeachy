import React from "react";
import "./Resume.scss";
import Education from "./Education/Education";
import Honors from "./Honors/Honors";
import Skills from "./Skills/Skills";
import Experiences from "./Experiences/Experiences";
import Acitivities from "./Activities/Activities";
import Navigation from "../../../Navigation/Navigation";

export default class Resume extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Panel">
                    <div className="Content">
                        <Education/>
                        <Honors/>
                        <Skills/>
                        <Experiences/>
                        <Acitivities/>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}