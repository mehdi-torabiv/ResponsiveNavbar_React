import React, { Component } from 'react';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import "./Navbar.scss";
class Navbar extends Component {
    render() {
        return (
            <header className="Navbar">
                <nav className="NavbarNavigation">
                    <div className="NavbarToggleButton">
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className="NavbarLogo">
                        <a href="/">
                            THE LOGO
                        </a>
                    </div>
                    <div className="spacer" />
                    <div className="NavbarNavigationsItems">
                        <ul>
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
