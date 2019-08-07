import React from "react";

interface ComponentProps {
    text: string;
    interval: number;
    flicker?: number;
}

interface ComponentState {
    displayed: string;
    index: number;
    flickerOn: Boolean;
    flickerCount: number;
}

type TypeWriterProps = ComponentProps;

export default class TypeWriter extends React.Component<TypeWriterProps, ComponentState> {
    interval: number;
    constructor(props: TypeWriterProps) {
        super(props);
        this.state = {
            displayed: "",
            index: 0,
            flickerOn: false,
            flickerCount: 0
        }
        this.interval = 0;
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            if(this.props.flicker) {
                let flickerCount = this.state.flickerCount;
                if(flickerCount < this.props.flicker) {
                    if(this.state.flickerOn) {
                        this.setState({displayed: "", flickerOn: false, flickerCount: flickerCount+1});
                    } else {
                        this.setState({displayed: "|", flickerOn: true,flickerCount: flickerCount+1});
                    }   
                } else {
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
                }
            } else {
                let index = this.state.index;
                
                if (index < this.props.text.length) {
                    let displayed = this.state.displayed + this.props.text[index];
                    this.setState({displayed: displayed, index: index+1});
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