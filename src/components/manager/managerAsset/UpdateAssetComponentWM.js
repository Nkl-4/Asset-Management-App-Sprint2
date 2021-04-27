import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as assetActions from '../../../store/actions/Manager_AssetActions';

class UpdateAssetComponentWM extends Component {
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
    // calling redux function to fetch all assets
    assetActions.fetchAssetById(match.params.id);
  }

  updateAsset(e) {
    e.preventDefault();

    let payload = {
      assetId: this.assetId.current.value,
      whId: this.whId.current.value,
      mgrId: this.mgrId.current.value,
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
      window.location.href = '/manager/assets/get/all';
    }

    return (
      <div className="AssetListComponent container-fluid">
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
            UPDATE ASSET
          </h3>
        </center>
        {asset !== undefined ? (
          <div
            className="container-fluid table-responsive"
            id="updateasset"
            align="center"
          >
            <form onSubmit={this.updateAsset}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Asset Id:</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
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
                        className="form-control item"
                        defaultValue={asset.warehouse.whId}
                        type="text"
                        ref={this.whId}
                        pattern="^[0-9]*$"
                        title="Enter Number only"
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
                        className="form-control item"
                        defaultValue={asset.warehouse.mgrId}
                        type="text"
                        ref={this.mgrId}
                        pattern="^[0-9]*$"
                        title="Enter Number only"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Model:</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
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
                      <select
                        className="form-control item"
                        defaultValue={asset.type}
                        ref={this.type}
                        required
                      >
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
                  </tr>
                  <tr>
                    <td>
                      <label>Manufaturer</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
                        defaultValue={asset.manufacturer}
                        type="text"
                        ref={this.manufacturer}
                        pattern="^[a-zA-Z]+$"
                        title="Enter Character only"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <input
                type="submit"
                className="btn btn-success"
                value="Update"
              ></input>
              <span> </span>
              <Link to="/manager/assets/get/all">
                <button className="btn btn-danger">Cancel</button>
              </Link>
            </form>
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    asset: state.managerassetReducer.asset,
    isUpdated: state.managerassetReducer.isUpdated,
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
)(UpdateAssetComponentWM);
