const initialState = {
  warehouses: [],
  warehouse: undefined,
  newWarehouse: undefined,
  isSaved: false,
  isUpdated: false,
};

export default function WarehouseReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ALL_WAREHOUSES_SUCCESS':
      return {
        ...state,
        warehouses: action.warehouses,
      };
    case 'FETCH_WAREHOUSE_BY_ID_SUCCESS':
      return {
        ...state,
        warehouse: action.payload,
      };

    case 'CREATE_WAREHOUSE_SUCCESS':
      return {
        ...state,
        newWarehouse: action.payload,
        isSaved: true,
      };
    case 'UPDATE_WAREHOUSE_SUCCESS':
      return {
        ...state,
        isUpdated: true,
      };
    case 'DELETE_WAREHOUSE_SUCCESS':
      return {
        ...state,
        isUpdated: true,
      };

    default:
      return state;
  }
}
