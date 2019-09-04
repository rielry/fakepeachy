import React from "react";
import "./Projects.scss";
import StyledText from "../../../StyledText/StyledText";
import { TextStyle } from "../../../../constants/TextStyles";

interface ComponentProps {
    description: string
    image: string
    link?: string
}

export default class Project extends React.Component<ComponentProps> {
    render() {
        return(
            <div className="Project">
                {this.getImage()}
                <StyledText style={TextStyle.BODY}>{this.props.description}</StyledText>
            </div>  
        )
    }

    getImage() {
        if(this.props.link) {
            return(
                <a href={this.props.link} target="_blank">
                    <img src={this.props.image}/>
                </a>
            );
        } else {
            return (<img src={this.props.image}/>);
        }
    }
}