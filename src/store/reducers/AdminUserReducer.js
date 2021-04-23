const initialState = {
  users: [],
  user: undefined,
  newUser: undefined,
  isAuthUser: undefined,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ALL_USERS_SUCCESS':
      return {
        ...state,
        users: action.users,
      };

    case 'FETCH_USER_BY_ID_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };

    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        newUser: action.payload,
      };

    case 'EDIT_USER_SUCCESS':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthUser: true,
      };

    case 'LOGIN_FAILED':
      return {
        ...state,
        isAuthUser: false,
      };

    default:
      return state;
  }
}
