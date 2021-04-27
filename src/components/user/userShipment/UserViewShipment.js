import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as shipmentActions from '../../../store/actions/User_ShipmentAction';

class UserViewShipmentComponent extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.shipmentActions.fetchAllShipment();
  }

  render() {
    return (
      <div className="ViewShipment container-fluid">
        <div className="container-fluid table-responsive">
          <h3 align="center"> SHIPMENT DETAILS </h3>
          {this.props.shipment !== undefined ? (
            <table className="table table-striped table table-bordered table table-hover">
              <thead className="p-3 mb-2 bg-info text-white">
                <tr>
                  <th>SHIPMENT ID</th>
                  <th>ASSET ID</th>
                  <th>USER ID </th>
                  <th>SHIPMENT STATUS</th>
                  <th>SOURCE WAREHOUSE ID </th>
                  {/* <th>Destination WareHouse ID </th>
                                <th>ShipmentDate </th>
                                <th>Delivery Date </th> */}
                  <th>VIEW SHIPMENT </th>
                </tr>
              </thead>
              <tbody>
                {this.props.shipment.map((shipment) => (
                  <tr key={shipment.shipmentId}>
                    <td>{shipment.shipmentId}</td>
                    <td>{shipment.assetId}</td>
                    <td>{shipment.userId}</td>
                    <td>{shipment.status}</td>
                    <td>{shipment.sourceWhId}</td>
                    {/* <td>{shipment.destWhId}</td>
                                        <td>{shipment.shipmentDate}</td>
                                        <td>{shipment.deliveryDate}</td>
                                         */}
                    <td>
                      <Link to={`/user/shipment/view/${shipment.shipmentId}`}>
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="loader"></div>
          )}
          <div className="text-center">
            <Link to="/homeRedirect">
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
  return { shipment: state.usershipmentReducer.shipment };
}

function mapDispatchToProps(dispatch) {
  return {
    shipmentActions: bindActionCreators(shipmentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserViewShipmentComponent);
