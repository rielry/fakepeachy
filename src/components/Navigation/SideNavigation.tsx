import React from "react";
import "./Navigation.scss";

interface ComponentProps {
    handleClick: () => void;
}

export default class SideNavigation extends React.Component<ComponentProps> {
    render() {
        return (
            <div className="SideNavigation">
                <div className="Icon" onClick={() => this.props.handleClick()}>
                    <div className="placeholder"></div>
                </div>
            </div>
        );
    }
}