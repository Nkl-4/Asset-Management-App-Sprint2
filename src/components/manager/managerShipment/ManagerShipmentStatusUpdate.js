import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as shipmentActions from '../../../store/actions/Manager_ShipmentAction';

class ManagerShipmentStatusUpdate extends React.Component {
  componentDidMount() {
    const { shipmentActions, match } = this.props;

    // calling redux function to fetch a particular id
    shipmentActions.ShipmentUpdateStatus(match.params.id);
    this.props.shipmentActions.fetchAllShipment();
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    const { shipments } = this.props;
    return (
      <div>
        <h4>Do you want to change the Shipment Status ?</h4>
        <h6>To DELIVERED</h6>
        <button onClick="window.location.href = '/manager/shipment/status/update/${shipment.shipmentId}' ">
          Update
          {this.props.history.push('/manager/shipment/all')}
        </button>
        <span> </span>
        <button onClick="window.location.href = '/manager/shipment/all';">
          Cancel
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shipments: state.managershipmentReducer.shipmentStatus,
    shipment: state.managershipmentReducer.shipment,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    shipmentActions: bindActionCreators(shipmentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerShipmentStatusUpdate);
