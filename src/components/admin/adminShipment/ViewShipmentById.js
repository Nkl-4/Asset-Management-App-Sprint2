import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as shipmentActions from '../../../store/actions/ShipmentAction';

class ViewShipmentByIdComponent extends React.Component {
  componentDidMount() {
    const { shipmentActions, match } = this.props;
    shipmentActions.fetchShipmentById(match.params.id);
  }
  render() {
    const { shipments } = this.props;
    return (
      <div>
        {shipments !== undefined ? (
          <table border="1">
            <caption>Shipment Detail</caption>
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
          // this.state.usersList.map((user, index) =>
          //     <div>{user.userId} {user.userName} {user.userPassword} {user.userType} </div>)
          <h3>Loading....</h3>
        )}
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
