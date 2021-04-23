import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8090';

// Sync Action
export const fetchAllShipmentSucess = (shipment) => {
  return {
    type: 'FETCH_ALL_SHIPMENT_SUCCESS',
    shipment,
  };
};

//Async Action
export const fetchAllShipment = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl + '/admin/shipments/get/all')
      .then((resp) => {
        // Dispatch another action
        // to consume data
        dispatch(fetchAllShipmentSucess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const fetchShipmentByIdSuccess = (shipments) => {
  return {
    type: 'FETCH_SHIPMENT_BY_ID_SUCCESS',
    payload: shipments,
  };
};

export const fetchShipmentById = (shipmentId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/admin/shipments/get/' + shipmentId)
      .then((resp) => {
        // Handle data with sync action
        dispatch(fetchShipmentByIdSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const fetchDeleteShipmentSuccess = (shipments) => {
  return {
    type: 'FETCH_DELETE_SHIPMENT_SUCCESS',
    payload: shipments,
  };
};

export const fetchDeleteShipment = (shipmentId) => {
  return (dispatch) => {
    return Axios.delete(apiUrl + '/admin/shipments/delete/' + shipmentId)
      .then((resp) => {
        // Handle data with sync action
        dispatch(fetchDeleteShipmentSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createShipmentSuccess = (shipment) => {
  return {
    type: 'CREATE_SHIPMENT_SUCCESS',
    payload: shipment,
  };
};

export const createShipment = (payload) => {
  let data = {
    shipmentId: 0,
    assetId: payload.assetId,
    userId: payload.userId,
    status: payload.status,
    sourceWhId: payload.sourceWhId,
    destWhId: payload.destWhId,
    shipmentDate: payload.shipmentDate,
    deliveryDate: payload.deliveryDate,
  };
  return (dispatch) => {
    return Axios.post(apiUrl + '/admin/shipments', data)
      .then((response) => {
        dispatch(createShipmentSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateShipmentSuccess = (shipment) => {
  return {
    type: 'FETCH_UPDATE_SHIPMENT_SUCCESS',
    payload: shipment,
  };
};

export const updateShipment = (payload) => {
  console.log(payload);
  let data = {
    shipmentId: payload.shipmentId,
    assetId: payload.assetId,
    userId: payload.userId,
    status: payload.status,
    sourceWhId: payload.sourceWhId,
    destWhId: payload.destWhId,
    shipmentDate: payload.shipmentDate,
    deliveryDate: payload.deliveryDate,
  };
  console.log(data);
  return (dispatch) => {
    return Axios.put(
      apiUrl + '/admin/shipments/modify/' + payload.shipmentId,
      data
    )
      .then((response) => {
        dispatch(updateShipmentSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const ShipmentUpdateStatusSucess = (shipment) => {
  return {
    type: 'SHIPMENT_STATUS_UPDATED',
    shipment,
  };
};

//Async Action
export const ShipmentUpdateStatus = (shipmentId) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(
      apiUrl + '/admin/shipments/status/delivered?shipmentId=' + shipmentId
    )
      .then((resp) => {
        // Dispatch another action
        // to consume data
        dispatch(ShipmentUpdateStatusSucess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
