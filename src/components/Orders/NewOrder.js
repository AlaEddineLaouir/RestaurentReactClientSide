import React, { Component } from "react";
export default class NewOrder extends Component {
  handleAction = () => {
    this.props.action();
  };
  render() {
    const { orders, actionTitle } = this.props;
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-dark">
            <h3 className="card-title text-center text-white">Ma Commande</h3>
            <button
              onClick={this.handleAction}
              className="btn btn-success float-right"
            >
              {actionTitle}
            </button>
          </div>
          <div className="card-body bg-light">
            {orders.map(order => (
              <OrderdDish
                key={order.dish.id}
                dishe={order.dish}
                quantity={order.quantity}
                onQuantityChange={this.props.onQuantityChange}
                onDelete={this.props.onDelete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
class OrderdDish extends Component {
  handleQuantityChange = e => {
    const quantity = e.target.value;
    const id = this.props.dishe.id;
    this.props.onQuantityChange(id, quantity);
  };

  handleDeleteDish = e => {
    e.preventDefault();
    const id = this.props.dishe.id;
    this.props.onDelete(id);
  };

  render() {
    const { name, description, price } = this.props.dishe;
    return (
      <div className="card">
        <div className="card-header bg-info text-white">
          <h6 className="card-title">
            {name} <strong className="float-right">{price}.00DA</strong>
          </h6>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-secondary text-white">
          <form className="form-inline">
            <div className="form-group ">
              <label htmlFor="quantity">Quantity :</label>
              <input
                type="number"
                className="form-control form-control-small"
                name="quantity"
                value={this.props.quantity}
                onChange={this.handleQuantityChange}
              />
              <button
                className="btn btn-danger"
                onClick={this.handleDeleteDish}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
