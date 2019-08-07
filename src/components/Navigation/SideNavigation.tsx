import React from "react";
import "./Navigation.scss";
import Navigation from "./Navigation";

export default class SideNavigation extends React.Component {
    render() {
        return (
            <div className="SideNavigation" onClick={this.getFullNavigation}>
                <div className="Icon">
                    <div className="placeholder"></div>
                </div>
            </div>
        );
    }

    getFullNavigation() {
        return (<Navigation/>)
    }
}