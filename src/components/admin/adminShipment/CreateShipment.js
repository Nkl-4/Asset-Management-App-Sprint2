import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as shipmentActions from '../../../store/actions/ShipmentAction';

class CreateShipmentComponent extends Component {
  constructor(props) {
    super(props);

    // to declared state as empty for the first time, it will get replaced once user enters the data
    this.state = {
      shipmentId: '',
      assetId: '',
      userId: '',
      status: '',
      sourceWhId: '',
      destWhId: '',
      shipmentDate: '',
      deliveryDate: '',
    };

    // to bind handleInputChange function
    this.handleInputChange = this.handleInputChange.bind(this);
    // to bind createShipment function
    this.createShipment = this.createShipment.bind(this);
  }

  // to create Shipment
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // to create Shipment
  createShipment(e) {
    // to prevent from default submit
    e.preventDefault();

    //data which user enters
    let payload = {
      shipmentId: this.state.shipmentId,
      assetId: this.state.assetId,
      userId: this.state.userId,
      status: this.state.status,
      sourceWhId: this.state.sourceWhId,
      destWhId: this.state.destWhId,
      shipmentDate: this.state.shipmentDate,
      deliveryDate: this.state.deliveryDate,
    };

    const { shipmentActions } = this.props;
    // to call createShipment method in shipment actions
    shipmentActions.createShipment(payload);
    // to call fetchAllShipment method in shipment actions
    this.props.shipmentActions.fetchAllShipment();
    // direct the page after creation to the specifed location
    window.location.href = '/admin/shipment/all';
  }

  // to clear the form after the submission of data
  clear() {
    this.setSate = {
      shipmentId: '',
      assetId: '',
      userId: '',
      status: '',
      sourceWhId: '',
      destWhId: '',
      shipmentDate: '',
      deliveryDate: '',
    };
  }

  render() {
    // to display date only till current date and disable future date
    let currentDate = () => {
      var today = new Date();
      var dd = today.getDate();

      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }
      today = yyyy + '-' + mm + '-' + dd;
      return today;
    };

    return (
      <div className="CreateShipment container-fluid">
        <br></br>
        <center>
          <h3
            style={{
              backgroundColor: 'rgba(0, 102, 153)',
              width: '300px',
              color: 'white',
            }}
          >
            ADD SHIPMENT
          </h3>
        </center>
        <br></br>
        <div
          className="container-fluid table-responsive"
          id="createship"
          align="center"
        >
          <form onSubmit={this.createShipment}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>Asset ID:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="Asset ID"
                      name="assetId"
                      id="assetId"
                      value={this.state.assetId}
                      onChange={this.handleInputChange}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>User ID:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="User ID"
                      name="userId"
                      id="userId"
                      value={this.state.userId}
                      onChange={this.handleInputChange}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Status:</label>
                  </td>
                  <td>
                    <select
                      className="form-control item"
                      name="status"
                      id="status"
                      value={this.state.status}
                      onChange={this.handleInputChange}
                      required
                    >
                      <option className="form-control item" value="SELECT">
                        --SELECT--
                      </option>
                      <option
                        className="form-control item"
                        value="DISPATCHED"
                        defaultValue
                      >
                        DISPATCHED
                      </option>
                      <option className="form-control item" value="DELIVERED">
                        DELIVERED
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Source Warehouse ID:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="Source Warehouse ID"
                      name="sourceWhId"
                      id="sourceWhId"
                      value={this.state.sourceWhId}
                      onChange={this.handleInputChange}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Destination Warehouse ID:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="text"
                      placeholder="Destination Warehouse ID"
                      name="destWhId"
                      id="destWhId"
                      value={this.state.destWhId}
                      onChange={this.handleInputChange}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Shipment Date:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="date"
                      placeholder="Shipment Date"
                      name="shipmentDate"
                      id="shipmentDate"
                      value={this.state.shipmentDate}
                      onChange={this.handleInputChange}
                      max={currentDate()}
                      required
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Delivery Date:</label>
                  </td>
                  <td>
                    <input
                      className="form-control item"
                      type="date"
                      placeholder="Delivery Date"
                      name="deliveryDate"
                      id="deliveryDate"
                      value={this.state.deliveryDate}
                      onChange={this.handleInputChange}
                      max={currentDate()}
                      required
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
            <br></br>

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
          {this.props.newShipment !== undefined &&
            alert('Shipment Created Succssfully ')}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newShipment: state.shipmentReducer.newShipment,
    shipments: state.shipmentReducer.shipment,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    shipmentActions: bindActionCreators(shipmentActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateShipmentComponent);
