import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as assetActions from '../../../store/actions/Admin_AssetActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class GetAssetByIdComponent extends Component {
  componentDidMount() {
    const { assetActions, match } = this.props;
    assetActions.fetchAssetById(match.params.id);
  }
  render() {
    const { asset } = this.props;
    return (
      <div>
        {asset !== undefined ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Asset Id</TableCell>
                  <TableCell>Warehouse Id</TableCell>
                  <TableCell>Manager Id</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Sub Location</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Manufacturer</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{asset.assetId}</TableCell>
                  <TableCell>{asset.warehouse.whId}</TableCell>
                  <TableCell>{asset.warehouse.mgrId}</TableCell>
                  <TableCell>{asset.warehouse.address.location}</TableCell>
                  <TableCell>{asset.warehouse.address.subLocation}</TableCell>
                  <TableCell>{asset.warehouse.address.state}</TableCell>
                  <TableCell>{asset.warehouse.address.country}</TableCell>
                  <TableCell>{asset.model}</TableCell>
                  <TableCell>{asset.type}</TableCell>
                  <TableCell>{asset.manufacturer}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <h3>Loading....</h3>
        )}
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
