import './css/App.css';
import './css/components.css'
import Header from './components/Header/Header';
import Sidenavbar from './components/Sidenavbar/Sidenavbar';
import Dashboard from './components/Dashboard/Dashboard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ManageEmployee from './components/Manage/ManageEmployee';
import ManageDepartment from './components/Manage/ManageDepartment';


import Notfound from './components/Notfound';
import AddDepartment from './components/Manage/AddDepartment';
import AddEmployee from './components/Manage/AddEmployee';
import UpdateEmployee from './components/Manage/UpdateEmployee';
import UpdateDepartment from './components/Manage/UpdateDepartment';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <section className="page-main">
          <Sidenavbar />
          <div className="page-main-content">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>

              <Route path="/managedepartments">
                <ManageDepartment />
              </Route>

              <Route path="/manageemployees">
                <ManageEmployee />
              </Route>

              <Route path="/adddepartment">
                <AddDepartment />
              </Route>

              <Route path="/addemployee">
                <AddEmployee />
              </Route>

              <Route path="/updateemployee/:id">
                <UpdateEmployee />
              </Route>

              <Route path="/updatedepartment/:id">
                <UpdateDepartment />
              </Route>

              <Route path="*">
                <Notfound />
              </Route>
            </Switch>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
