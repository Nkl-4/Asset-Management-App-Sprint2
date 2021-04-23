import Axios from 'axios';

// API URL
const apiUrl = 'http://localhost:8090';

// Sync Action
export const fetchAllUsersSuccess = (users) => {
  return {
    type: 'FETCH_ALL_USERS_SUCCESS',
    users,
  };
};

//Async Action
export const fetchAllUsers = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    // Returns a promise
    return Axios.get(apiUrl + '/admin/users/get/all')
      .then((resp) => {
        // Dispatch another action
        // to consume data
        dispatch(fetchAllUsersSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const fetchUserByIdSuccess = (user) => {
  return {
    type: 'FETCH_USER_BY_ID_SUCCESS',
    payload: user,
  };
};

export const fetchUserById = (userId) => {
  return (dispatch) => {
    return Axios.get(apiUrl + '/admin/users/get/' + userId)
      .then((resp) => {
        console.log(resp.data);
        dispatch(fetchUserByIdSuccess(resp.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createUserSuccess = (user) => {
  return {
    type: 'CREATE_USER_SUCCESS',
    payload: user,
  };
};

export const createUser = (payload) => {
  let data = {
    userName: payload.userName,
    userPassword: payload.userPassword,
    userType: payload.userType,
  };

  return (dispatch) => {
    return Axios.post(apiUrl + '/admin/users', data)
      .then((response) => {
        dispatch(createUserSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const editUserSuccess = (user) => {
  return {
    type: 'CREATE_USER_SUCCESS',
    payload: user,
  };
};

export const editUser = (payload) => {
  let data = {
    userName: payload.userName,
    userPassword: payload.userPassword,
    userType: payload.userType,
  };

  return (dispatch) => {
    return Axios.put(apiUrl + '/admin/users/modify/' + payload.userId, data)
      .then((response) => {
        dispatch(editUserSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const loginSuccess = (user) => {
  localStorage.clear();
  localStorage.user_id = user.userName;
  localStorage.user_type = user.userType;

  // redirection
  if (user.userType !== undefined) {
    if (user.userType === 'ADMIN') window.location.href = '/admin/home';
    else if (user.userType === 'GUSER') window.location.href = '/user/home';
    else if (user.userType === 'WHMGR') window.location.href = '/manager/home';
  }
  return {
    type: 'LOGIN_SUCCESS',
  };
};

export const loginFailure = () => {
  return {
    type: 'LOGIN_FAILURE',
  };
};

export const doLogin = (payload) => {
  let data = {
    userName: payload.username,
    userPassword: payload.password,
  };
  return (dispatch) => {
    return Axios.post(apiUrl + '/admin/login', data)
      .then((response) => {
        console.log(response.data);
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailure());
      });
  };
};
