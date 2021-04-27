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
    window.location.href = '/admin/warehouses/get/all';
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
      <div className="CreateWarehouseComponent container-fluid">
        <center>
          <h3
            style={{
              backgroundColor: 'rgba(109, 109, 109, 0.589)',
              width: '300px',
              color: 'white',
            }}
          >
            {' '}
            ADD WAREHOUSE
          </h3>
        </center>
        <br></br>
        <div
          className="container-fluid table-responsive"
          id="createware"
          align="center"
        >
          <form onSubmit={this.createWarehouse}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>MANAGER-ID:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="manager Id"
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
                    <label>LOCATION:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="location"
                      name="location"
                      id="location"
                      value={this.state.location}
                      onChange={this.handleInputChange}
                      pattern="^[a-zA-Z]+$"
                      title="Enter Character only"
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
                      className="form-control item"
                      type="text"
                      placeholder="sub Location"
                      name="subLocation"
                      id="subLocation"
                      value={this.state.subLocation}
                      onChange={this.handleInputChange}
                      pattern="^[a-zA-Z]+$"
                      title="Enter Character only"
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
                      className="form-control item"
                      type="text"
                      placeholder="state"
                      name="state"
                      id="state"
                      value={this.state.state}
                      onChange={this.handleInputChange}
                      pattern="^[a-zA-Z]+$"
                      title="Enter Character only"
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
                      className="form-control item"
                      type="text"
                      placeholder="country"
                      name="country"
                      id="country"
                      value={this.state.country}
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
          {this.props.warehouse !== undefined &&
            alert('Warehouse Created Succssfully')}
        </div>{' '}
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
