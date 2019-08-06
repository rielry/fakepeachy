import React from "react";
import "./Home.scss";
import Store, {StoreProps} from "../../store/store";
import Entrance from "../Pages/Entrance/Entrance";
import {PageTypes} from "../../constants/PageTypes";
import Main from "../Pages/Main/Main";


class Home extends React.Component<StoreProps> {
 
    render() {
        const {store} = this.props;
        let pageDisplayed = store.get("pageDisplayed");
        // switch(pageDisplayed) {
        //     case PageTypes.MAIN_PAGE:
        //         return(<Main/>);
        //     default:
        //         return (<Entrance handleClick={this.removeNameplate}/>);
        // }
        return(<Main/>);

    }

    removeNameplate = () => {
        let entrance = document.getElementById("Entrance");
        entrance!.style.transform = "translateY(-3000px)";
        entrance!.style.transition = "3s";


        const {store} = this.props;
        store.set("pageDisplayed")(PageTypes.MAIN_PAGE);
    }


}

export default Store.withStore(Home);