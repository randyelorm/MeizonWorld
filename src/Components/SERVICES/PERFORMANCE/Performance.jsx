import React from 'react';


import {useHistory} from "react-router-dom";


const Performance = () => {
const history = useHistory();

    return (
        <div>
            This is the performance page 
            <button onClick={() => history.goBack()}>Go Back</button>
        </div>
    );
}

export default Performance;
