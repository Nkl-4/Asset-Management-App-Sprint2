import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

export default function NotAuthorizedPage() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => setTimeout(() => setRedirect(true), 3000), []);

  return redirect ? (
    <Redirect to="/homeRedirect" />
  ) : (
    <div>
      <center>
        <h2>Not Authorized</h2>
      </center>
    </div>
  );
}
