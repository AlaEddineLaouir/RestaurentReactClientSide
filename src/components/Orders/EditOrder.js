import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMenu } from "../../actions/menuActions";
import { editOrder } from "../../actions/odersActions";
import PickMenu from "./PickMenu";
import NewOrder from "./NewOrder";

class EditOrder extends Component {
  componentDidMount() {
    this.props.getMenu();
    this.setState({ order: this.props.order, orders: this.props.order.orders });
  }

  state = {
    displayMenu: false,
    orders: []
  };
  handleAction = () => {
    let { order } = this.state;
    order.orders = this.state.orders;

    this.props.editOrder(order);
  };
  handleShowMenu = () => {
    this.setState({ displayMenu: true });
  };
  handleShowOrder = () => {
    this.setState({ displayMenu: false });
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
            actionTitle="Modifier"
          />
        </div>
      );
    }
  }
}

EditOrder.propTypes = {
  categories: PropTypes.array.isRequired,
  getMenu: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  categories: state.menu.categories
});

export default connect(
  mapStateToProp,
  { getMenu, editOrder }
)(EditOrder);
