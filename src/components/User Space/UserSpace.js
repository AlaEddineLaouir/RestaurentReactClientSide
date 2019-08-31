import React, { Component } from "react";
import CreateOrder from "../Orders/CreateOrder";
import OrdersList from "../Orders/OrdersList";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//this component will hace a state that stores which childe component
// to display. and will have a nav bar to change the state value.
class UserSpace extends Component {
  state = {
    show: "MyOrders"
  };
  handleNavigationChange = choice => {
    this.setState({ show: choice });
  };

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/Login" />;
    }

    switch (this.state.show) {
      case "MyOrders":
        return (
          <div className="row">
            <UserNavigation
              handleNavigationChange={this.handleNavigationChange}
            />
            <div className="col-md-9">
              <OrdersList />
            </div>
          </div>
        );
      case "NewOrder":
        return (
          <div className="row">
            <UserNavigation
              handleNavigationChange={this.handleNavigationChange}
            />
            <div className="col-md-9">
              <CreateOrder />
            </div>
          </div>
        );
      case "MyProfile":
        return (
          <div className="row">
            <UserNavigation
              handleNavigationChange={this.handleNavigationChange}
            />
            <div className="col-md-9">
              <Profile />
            </div>
          </div>
        );

      default:
        return (
          <div className="row">
            <UserNavigation
              handleNavigationChange={this.handleNavigationChange}
            />
            <div className="col-md-9">
              <OrdersList />
            </div>
          </div>
        );
    }
  }
}

class UserNavigation extends Component {
  handleShowMyOrders = () => {
    this.props.handleNavigationChange("MyOrders");
  };
  handleShowNewOrder = () => {
    this.props.handleNavigationChange("NewOrder");
  };
  handleShowMyProfile = () => {
    this.props.handleNavigationChange("MyProfile");
  };
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                <button
                  onClick={this.handleShowMyProfile}
                  className="btn btn-info"
                >
                  Profile
                </button>
              </li>
              <li className="list-group-item">
                <button
                  onClick={this.handleShowMyOrders}
                  className="btn btn-info"
                >
                  Mes Commandes
                </button>
              </li>
              <li className="list-group-item">
                <button
                  onClick={this.handleShowNewOrder}
                  className="btn btn-info"
                >
                  Nouvelle Commande
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => ({
  isLoggedIn: state.userAccount.isLoggedIn
});
export default connect(
  mapStateToProp,
  {}
)(UserSpace);
