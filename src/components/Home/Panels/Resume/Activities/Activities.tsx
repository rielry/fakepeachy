import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";

export default class Acitivities extends React.Component {
    render() {
        return (
            <div className="Section">
                <StyledText style={TextStyle.DISPLAY}>Activities</StyledText>
                <div className="SectionContent">
                    <div className="Activity">
                        <StyledText style={TextStyle.BODY}>Peer Mentor</StyledText>
                        <StyledText style={TextStyle.BODY}>University Honors Program, University of Nebraska - Lincoln</StyledText>
                        <StyledText style={TextStyle.BODY_ITALIC}>blah</StyledText>
                    </div>
                    <div className="Activity">
                        <StyledText style={TextStyle.BODY}>Initialize UNL (Computer Science and Engineering Ambassadors)</StyledText>
                        <StyledText style={TextStyle.BODY}>University of Nebraska - Lincoln</StyledText>
                        <StyledText style={TextStyle.BODY_ITALIC}>blah</StyledText>
                    </div>
                    <div className="Activity">
                        <StyledText style={TextStyle.BODY}>Peer Mentor</StyledText>
                        <StyledText style={TextStyle.BODY}>Department of Computer Science & Engineering, University of Nebraska - Lincoln</StyledText>
                        <StyledText style={TextStyle.BODY_ITALIC}>blah</StyledText>
                    </div>
                </div>
            </div>
        )
    }
}