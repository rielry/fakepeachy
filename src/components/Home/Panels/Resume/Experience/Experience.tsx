import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";

export default class Experience extends React.Component {
    render() {
        return (
            <div className="Section">
                <StyledText style={TextStyle.DISPLAY}>Experience</StyledText>
                <div className="SectionContent">
                    <div className="Experience">
                        <div className="AboutExperience">
                            <StyledText style={TextStyle.BODY}>Undergraduate Teaching Assistant</StyledText>
                            <StyledText style={TextStyle.BODY}>University of Nebraska - Lincoln</StyledText>
                            <StyledText style={TextStyle.BODY}>January 2017 - Present</StyledText>
                            <StyledText style={TextStyle.BODY}>Lincoln, NE</StyledText>
                        </div>
                        <div className="Description">
                            <StyledText style={TextStyle.BODY_ITALIC}>blah</StyledText>
                        </div>
                    </div>
                    <div className="Experience">
                        <div className="AboutExperience">
                            <StyledText style={TextStyle.BODY}>Undergraduate Research Assistant</StyledText>
                            <StyledText style={TextStyle.BODY}>University of Nebraska - Lincoln</StyledText>
                            <StyledText style={TextStyle.BODY}>January 2018 - Present</StyledText>
                            <StyledText style={TextStyle.BODY}>Lincoln, NE</StyledText>
                        </div>
                        <div className="Description">
                            <StyledText style={TextStyle.BODY_ITALIC}>blah</StyledText>
                        </div>
                    </div>
                </div>
                <div className="SectionContent">
                    <div className="Experience">
                        <div className="AboutExperience">
                            <StyledText style={TextStyle.BODY}>Software Development Intern</StyledText>
                            <StyledText style={TextStyle.BODY}>TD Ameritrade</StyledText>
                            <StyledText style={TextStyle.BODY}>May 2019 - Present</StyledText>
                            <StyledText style={TextStyle.BODY}>Omaha, NE</StyledText>
                        </div>
                        <div className="Description">
                            <StyledText style={TextStyle.BODY_ITALIC}>blah</StyledText>
                        </div>
                    </div>
                </div>
                <div className="SectionContent">
                    <div className="Experience">
                        <div className="AboutExperience">
                            <StyledText style={TextStyle.BODY}>Software Development Intern</StyledText>
                            <StyledText style={TextStyle.BODY}>Union Pacific Railroad</StyledText>
                            <StyledText style={TextStyle.BODY}>May 2018 - August 2018</StyledText>
                            <StyledText style={TextStyle.BODY}>Omaha, NE</StyledText>
                        </div>
                        <div className="Description">
                            <StyledText style={TextStyle.BODY_ITALIC}>blah</StyledText>
                        </div>
                    </div>
                </div>
                <div className="SectionContent">
                    <div className="Experience">
                        <div className="AboutExperience">
                            <StyledText style={TextStyle.BODY}>Senior Capstone Student Developer</StyledText>
                            <StyledText style={TextStyle.BODY}>TD Ameritrade</StyledText>
                            <StyledText style={TextStyle.BODY}>August 2017 - May 2018</StyledText>
                            <StyledText style={TextStyle.BODY}>Lincoln, NE</StyledText>
                        </div>
                        <div className="Description">
                            <StyledText style={TextStyle.BODY_ITALIC}>blah</StyledText>
                        </div>
                    </div>
                </div>
                <div className="SectionContent">
                    <div className="Experience">
                        <div className="AboutExperience">
                            <StyledText style={TextStyle.BODY}>Software Engineering Intern</StyledText>
                            <StyledText style={TextStyle.BODY}>Experian PLC</StyledText>
                            <StyledText style={TextStyle.BODY}>May 2017 - August 2017</StyledText>
                            <StyledText style={TextStyle.BODY}>Lincoln, NE</StyledText>
                        </div>
                        <div className="Description">
                            <StyledText style={TextStyle.BODY_ITALIC}>blah</StyledText>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}