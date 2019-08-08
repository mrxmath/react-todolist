import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          title: "Teste",
          done: false
        },
        {
          id: 2,
          title: "Teste",
          done: false
        },
        {
          id: 3,
          title: "Teste",
          done: false
        },
        {
          id: 4,
          title: "Teste",
          done: false
        },
        {
          id: 5,
          title: "Teste",
          done: false
        }
      ]
    };
    this.checkItem = this.checkItem.bind(this);
  }
  checkItem(id) {
    this.setState(prevState => {
      const curState = prevState.items.map(item => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      });
      return {
        items: curState
      };
    });
  }
  render() {
    const items = this.state.items.map(item => (
      <ListItem key="{item.id}" item={item} checkItem={this.checkItem} />
    ));
    return <ul className="TodoApp__list">{items}</ul>;
  }
}

export default List;
