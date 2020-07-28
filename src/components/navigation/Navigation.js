import React from 'react';
import $ from 'jquery';
import './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Juan'
        }
    }

    handleButton = () => {
        $('.dato').on('click', () => {
            console.log('Clicked');
        })
    }

    render() {
        return (
            <div className="">
                <div className="container bg-primary p-2">
                    <button id="dato" className="btn dato">{this.props.titleNav}</button>
                    <button className="btn">{this.props.titleNav}</button>
                    <button className="btn">{this.props.titleNav}</button>
                    <button className="btn">{this.props.titleNav}</button>
                </div>
            </div>
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