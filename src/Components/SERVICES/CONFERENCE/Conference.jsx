import React from 'react';


import {useHistory} from "react-router-dom";


const Conference = () => {
const history = useHistory();

    return (
        <div>
            This is the Conference page 
            <button onClick={() => history.goBack()}>Go Back</button>
        </div>
    );
}

export default Conference;