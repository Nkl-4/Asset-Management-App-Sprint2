import React from 'react';

export default function ManagerComponent() {
  return (
    <div className="container-fluid" id="admin-comp">
      <div className="row">
        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Assets</h4>
            <a href="/manager/assets/get/all" className="stretched-link"></a>
          </div>
        </div>

        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Shipments</h4>
            <a href="/manager/shipment/all" className="stretched-link"></a>
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
