const initialState = {
  shipment: [],
  shipments: undefined,
};

export default function usershipmentReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ALL_SHIPMENT_SUCCESS':
      return {
        ...state,
        shipment: action.shipment,
      };

    case 'FETCH_SHIPMENT_BY_ID_SUCCESS':
      return {
        ...state,
        shipments: action.payload,
      };

    default:
      return state;
  }
}
