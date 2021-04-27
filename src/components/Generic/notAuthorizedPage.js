import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import image1 from '../../img/notauth.jpg';

export default function NotAuthorizedPage() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => setTimeout(() => setRedirect(true), 3000), []);

  return redirect ? (
    <Redirect to="/homeRedirect" />
  ) : (
    <div>
      <center>
        <img src={image1} />
      </center>
    </div>
  );
}
