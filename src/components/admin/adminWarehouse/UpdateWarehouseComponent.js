import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as warehouseActions from '../../../store/actions/WarehouseActions';

class UpdateWarehouseComponent extends Component {
  constructor(props) {
    super(props);

    this.whId = React.createRef();
    this.mgrId = React.createRef();
    this.location = React.createRef();
    this.subLocation = React.createRef();
    this.state = React.createRef();
    this.country = React.createRef();

    this.updateWarehouse = this.updateWarehouse.bind(this);
  }

  componentDidMount() {
    const { warehouseActions, match } = this.props;
    warehouseActions.fetchWarehouseById(match.params.id);
  }

  updateWarehouse(e) {
    e.preventDefault();

    let payload = {
      whId: this.whId.current.value,
      mgrId: this.mgrId.current.value,
      location: this.location.current.value,
      subLocation: this.subLocation.current.value,
      state: this.state.current.value,
      country: this.country.current.value,
    };

    const { warehouseActions } = this.props;
    warehouseActions.updateWarehouse(payload);
  }

  render() {
    const { warehouse, isUpdated } = this.props;

    if (isUpdated !== undefined && isUpdated) {
      return <Redirect to="/admin/warehouses/get/all" />;
    }

    return (
      <div>
        {warehouse !== undefined ? (
          <form onSubmit={this.updateWarehouse}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label>WAREHOUSE ID:</label>
                  </td>
                  <td>
                    <input
                      defaultValue={warehouse.whId}
                      type="text"
                      ref={this.whId}
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>MANAGER ID:</label>
                  </td>
                  <td>
                    <input
                      defaultValue={warehouse.mgrId}
                      type="text"
                      ref={this.mgrId}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>LOCATION:</label>
                  </td>
                  <td>
                    <input
                      defaultValue={warehouse.address.location}
                      type="text"
                      ref={this.location}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>SUB LOCATION:</label>
                  </td>
                  <td>
                    <input
                      defaultValue={warehouse.address.subLocation}
                      type="text"
                      ref={this.subLocation}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>STATE</label>
                  </td>
                  <td>
                    <input
                      defaultValue={warehouse.address.state}
                      type="text"
                      ref={this.state}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>COUNTRY</label>
                  </td>
                  <td>
                    <input
                      defaultValue={warehouse.address.country}
                      type="text"
                      ref={this.country}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    {' '}
                    <input type="submit" value="update"></input>
                  </td>
                  <td>
                    <Link to="/homeRedirect">
                      <button>Cancel</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    warehouse: state.warehouseReducer.warehouse,
    isUpdated: state.warehouseReducer.isUpdated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    warehouseActions: bindActionCreators(warehouseActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateWarehouseComponent);
