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
            <div className="styleContent"></div>
            <div className="contentTitle d-flex align-items-center">
                <div className="textTitle d-flex justify-content-end">
                    <div className="titleCard">
                        <h1>
                            <span
                                className="spanSisifo">
                                {props.titleHeader}
                            </span>
                            <span 
                                className="spanDev">
                                Dev
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;