import React from 'react';
import './Seccion.css';

// components for the seccions
import Portafolio from '../portafolio/Portafolio';
import Profiles from '../profiles/Profiles';

// components Prueba
import LifeCycle from '../pruebaComponent/LifeCycle';


class Seccion extends React.Component {
    render() {
        return (
            <div className="contentSeccion">
                <div className="contentPortafolio container">
                    <h4>Seccion</h4>
                    <LifeCycle />
                    <Portafolio />
                </div>
                <div className="contentSecProfiles">
                    <div className="container">
                        <Profiles />
                    </div>
                </div>
            </div>
        );
    }
}

export default Seccion;