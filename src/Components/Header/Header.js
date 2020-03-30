import React, { Component } from 'react';
import "./Header.scss";
import Navbar from "./Navbar/Navbar";
import SideDrawer from './Navbar/SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SideDrawerOpen: false
        }
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { SideDrawerOpen: !prevState.SideDrawerOpen };
        });
    };
    backdropClickHandler = () => {
        this.setState({ SideDrawerOpen: false });
        console.log("[BackDropClickHandler] was clicked!", this.state.sideDrawer);

    };
    render() {
        let backDrop;
        if (this.state.SideDrawerOpen) {
            backDrop = <BackDrop close={this.backdropClickHandler} />
        }
        return (
            <div style={{ height: "100%" }}>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.SideDrawerOpen} />
                {backDrop}
            </div>
        );
    }
}

export default Header;
