import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as assetActions from '../../../store/actions/Admin_AssetActions';

class CreateAssetComponent extends Component {
  constructor(props) {
    super(props);
    //declared state as empty for the first time, it will get replaced once user enters the data
    this.state = {
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

  // to handle all changes
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //to handle only on submit click change
  handleSubmitChange() {
    alert('Asset created with Asset Id:' + this.state.assetId);
  }

  createAsset(e) {
    e.preventDefault();

    //data which user enters
    let payload = {
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
      <div className="CreateAssetComponent container-fluid">
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
        <div
          className="container-fluid table-responsive"
          id="createasset"
          align="center"
        >
          <form onSubmit={this.createAsset}>
            <table>
              <tbody>
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
                      pattern="^[0-9]*$"
                      title="Enter Number only"
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
                      pattern="^[0-9]*$"
                      title="Enter Number only"
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
                      pattern="^[a-zA-Z]+$"
                      title="Enter Character only"
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
