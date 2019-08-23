import React, { Component } from "react";

export default class Dishe extends Component {
  render() {
    const { name, description, price } = this.props.dishe;
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{name}</h5>
          <strong className="float-right">{price}.00DA</strong>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
}
