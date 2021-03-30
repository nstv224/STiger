import React, { Component } from 'react';
import {Link} from "react-router-dom";
class SwitchButtons extends Component {
    render() {
        return (
            <div>
                <Link to="/createsurvey"><button className="btn btn-outline-primary m-4 p-2">Create Survey</button></Link>
                <Link to="/takesurvey"><button className="btn btn-outline-primary m-4 p-2" >Take Survey</button></Link>
            </div>
        );
    }
}

export default SwitchButtons;