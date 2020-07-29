import React from 'react';
import './Profiles.css';

// json developers
import json from '../../resources/json/portafolio.json';

const Profiles = () => {
    const profile = json.developers;
    return (
        <div className="profiles">
            <h4>Profiles</h4>
            <div className="contentProfiles d-flex justify-content-around">
                {profile.map(profile => (
                    <div key={profile.id} className="card col-md-5 pl-0 pr-0">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="m-0">
                                {profile.name}
                            </h5>
                            <button
                                className="btn btn-outline-info">
                                edad: {profile.years === '' ? '?' : profile.years}
                            </button>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>
                                    Lenguaje preferencial: {profile.devOps}
                                </li>
                                {profile.socialWeb.map((social, i) => (
                                    <li key={i}>
                                        gitHub: {social.github}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profiles;