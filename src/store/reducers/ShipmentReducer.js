const initialState = {
  shipment: [],
  shipments: undefined,
  delshipment: {},
  newShipment: undefined,
  isSaved: false,
  updateShipment: false,
  shipmentStatus: false,
};

export default function shipmentReducer(state = initialState, action) {
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

    case 'FETCH_DELETE_SHIPMENT_SUCCESS':
      return {
        ...state,
        delshipment: action.payload,
      };

    case 'CREATE_SHIPMENT_SUCCESS':
      return {
        ...state,
        newShipment: action.payload,
        isSaved: true,
      };

    case 'FETCH_UPDATE_SHIPMENT_SUCCESS':
      return {
        ...state,
        updateShipment: true,
      };

    case 'SHIPMENT_STATUS_UPDATED':
      return {
        ...state,
        shipmentStatus: true,
      };

    default:
      return state;
  }
}
