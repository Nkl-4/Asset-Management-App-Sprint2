import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as assetActions from '../../../store/actions/Admin_AssetActions';

class AssetListComponent extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.assetActions.fetchAllAssets();
  }

  render() {
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
          {this.props.assets !== undefined ? (
            <table className="table table-striped table table-bordered table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Asset Id</th>
                  <th>Warehouse ID</th>
                  <th>Type</th>
                  <th>View Details</th>
                  <th>Update Details</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.props.assets.map((asset) => (
                  <tr key={asset.assetId}>
                    <td>{asset.assetId}</td>
                    <td>{asset.warehouse.whId}</td>
                    <td>{asset.type}</td>
                    <td>
                      <Link to={`/admin/assetbyid/${asset.assetId}`}>View</Link>
                    </td>
                    <td>
                      <Link to={`/admin/asset/update/${asset.assetId}`}>
                        Update
                      </Link>
                    </td>
                    <td>
                      <Link to={`/admin/deleteAsset/${asset.assetId}`}>
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="loader"></div>
          )}

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
  return { assets: state.adminassetReducer.assets };
}

function mapDispatchToProps(dispatch) {
  return {
    assetActions: bindActionCreators(assetActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetListComponent);
