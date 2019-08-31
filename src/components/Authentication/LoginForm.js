import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../../actions/userAccountActions";
import { Redirect } from "react-router-dom";
class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const user = { email, password };
    this.props.logIn(user);
  };
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/EspaceClient" />;
    } else {
      let { email, password } = this.state;
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Login</div>

                <div className="card-body">
                  <form method="POST" action="/login/employee">
                    <div className="form-group row">
                      <label
                        htmlFor="email"
                        className="col-md-4 col-form-label text-md-right"
                      >
                        E-Mail Address
                      </label>

                      <div className="col-md-6">
                        <input
                          id="email"
                          type="email"
                          className="form-control "
                          name="email"
                          value={email}
                          onChange={this.onChange}
                          required
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
                        />
                      </div>
                    </div>

                    <div className="form-group row mb-0">
                      <div className="col-md-8 offset-md-4">
                        <button
                          className="btn btn-primary"
                          onClick={this.onSubmit}
                        >
                          Se Connecter
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
  { logIn }
)(LoginForm);
