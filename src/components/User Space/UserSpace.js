import React, { Component } from "react";
import CreateOrder from "../Orders/CreateOrder";
import OrdersList from "../Orders/OrdersList";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../actions/userAccountActions";
//this component will hace a state that stores which childe component
// to display. and will have a nav bar to change the state value.
class UserSpace extends Component {
  state = {
    show: "MyOrders"
  };
  handleNavigationChange = choice => {
    this.setState({ show: choice });
  };

  handleLogout = () => {
    this.props.logout();
  };

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/Login" />;
    }

    switch (this.state.show) {
      case "MyOrders":
        return (
          <div className="">
            <UserNavigation
              handleNavigationChange={this.handleNavigationChange}
              handleLogout={this.handleLogout}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col">
                  <OrdersList />
                </div>
              </div>
            </div>
          </div>
        );
      case "NewOrder":
        return (
          <div className="">
            <UserNavigation
              handleNavigationChange={this.handleNavigationChange}
              handleLogout={this.handleLogout}
            />
            <div className="container">
              <div className=" row justify-content-center">
                <div className="col">
                  <CreateOrder />
                </div>
              </div>
            </div>
          </div>
        );
      case "MyProfile":
        return (
          <div className="">
            <UserNavigation
              handleNavigationChange={this.handleNavigationChange}
              handleLogout={this.handleLogout}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col">
                  <Profile />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="">
            <UserNavigation
              handleNavigationChange={this.handleNavigationChange}
              handleLogout={this.handleLogout}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col">
                  <OrdersList />
                </div>
              </div>
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
  handleLogout = () => {
    this.props.handleLogout();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-light">
          Magic Restaurent : Espace Clinet{" "}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#managerNav"
          aria-controls="managerNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="managerNav">
          <ul className="navbar-nav ml-auto">
            <button
              onClick={this.handleShowMyProfile}
              className="btn btn-outline-info"
            >
              Profile
            </button>

            <button
              onClick={this.handleShowMyOrders}
              className="btn btn-outline-info"
            >
              Mes Commandes
            </button>
            <button
              onClick={this.handleShowNewOrder}
              className="btn btn-outline-info"
            >
              Nouvelle Commande
            </button>
            <button className="btn btn-danger" onClick={this.handleLogout}>
              Exit
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProp = state => ({
  isLoggedIn: state.userAccount.isLoggedIn
});
export default connect(
  mapStateToProp,
  { logout }
)(UserSpace);
