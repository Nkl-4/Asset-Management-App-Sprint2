import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as warehouseActions from '../../../store/actions/WarehouseActions';

class WarehousebyIdComponent extends Component {
  componentDidMount() {
    const { warehouseActions, match } = this.props;
    warehouseActions.fetchWarehouseById(match.params.id);
  }
  render() {
    const { warehouse } = this.props;
    return (
      <div className="WarehouseListComponent container-fluid">
        <div className="container-fluid table-responsive">
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
          {warehouse !== undefined ? (
            <table className="table table-striped table table-bordered table table-hover">
              <thead className="thead-dark">
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
            <div className="loader"></div>
          )}
          <div className="text-center">
            <Link to="/admin/warehouses/get/all">
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
