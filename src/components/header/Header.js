import React from 'react';
import './Header.css';

// Logo
import logo from '../../resources/img/developer-01.svg';


const Header = (props) => {
    return (
        <div id="header" className="contentHeader">
            <div className="logoContent">
                <img src={logo} alt="" draggable="false" />
            </div>
            <div className="titleHeader d-flex align-items-center">
                <div className="textTitle">
                    <h1>{ props.titleHeader }</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;