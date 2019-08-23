import React, { Component } from "react";
import Dishe from "./Dishe";
class Category extends Component {
  render() {
    const { id, name, dishes } = this.props.category;
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{name}</h3>
          </div>
          <div className="card-body">
            {dishes.map(dishe => (
              <Dishe key={dishe.id} dishe={dishe} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Category;
