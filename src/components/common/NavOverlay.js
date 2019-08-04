import React from 'react';
import './NavOverlay.scss';

class NavOverlay extends React.Component {
    render() {
        return (
            <div className={this.props.active}>
                <div className={"nav"}>
                    <div className="nav__content">
                        <ul className="nav__list">
                            <li className="nav__list-item"><a id="homelink" className="hover-target">home</a></li>
                            <li className="nav__list-item"><a id="aboutlink" className="hover-target">about</a></li>
                            <li className="nav__list-item"><a id="skillslink" className="hover-target">skills</a></li>
                            <li className="nav__list-item"><a id="portfoliolink" className="hover-target">portfolio</a></li>
                            <li className="nav__list-item"><a id="contactlink" className="hover-target">contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

export default NavOverlay;