import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor() {
    super();
  }
  render() {
    const items = this.props.items.map(item => <ListItem key="{item.id}" item={item} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem} />);
    return <ul className="TodoApp__list">{items}</ul>;
  }
}

export default List;
