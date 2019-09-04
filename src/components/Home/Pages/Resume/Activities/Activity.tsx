import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";

interface ComponentProps {
    title: string,
    entity: string,
    description?: string
    startDate: string,
    endDate?: string
}

export default class Activity extends React.Component<ComponentProps> {
    render() {
        return (
            <div className="Activity">
                <StyledText style={TextStyle.BODY}>{this.props.title}</StyledText>
                <StyledText style={TextStyle.BODY}>{this.props.entity}</StyledText>
                {this.getDates()}
                {this.getDescription()}
            </div>
        )
    }

    getDescription() {
        if(this.props.description) {
            return(<StyledText style={TextStyle.BODY_ITALIC}>{this.props.description}</StyledText>)
        }
    }

    getDates() {
        if(this.props.endDate) {
            return(
                <StyledText style={TextStyle.BODY}>{this.props.startDate} - {this.props.endDate}</StyledText>
            )
        }
        return(
            <StyledText style={TextStyle.BODY}>{this.props.startDate} - Present</StyledText>
        )
    }
}