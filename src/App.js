import List from "./components/List";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/list'>
          <List/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
