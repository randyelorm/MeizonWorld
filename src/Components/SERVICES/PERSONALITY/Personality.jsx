import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';

import {useHistory} from "react-router-dom";


const Personality = () => {
const history = useHistory();

    return (
        <div>
            This is the personality page 
            <button onClick={() => history.goBack()}>Go Back</button>
        </div>
    );
}

export default Personality;