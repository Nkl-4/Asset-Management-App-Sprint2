/* eslint-disable no-unused-vars */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as shipmentActions from '../../../store/actions/ShipmentAction';

class DeleteShipmentComponent extends React.Component {
  componentDidMount() {
    const { shipmentActions, match } = this.props;

    // to call fetchDeleteShipment method in shipment actions
    shipmentActions.fetchDeleteShipment(match.params.id);
  }
  render() {
    const { shipments } = this.props;

    // to redirect after deleting shipment
    return (window.location.href = '/admin/shipment/all');
  }
}

function mapStateToProps(state) {
  return { shipments: state.shipmentReducer.delshipment };
}

function mapDispatchToProps(dispatch) {
  return {
    shipmentActions: bindActionCreators(shipmentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteShipmentComponent);
