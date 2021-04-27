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
    return Axios.get(apiUrl + '/user/assets/get/all')
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
    return Axios.get(apiUrl + '/user/assets/get/' + assetId)
      .then((resp) => {
        // Handle data with sync action
        dispatch(fetchAssetByIdSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
