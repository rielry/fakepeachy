import React from "react";
import "./Main.scss";
import Navigation from "../../Navigation/Navigation";

export default class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Navigation/>
            </div>
        )
    }
}