import React from 'react';

export default function AdminComponent() {
  return (
    <div className="container-fluid" id="admin-comp">
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

        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Shipments</h4>
            <a href="/shipment/all" className="stretched-link"></a>
          </div>
        </div>

        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Add Shipment</h4>
            <a href="/shipment/add" className="stretched-link"></a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Warehouses</h4>
            <a href="/admin/warehouses/get/all" className="stretched-link"></a>
          </div>
        </div>

        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Add Warehouse</h4>
            <a href="/admin/warehouses" className="stretched-link"></a>
          </div>
        </div>

        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Assets</h4>
            <a href="/admin/assets/get/all" className="stretched-link"></a>
          </div>
        </div>

        <div className="card" id="link_card">
          <div className="card-body">
            <h4 className="card-title">Create Asset</h4>
            <a href="/admin/assets" className="stretched-link"></a>
          </div>
        </div>
      </div>
    </div>
  );
}
