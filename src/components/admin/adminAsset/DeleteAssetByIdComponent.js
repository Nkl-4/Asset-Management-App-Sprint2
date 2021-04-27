/* eslint-disable no-unused-vars */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as assetAction from '../../../store/actions/Admin_AssetActions';

class DeleteAssetComponent extends React.Component {
  componentDidMount() {
    const { assetAction, match } = this.props;
    // calling redux function to fetch a particular id
    assetAction.fetchDeleteAsset(match.params.id);
  }
  render() {
    const { assets } = this.props;
    return (window.location.href = '/admin/assets/get/all');
  }
}

function mapStateToProps(state) {
  return { assets: state.adminassetReducer.assets };
}

function mapDispatchToProps(dispatch) {
  return {
    assetAction: bindActionCreators(assetAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteAssetComponent);
