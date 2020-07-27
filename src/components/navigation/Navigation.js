import React from 'react';

const Navigation = (props) => {
    return(
        <div className={ props.background }>
            <div className="container p-2">
                <h3 className="text-white">{ props.titleNav }</h3>
            </div>
        </div>
    );
}

export default Navigation;