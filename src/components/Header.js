import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="https://raw.githubusercontent.com/anshumanyadav254/survey-tiger/master/src/assets/images/logo.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Header;
