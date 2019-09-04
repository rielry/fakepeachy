import React, { Component } from "react";
import "./Skill.scss";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";

interface ComponentProps {
    skill: string,
    level: number
}

export default class Skill extends React.Component<ComponentProps> {
    render() {
        return(
            <div className="Skill">
                <StyledText style={TextStyle.BODY}>{this.props.skill}</StyledText>
                <div className="Level">
                    {this.getSkillLevel()}
                </div>
            </div>
        )
    }

    getSkillLevel() {
        let level: JSX.Element[] = [];
        let i;
        for(i = 0; i < this.props.level; i++) {
            level.push(<div className="Point"></div>)
        }

        for(let j = i; j < 5; j++) {
            level.push(<div className="PointPlaceholder"></div>)
        }
        
        return level;
    }
}