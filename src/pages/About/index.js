import React, { useEffect } from 'react';

import {version} from '../../services/version';


function About(props) {


    const [state, setState] = React.useState({
        api: '1.0.0.0'
    });


    useEffect(() => {
        version()
            .then( data => setState({ "api": data.version }))
            .catch( (error) => setState({ "isvalid": false, "errorMessage": error }))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
      <div>{state.api}</div>
    );


}   


export default About;