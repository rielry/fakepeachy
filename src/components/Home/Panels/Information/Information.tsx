import React from "react";
import "./Information.scss";
import StyledText from "../../../StyledText/StyledText";
import { TextStyle } from "../../../../constants/TextStyles";

export default class Information extends React.Component {
    render() {
        return(
            <div className="Panel">
                <div className="Content">
                    <StyledText style={TextStyle.DISPLAY}>What did you use to make this site?</StyledText>
                    <div className="AboutSite">
                        <StyledText style={TextStyle.BODY}>
                            This site was created using ReactJS and Undux. It is hosted on a vps (virtual private server), and run on an nginx server. 
                            A basic knowledge of HTML/CSS, TypeScript/JavaScript, and comfort with command line interfaces is required. I recommend using SASS as well.  
                            <br/><br/>
                            Check out these tutorials: 
                            <br/>
                            <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank">React tutorial</a>
                            <br/>
                            <a href="https://medium.com/@timmykko/deploying-create-react-app-with-nginx-and-ubuntu-e6fe83c5e9e7" target="_blank">How to deploy</a>
                        </StyledText>
                        <br/><br/>
                        <StyledText style={TextStyle.DISPLAY}>What does snail-ko mean?</StyledText>
                        <StyledText style={TextStyle.BODY}>I don't know! It was originally Snail Co. (like Snail Company), but snail-co was taken! So I settled for second best 😅</StyledText>
                        <br/><br/>
                        <StyledText style={TextStyle.DISPLAY}>What's the best way to contact you?</StyledText>
                        <StyledText style={TextStyle.BODY}>You can contact me through my email address: riley.jhi@gmail.com</StyledText>
                        <br/><br/>
                        <StyledText style={TextStyle.DISPLAY}>Fonts used</StyledText>
                        <StyledText style={TextStyle.BODY}>These fonts are all available on Google Fonts</StyledText>
                        <br/>
                        <div className="FontsUsed">
                            <StyledText style={TextStyle.HEADER}>Josefin Slab</StyledText>
                            <StyledText style={TextStyle.DISPLAY}>Raleway Dots</StyledText>
                            <StyledText style={TextStyle.BODY}>Quicksand</StyledText>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}