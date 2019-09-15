import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signin } from "../../actions/userAccountActions";
class SignInForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubimt = e => {
    e.preventDefault();
    const user = { ...this.state };

    this.props.signin(user);
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/EspaceClient" />;
    } else {
      const { name, email, password, password_confirmation } = this.state;
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header bg-dark">
                  <h4 className="text-light">S'inscrire</h4>
                  <Link
                    to="/Login"
                    className="btn btn-outline-success float-right"
                  >
                    Se Connecter
                  </Link>
                </div>

                <div className="card-body">
                  <form>
                    <div className="form-group row">
                      <label
                        htmlFor="name"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Name
                      </label>

                      <div className="col-md-6">
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={this.onChange}
                          value={name}
                          required
                          autocomplete="name"
                          autofocus
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="email"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        E-Mail Adress
                      </label>

                      <div className="col-md-6">
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={this.onChange}
                          value={email}
                          required
                          autocomplete="email"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="password"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Password
                      </label>

                      <div className="col-md-6">
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          value={password}
                          onChange={this.onChange}
                          required
                          autocomplete="new-password"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label
                        htmlFor="password-confirm"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        Confirm Password
                      </label>

                      <div className="col-md-6">
                        <input
                          id="password-confirm"
                          type="password"
                          className="form-control"
                          name="password_confirmation"
                          value={password_confirmation}
                          onChange={this.onChange}
                          required
                          autocomplete="new-password"
                        />
                      </div>
                    </div>

                    <div className="form-group row mb-0">
                      <div className="col-md-6 offset-md-4">
                        <button
                          onClick={this.handleSubimt}
                          className="btn btn-primary"
                        >
                          S'inscrire
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProp = state => ({
  isLoggedIn: state.userAccount.isLoggedIn
});
export default connect(
  mapStateToProp,
  { signin }
)(SignInForm);
