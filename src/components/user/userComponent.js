import React from 'react';

export default function UserComponent() {
  return (
    <div className="container-fluid" id="admin-comp">
      <div className="row">
        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Assets</h4>
            <a href="/user/assets/get/all" className="stretched-link"></a>
          </div>
        </div>

        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Shipments</h4>
            <a href="/user/shipment/all" className="stretched-link"></a>
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
