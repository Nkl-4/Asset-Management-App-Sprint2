import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as shipmentActions from '../../../store/actions/ShipmentAction';

class UpdateShipmentComponent extends Component {
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
    this.props.shipmentActions.fetchAllShipment();
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
    // this.props.history.push("/shipment/all");
  }

  render() {
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
    const { shipment, updateShipment } = this.props;

    if (updateShipment !== undefined && updateShipment) {
      window.location.href = '/admin/shipment/all';
    }

    return (
      <div className="UpdateShipment container-fluid">
        <br></br>
        <center>
          <h3
            style={{
              backgroundColor: 'rgba(198, 26, 225, 0.589)',
              width: '300px',
              color: 'white',
            }}
          >
            UPDATE SHIPMENT{' '}
          </h3>
        </center>

        {shipment !== undefined ? (
          <div
            className="container-fluid table-responsive"
            id="updateship"
            align="center"
          >
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
                        pattern="^[0-9]*$"
                        title="Enter Number only"
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
                        pattern="^[0-9]*$"
                        title="Enter Number only"
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
                        className="form-control item input-group"
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
                        pattern="^[0-9]*$"
                        title="Enter Number only"
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
                        pattern="^[0-9]*$"
                        title="Enter Number only"
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
                        max={currentDate()}
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
                        max={currentDate()}
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
              <Link to="/admin/shipment/all">
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
    shipment: state.shipmentReducer.shipments,
    updateShipment: state.shipmentReducer.updateShipment,
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
)(UpdateShipmentComponent);
