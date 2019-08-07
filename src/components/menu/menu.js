import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMenu } from "../../actions/menuActions";
import Category from "./Category";

class Menu extends Component {
  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    const { categories } = this.props;
    return (
      <div className="container">
        <div className="row">
          {categories.map(category => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  categories: PropTypes.array.isRequired,
  getMenu: PropTypes.func.isRequired
};
const mapStateToProp = state => ({
  categories: state.menu.categories
});

export default connect(
  mapStateToProp,
  { getMenu }
)(Menu);
