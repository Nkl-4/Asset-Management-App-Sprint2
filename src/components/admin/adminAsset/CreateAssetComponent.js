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
      <div>
        <h3>Add Asset</h3>
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
              {/* <tr>
                                <td><label>Location:</label></td>
                                <td><input type="text" placeholder="text" name="location" id="location" value={this.state.location} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>Sub Location:</label></td>
                                <td><input type="text" placeholder="text" name="subLocation" id="subLocation" value={this.state.subLocation} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>State:</label></td>
                                <td><input type="text" placeholder="text" name="state" id="state" value={this.state.state} onChange={this.handleInputChange}></input></td>
                            </tr>
                            <tr>
                                <td><label>Country:</label></td>
                                <td><input type="text" placeholder="text" name="country" id="country" value={this.state.country} onChange={this.handleInputChange}></input></td>
                            </tr> */}
              <tr>
                <td>
                  <label>Model:</label>
                </td>
                <td>
                  <input
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
          <input type="submit" value="Submit"></input>
          <Link to="/homeRedirect">
            <button>Cancel</button>
          </Link>
        </form>
        {this.props.asset !== undefined && alert('asset Created Succssfully')}
        {/* {
                    this.props.asset !== undefined &&
                    alert("user Created Succssfully with id" + this.props.user.userId)
                } */}
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
