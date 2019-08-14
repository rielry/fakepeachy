import React from "react";
import "./Art.scss";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";
import Card from "./Card/Card";

export default class Art extends React.Component {
    render() {
        return(
            <div className="Art">
                <div className="Content">
                    <div className="Information">
                        {/* <div className="GeneralInfo">
                            <StyledText style={TextStyle.HEADER}>Art</StyledText>
                        </div> */}
                        <div className="DisplayedInfo">
                            <div className="DisplayedTitle">
                                <StyledText style={TextStyle.LABEL}>Title</StyledText>
                            </div>
                            <div className="DisplayedTextMedium">
                                <StyledText style={TextStyle.BODY}>Medium goes here</StyledText>
                            </div>
                            <div className="DisplayedTextOthers">
                                <StyledText style={TextStyle.BODY}>This is a quick description of the work</StyledText>
                            </div>
                        </div>
                    </div>
                    <div className="Display">
                        <div className="Canvas"></div>
                    </div>
                    <div className="Gallery">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        )
    }
}