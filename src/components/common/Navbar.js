import React from 'react';
import './Navbar.scss';

import NavOverlay from './NavOverlay';

class Navbar extends React.Component {
    state = { menuOpen: false };

    OnMenuToggle = (event) => {
        this.state.menuOpen ? this.setState({ menuOpen: false }) : this.setState({ menuOpen: true });
    }

    render() {
        const navActive = this.state.menuOpen;
        let active;
        if (navActive)
            active = 'nav-active';
        else
            active = '';

        return (
            <div>
                <div className="topBar">
                    <div className="topBarHolder">
                        <div id="logo">
                            <a href="https://dariansampare.ca">
                                <h5>dariansampare.ca</h5>
                            </a>
                        </div>

                        <div className={"nav-but-wrap " + active} onClick={this.OnMenuToggle}>
                            <div className="menu-icon hover-target">
                                <span className="menu-icon__line menu-icon__line-left"></span>
                                <span className="menu-icon__line"></span>
                                <span className="menu-icon__line menu-icon__line-right"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <NavOverlay active={active} />

            </div>
        )
    }
}

export default Navbar;