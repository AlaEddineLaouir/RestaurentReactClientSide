import React, { Component } from "react";

export default class PickMenu extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="container">
        <div className="row">
          {categories.map(category => (
            <Category
              key={category.id}
              category={category}
              addDish={this.props.addDish}
            />
          ))}
        </div>
      </div>
    );
  }
}
class Category extends Component {
  render() {
    const { id, name, dishes } = this.props.category;
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-success">
            <h3 className="card-title text-center text-white">{name}</h3>
            <button
              className="btn btn-secondary float-right"
              type="button"
              data-toggle="collapse"
              data-target={"#list" + name}
              aria-expanded="false"
              aria-controls={"list" + name}
            >
              <span className="navbar-toggler-icon">List</span>
            </button>
          </div>
          <div className="collapse" id={"list" + name}>
            <div className="card-body bg-light">
              {dishes.map(dishe => (
                <MenuDishe
                  key={dishe.id}
                  dishe={dishe}
                  addDish={this.props.addDish}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class MenuDishe extends Component {
  state = {
    quantity: 1
  };

  handleAddDish = e => {
    e.preventDefault();

    this.props.addDish(this.props.dishe, this.state.quantity);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, description, price } = this.props.dishe;
    return (
      <div className="card">
        <div className="card-header bg-info text-white">
          <h6 className="card-title">
            {name} <strong className="float-right">{price}.00DA</strong>
          </h6>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-secondary text-white">
          <form className="form-inline">
            <div className="form-group ">
              <label htmlFor="quantity">Quantity :</label>
              <input
                type="number"
                className="form-control form-control-small"
                name="quantity"
                value={this.state.quantity}
                onChange={this.onChange}
              />
              <button className="btn btn-success" onClick={this.handleAddDish}>
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
