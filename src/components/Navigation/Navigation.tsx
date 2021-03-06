import React from "react";
import "./Navigation.scss";
import { PanelTypes } from "../../constants/PageTypes";
import Button from "./Button/Button";
import Store, { StoreProps } from "../../store/store";
import StyledText from "../StyledText/StyledText";
import { TextStyle } from "../../constants/TextStyles";
import Avatar from '../../constants/Images/avatar.jpg';

interface ComponentProps {
    slide?: Boolean,
    handleClick: () => void
}

class Navigation extends React.Component<StoreProps & ComponentProps> {
    render() {
        return (
            <div className="Navigation">
                <div className="Profile">
                    <div className="Image">
                        <img src={Avatar}></img>
                    </div>
                    <div className="Bio">
                        <div className="Name">
                            <StyledText style={TextStyle.LABEL}>Riley Jhi</StyledText>
                        </div>
                        <div className="Info">
                            <StyledText style={TextStyle.BODY}>Artist, software engineer, human</StyledText>
                        </div>
                    </div>
                </div>
                <div className="Buttons">
                    {this.getButtons()}
                </div>
            </div>
        )
    }

    handleClick = (selectedPanel: PanelTypes) => {
        if (selectedPanel == PanelTypes.ART) {
            this.props.handleClick();
        }

        const { store } = this.props;
        store.set("panelDisplayed")(selectedPanel);
    }

    getButtons() {
        const { store } = this.props;
        let buttons: JSX.Element[] = [];

        for (let type in PanelTypes) {
            let panel = PanelTypes[type] as PanelTypes;
            buttons.push(
                <Button
                    type={panel}
                    handleClick={this.handleClick}
                    selected={store.get("panelDisplayed") == panel}
                    key={type}
                />
            );
        }
        return buttons;
    }
}
export default Store.withStore(Navigation);