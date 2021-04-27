const initialState = {
  assets: [],
  asset: undefined,
  newAsset: undefined,
  isSaved: false,
  isUpdated: false,
  isDeleted: false,
};

export default function AssetrReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ALL_ASSETS_SUCCESS':
      return {
        ...state,
        assets: action.assets,
      };
    case 'FETCH_ASSET_BY_ID_SUCCESS':
      return {
        ...state,
        asset: action.payload,
      };
    case 'CREATE_ASSETS_SUCCESS':
      return {
        ...state,
        newAsset: action.payload,
        isSaved: true,
      };
    case 'UPDATE_ASSET_SUCCESS':
      return {
        ...state,
        isUpdated: true,
      };

    case 'FETCH_DELETE_ASSET_SUCCESS':
      return {
        ...state,
        isDeleted: true,
      };

    default:
      return state;
  }
}
