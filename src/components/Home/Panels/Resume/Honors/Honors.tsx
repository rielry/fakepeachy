import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";

export default class Honors extends React.Component {
    render() {
        return( 
            <div className="Section">
                <StyledText style={TextStyle.DISPLAY}>Honors</StyledText>
                <div className="SectionContent">
                    <div className="Scholarship">
                        <StyledText style={TextStyle.BODY}>Regents Scholarship</StyledText>
                        <StyledText style={TextStyle.BODY}>University of Nebraska - Lincoln</StyledText>
                    </div>
                    
                    <div className="Scholarship">
                        <StyledText style={TextStyle.BODY}>Honors Textbook Scholarship</StyledText>
                        <StyledText style={TextStyle.BODY}>University of Nebraska - Lincoln</StyledText>
                    </div>

                    <div className="Scholarship">
                        <StyledText style={TextStyle.BODY}>Jeanne Trabold Scholarship</StyledText>
                        <StyledText style={TextStyle.BODY}>University of Nebraska - Lincoln</StyledText>
                    </div>

                    <div className="Scholarship">
                        <StyledText style={TextStyle.BODY}>Computer Science and Engineering Honors Program</StyledText>
                        <StyledText style={TextStyle.BODY}>University of Nebraska - Lincoln</StyledText>
                    </div>
                </div>
            </div>
        )
    }
}