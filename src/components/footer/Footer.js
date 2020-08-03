import React from 'react';
import './Footer.css';


const Footer = (props) => {
    return (
        <footer>
            <h4>Footer</h4>
            <h4>{props.nameWebSite}</h4>
        </footer>
    );
}

export default Footer;