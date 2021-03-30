import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
  } from "react-router-dom";

export default class Links extends Component {
  render() {
    return (
      <div className='btnlink'>
        <Link to="/createsurvey">
          <button className='btn btn-danger btn-lg m-4 p-2'>Create Survey</button>
        </Link>

        <Link to="/takesurvey">
          <button className='btn btn-danger btn-lg m-4 p-2'>Take Survey</button>
        </Link>
      </div>
    );
  }
}
