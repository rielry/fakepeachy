import React from "react";

interface ComponentProps {
    text: string;
    interval: number;
    flicker?: Boolean;
}

interface ComponentState {
    displayed: string;
    index: number;
    flickerOn: Boolean;
}

type TypeWriterProps = ComponentProps;

export default class TypeWriter extends React.Component<TypeWriterProps, ComponentState> {
    interval: number;
    constructor(props: TypeWriterProps) {
        super(props);
        this.state = {
            displayed: "",
            index: 0,
            flickerOn: false
        }
        this.interval = 0;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let index = this.state.index;
            
            if (index < this.props.text.length) {
                let displayed = this.state.displayed + this.props.text[index];
                this.setState({displayed: displayed, index: index+1});
            } else {
                if(this.state.flickerOn) {
                    this.setState({displayed: this.props.text, flickerOn: false});
                } else {
                    this.setState({displayed: this.props.text + "|", flickerOn: true});
                }   
            }
        }, this.props.interval);
        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="TypeWriter">{this.state.displayed}</div>
        );
    }

}