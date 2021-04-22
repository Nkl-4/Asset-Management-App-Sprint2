import React from 'react';
import { Redirect } from 'react-router';

export default function UserHomePageSwitcher() {
  let currentUser = localStorage.getItem('user_type');

  if (currentUser !== undefined) {
    if (currentUser === 'ADMIN') return <Redirect to="/admin/home" />;
    else if (currentUser === 'GUSER') return <Redirect to="/user/home" />;
    else if (currentUser === 'WHMGR') return <Redirect to="/manager/home" />;
  }
  return <Redirect to="/" />;
}
