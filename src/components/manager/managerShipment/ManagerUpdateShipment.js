import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as shipmentActions from '../../../store/actions/Manager_ShipmentAction';

class ManagerUpdateShipmentComponent extends Component {
  constructor(props) {
    super(props);

    this.shipmentId = React.createRef();
    this.assetId = React.createRef();
    this.userId = React.createRef();
    this.status = React.createRef();
    this.sourceWhId = React.createRef();
    this.destWhId = React.createRef();
    this.shipmentDate = React.createRef();
    this.deliveryDate = React.createRef();

    this.updateShipment = this.updateShipment.bind(this);
  }

  componentDidMount() {
    const { shipmentActions, match } = this.props;
    shipmentActions.fetchShipmentById(match.params.id);
  }

  updateShipment(e) {
    e.preventDefault();

    let payload = {
      shipmentId: this.shipmentId.current.value,
      assetId: this.assetId.current.value,
      userId: this.userId.current.value,
      status: this.status.current.value,
      sourceWhId: this.sourceWhId.current.value,
      destWhId: this.destWhId.current.value,
      shipmentDate: this.shipmentDate.current.value,
      deliveryDate: this.deliveryDate.current.value,
    };

    const { shipmentActions } = this.props;
    shipmentActions.updateShipment(payload);
    this.props.shipmentActions.fetchAllShipment();
    window.location.href = '/manager/shipment/all';
  }

  render() {
    const { shipment, updateShipment } = this.props;

    if (updateShipment !== undefined && updateShipment) {
      window.location.href = '/manager/shipment/all';
    }

    return (
      <div className="UpdateShipment">
        <h3 align="center">UPDATE SHIPMENT</h3>
        {shipment !== undefined ? (
          <div className="container-fluid" id="updateship" align="center">
            <form onSubmit={this.updateShipment}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Shipment ID:</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
                        defaultValue={shipment.shipmentId}
                        type="text"
                        ref={this.shipmentId}
                        disabled
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Asset ID:</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
                        defaultValue={shipment.assetId}
                        type="text"
                        ref={this.assetId}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>User ID:</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
                        defaultValue={shipment.userId}
                        type="text"
                        ref={this.userId}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Status:</label>
                    </td>
                    <td>
                      <select
                        className="form-control item"
                        defaultValue={shipment.status}
                        ref={this.status}
                        required
                      >
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
                    {/* <td><input defaultValue={shipment.status} type="text" ref={this.status} /></td> */}
                  </tr>

                  <tr>
                    <td>
                      <label>Source Warehouse ID:</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
                        defaultValue={shipment.sourceWhId}
                        type="text"
                        ref={this.sourceWhId}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Destination Warehouse ID:</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
                        defaultValue={shipment.destWhId}
                        type="text"
                        ref={this.destWhId}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Shipment Date:</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
                        defaultValue={shipment.shipmentDate}
                        type="date"
                        ref={this.shipmentDate}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Delivery Date:</label>
                    </td>
                    <td>
                      <input
                        className="form-control item"
                        defaultValue={shipment.deliveryDate}
                        type="date"
                        ref={this.deliveryDate}
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
              <Link to="/manager/shipment/all">
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
    shipment: state.managershipmentReducer.shipments,
    updateShipment: state.managershipmentReducer.updateShipment,
    // shipment: state.managershipmentReducer.shipment
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
)(ManagerUpdateShipmentComponent);
