import Shortner from "./Shortner";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Redirector from "./Redirector";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Shortner} />
        <Route exact path='/:urlCode' component={Redirector} />
      </Switch>
    </Router>

  )

}

export default App;
