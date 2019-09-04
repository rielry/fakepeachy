import React from "react";
import "./Information.scss";
import StyledText from "../../../StyledText/StyledText";
import { TextStyle } from "../../../../constants/TextStyles";
import Navigation from "../../../Navigation/Navigation";

export default class Information extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="Panel">
                    <div className="Content">
                        <StyledText style={TextStyle.DISPLAY}>Want to know more?</StyledText>
                        <div className="AboutSite">
                            <StyledText style={TextStyle.BODY}>
                                This site was created using ReactJS with TypeScript and Undux.
                                <br/>
                                Check out <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank">this</a> nifty tutorial on React!
                            </StyledText>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}