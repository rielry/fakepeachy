import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";
import Skill from "./Skill";

export default class Skills extends React.Component {
    render() {
        return (
            <div className="Section">
                <StyledText style={TextStyle.DISPLAY}>Skills</StyledText>
                <div className="SectionContent">
                    <div className="Skills">
                        <Skill skill="Java" level={4}></Skill>
                        <Skill skill="JavaScript/TypeScript" level={4}></Skill>
                        <Skill skill="HTML/CSS/SASS" level={4}></Skill>
                        <Skill skill="ReactJS" level={4}></Skill>
                        <Skill skill="SQL" level={3}></Skill>
                        <Skill skill="C" level={3}></Skill>
                    </div>
                </div>
            </div>
        )
    }
}