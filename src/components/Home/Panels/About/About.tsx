import React from "react";
import "./About.scss";
import StyledText from "../../../StyledText/StyledText";
import { TextStyle } from "../../../../constants/TextStyles";
import SocialMedia from "./SocialMedia/SocialMedia";
import GitHub from "../../../../constants/Icons/GitHub.png";
import LinkedIn from "../../../../constants/Icons/LinkedIn.png";
import MainImage from "../../../../constants/Images/main.jpg";


export default class About extends React.Component {
    render() {
        return (
            <div className="Panel">
                <div className="Content">
                    <div className="Welcome">
                        <StyledText style={TextStyle.DISPLAY}>Welcome, thanks for stopping by!</StyledText>
                    </div>
                    <div className="Image">
                        <img src={MainImage}></img>
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
                            This website was created with React, TypeScript, and Undux. The site is still under some construction, but please take a look around!
                        </StyledText>
                        
                    </div>
                    <div className="ProfilesWrapper">
                        <div className="Profiles">
                            <SocialMedia img={GitHub} link={"http://www.github.com/rielry"}/>
                            <SocialMedia img={LinkedIn} link={"http://www.linkedin.com/in/rileyjhi/"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}