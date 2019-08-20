import React, { Component } from "react";
//this component will hace a state that stores which childe component
// to display. and will have a nav bar to change the state value.
class UserSpace extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="">mes Commands</a>
                  </li>
                  <li className="list-group-item">
                    <a href="">Nouvelle Command</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h1>Espace Client</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default UserSpace;
