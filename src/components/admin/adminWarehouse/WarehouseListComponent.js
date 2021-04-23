import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as warehouseActions from '../../../store/actions/WarehouseActions';
import { Link } from 'react-router-dom';

class WarehouseListComponent extends Component {
  componentDidMount() {
    this.props.warehouseActions.fetchAllWarehouses();
  }
  render() {
    return (
      <div>
        {
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
                <th>VIEW DETAILS</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {this.props.warehouses !== undefined ? (
                this.props.warehouses.map((warehouse) => (
                  <tr key={warehouse.whId}>
                    <td>{warehouse.whId}</td>
                    <td>{warehouse.mgrId}</td>
                    <td>{warehouse.address.location}</td>
                    <td>{warehouse.address.subLocation}</td>
                    <td>{warehouse.address.state}</td>
                    <td>{warehouse.address.country}</td>
                    <td>
                      <Link to={`/admin/warehouses/get/${warehouse.whId}`}>
                        View
                      </Link>
                    </td>
                    <td>
                      {' '}
                      <Link to={`/admin/warehouses/modify/${warehouse.whId}`}>
                        Update
                      </Link>
                    </td>
                    <td>
                      <Link to={`/admin/warehouses/delete/${warehouse.whId}`}>
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <h3>Loading....</h3>
              )}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { warehouses: state.warehouseReducer.warehouses };
}

function mapDispatchToProps(dispatch) {
  return {
    warehouseActions: bindActionCreators(warehouseActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WarehouseListComponent);
