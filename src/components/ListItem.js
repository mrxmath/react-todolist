import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li
        className={
          this.props.item.done
            ? "TodoApp__list-item done"
            : "TodoApp__list-item"
        }
      >
        <input
          id={this.props.item.id}
          className="TodoApp__item-checkbox"
          type="checkbox"
          checked={this.props.item.done}
          onClick={() => this.props.markComplete(this.props.item.id)}
        />

        <label for={this.props.item.id} className="TodoApp__item-title">
          {this.props.item.title}
        </label>

        <span
          className="TodoApp__item-close"
          onClick={() => this.props.deleteItem(this.props.item.id)}
        />
      </li>
    );
  }
}

export default ListItem;
