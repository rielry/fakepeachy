import React from "react";
import "./Entrance.scss";
import StyledText from "../../StyledText/StyledText";
import { TextStyle } from "../../../constants/TextStyles";
import TypeWriter from "../../TypeWriter/TypeWriter";

interface ComponentProps {
    handleClick: () => void;
}

type EntranceProps = ComponentProps;

export default class Entrance extends React.Component<EntranceProps> {
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
            <div className="Entrance" id="Entrance">
                <div className="Nameplate">
                    <StyledText style={TextStyle.HEADER}>Riley Jhi</StyledText>
                </div>
                <div className="Enter" id="Enter" onClick={this.props.handleClick}>
                    <div className="EnterText">
                        <StyledText style={TextStyle.HEADER}>
                            <TypeWriter 
                                text={"enter"} 
                                interval={500}
                            />
                        </StyledText>
                    </div>
                </div>
            </div>
        );
    }
}