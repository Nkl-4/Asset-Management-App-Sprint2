const initialState = {
  shipment: [],
  shipments: undefined,
  updateShipment: false,
  shipmentStatus: false,
};

export default function managershipmentReducer(state = initialState, action) {
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
