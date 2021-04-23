import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as shipmentActions from '../../../store/actions/ShipmentAction';
import { Button } from 'react-bootstrap';

class ViewShipmentComponent extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.shipmentActions.fetchAllShipment();
  }

  render() {
    return (
      <div>
        {this.props.shipment !== undefined ? (
          <table border="1">
            <caption>Shipment Details</caption>
            <thead>
              <tr>
                <th>Shipment ID</th>
                <th>Asset ID</th>
                <th>User ID </th>
                <th>Shipment Status</th>
                <th>Source WareHouse ID </th>
                <th>Destination WareHouse ID </th>
                <th>ShipmentDate </th>
                <th>Delivery Date </th>
                <th>View Shipment </th>
                <th>Edit Shipment </th>
                <th>Delete Shipment </th>
                <th>Update Status</th>
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
                  <td>{shipment.destWhId}</td>
                  <td>{shipment.shipmentDate}</td>
                  <td>{shipment.deliveryDate}</td>

                  <td>
                    <Link to={`/shipment/view/${shipment.shipmentId}`}>
                      View
                    </Link>
                  </td>
                  <td>
                    <Link to={`/shipment/update/${shipment.shipmentId}`}>
                      Update
                    </Link>
                  </td>
                  <td>
                    <Link to={`/shipment/delete/${shipment.shipmentId}`}>
                      Delete
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/shipment/status/update/${shipment.shipmentId}`}
                      disabled={shipment.status === 'DELIVERED' ? true : false}
                    >
                      <Button
                        type="button"
                        className="btn-btn-outline-danger btn-sm"
                        disabled={
                          shipment.status === 'DELIVERED' ? true : false
                        }
                      >
                        Delivered
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>Loading....</h3>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { shipment: state.shipmentReducer.shipment };
}

function mapDispatchToProps(dispatch) {
  return {
    shipmentActions: bindActionCreators(shipmentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewShipmentComponent);
