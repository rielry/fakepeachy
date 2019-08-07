import React from "react";
import "./Profile.scss";

interface ComponentProps {
    link: string,
    img: string
}

export default class Profile extends React.Component<ComponentProps> {
    render() {
        return (
            <div className="Profile" onClick={() => window.open(this.props.link, "_blank")}>
                <img src={this.props.img}></img>
            </div>
        )
    }
}