import React from "react";
import "./StyledText.scss";
import { TextStyle } from "../../constants/TextStyles";

interface ComponentProps {
    style: TextStyle
}

type StyledTextProps = ComponentProps;

export default class StyledText extends React.Component<StyledTextProps> {
    render() {
        switch(this.props.style) {
            case TextStyle.HEADER:
                return(<div className="StyledText Header">{this.props.children}</div>);
            case TextStyle.LABEL:
                return(<div className="StyledText Label">{this.props.children}</div>);
            case TextStyle.DISPLAY:
                return(<div className="StyledText Display">{this.props.children}</div>);
            case TextStyle.BODY_ITALIC:
                return (<div className="StyledText BodyItalic">{this.props.children}</div>)
            default:
                return(<div className="StyledText Body">{this.props.children}</div>);
        }
    }
}