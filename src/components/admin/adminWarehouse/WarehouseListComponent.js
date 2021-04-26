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
      <div className="WarehouseListComponent">
        <div className="container-fluid">
          <br></br>
          <center>
            <h3
              style={{
                backgroundColor: 'rgba(109, 109, 109, 0.589)',
                width: '300px',
                color: 'white',
              }}
            >
              {' '}
              WAREHOUSE DETAILS{' '}
            </h3>
          </center>
          <br></br>
          {
            <table className="table table-striped table table-bordered table table-hover">
              <thead className="thead-dark">
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
                  <div className="loader"></div>
                )}
              </tbody>
            </table>
          }
          <div className="text-center">
            <Link to="/homeRedirect">
              <button type="button" className="btn btn-secondary">
                Go Back
              </button>
            </Link>
          </div>
        </div>
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
