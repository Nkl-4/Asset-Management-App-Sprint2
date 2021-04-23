/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as warehouseActions from '../../../store/actions/WarehouseActions';

class WarehousebyIdComponent extends React.Component {
  componentDidMount() {
    const { warehouseActions, match } = this.props;
    warehouseActions.fetchWarehouseById(match.params.id);
  }
  render() {
    const { warehouse } = this.props;
    return (
      <div>
        {warehouse !== undefined ? (
          <table border="1">
            <caption>Warehouse Details</caption>
            <thead>
              <tr>
                <th>WAREHOUSE ID</th>
                <th>MANAGER ID</th>
                <th>LOCATION</th>
                <th>SUB LOCATION</th>
                <th>STATE</th>
                <th>COUNTRY</th>
              </tr>
            </thead>
            <tbody>
              {
                <tr>
                  <td>{warehouse.whId}</td>
                  <td>{warehouse.mgrId}</td>
                  <td>{warehouse.address.location}</td>
                  <td>{warehouse.address.subLocation}</td>
                  <td>{warehouse.address.state}</td>
                  <td>{warehouse.address.country}</td>
                </tr>
              }
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
  return { warehouse: state.warehouseReducer.warehouse };
}

function mapDispatchToProps(dispatch) {
  return {
    warehouseActions: bindActionCreators(warehouseActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WarehousebyIdComponent);
