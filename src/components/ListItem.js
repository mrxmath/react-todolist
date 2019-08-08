import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li className="TodoApp__list-item" onClick={() => this.props.markComplete(this.props.item.id)}>
        <input type="checkbox" checked={this.props.item.done} />
        <span className="TodoApp__item-title">{this.props.item.title}</span>
        <span onClick={() => this.props.deleteItem(this.props.item.id)}>x</span>
      </li>
    );
  }
}

export default ListItem;
