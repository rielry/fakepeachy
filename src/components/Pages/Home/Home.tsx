import React from "react";
import "./Home.scss";
import Navigation from "../../Navigation/Navigation";
import { PanelTypes } from "../../../constants/PageTypes";
import About from "./Panels/About/About";

interface ComponentProps {
    displayedPanel: PanelTypes;
}

export default class Home extends React.Component<ComponentProps> {
    render() {
        return (
            <div className="Home">
                <Navigation/>
                {this.getPanelContent()}
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
                return (<About/>)
        }
    }
}