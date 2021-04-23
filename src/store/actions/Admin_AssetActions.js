import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8090';

// Sync Action
export const fetchAllAssetsSuccess = (assets) => {
  return {
    type: 'FETCH_ALL_ASSETS_SUCCESS',
    assets,
  };
};

//Async Action
export const fetchAllAssets = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl + '/admin/assets/get/all')
      .then((resp) => {
        // Dispatch another action
        // to consume data
        dispatch(fetchAllAssetsSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const fetchAssetByIdSuccess = (asset) => {
  return {
    type: 'FETCH_ASSET_BY_ID_SUCCESS',
    payload: asset,
  };
};

export const fetchAssetById = (assetId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/admin/assets/get/' + assetId)
      .then((resp) => {
        // Handle data with sync action
        dispatch(fetchAssetByIdSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createAssetSuccess = (newAsset) => {
  return {
    type: 'CREATE_ASSETS_SUCCESS',
    payload: newAsset,
  };
};

export const createAsset = (payload) => {
  let data = {
    assetId: 0,
    warehouse: {
      whId: payload.whId,
      mgrId: payload.mgrId,
      address: {
        location: payload.location,
        subLocation: payload.subLocation,
        state: payload.state,
        country: payload.country,
      },
    },
    model: payload.model,
    type: payload.type,
    manufacturer: payload.manufacturer,
  };
  return (dispatch) => {
    return Axios.post(apiUrl + '/admin/assets', data)
      .then((response) => {
        dispatch(createAssetSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateAssetSuccess = (asset) => {
  return {
    type: 'UPDATE_ASSET_SUCCESS',
    payload: asset,
  };
};

export const updateAsset = (payload) => {
  console.log(payload);
  let data = {
    assetId: payload.assetId,
    warehouse: {
      whId: payload.whId,
      mgrId: payload.mgrId,
      address: {
        location: payload.location,
        subLocation: payload.subLocation,
        state: payload.state,
        country: payload.country,
      },
    },
    model: payload.model,
    type: payload.type,
    manufacturer: payload.manufacturer,
  };
  return (dispatch) => {
    return Axios.put(apiUrl + '/admin/assets/modify/' + payload.assetId, data)
      .then((response) => {
        dispatch(updateAssetSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const fetchDeleteAssetSuccess = (assets) => {
  return {
    type: 'FETCH_DELETE_ASSET_SUCCESS',
    payload: assets,
  };
};

export const fetchDeleteAsset = (assetId) => {
  return (dispatch) => {
    return Axios.delete(apiUrl + '/admin/assets/delete/' + assetId)
      .then((resp) => {
        // Handle data with sync action
        dispatch(fetchDeleteAssetSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
