import React from 'react';
import GetAllUsersComponent from './GetAllUsersComponent';
import NavBarComponent from './NavBarComponent';

export default function UsersListComponent() {
  return (
    <div>
      <h2>User DB</h2>
      <NavBarComponent />
      <GetAllUsersComponent />
    </div>
  );
}
