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
                        <StyledText style={TextStyle.DISPLAY}>well howdy do :')</StyledText>
                    </div>
                    <div className="Image">
                        <img src={MainImage}></img>
                        <div className="placeholder"></div>
                    </div>
                    <div className="Text">
                        <StyledText style={TextStyle.BODY}>
                            I am an artist specializing in small drawings and paintings inspired by mythology and folklore. My unofficial goal is to be turned into a vampire and meet alients. I hate geese.
                        </StyledText>
                        <StyledText style={TextStyle.BODY}>
                            This website was created with React, TypeScript, and Undux. The site is still under some construction, but please take a look around anyways!
                        </StyledText>

                    </div>
                    <div className="ProfilesWrapper">
                        <div className="Profiles">
                            <SocialMedia img={GitHub} link={"http://www.github.com/rielry"} />
                            <SocialMedia img={LinkedIn} link={"http://www.linkedin.com/in/rileyjhi/"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}