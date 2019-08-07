import React from "react";
import "./AppBody.scss";
import Store, {StoreProps} from "../../store/store";
import Entrance from "../Pages/Entrance/Entrance";
import {PageTypes} from "../../constants/PageTypes";
import Home from "../Pages/Home/Home";


class AppBody extends React.Component<StoreProps> {
 
    render() {
        const {store} = this.props;
        let pageDisplayed = store.get("pageDisplayed");
        // switch(pageDisplayed) {
        //     case PageTypes.MAIN_PAGE:
        //         return(<Main displayedPanel={store.get("panelDisplayed")}/>);
        //     default:
        //         return (<Entrance handleClick={this.removeNameplate}/>);
        // }
        return(<Home displayedPanel={store.get("panelDisplayed")}/>);

    }

    removeNameplate = () => {
        let entrance = document.getElementById("Entrance");
        entrance!.style.transform = "translateY(-3000px)";
        entrance!.style.transition = "3s";


        const {store} = this.props;
        store.set("pageDisplayed")(PageTypes.MAIN_PAGE);
    }


}

export default Store.withStore(AppBody);