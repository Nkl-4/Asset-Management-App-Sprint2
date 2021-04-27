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
    return Axios.get(apiUrl + '/user/shipments/get/all')
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
    return Axios.get(apiUrl + '/user/shipments/get/' + shipmentId)
      .then((resp) => {
        // Handle data with sync action
        dispatch(fetchShipmentByIdSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
