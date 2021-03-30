import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from "./components/Logo.js";
import CreateSurvey from "./components/CreateSurvey.js";
import TakeSurvey from "./components/TakeSurvey.js";
import SwitchButtons from "./SwichButtons.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/createsurvey" exact>
            <Logo />
            <CreateSurvey />
          </Route>
          <Route path="/takesurvey" exact>
            <Logo />
            <TakeSurvey />
          </Route>
          <Route path="/">
            <Logo />
            <SwitchButtons/>
          </Route>
          
         
        </Switch>
      </div>
    </Router>
  );
}


export default App;










