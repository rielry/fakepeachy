import React, { Component } from "react";
import "./Button.scss";
import StyledText from "../../StyledText/StyledText";
import { TextStyle } from "../../../constants/TextStyles";
import { PanelTypes } from "../../../constants/PageTypes";

interface ComponentProps {
    type: PanelTypes
    selected: Boolean;
    handleClick: (selected: PanelTypes) => void;
}

export default class Button extends React.Component<ComponentProps> {
    render() {
        return(
            <div className="ButtonGroup" onClick={() => this.props.handleClick(this.props.type)}>
                <div className="Icon"></div>
                <div className="Button">
                    <StyledText style={TextStyle.LABEL}>{this.props.type.toString()}</StyledText>
                </div>
            </div>
        )
    }
}