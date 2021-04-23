import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as assetActions from '../../../store/actions/Admin_AssetActions';

class UpdateAssetComponent extends Component {
  constructor(props) {
    super(props);

    this.assetId = React.createRef();
    this.whId = React.createRef();
    this.mgrId = React.createRef();
    this.location = React.createRef();
    this.subLocation = React.createRef();
    this.state = React.createRef();
    this.country = React.createRef();
    this.model = React.createRef();
    this.type = React.createRef();
    this.manufacturer = React.createRef();

    this.updateAsset = this.updateAsset.bind(this);
  }

  componentDidMount() {
    const { assetActions, match } = this.props;
    assetActions.fetchAssetById(match.params.id);
  }

  updateAsset(e) {
    e.preventDefault();

    let payload = {
      assetId: this.assetId.current.value,
      whId: this.whId.current.value,
      mgrId: this.mgrId.current.value,
      // location: this.location.current.value,
      // subLocation: this.subLocation.current.value,
      // state: this.state.current.value,
      // country: this.country.current.value,
      model: this.model.current.value,
      type: this.type.current.value,
      manufacturer: this.manufacturer.current.value,
    };

    const { assetActions } = this.props;
    assetActions.updateAsset(payload);
  }

  render() {
    const { asset, isUpdated } = this.props;

    if (isUpdated !== undefined && isUpdated) {
      window.location.href = '/admin/assets/get/all';
    }

    return (
      <div>
        {asset !== undefined ? (
          <form onSubmit={this.updateAsset}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>Asset Id:</label>
                  </td>
                  <td>
                    <input
                      defaultValue={asset.assetId}
                      type="text"
                      ref={this.assetId}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Warehouse Id:</label>
                  </td>
                  <td>
                    <input
                      defaultValue={asset.warehouse.whId}
                      type="text"
                      ref={this.whId}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Manager Id:</label>
                  </td>
                  <td>
                    <input
                      defaultValue={asset.warehouse.mgrId}
                      type="text"
                      ref={this.mgrId}
                      required
                    />
                  </td>
                </tr>
                {/* <tr>
                                        <td><label>Location:</label></td>
                                        <td><input defaultValue={asset.warehouse.address.location} type="text" ref={this.location} required/></td>
                                    </tr>
                                    <tr>
                                        <td><label>Sub Location:</label></td>
                                        <td><input defaultValue={asset.warehouse.address.subLocation} type="text" ref={this.subLocation} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>State:</label></td>
                                        <td><input defaultValue={asset.warehouse.address.state} type="text" ref={this.state} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Country:</label></td>
                                        <td><input defaultValue={asset.warehouse.address.country} type="text" ref={this.country} /></td>
                                    </tr> */}
                <tr>
                  <td>
                    <label>Model:</label>
                  </td>
                  <td>
                    <input
                      defaultValue={asset.model}
                      type="text"
                      ref={this.model}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Type:</label>
                  </td>
                  <td>
                    <select defaultValue={asset.type} ref={this.type} required>
                      <option value="HARDWARE">HARDWARE</option>
                      <option value="SOFTWARE">SOFTWARE</option>
                      <option value="DOCUMENTS">DOCUMENTS</option>
                      <option value="FURNISHING">FURNISHING</option>
                      <option value="FLAMMABLE">FLAMMABLE</option>
                      <option value="INFLAMMABLE">INFLAMMABLE</option>
                      <option value="ELECTRONICS">ELECTRONICS</option>
                      <option value="FRAGILE">FRAGILE</option>
                    </select>
                  </td>
                  {/* <td><input defaultValue={asset.type} type="text" ref={this.type} /></td> */}
                </tr>
                <tr>
                  <td>
                    <label>Manufaturer</label>
                  </td>
                  <td>
                    <input
                      defaultValue={asset.manufacturer}
                      type="text"
                      ref={this.manufacturer}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {' '}
                    <input type="submit" value="update"></input>
                  </td>
                  <td>
                    <Link to="/homeRedirect">
                      <button>Cancel</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    asset: state.adminassetReducer.asset,
    isUpdated: state.adminassetReducer.isUpdated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    assetActions: bindActionCreators(assetActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateAssetComponent);
