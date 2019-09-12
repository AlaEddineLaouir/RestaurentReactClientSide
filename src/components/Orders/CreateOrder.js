import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMenu } from "../../actions/menuActions";
import { makeOrder } from "../../actions/odersActions";
import PickMenu from "./PickMenu";
import NewOrder from "./NewOrder";

class CreateOrder extends Component {
  state = {
    displayMenu: true,
    orders: [],
    adress: ""
  };
  componentDidMount() {
    this.props.getMenu();
  }
  handleAction = () => {
    this.props.makeOrder(this.state.orders, this.state.adress);
  };
  handleShowMenu = () => {
    this.setState({ displayMenu: true });
  };
  handleShowOrder = () => {
    this.setState({ displayMenu: false });
  };
  handleAdressChange = adress => {
    this.setState({ adress: adress });
  };
  onDishAdded = (dish, quantity) => {
    let existe = false;
    this.setState({
      orders: this.state.orders.map(order => {
        if (order.dish.id === dish.id) {
          existe = true;
          return Object.assign({}, order, {
            quantity: eval(order.quantity) + eval(quantity)
          });
        } else {
          return order;
        }
      })
    });
    if (!existe) {
      this.setState({ orders: this.state.orders.concat({ quantity, dish }) });
    }
  };
  onQuantityChange = (id, quantity) => {
    this.setState({
      orders: this.state.orders.map(order => {
        if (order.dish.id === id) {
          return Object.assign({}, order, { quantity });
        } else {
          return order;
        }
      })
    });
  };
  onDelete = id => {
    this.setState({
      orders: this.state.orders.filter(order => order.dish.id !== id)
    });
  };

  render() {
    if (this.state.displayMenu) {
      return (
        <div>
          <button onClick={this.handleShowMenu} className="btn btn-primary">
            Menu
          </button>
          <button onClick={this.handleShowOrder} className="btn btn-primary">
            Ma Commande
          </button>
          <PickMenu
            categories={this.props.categories}
            addDish={this.onDishAdded}
          />
        </div>
      );
    } else {
      return (
        <div className="container">
          <button onClick={this.handleShowMenu} className="btn btn-primary">
            Menu
          </button>
          <button onClick={this.handleShowOrder} className="btn btn-primary">
            Ma Commande
          </button>

          <NewOrder
            orders={this.state.orders}
            onQuantityChange={this.onQuantityChange}
            onDelete={this.onDelete}
            action={this.handleAction}
            actionTitle="Commander"
            onAdressChange={this.handleAdressChange}
          />
        </div>
      );
    }
  }
}

CreateOrder.propTypes = {
  categories: PropTypes.array.isRequired,
  getMenu: PropTypes.func.isRequired,
  makeOrder: PropTypes.func.isRequired
};
const mapStateToProp = state => ({
  categories: state.menu.categories
});
export default connect(
  mapStateToProp,
  { getMenu, makeOrder }
)(CreateOrder);
