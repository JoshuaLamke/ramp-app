import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DesignPage from './pages/design-page'
import FabricationPage from './pages/fabrication-page'
import AssemblyPage from './pages/assembly-page'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DesignPage} />
        <Route exact path="/fabrication" component={FabricationPage} />
        <Route exact path="/assembly-and-test" component={AssemblyPage} />
      </Switch>
    </Router>
  );
}

export default App;
