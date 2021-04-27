import React from 'react';
import GetAllUsersComponent from './GetAllUsersComponent';

export default function UsersListComponent() {
  return (
    <div>
      <center>
        <h3
          style={{
            backgroundColor: 'rgba(25, 55, 77)',
            width: '300px',
            color: 'white',
          }}
        >
          USER DATABASE
        </h3>
      </center>
      <br></br>
      <GetAllUsersComponent />
    </div>
  );
}
