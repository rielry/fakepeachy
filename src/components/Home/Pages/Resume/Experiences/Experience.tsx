import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";

interface ComponentProps {
    title: string,
    employer: string,
    startDate: string,
    endDate?: string,
    location: string,
    description: string[]
}

export default class Experience extends React.Component<ComponentProps> {
    render() {
        return (
            <div className="Experience">
                <div className="AboutExperience">
                    <StyledText style={TextStyle.BODY}>{this.props.title}</StyledText>
                    <StyledText style={TextStyle.BODY}>{this.props.employer}</StyledText>
                    {this.getDates()}
                    <StyledText style={TextStyle.BODY}>{this.props.location}</StyledText>
                </div>
                <ul className="Description">
                    {this.getDescription()}
                </ul>
            </div>
        )
    }

    getDescription() {
        let description: JSX.Element[] = [];
        for(let desc of this.props.description) {
            description.push(
                <li>
                    <StyledText style={TextStyle.BODY_ITALIC}>{desc}</StyledText>
                </li>
            )
        }
        return description;
    }

    getDates() {
        if(this.props.endDate) {
            return (
                <StyledText style={TextStyle.BODY}>{this.props.startDate} - {this.props.endDate}</StyledText>
            )
        }
        return (
            <StyledText style={TextStyle.BODY}>{this.props.startDate} - Present</StyledText>
        )
    }
}