import React from 'react';
import './Profiles.css';

// json developers
import json from '../../resources/json/portafolio.json';

// img.svg
import imgLogo from '../../resources/img/seccionIcons/nature.svg';
import imgPortada from '../../resources/img/developer-02.svg';


const Profiles = () => {
    const profile = json.developers;
    return (
        <div className="profiles">
            <h4>Desarrolladores</h4>
            <div className="contentProfiles row justify-content-around mr-0 ml-0">
                {profile.map(profile => (
                    <div key={profile.id} className="col-md-5 col-sm-12 col-12">
                        <div className="cardProfile">
                            <div className="imgProfile">
                                <div className="imgPortada">
                                    <img src={imgPortada} alt=""/>
                                </div>
                                <div className="contentImgLogo">
                                    <img className="imgLogo" src={imgLogo} alt=""/>
                                </div>
                            </div>
                            <div className="contentInfoProfile">
                                <div className="textContentProf">
                                    <div className="textTitleProfile">
                                        <h5>{profile.name}</h5>
                                        <span>Preferencia: <code>{profile.devOps}</code></span>
                                    </div>
                                    <div className="textUrl">
                                        <ul>
                                            {profile.socialWeb.map((socialWebs, index) => (
                                                <li key={index}>
                                                    github: {socialWebs.github}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profiles;