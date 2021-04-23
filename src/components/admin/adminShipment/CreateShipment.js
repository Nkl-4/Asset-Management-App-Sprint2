import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as shipmentActions from '../../../store/actions/ShipmentAction';

class CreateShipmentComponent extends Component {
  constructor(props) {
    super(props);
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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createShipment = this.createShipment.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  createShipment(e) {
    e.preventDefault();

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
    shipmentActions.createShipment(payload);

    window.location.href = '/shipment/all';
  }

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
    return (
      <div>
        <h3>Add Shipment</h3>
        <form onSubmit={this.createShipment}>
          <table>
            <tbody>
              {/* <tr>
                                <td><label>Shipment ID:</label></td>
                                <td><input type="text" placeholder="Shipment ID" name="shipmentId" id="shipmentId" value={this.state.shipmentId} onChange={this.handleInputChange}di></input></td>
                            </tr> */}
              <tr>
                <td>
                  <label>Asset ID:</label>
                </td>
                <td>
                  <input
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
                    name="status"
                    id="status"
                    value={this.state.status}
                    onChange={this.handleInputChange}
                    required
                  >
                    <option value="SELECT">--SELECT--</option>
                    <option value="DISPATCHED" defaultValue>
                      DISPATCHED
                    </option>
                    <option value="DELIVERED">DELIVERED</option>
                  </select>
                </td>
              </tr>
              {/* <td><input type="text" placeholder="Status" name="status" id="status" value={this.state.status} onChange={this.handleInputChange}></input></td> */}
              <tr>
                <td>
                  <label>Source Warehouse ID:</label>
                </td>
                <td>
                  <input
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
                    type="date"
                    placeholder="Shipment Date"
                    name="shipmentDate"
                    id="shipmentDate"
                    value={this.state.shipmentDate}
                    onChange={this.handleInputChange}
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
                    type="date"
                    placeholder="Delivery Date"
                    name="deliveryDate"
                    id="deliveryDate"
                    value={this.state.deliveryDate}
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
        </form>
        {
          this.props.newShipment !== undefined &&
            alert('Shipment Created Succssfully ')

          // with id" + this.props.newuser.userId
        }
        {/* <Link to="/adminview"><button>Go Back</button></Link> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { newShipment: state.shipmentReducer.newShipment };
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
