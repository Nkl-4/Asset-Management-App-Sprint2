import { combineReducers } from 'redux';
import userReducer from './AdminUserReducer';
import shipmentReducer from './ShipmentReducer';
import managershipmentReducer from './Manager_ShipmentReducer';
import usershipmentReducer from './User_ShipmentReducer';
import adminassetReducer from './Admin_AssetReducer';
import managerassetReducer from './Manager_AssetReducer';
import guserassetReducer from './User_AssetReducer';
import warehouseReducer from './WarehouseReducer';

const rootReducer = combineReducers({
  userReducer,
  shipmentReducer,
  managershipmentReducer,
  usershipmentReducer,
  adminassetReducer,
  managerassetReducer,
  guserassetReducer,
  warehouseReducer,
});

export default rootReducer;
