import React, { useEffect, useState } from 'react';
import '../../index.css';

export default function FooterComponent() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setUser(localStorage.getItem('user_id'));
  }, [user]);

  return (
    <div className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light shadow  bg-white rounded ">
      <div className="d-flex" id="footerBox">
        {user != undefined ? `Current User : ${user}` : 'Not logged in'}
      </div>
    </div>
  );
}
