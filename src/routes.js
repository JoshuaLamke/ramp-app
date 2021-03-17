import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import LoginPage from './pages/login'
import DesignPage from './pages/design-page'
import FabricationPage from './pages/fabrication-page'
import AssemblyPage from './pages/assembly-page'
import AdminPage from './pages/admin-page/admin-page'
import AlertPage from './pages/alert-history-page/alert-page'
let Routes = () => {
    return (
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/design" component={DesignPage} />
              <Route exact path="/fabrication" component={FabricationPage} />
              <Route exact path="/assembly-and-test" component={AssemblyPage} />
              <Route exact path="/admin" component={AdminPage} />
              <Route exact path="/alerts" component={AlertPage} />
            </Switch>
          </Router>
        </div>
      );
}
export default Routes;