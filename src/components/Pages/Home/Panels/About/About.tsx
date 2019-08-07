import React from "react";
import "./About.scss";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";


export default class About extends React.Component {
    render() {
        return (
            <div className="About">
                <div className="Content">
                    <div className="Welcome">
                        <StyledText style={TextStyle.DISPLAY}>Welcome, thanks for stopping by!</StyledText>
                    </div>
                    <div className="Image">
                        <div className="placeholder"></div>
                    </div>
                    <div className="Text">
                        <StyledText style={TextStyle.BODY}>
                            Hi there, I'm so happy to see you here!  
                        </StyledText>
                        <StyledText style={TextStyle.BODY}>
                            My name is Riley. I'm a senior at University of Nebraska - Lincoln, studying computer science and studio art.
                            During my spare time, I like to paint, draw, play music, take photos, and of course, code!
                        </StyledText>
                        <StyledText style={TextStyle.BODY}>
                            This website was creating with React, TypeScript, and Undux. Feel free to take a look around!
                        </StyledText>
                    </div>
                </div>
            </div>
        )
    }
}