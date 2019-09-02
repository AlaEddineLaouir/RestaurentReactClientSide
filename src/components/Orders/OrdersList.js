import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Order from "./Order";
import { getUserOrders } from "../../actions/odersActions";
import EditOrder from "./EditOrder";

class OrdersList extends Component {
  state = {
    edit: false
  };
  componentDidMount() {
    this.props.getUserOrders(this.props.token);
  }
  handleShowEditOrder = order => {
    this.setState({ edit: true, order });
  };

  render() {
    if (this.state.edit) {
      return <EditOrder order={this.state.order} />;
    } else {
      const { orders } = this.props;
      return (
        <div className="row">
          {orders.map(order => (
            <Order
              key={order.id}
              order={order}
              showEditOrder={this.handleShowEditOrder}
            />
          ))}
        </div>
      );
    }
  }
}

OrdersList.propTypes = {
  orders: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  getUserOrders: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  orders: state.userOrders.Orders,
  token: state.userAccount.token
});

export default connect(
  mapStateToProp,
  { getUserOrders }
)(OrdersList);
