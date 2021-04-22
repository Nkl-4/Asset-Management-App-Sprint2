import React from 'react';

export default function AdminComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">User Registration</h4>
            <a href="/register" className="stretched-link"></a>
          </div>
        </div>
        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">User DB</h4>
            <a href="/usersList" className="stretched-link"></a>
          </div>
        </div>
        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Report</h4>
            <a href="/report" className="stretched-link"></a>
          </div>
        </div>
      </div>
    </div>
  );
}
