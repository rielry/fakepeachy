import React from "react";
import "./SocialMedia.scss";

interface ComponentProps {
    link: string,
    img: string
}

export default class SocialMedia extends React.Component<ComponentProps> {
    render() {
        return (
            <a href={this.props.link} target="_blank" className="SocialMedia">
                <img src={this.props.img}></img>
            </a>
        )
    }
}