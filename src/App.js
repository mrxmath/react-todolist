import React, { Component } from "react";
//Components
import List from "./components/List";
import "./App.css";

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: []
    };
    this.pressEnter = this.pressEnter.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  pressEnter(e) {
    if (e.key === "Enter") {
      const itemText = e.target.value;
      const curItem = { id: Date.now(), title: itemText, done: false };
      this.addItem(curItem);
      e.target.value = "";
    }
  }
  markComplete = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) item.done = !item.done;
        return item;
      })
    });
  };
  deleteItem = id => {
    const filtered = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filtered }, console.log(this.state.items));
  };
  addItem = newItem => {
    this.setState({ items: [...this.state.items, newItem] });
  };
  render() {
    return (
      <div className="TodoApp">
        <h1 className="TodoApp__title">TODO LIST</h1>
        <input className="TodoApp__input" placeholder="add a new todo..." onKeyPress={this.pressEnter} ref={this.inputElement} />
        <List items={this.state.items} markComplete={this.markComplete} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
