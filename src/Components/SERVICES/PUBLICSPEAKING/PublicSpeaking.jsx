import React from 'react';


import {useHistory} from "react-router-dom";


const PublicSpeaking = () => {
const history = useHistory();

    return (
        <div>
            This is the PublicSpeaking page 
            <button onClick={() => history.goBack()}>Go Back</button>
        </div>
    );
}

export default PublicSpeaking;