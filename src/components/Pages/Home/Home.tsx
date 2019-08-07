import React from "react";
import "./Home.scss";
import Navigation from "../../Navigation/Navigation";
import { PanelTypes } from "../../../constants/PageTypes";
import About from "./Panels/About/About";
import Art from "./Panels/Art/Art";

interface ComponentProps {
    displayedPanel: PanelTypes;
}

export default class Home extends React.Component<ComponentProps> {
    render() {
        return (
            <div className="Home">
                {this.getNavigation()}
                {this.getPanelContent()}
            </div>
        )
    }

    getNavigation() {
        if(this.props.displayedPanel == PanelTypes.ART) {

        } else {
            return (<Navigation/>);
        }
    }

    getPanelContent() {
        switch(this.props.displayedPanel) {
            case PanelTypes.ART:
                return(<Art/>)
            case PanelTypes.CODING:
                return(<div>coding</div>)
            case PanelTypes.RESUME:
                return(<div>resume</div>)
            case PanelTypes.INFO:
                return(<div>info</div>)
            default:
                return (<About/>)
        }
    }
}