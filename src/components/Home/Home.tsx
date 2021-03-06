import React from "react";
import "./Home.scss";
import Navigation from "../Navigation/Navigation";
import { PanelTypes } from "../../constants/PageTypes";
import About from "./Panels/About/About";
import Art from "./Panels/Art/Art";
import Resume from "./Panels/Resume/Resume";
import SideNavigation from "../Navigation/SideNavigation";
import Store, { StoreProps } from "../../store/store";
import Information from "./Panels/Information/Information";
import Projects from "./Panels/Projects/Projects";

interface ComponentProps {
    displayedPanel: PanelTypes;
}

interface ComponentState {
    fullNav: Boolean
}

class Home extends React.Component<StoreProps & ComponentProps, ComponentState> {
    constructor(props: ComponentProps & StoreProps) {
        super(props);
        this.state = {
            fullNav: true
        }
    }

    resize = () => this.forceUpdate()

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        return (
            this.renderHome()
        )
    }

    renderHome() {
        const {store} = this.props;
        if(store.get("modalDisplayed")) {
            let style = {
                overflow: "hidden"
            }
            return(
                <div className="Home" style={style}>
                    {this.getNavigation()}
                    {this.getPanelContent()}
                </div>
            );
        } 
        return (
            <div className="Home">
                {this.getNavigation()}
                {this.getPanelContent()}
            </div>
        )
    }

    getNavigation = () => {
        if(window.innerWidth > 600) {
            if(!this.state.fullNav) { 
                return (<SideNavigation handleClick={this.toggleNavigation}/>);
            }
        }
        return (<Navigation handleClick={this.toggleNavigation}/>);
    }

    toggleNavigation = () => {
        if(!this.state.fullNav) {
            const {store} = this.props;
            store.set("panelDisplayed")(PanelTypes.ABOUT);
        }
        this.setState({
            fullNav: !this.state.fullNav
        })
    }

    getPanelContent() {
        switch(this.props.displayedPanel) {
            case PanelTypes.ART:
                return(<Art/>);
            case PanelTypes.PROJECTS:
                return(<Projects/>);
            case PanelTypes.RESUME:
                return(<Resume/>);
            case PanelTypes.INFO:
                return(<Information/>);
            default:
                return (<About><Navigation handleClick={this.toggleNavigation}/></About>)
        }
    }
}
export default Store.withStore(Home);