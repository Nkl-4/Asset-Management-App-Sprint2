import React from 'react';
import FetchData from './FetchDataFromAPI';
import NavBarComponent from './NavBarComponent';

export default function UsersListComponent() {
  return (
    <div>
      <h2>User DB</h2>
      <NavBarComponent />
      <FetchData />
    </div>
  );
}
