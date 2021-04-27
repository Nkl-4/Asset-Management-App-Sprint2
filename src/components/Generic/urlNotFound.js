import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

export default function urlNotFound() {
  const [redirect, setRedirect] = useState(false);

  // Redirect to homepage after 3s
  useEffect(() => setTimeout(() => setRedirect(true), 4000), []);

  return redirect ? (
    <Redirect to="/homeRedirect" />
  ) : (
    <div className="c">
      <div className="_404">404</div>
      <hr />
      <div className="_1">THE PAGE</div>
      <div className="_2">WAS NOT FOUND</div>
    </div>
  );
}
