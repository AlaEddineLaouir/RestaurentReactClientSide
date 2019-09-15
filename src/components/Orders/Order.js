import React, { Component } from "react";
import { connect } from "react-redux";
import { setEditOrder, cancelOrder } from "../../actions/odersActions";
import PropTypes from "prop-types";

class Order extends Component {
  state = {
    isDetailed: false
  };

  handleShowDetails = () => {
    this.setState({ isDetailed: true });
  };
  handleHideDetails = () => {
    this.setState({ isDetailed: false });
  };

  handleCancelOrder = () => {
    if (this.props.order.state === "nonValide") {
      this.props.cancelOrder(this.props.order.id);
    } else {
      alert("Votre Commande ne peut plus etre modifier ou annuler");
    }
  };
  handleEditOrder = () => {
    if (this.props.order.state == "nonValide") {
      this.props.showEditOrder(this.props.order);
    } else {
      alert("Votre Commande ne peut plus etre modifier ou annuler");
    }
  };
  render() {
    const { order } = this.props;

    if (!this.state.isDetailed) {
      return (
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Date de Commande : {new Date(order.date).toLocaleDateString()}
              </h5>
              <p className="card-text">
                <span>Etat : {order.state}</span>
              </p>
              <button
                onClick={this.handleShowDetails}
                className="btn btn-success"
              >
                Show Detailes
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      const { orders } = order;
      return (
        <div className="col-sm-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">
                Date de Commande : {new Date(order.date).toLocaleDateString()}
              </h5>
              <p className="card-text">
                <span>Etat : {order.state}</span>
              </p>
              <button
                onClick={this.handleHideDetails}
                className="btn btn-success"
              >
                Hide Detailes
              </button>
            </div>
            <div className="card-body">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td key={order.id}>{order.dish.name}</td>
                      <td key={order.id}>{order.dish.price}</td>
                      <td key={order.id}>{order.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                onClick={this.handleEditOrder}
                className="btn btn-primary float-left"
              >
                Modifier
              </button>
              <button
                onClick={this.handleCancelOrder}
                className="btn btn-danger float-right"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
Order.propTypes = {
  cancelOrder: PropTypes.func.isRequired
};
const mapStateToProp = state => ({});
export default connect(
  mapStateToProp,
  { cancelOrder }
)(Order);
