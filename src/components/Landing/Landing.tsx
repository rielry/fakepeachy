import React from "react";
import "./Landing.scss";
import { TextStyle } from "../../constants/TextStyles";
import StyledText from "../StyledText/StyledText";
import TypeWriter from "../TypeWriter/TypeWriter";

export default class Landing extends React.Component {
    componentDidMount() {
        setTimeout(function() {
            let enter = document.getElementById("Enter");
            if(enter) {
                enter.style.transform = "translateY(150px)";
                enter.style.transition = "2s";
            }
        }, 0);
        
    }

    render() {
        return (
            <div className="Entrance">
                <div className="Nameplate">
                    <StyledText style={TextStyle.HEADER}>Riley Jhi</StyledText>
                </div>
                <div className="Enter" id="Enter">
                    <div className="EnterText">
                        <StyledText style={TextStyle.HEADER}>
                            <TypeWriter 
                                text={"enter"} 
                                interval={750}
                            />
                        </StyledText>
                    </div>
                </div>
            </div>
        );
    }
}