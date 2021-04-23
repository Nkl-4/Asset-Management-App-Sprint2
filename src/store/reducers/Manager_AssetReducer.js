const initialState = {
  assets: [],
  asset: undefined,
  newAsset: undefined,
  isSaved: false,
  isUpdated: false,
};

export default function AssetReducer(state = initialState, action) {
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
    case 'UPDATE_ASSET_SUCCESS':
      return {
        ...state,
        isUpdated: true,
      };

    default:
      return state;
  }
}
