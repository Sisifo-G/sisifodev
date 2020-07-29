import React from 'react';
// import $ from 'jquery';
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
            name: 'Juan'
        }
    }

    handleButtonLogo = e => {
        // e.preventDefault();
        console.log('Hola Mundo');
    }

    render() {
        return (
            <>
                <div className="navbarComponent container d-flex justify-content-between border p-2">
                    <div className="titleLogo d-flex align-items-center">
                        <img src={logo} alt=""/>
                        <a
                        href="#header"
                        onClick={this.handleButtonLogo}>
                            <span className="fontTitle">SisifoDev</span>
                        </a>
                    </div>
                    <nav className="navegation d-flex align-items-center">
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