import React from "react";
import "./Navigation.scss";
import {PanelTypes} from "../../constants/PageTypes";
import Button from "./Button/Button";
import Store, { StoreProps } from "../../store/store";
import StyledText from "../StyledText/StyledText";
import { TextStyle } from "../../constants/TextStyles";

class Navigation extends React.Component<StoreProps> {
    render() {
        return(
            <div className="Navigation">
                <div className="Profile">
                    <div className="Image">
                        <div className="placeholder"></div>
                        {/* <img src="./info.png"></img> */}
                    </div>
                    <div className="Bio">
                        <StyledText style={TextStyle.LABEL}>Riley Jhi</StyledText>
                    </div>
                    <div className="Buttons">
                        {this.getButtons()}
                    </div>
                </div>
            </div>
        )
    }

    handleClick = (selectedPanel: PanelTypes) => {
        const {store} = this.props;
        store.set("panelDisplayed")(selectedPanel);
    }

    getButtons() {
        let buttons: JSX.Element[] = [];
        let i = 0;
        for(let type in PanelTypes) {
            buttons.push(
                <Button 
                    type={PanelTypes[type] as PanelTypes}
                    handleClick={this.handleClick}
                    selected={i==0}
                    key={type}
                />
            );
            i++;
        }
        return buttons;
    }
}
export default Store.withStore(Navigation);