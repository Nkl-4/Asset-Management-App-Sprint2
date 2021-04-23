import DeleteUserByIdComponent from './components/admin/adminUser/DeleteUserByIdComponent';
import EditUserDataComponent from './components/admin/adminUser/EditUserDataComponent';
import fetchUserDetailsComponent from './components/admin/adminUser/fetchUserDetailsComponent';
import LandingComponent from './components/Generic/LandingComponent';
import LoginComponent from './components/Generic/LoginComponent';
import RegisterComponent from './components/admin/adminUser/RegisterComponent';
import UsersListComponent from './components/admin/adminUser/UsersListComponent';
import AdminComponent from './components/admin/adminComponent';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserComponent from './components/user/userComponent';
import ManagerComponent from './components/manager/managerComponent';
import userSignOut from './components/Generic/userSignOut';
import ReportComponent from './components/report/reportComponent';
import UserHomePageSwitcher from './components/Generic/userHomePageSwitcher';
import NotAuthorizedPage from './components/Generic/notAuthorizedPage';

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
