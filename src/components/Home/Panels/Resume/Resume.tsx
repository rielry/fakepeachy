import React from "react";
import "./Resume.scss";
import Education from "./Education/Education";
import Honors from "./Honors/Honors";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Acitivities from "./Activities/Activities";

export default class Resume extends React.Component {
    render() {
        return (
            <div className="Resume">
                <div className="Content">
                    <Education/>
                    <Honors/>
                    <Skills/>
                    <Experience/>
                    <Acitivities/>
                </div>
            </div>
        );
    }
}