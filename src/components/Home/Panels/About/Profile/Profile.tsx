import React from "react";
import "./Profile.scss";

interface ComponentProps {
    link: string,
    img: string
}

export default class Profile extends React.Component<ComponentProps> {
    render() {
        return (
            <a href={this.props.link} className="Profile">
                <img src={this.props.img}></img>
            </a>
        )
    }
}