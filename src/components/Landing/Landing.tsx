import React from "react";
import "./Landing.scss";
import Store, {StoreProps} from "../../store/store";
import Entrance from "../Entrance/Entrance";

class Landing extends React.Component<StoreProps> {
 
    render() {
        return (
            <Entrance handleClick={this.displayHome}/>
        );
    }

    displayHome = () => {

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