import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";

export default class Education extends React.Component {
    render() {
        return (
            <div className="Section">
                <StyledText style={TextStyle.DISPLAY}>Education</StyledText>
                <div className="SectionContent">
                    <StyledText style={TextStyle.BODY}>University of Nebraska - Lincoln</StyledText>
                    <StyledText style={TextStyle.BODY}>University Honors Program</StyledText>
                    <br />
                    <div className="Degrees">
                        <div>
                            <StyledText style={TextStyle.BODY}>Bachelor of Science (Dec 2020)</StyledText>
                            <StyledText style={TextStyle.BODY_ITALIC}>Major: Computer Science</StyledText>
                            <StyledText style={TextStyle.BODY_ITALIC}>Minor: Mathematics</StyledText>
                        </div>
                        <div>
                            <StyledText style={TextStyle.BODY}>Bachelor of Arts (Dec 2020)</StyledText>
                            <StyledText style={TextStyle.BODY_ITALIC}>Major: Studio Art</StyledText>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}