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
        console.log("clicked");
        const {store} = this.props;
        store.set('enterClicked')(true);
    }

}

export default Store.withStore(Landing);