import React from 'react';
import './Seccion.css';

// components for the seccions
import Portafolio from '../portafolio/Portafolio';
import Profiles from '../profiles/Profiles';


class Seccion extends React.Component {
    render() {
        return (
            <div className="contentSeccion">
                <div className="container border border-info">
                    <h4>Seccion</h4>
                    <Portafolio />
                    <Profiles />
                </div>
            </div>
        );
    }
}

export default Seccion;