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
import ManagerViewShipment from './components/manager/managerShipment/ManagerViewShipment';
import ManagerViewShipmentById from './components/manager/managerShipment/ManagerViewShipmentById';
import ManagerUpdateShipment from './components/manager/managerShipment/ManagerUpdateShipment';
import AssetListComponentWM from './components/manager/managerAsset/AssetListComponentWM';
import GetAssetByIdComponentWM from './components/manager/managerAsset/GetAssetByIdComponentWM';
import UpdateAssetComponentWM from './components/manager/managerAsset/UpdateAssetComponentWM';
import ManagerShipmentStatusUpdate from './components/manager/managerShipment/ManagerShipmentStatusUpdate';
import AssetListComponentU from './components/user/userAsset/AssetListComponentU';
import GetAssetByIdComponentU from './components/user/userAsset/GetAssetByIdComponentU';
import UserViewShipment from './components/user/userShipment/UserViewShipment';
import UserViewShipmentById from './components/user/userShipment/UserViewShipmentById';
import urlNotFound from './components/Generic/urlNotFound';

var currentUser = localStorage.getItem('user_type');

const Routes = () => (
  <Switch>
    <Route path="/" component={LandingComponent} exact />

    <Route path="/login" component={LoginComponent} />
    <Route path="/signout" component={userSignOut} />
    <Route path="/homeRedirect" component={UserHomePageSwitcher} />

    <Route path={`/admin/register`}>
      {currentUser === 'ADMIN' ? <RegisterComponent /> : <NotAuthorizedPage />}
    </Route>

    <Route path="/admin/usersList">
      {currentUser === 'ADMIN' ? <UsersListComponent /> : <NotAuthorizedPage />}
    </Route>

    <Route
      path={`/admin/getUserByid/:id`}
      component={fetchUserDetailsComponent}
    />

    <Route path={`/admin/admin/deleteUser/:id`}>
      {currentUser === 'ADMIN' ? (
        <DeleteUserByIdComponent />
      ) : (
        <NotAuthorizedPage />
      )}
    </Route>

    <Route
      path={`/admin/modifyUser/:id`}
      render={(props) => <EditUserDataComponent {...props} />}
    />

    <Route path="/admin/home">
      {currentUser === 'ADMIN' ? <AdminComponent /> : <NotAuthorizedPage />}
    </Route>

    <Route path="/admin/report">
      {currentUser === 'ADMIN' ? <ReportComponent /> : <NotAuthorizedPage />}
    </Route>

    {/* ADMIN Shipment */}
    <Route
      path={'/admin/shipment/all'}
      component={ViewShipmentComponent}
      exact
    />

    <Route
      path={'/admin/shipment/view/:id'}
      component={ViewShipmentById}
      exact
    />

    <Route
      path={'/admin/shipment/delete/:id'}
      component={DeleteShipmentComponent}
      exact
    />

    <Route path={'/admin/shipment/add'} exact>
      {currentUser === 'ADMIN' ? (
        <CreateShipmentComponent />
      ) : (
        <NotAuthorizedPage />
      )}
    </Route>

    <Route
      path={`/admin/shipment/update/:id`}
      render={(props) => <UpdateShipment {...props} />}
    />

    <Route
      path={'/admin/shipment/status/update/:id'}
      component={ShipmentStatusUpdate}
      exact
    />

    {/*ADMIN  warehouses */}
    <Route path={`/admin/warehouses`} exact>
      {currentUser === 'ADMIN' ? (
        <CreateWarehouseComponent />
      ) : (
        <NotAuthorizedPage />
      )}
    </Route>

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
    />

    {/* asset */}
    <Route path={`/admin/assets/get/all`} exact>
      {currentUser === 'ADMIN' ? <AssetListComponent /> : <NotAuthorizedPage />}
    </Route>

    <Route
      path={`/admin/assetbyid/:id`}
      component={GetAssetByIdComponent}
      exact
    />

    <Route path={`/admin/assets`} exact>
      {currentUser === 'ADMIN' ? (
        <CreateAssetComponent />
      ) : (
        <NotAuthorizedPage />
      )}
    </Route>

    <Route
      path={`/admin/deleteAsset/:id`}
      component={DeleteAssetByIdComponent}
      exact
    />

    <Route
      path={`/admin/asset/update/:id`}
      component={UpdateAssetComponent}
      exact
    />

    <Route path="/manager/home" component={ManagerComponent}>
      {currentUser === 'WHMGR' ? <ManagerComponent /> : <NotAuthorizedPage />}
    </Route>

    {/* MANAGER */}
    <Route path={`/manager/assets/get/all`} exact>
      {currentUser === 'WHMGR' ? (
        <AssetListComponentWM />
      ) : (
        <NotAuthorizedPage />
      )}
    </Route>

    <Route
      path={`/manager/asset/get/:id`}
      component={GetAssetByIdComponentWM}
      exact
    />

    <Route
      path={`/manager/asset/update/:id`}
      component={UpdateAssetComponentWM}
      exact
    />

    {/* WH Shipment */}
    <Route path={'/manager/shipment/all'} exact>
      {currentUser === 'WHMGR' ? (
        <ManagerViewShipment />
      ) : (
        <NotAuthorizedPage />
      )}
    </Route>

    <Route
      path={'/manager/shipment/view/:id'}
      component={ManagerViewShipmentById}
      exact
    />

    <Route
      path={`/manager/shipment/update/:id`}
      render={(props) => <ManagerUpdateShipment {...props} />}
    />

    <Route
      path={'/manager/shipment/status/update/:id'}
      component={ManagerShipmentStatusUpdate}
      exact
    />

    <Route path="/manager/report">
      {currentUser === 'WHMGR' ? <ReportComponent /> : <NotAuthorizedPage />}
    </Route>

    <Route path="/user/home">
      {currentUser === 'GUSER' ? <UserComponent /> : <NotAuthorizedPage />}
    </Route>

    {/* USER ASSET*/}
    <Route path={`/user/assets/get/all`} exact>
      {currentUser === 'GUSER' ? (
        <AssetListComponentU />
      ) : (
        <NotAuthorizedPage />
      )}
    </Route>

    <Route
      path={`/user/asset/get/:id`}
      component={GetAssetByIdComponentU}
      exact
    />

    {/* USER Shipment */}
    <Route path={'/user/shipment/all'} exact>
      {currentUser === 'GUSER' ? <UserViewShipment /> : <NotAuthorizedPage />}
    </Route>

    <Route
      path={'/user/shipment/view/:id'}
      component={UserViewShipmentById}
      exact
    />
    <Route component={urlNotFound} />
  </Switch>
);

export default Routes;
