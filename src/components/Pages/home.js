import React, { Component } from "react";
import Menu from "../menu/menu";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Magic Restaurent
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#menu">
                  Menu
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Commander Maintenant
            </button>
          </div>
        </nav>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Magic Restaurent</h1>
            <p className="lead">
              Our food taste like magic ,made with magic ,served with magic for
              your magical moments.
            </p>
          </div>
        </div>

        <div id="menu" className="container">
          <div className="row">
            <Menu />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
