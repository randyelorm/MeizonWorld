import React from 'react';


import {useHistory} from "react-router-dom";


const Communication = () => {
const history = useHistory();

    return (
        <div>
            This is the communication page 
            <button onClick={() => history.goBack()}>Go Back</button>
        </div>
    );
}

export default Communication;
