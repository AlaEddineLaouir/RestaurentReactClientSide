import React, { Component } from "react";
import Dishe from "./Dishe";
class Category extends Component {
  render() {
    const { id, name, dishes } = this.props.category;
    return (
      <div className="col-md-4">
        <h3>{name}</h3>
        <ul className="list-group">
          {dishes.map(dishe => (
            <Dishe key={dishe.id} dishe={dishe} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Category;
