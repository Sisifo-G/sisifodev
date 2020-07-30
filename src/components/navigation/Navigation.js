import React from 'react';
import $ from 'jquery';
// import { findDOMNode } from 'react-dom';
import './Navigation.css';

// logo
import logo from '../../resources/img/developer-02.svg';


// handleButton = () => {
//     const buttonHandler = findDOMNode(this.myButton);
//     $(buttonHandler).on('click', () => {
//         console.log('Clicked');
//     })
// }

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Juan',
            navbar: false
        }

        this.refNavbar = React.createRef();
        this.refButtonNav = React.createRef();
    }

    // handler to test '<a href={}></a>'
    handleButtonLogo = e => {
        e.preventDefault();
        console.log('Hola Mundo');
    }

    handlerNavBar = (e, refButton) => {
        if (this.state.navbar) {
            $('.itemNavb').animate({
                height: '0',
                opacity: '0'
            }, 400);
            // $('.itemNavb').css("display", "none");

            this.setState({ navbar: false })
        } else {
            // console.log(e);
            $('.itemNavb').animate({
                height: '200px',
                opacity: '1'
            }, 400);
            $('.itemNavb').css("display", "block");

            this.setState({ navbar: true })
        }
    }

    render() {
        return (
            <>
                <div className="navbarComponent container d-flex justify-content-between border p-2">
                    <div className="titleLogo">
                        <img src={logo} alt="" />
                        <a
                            href="#header"
                            onClick={this.handleButtonLogo}>
                            <span className="fontTitle">SisifoDev</span>
                        </a>
                    </div>
                    <nav className="navegation">
                        <button
                            ref={this.refButtonNav}
                            onClick={(e) => { this.handlerNavBar(e, this.refButtonNav) }}
                            className="ButtonIcon btn">
                            <i className="material-icons">dehaze</i>
                        </button>
                        <div className="itemNavb">
                            <li>
                                <button
                                    className="btn">
                                    Inicio
                                </button>
                            </li>
                            <li>
                                <button
                                    className="btn">
                                    Portafolio
                                </button>
                            </li>
                            <li>
                                <button
                                    className="btn">
                                    Social
                                </button>
                            </li>
                            <li>
                                <button
                                    className="btn">
                                    Contactenos
                                </button>
                            </li>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

// const Navigation = (props) => {
//     return(
//         <div className="">
//             <div className="container bg-primary p-2">
//                 <button id="dato" className="btn">{ props.titleNav }</button>
//                 <button className="btn">{ props.titleNav }</button>
//                 <button className="btn">{ props.titleNav }</button>
//                 <button className="btn">{ props.titleNav }</button>
//             </div>
//         </div>
//     );
// }

export default Navigation;