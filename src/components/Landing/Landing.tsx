import React from "react";
import "./Landing.scss";
import { TextStyle } from "../../constants/TextStyles";
import StyledText from "../StyledText/StyledText";
import TypeWriter from "../TypeWriter/TypeWriter";
import Store, {StoreProps} from "../../store/store";

class Landing extends React.Component<StoreProps> {
    componentDidMount() {
        setTimeout(function() {
            let enter = document.getElementById("Enter");
            if(enter) {
                enter.style.transform = "translateY(150px)";
                enter.style.transition = "2s";
            }
        }, 0);
        
    }

    render() {
        return (
            <div className="Entrance" id="Entrance">
                <div className="Nameplate">
                    <StyledText style={TextStyle.HEADER}>Riley Jhi</StyledText>
                </div>
                <div className="Enter" id="Enter" onClick={this.slideAway}>
                    <div className="EnterText">
                        <StyledText style={TextStyle.HEADER}>
                            <TypeWriter 
                                text={"enter"} 
                                interval={500}
                            />
                        </StyledText>
                    </div>
                </div>
            </div>
        );
    }

    slideAway = () => {
        let entrance = document.getElementById("Entrance");
        if(entrance) {
            entrance.style.transform = "translateY(-3000px)";
            entrance.style.transition = "3s";
        }
        const {store} = this.props;
        store.set('enterClicked')(true);
    }
}

export default Store.withStore(Landing);