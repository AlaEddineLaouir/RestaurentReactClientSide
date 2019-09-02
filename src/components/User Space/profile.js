import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editProfil, getUser } from "../../actions/userAccountActions";
class Profile extends Component {
  state = {};

  componentDidMount() {
    this.props.getUser();
    this.setState({ ...this.props.user });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSaveChanges = e => {
    e.preventDefault();

    this.props.editProfil(this.state);
  };
  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="card">
        <div className="card-header">Profile</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone :</label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                value={phone}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">New Password :</label>
              <input
                type="text"
                name="password"
                id="password"
                className="form-control"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <button
                onClick={this.handleSaveChanges}
                className="btn btn-success btn-lg"
              >
                Enregistrer Modification
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  editProfil: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired
};
const mapStateToProp = state => ({
  user: state.userAccount.User
});
export default connect(
  mapStateToProp,
  { editProfil, getUser }
)(Profile);
