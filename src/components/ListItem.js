import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li
        className="TodoApp__list-item"
        onClick={() => this.props.checkItem(this.props.item.id)}
      >
        <input type="checkbox" />
        <span>{this.props.item.title}</span>
      </li>
    );
  }
}

export default ListItem;
