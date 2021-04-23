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

import ViewShipmentComponent from './components/admin/adminShipment/ViewShipment';
import ViewShipmentById from './components/admin/adminShipment/ViewShipmentById';
import DeleteShipmentComponent from './components/admin/adminShipment/DeleteShipment';
import CreateShipmentComponent from './components/admin/adminShipment/CreateShipment';
import UpdateShipment from './components/admin/adminShipment/UpdateShipment';
import ShipmentStatusUpdate from './components/admin/adminShipment/ShipmentStatusUpdate';

import CreateWarehouseComponent from './components/admin/adminWarehouse/CreateWarehouseComponent';
import WarehouseListComponent from './components/admin/adminWarehouse/WarehouseListComponent';
import WarehousebyIdComponent from './components/admin/adminWarehouse/WarehousebyIdComponent';
import DeleteWarehouseComponent from './components/admin/adminWarehouse/DeleteWarehouseComponent';
import UpdateWarehouseComponent from './components/admin/adminWarehouse/UpdateWarehouseComponent';

import AssetListComponent from './components/admin/adminAsset/AssetListComponent';
import GetAssetByIdComponent from './components/admin/adminAsset/GetAssetByIdComponent';
import CreateAssetComponent from './components/admin/adminAsset/CreateAssetComponent';
import DeleteAssetByIdComponent from './components/admin/adminAsset/DeleteAssetByIdComponent';
import UpdateAssetComponent from './components/admin/adminAsset/UpdateAssetComponent';

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
    <Route path="/report" component={ReportComponent} />

    {/* ADMIN Shipment */}
    <Route path={'/shipment/all'} component={ViewShipmentComponent} exact />
    <Route path={'/shipment/view/:id'} component={ViewShipmentById} exact />
    <Route
      path={'/shipment/delete/:id'}
      component={DeleteShipmentComponent}
      exact
    />
    <Route path={'/shipment/add'} component={CreateShipmentComponent} exact />
    <Route
      path={`/shipment/update/:id`}
      render={(props) => <UpdateShipment {...props} />}
    />
    <Route
      path={'/shipment/status/update/:id'}
      component={ShipmentStatusUpdate}
      exact
    />

    {/*  warehouses */}
    <Route
      path={`/admin/warehouses`}
      component={CreateWarehouseComponent}
      exact
    />
    <Route
      path={'/admin/warehouses/get/all'}
      component={WarehouseListComponent}
      exact
    />
    <Route
      path={`/admin/warehouses/get/:id`}
      component={WarehousebyIdComponent}
      exact
    />
    <Route
      path={`/admin/warehouses/modify/:id`}
      component={UpdateWarehouseComponent}
      exact
    />
    <Route
      path={`/admin/warehouses/delete/:id`}
      component={DeleteWarehouseComponent}
      exact
    />

    {/* asset */}
    <Route
      path={`/admin/assets/get/all`}
      component={AssetListComponent}
      exact
    />
    <Route path={`/assetbyid/:id`} component={GetAssetByIdComponent} exact />
    <Route path={`/admin/assets`} component={CreateAssetComponent} exact />
    <Route
      path={`/deleteAsset/:id`}
      component={DeleteAssetByIdComponent}
      exact
    />
    <Route
      path={`/admin/asset/update/:id`}
      component={UpdateAssetComponent}
      exact
    />
    <Route path="/user/home" component={UserComponent} />
    <Route path="/manager/home" component={ManagerComponent} />
  </Switch>
);

export default Routes;
