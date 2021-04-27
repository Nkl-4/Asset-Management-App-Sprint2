import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as assetActions from '../../../store/actions/Admin_AssetActions';

class GetAssetByIdComponent extends Component {
  componentDidMount() {
    const { assetActions, match } = this.props;
    assetActions.fetchAssetById(match.params.id);
  }
  render() {
    const { asset } = this.props;
    return (
      <div className="AssetListComponent container-fluid">
        <div className="container-fluid table-responsive">
          <br></br>
          <br></br>
          <center>
            <h3
              style={{
                backgroundColor: 'rgba(25, 55, 77)',
                width: '200px',
                color: 'white',
              }}
            >
              {' '}
              ASSET DETAILS
            </h3>
          </center>
          <br></br>
          {asset !== undefined ? (
            <table className="table table-striped table table-bordered table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Asset Id</th>
                  <th>Warehouse Id</th>
                  <th>Manager Id</th>
                  <th>Location</th>
                  <th>Sub Location</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Manufacturer</th>
                </tr>
              </thead>
              <tbody>
                {
                  <tr>
                    <td>{asset.assetId}</td>
                    <td>{asset.warehouse.whId}</td>
                    <td>{asset.warehouse.mgrId}</td>
                    <td>{asset.warehouse.address.location}</td>
                    <td>{asset.warehouse.address.subLocation}</td>
                    <td>{asset.warehouse.address.state}</td>
                    <td>{asset.warehouse.address.country}</td>
                    <td>{asset.model}</td>
                    <td>{asset.type}</td>
                    <td>{asset.manufacturer}</td>
                  </tr>
                }
              </tbody>
            </table>
          ) : (
            <div className="loader"></div>
          )}
          <div className="text-center">
            <Link to="/admin/assets/get/all">
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
  return { asset: state.adminassetReducer.asset };
}

function mapDispatchToProps(dispatch) {
  return {
    assetActions: bindActionCreators(assetActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAssetByIdComponent);
