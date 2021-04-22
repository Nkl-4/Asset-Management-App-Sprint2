import DeleteUserByIdComponent from './components/DeleteUserByIdComponent';
import EditUserDataComponent from './components/EditUserDataComponent';
import fetchUserDetailsComponent from './components/fetchUserDetailsComponent';
import LandingComponent from './components/LandingComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import UsersListComponent from './components/UsersListComponent';
import AdminComponent from './components/adminComponent';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserComponent from './components/userComponent';
import ManagerComponent from './components/managerComponent';
import userSignOut from './components/user/userSignOut';
import ReportComponent from './components/report/reportComponent';
import UserHomePageSwitcher from './components/userHomePageSwitcher';
import NotAuthorizedPage from './components/notAuthorizedPage';

var currentUser = localStorage.getItem('user_type');

const Routes = () => (
  <Switch>
    <Route path="/" component={LandingComponent} exact />

    <Route path="/login" component={LoginComponent} />
    <Route path="/signout" component={userSignOut} />
    <Route path="/homeRedirect" component={UserHomePageSwitcher} />

    <Route path={`/register`} component={RegisterComponent} />
    <Route path="/usersList" component={UsersListComponent} />
    <Route path={`/getUserByid/:id`} component={fetchUserDetailsComponent} />
    <Route path={`/deleteUser/:id`} component={DeleteUserByIdComponent} />
    <Route
      path={`/modifyUser/:id`}
      render={(props) => <EditUserDataComponent {...props} />}
    />
    <Route path="/admin/home">
      {currentUser === 'ADMIN' ? <AdminComponent /> : <NotAuthorizedPage />}
    </Route>
    <Route path="/user/home" component={UserComponent} />
    <Route path="/manager/home" component={ManagerComponent} />

    <Route path="/report" component={ReportComponent} />
  </Switch>
);

export default Routes;
