import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as warehouseActions from '../../../store/actions/WarehouseActions';

class CreateWarehouseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //whId: '',
      mgrId: '',
      location: '',
      subLocation: '',
      state: '',
      country: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createWarehouse = this.createWarehouse.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  createWarehouse(e) {
    e.preventDefault();

    let payload = {
      //whId: this.state.whId,
      mgrId: this.state.mgrId,
      location: this.state.location,
      subLocation: this.state.subLocation,
      state: this.state.state,
      country: this.state.country,
    };

    const { warehouseActions } = this.props;
    warehouseActions.createWarehouse(payload);
  }

  clear() {
    this.setSate = {
      //whId: '',
      mgrId: '',
      location: '',
      subLocation: '',
      state: '',
      country: '',
    };
  }

  render() {
    return (
      <div>
        <h3>Add Warehouse</h3>
        <form onSubmit={this.createWarehouse}>
          <table>
            <tbody>
              {/* <tr>
                                    <td><label>whId:</label></td>
                                    <td><input type="text" placeholder="whId" name="whId" id="whId" value={this.state.whId} onChange={this.handleInputChange}></input></td>
                                </tr> */}
              <tr>
                <td>
                  <label>MANAGER-ID:</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="mgrId"
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
                  <label>LOCATION:</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="location"
                    name="location"
                    id="location"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>SUBLOCATION:</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="subLocation"
                    name="subLocation"
                    id="subLocation"
                    value={this.state.subLocation}
                    onChange={this.handleInputChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>STATE:</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="state"
                    name="state"
                    id="state"
                    value={this.state.state}
                    onChange={this.handleInputChange}
                    required
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>COUNTRY:</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="country"
                    name="country"
                    id="country"
                    value={this.state.country}
                    onChange={this.handleInputChange}
                    required
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="submit"></input>
          <Link to="/homeRedirect">
            <button>Cancel</button>
          </Link>
          {/* <Button color="danger"> Danger! </Button> */}
        </form>
        {this.props.warehouse !== undefined &&
          alert('Warehouse Created Succssfully')}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { warehouse: state.warehouseReducer.newWarehouse };
}

function mapDispatchToProps(dispatch) {
  return {
    warehouseActions: bindActionCreators(warehouseActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateWarehouseComponent);
