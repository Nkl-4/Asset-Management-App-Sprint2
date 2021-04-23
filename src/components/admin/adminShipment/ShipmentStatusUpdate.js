/* eslint-disable no-unused-vars */
import React from 'react';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as shipmentActions from '../../../store/actions/ShipmentAction';

class ShipmentStatusUpdate extends React.Component {
  componentDidMount() {
    const { shipmentActions, match } = this.props;
    shipmentActions.ShipmentUpdateStatus(match.params.id);
  }
  render() {
    const { shipments } = this.props;
    return (
      <div>
        <h4>Do you want to change the Shipment Status ?</h4>
        <h6>To DELIVERED</h6>
        <button onClick="window.location.href = '/shipment/status/update/${shipment.shipmentId}'">
          Update
          {this.props.history.push('/shipment/all')}
          {/* return <Redirect to='/shipment/all'/> */}
        </button>
        <span> </span>
        <button onClick="window.location.href = '/shipment/all';">
          Cancel
        </button>
      </div>
      // window.location.href = "/shipment/all"   <Link to={`/shipment/status/update/${shipment.shipmentId}`}>
    );
  }
}

function mapStateToProps(state) {
  return { shipments: state.shipmentReducer.shipmentStatus };
}

function mapDispatchToProps(dispatch) {
  return {
    shipmentActions: bindActionCreators(shipmentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShipmentStatusUpdate);
