import React from "react";
import "./About.scss";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";
import Profile from "./Profile/Profile";
import GitHub from "../../../../../constants/Icons/GitHub.png"
import LinkedIn from "../../../../../constants/Icons/LinkedIn.png"


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
                            This website was created with React, TypeScript, and Undux. Please take a look around!
                        </StyledText>
                        
                    </div>
                    <div className="ProfilesWrapper">
                        <div className="Profiles">
                            <Profile img={GitHub} link={"www.github.com/rielry"}/>
                            <Profile img={LinkedIn} link={"www.linkedin.com/in/rileyjhi/"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}