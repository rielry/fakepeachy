import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";
import Skill from "./Skill";

export default class Skills extends React.Component {
    render() {
        return(
            <div className="Section">
                <StyledText style={TextStyle.DISPLAY}>Skills</StyledText>
                <div className="SectionContent">
                    <div className="Skills">
                        <Skill skill="Java" level={4}></Skill>
                        <Skill skill="C" level={4}></Skill>
                        <Skill skill="JavaScript" level={4}></Skill>
                        <Skill skill="HTML/CSS/SASS" level={4}></Skill>
                        <Skill skill="ReactJS" level={4}></Skill>
                        <Skill skill="SQL" level={3}></Skill>
                        <Skill skill="jQuery" level={2}></Skill>
                        <Skill skill="Adobe Photoshop" level={2}></Skill>
                        <Skill skill="Python" level={2}></Skill>
                        <Skill skill="AngularJS" level={2}></Skill>
                        <Skill skill="SAP UI 5" level={2}></Skill>
                    </div>
                </div>
            </div>
        )
    }
}