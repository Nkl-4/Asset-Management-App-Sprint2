import React, { useEffect, useState } from 'react';

export default function FooterComponent() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(localStorage.getItem('user_id'));
  }, [user]);

  return (
    <div className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light px-2 shadow  bg-white rounded ">
      <div className="container-fluid">
        {user != undefined ? `Current User : ${user}` : 'Not logged in'}
      </div>
    </div>
  );
}
