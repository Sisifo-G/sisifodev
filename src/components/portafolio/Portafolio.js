import React from 'react';
import './Portafolio.css';

// portafolioJSON
import json from '../../resources/json/portafolio.json';


const Portafolio = () => {
    let buttonClass = 'btn btn-outline-';

    const portafolios = json.portafolio;

    const getPortafolios = () => {
        return console.log(portafolios)
    }

    return (
        <div className="portafolio">
            <h4>Portafolio</h4>
            <button
                className="btn btn-primary"
                onClick={() => getPortafolios()}>
                Portafolio
            </button>
            <div className="row justify-content-around align-items-center mr-0 ml-0">
                {portafolios.map(muestra => (
                    <div key={muestra.id} className="col-md-5 col-sm-12 col-12">
                        <div className="card mt-2 p-0">
                            <div
                                className="card-header d-flex justify-content-between align-items-center pl-3 pr-3">
                                <h5 className="mb-0">{muestra.nameWedSite}</h5>
                                <button
                                    className={
                                        muestra.develomented === 'Reactjs' ?
                                            buttonClass + 'primary' :
                                            muestra.develomented === 'Sveltejs' ?
                                                buttonClass + 'warning' :
                                                buttonClass + 'success'
                                    }>
                                    {muestra.develomented}
                                </button>
                            </div>
                            <div className="card-body text-center">
                                <h5>{muestra.screenPage}</h5>
                                {muestra.developer.map((desarrolladores, i) => (
                                    <button
                                        key={i}
                                        className="btn btn-outline-info mt-2">
                                        {desarrolladores}
                                    </button>
                                ))}
                            </div>
                            <div className="card-footer">
                                <p className="text-primary m-0">
                                    Aqui va un comentario
                        </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Portafolio;