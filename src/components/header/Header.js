import React from 'react';
import './Header.css';

// typing Effect

// Logo
import logo from '../../resources/img/developer-01.svg';


const Header = () => {
    return (
        <div className="contentHeader">
            <div className="logoContent">
                <img src={ logo } alt=""/>
            </div>
            <div className="titleHeader d-flex align-items-center">
                <div className="textTitle border border-danger">
                    <div className="wrapper">
                        <div data-text></div>
                        <span className="item">Hacer un comentario</span>
                        <span className="item">Comentario 2</span>
                    </div>
                    <h1 className="item">SisifoDev</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ab.</p>
                </div>
            </div>
        </div>
    );
}

export default Header;