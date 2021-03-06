import React from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as shipmentActions from '../../../store/actions/User_ShipmentAction';

class UserViewShipmentByIdComponent extends React.Component {
  componentDidMount() {
    const { shipmentActions, match } = this.props;
    // fetch shipment from redux
    shipmentActions.fetchShipmentById(match.params.id);
  }
  render() {
    const { shipments } = this.props;
    return (
      <div className="ViewShipment container-fluid" align="center">
        <div className="container-fluid table-responsive">
          <h3>SHIPMENT DETAIL</h3>
          <br></br>
          {shipments !== undefined ? (
            // responsive table
            <table className="table table-striped table table-bordered table table-hover">
              <thead className="p-3 mb-2 bg-info text-white">
                <tr>
                  <th>SHIPMENT ID</th>
                  <th>ASSET ID</th>
                  <th>USER ID </th>
                  <th>SHIPMENT STATUS</th>
                  <th>SOURCE WAREHOUSE ID </th>
                  <th>DESTINATION WAREHOUSE ID </th>
                  <th>SHIPMENT DATE </th>
                  <th>DELIVERY DATE </th>
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
            <Link to="/user/shipment/all">
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
  return { shipments: state.usershipmentReducer.shipments };
}

function mapDispatchToProps(dispatch) {
  return {
    shipmentActions: bindActionCreators(shipmentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserViewShipmentByIdComponent);
