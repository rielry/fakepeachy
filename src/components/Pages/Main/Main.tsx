import React from "react";
import "./Main.scss";
import Navigation from "../../Navigation/Navigation";
import { PanelTypes } from "../../../constants/PageTypes";

interface ComponentProps {
    displayedPanel: PanelTypes;
}

type MainProps = ComponentProps;

export default class Main extends React.Component<MainProps> {
    render() {
        return (
            <div className="Main">
                <Navigation/>
                <div className="Panel">
                {this.getPanelContent()}
                </div>
            </div>
        )
    }

    getPanelContent() {
        switch(this.props.displayedPanel) {
            case PanelTypes.ART:
                return(<div>art</div>)
            case PanelTypes.CODING:
                return(<div>coding</div>)
            case PanelTypes.RESUME:
                return(<div>resume</div>)
            default:
                return(<div>about</div>)
        }
    }
}