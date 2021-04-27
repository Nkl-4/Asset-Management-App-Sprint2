import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as shipmentActions from '../../../store/actions/ShipmentAction';
import { Redirect } from 'react-router';

class ShipmentStatusUpdate extends React.Component {
  componentDidMount() {
    const { shipmentActions, match } = this.props;
    shipmentActions.ShipmentUpdateStatus(match.params.id);
    this.props.shipmentActions.fetchAllShipment();
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    const { shipments } = this.props;
    return <Redirect to="/admin/shipment/all" />;
  }
}

function mapStateToProps(state) {
  return {
    shipments: state.shipmentReducer.shipmentStatus,
    shipment: state.shipmentReducer.shipment,
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
)(ShipmentStatusUpdate);
