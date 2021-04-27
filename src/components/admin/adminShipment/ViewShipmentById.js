import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as shipmentActions from '../../../store/actions/ShipmentAction';

class ViewShipmentByIdComponent extends React.Component {
  componentDidMount() {
    const { shipmentActions, match } = this.props;
    // to call the fetchShipmentById function in shipment action
    shipmentActions.fetchShipmentById(match.params.id);
  }
  render() {
    const { shipments } = this.props;
    return (
      <div className="ViewShipment container-fluid" align="center">
        <div className="container-fluid table-responsive">
          <br></br>
          <h3>SHIPMENT DETAIL</h3>
          <br></br>
          {shipments !== undefined ? (
            <table className="table table-striped table table-bordered table table-hover">
              <thead className="p-3 mb-2 bg-info text-white">
                <tr>
                  <th>Shipment ID</th>
                  <th>Asset ID</th>
                  <th>User ID </th>
                  <th>Shipment Status</th>
                  <th>Source WareHouse ID </th>
                  <th>Destination WareHouse ID </th>
                  <th>ShipmentDate </th>
                  <th>Delivery Date </th>
                </tr>
              </thead>
              <tbody>
                {
                  <tr>
                    <td>{shipments.shipmentId}</td>
                    <td>{shipments.assetId}</td>
                    <td>{shipments.userId}</td>
                    <td>{shipments.status}</td>
                    <td>{shipments.sourceWhId}</td>
                    <td>{shipments.destWhId}</td>
                    <td>{shipments.shipmentDate}</td>
                    <td>{shipments.deliveryDate}</td>
                  </tr>
                }
              </tbody>
            </table>
          ) : (
            <div className="loader"></div>
          )}
          <br></br>
          <div className="text-center">
            <Link to="/admin/shipment/all">
              <button type="button" className="btn btn-secondary">
                Go Back
              </button>
            </Link>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { shipments: state.shipmentReducer.shipments };
}

function mapDispatchToProps(dispatch) {
  return {
    shipmentActions: bindActionCreators(shipmentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewShipmentByIdComponent);
