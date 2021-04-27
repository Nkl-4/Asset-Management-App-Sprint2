import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8090';

// Sync Action
export const fetchAllWarehousesSuccess = (warehouses) => {
  return {
    type: 'FETCH_ALL_WAREHOUSES_SUCCESS',
    warehouses,
  };
};

//Async Action
export const fetchAllWarehouses = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl + '/admin/warehouses/get/all')
      .then((resp) => {
        // Dispatch another action
        // to consume data
        dispatch(fetchAllWarehousesSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const fetchWarehouseByIdSuccess = (warehouse) => {
  return {
    type: 'FETCH_WAREHOUSE_BY_ID_SUCCESS',
    payload: warehouse,
  };
};

export const fetchWarehouseById = (whId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/admin/warehouses/get/' + whId)
      .then((resp) => {
        // Handle data with sync action
        dispatch(fetchWarehouseByIdSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createWarehouseSuccess = (warehouse) => {
  return {
    type: 'CREATE_WAREHOUSE_SUCCESS',
    payload: warehouse,
  };
};

export const createWarehouse = (payload) => {
  let data = {
    whId: payload.whId,
    mgrId: payload.mgrId,
    address: {
      location: payload.location,
      subLocation: payload.subLocation,
      state: payload.state,
      country: payload.country,
    },
  };
  return (dispatch) => {
    return Axios.post(apiUrl + '/admin/warehouses', data)
      .then((response) => {
        dispatch(createWarehouseSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
export const updateWarehouseSuccess = (warehouse) => {
  return {
    type: 'UPDATE_WAREHOUSE_SUCCESS',
    payload: warehouse,
  };
};

export const updateWarehouse = (payload) => {
  console.log(payload);
  let data = {
    whId: payload.whId,
    mgrId: payload.mgrId,
    address: {
      location: payload.location,
      subLocation: payload.subLocation,
      state: payload.state,
      country: payload.country,
    },
  };
  console.log(data);
  return (dispatch) => {
    // const config = { headers: {'Content-Type': 'application/json',
    // headers: {"Access-Control-Allow-Origin": "*"}} };
    return Axios.put(apiUrl + '/admin/warehouses/modify/' + payload.whId, data)
      .then((response) => {
        dispatch(updateWarehouseSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
export const fetchDeleteWarehouseSuccess = (warehouses) => {
  return {
    type: 'FETCH_DELETE_WAREHOUSE_SUCCESS',
    payload: warehouses,
  };
};

export const fetchDeleteWarehouse = (whId) => {
  return (dispatch) => {
    return Axios.delete(apiUrl + '/admin/warehouses/delete/' + whId)
      .then((resp) => {
        // Handle data with sync action
        dispatch(fetchDeleteWarehouseSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
