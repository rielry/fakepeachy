import React, { Component } from "react";
import "./Button.scss";
import StyledText from "../../StyledText/StyledText";
import { TextStyle } from "../../../constants/TextStyles";

interface ComponentProps {
    text: string;
    selected: Boolean;
    handleClick: () => void;
}

export default class Button extends React.Component<ComponentProps> {
    render() {
        return(
            <div className="Button">
                <StyledText style={TextStyle.LABEL}>{this.props.text}</StyledText>
            </div>
        )
    }
}