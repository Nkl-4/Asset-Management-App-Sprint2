import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as assetActions from '../../../store/actions/Admin_AssetActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class AssetListComponent extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.assetActions.fetchAllAssets();
  }
  render() {
    return (
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Asset Id</TableCell>
                <TableCell>Warehouse ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>View Details</TableCell>
                <TableCell>Update Details</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.assets !== undefined ? (
                this.props.assets.map((asset) => (
                  <TableRow key={asset.assetId}>
                    <TableCell>{asset.assetId}</TableCell>
                    <TableCell>{asset.warehouse.whId}</TableCell>
                    <TableCell>{asset.type}</TableCell>
                    <TableCell>
                      <Link to={`/assetbyid/${asset.assetId}`}>View</Link>
                    </TableCell>
                    <TableCell>
                      <Link to={`/admin/asset/update/${asset.assetId}`}>
                        Update
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link to={`/deleteAsset/${asset.assetId}`}>Delete</Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <h3>Loading....</h3>
              )}
            </TableBody>
          </Table>
        </TableContainer>
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
