import React from "react";
import "./Navigation.scss";
import Navigation from "./Navigation";

interface ComponentProps {
    handleClick: () => void;
}

export default class SideNavigation extends React.Component<ComponentProps> {
    render() {
        return (
            <div className="SideNavigation" onClick={() => this.props.handleClick()}>
                <div className="Icon">
                    <div className="placeholder"></div>
                </div>
            </div>
        );
    }
}