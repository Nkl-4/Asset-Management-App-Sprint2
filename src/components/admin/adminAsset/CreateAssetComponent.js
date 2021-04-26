import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as assetActions from '../../../store/actions/Admin_AssetActions';

class CreateAssetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // assetId: '',

      whId: '',
      mgrId: '',
      location: '',
      subLocation: '',
      state: '',
      country: '',
      model: '',
      type: '',
      manufacturer: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitChange = this.handleSubmitChange.bind(this);
    this.createAsset = this.createAsset.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmitChange() {
    alert('Asset created with Asset Id:' + this.state.assetId);
  }

  createAsset(e) {
    e.preventDefault();

    let payload = {
      // assetId: payload.assetId,

      whId: this.state.whId,
      mgrId: this.state.mgrId,

      location: this.state.location,
      subLocation: this.state.subLocation,
      state: this.state.state,
      country: this.state.country,

      model: this.state.model,
      type: this.state.type,
      manufacturer: this.state.manufacturer,
    };

    const { assetActions } = this.props;
    assetActions.createAsset(payload);
    window.location.href = '/admin/assets/get/all';
  }

  clear() {
    this.setSate = {
      // assetId: '',
      whId: '',
      mgrId: '',
      location: '',
      subLocation: '',
      state: '',
      country: '',
      model: '',
      type: '',
      manufacturer: '',
    };
  }

  render() {
    return (
      <div className="CreateAssetComponent">
        <br></br>
        <br></br>
        <center>
          <h3
            style={{
              backgroundColor: 'rgba(77, 166, 255, 0.589)',
              width: '200px',
              color: 'white',
            }}
          >
            ADD ASSET
          </h3>
        </center>
        <br></br>
        <div className="container-fluid" id="createasset" align="center">
          <form onSubmit={this.createAsset}>
            <table>
              <tbody>
                {/* <tr>
                                <td><label>Asset Id:</label></td>
                                <td><input type="text" placeholder="Asset Id" name="assetId" id="assetId" value={this.state.assetId} onChange={this.handleInputChange}></input></td>
                            </tr> */}
                <tr>
                  <td>
                    <label>Warehouse Id:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="WareHouse Id"
                      name="whId"
                      id="whId"
                      value={this.state.whId}
                      onChange={this.handleInputChange}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Manager Id:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="Manager Id"
                      name="mgrId"
                      id="mgrId"
                      value={this.state.mgrId}
                      onChange={this.handleInputChange}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Model:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="text"
                      name="model"
                      id="model"
                      value={this.state.model}
                      onChange={this.handleInputChange}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Type:</label>
                  </td>
                  <td>
                    <select
                      className="form-control item"
                      name="type"
                      id="type"
                      value={this.state.type}
                      onChange={this.handleInputChange}
                      required
                    >
                      <option value="SELECT">--SELECT--</option>
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
                  {/* <td><input type="text" placeholder="text" name="type" id="type" value={this.state.type} onChange={this.handleInputChange}></input></td> */}
                </tr>
                <tr>
                  <td>
                    <label>Manufacturer:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="text"
                      name="manufacturer"
                      id="manufacturer"
                      value={this.state.manufacturer}
                      onChange={this.handleInputChange}
                      required
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>

            <input
              type="submit"
              className="btn btn-success"
              value="Submit"
            ></input>
            <span> </span>
            <Link to="/homeRedirect">
              <button className="btn btn-danger">Cancel</button>
            </Link>
          </form>
          {this.props.asset !== undefined && alert('asset Created Succssfully')}
        </div>{' '}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { asset: state.adminassetReducer.newAsset };
}

function mapDispatchToProps(dispatch) {
  return {
    assetActions: bindActionCreators(assetActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAssetComponent);
