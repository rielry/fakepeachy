import React from "react";
import "./Modal.scss";
import Store, {StoreProps} from "../../store/store";
import StyledText from "../StyledText/StyledText";
import { TextStyle } from "../../constants/TextStyles";

interface ComponentState {
    displayed: Boolean
}

class Modal extends React.Component<StoreProps & {}, ComponentState> {
    constructor(props: StoreProps) {
        super(props);
        this.state = {
            displayed: true
        }
    }

    componentDidMount() {
        if(this.state.displayed) {
            const {store} = this.props;
            store.set("modalDisplayed")(true);
        }
    }

    render() {
        let className = "Blinder";
        if(!this.state.displayed) {
            className="ModalOff"
        }
            return(
                <div className={className}>
                    <div className="Modal">
                        {this.props.children}
                        <div className="Close" onClick={this.handleClick}>
                            <StyledText style={TextStyle.BODY}>
                                CLOSE
                            </StyledText>
                        </div>
                    </div>
                </div>
            )
    }

    handleClick = () => {
        this.setState({displayed: !this.state.displayed});
    }
}

export default Store.withStore(Modal);