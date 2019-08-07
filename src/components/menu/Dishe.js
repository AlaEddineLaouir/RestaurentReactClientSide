import React, { Component } from "react";

export default class Dishe extends Component {
  render() {
    const { name, description, price } = this.props.dishe;
    return (
      <div>
        <li className="list-group-item">
          <h5 className="d-block">{name}</h5>
          <p>{description}</p>
          <strong className="float-right">{price}.00DA</strong>
        </li>
      </div>
    );
  }
}
