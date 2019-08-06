import React from "react";
import "./Navigation.scss";
import {PanelTypes, PageTypes} from "../../constants/PageTypes";
import StyledText from "../StyledText/StyledText";
import { TextStyle } from "../../constants/TextStyles";
import Button from "./Button/Button";

export default class Navigation extends React.Component {
    render() {
        return(
            <div className="Navigation">
                <div className="Buttons">
                    {this.getButtons()}
                </div>
                <hr/>
            </div>
        )
    }

    handleClick() {

    }

    getButtons() {
        let buttons: JSX.Element[] = [];
        let i = 0;
        for(let type in PanelTypes) {
            buttons.push(
                <Button 
                    text={type.toString()} 
                    handleClick={this.handleClick}
                    selected={i==0}
                />
            );
            i++;
        }
        return buttons;
    }
}