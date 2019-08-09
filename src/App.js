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

  //Responsavel por verificar se existe um state previo e se nao houer, gravar
  componentDidMount() {
    const storage = localStorage.getItem("items");
    if (storage) {
      this.setState({
        items: JSON.parse(storage)
      });
    } else {
      this.updateStorage();
    }
  }

  //Responsavel por atualizar o localStorage com o state atual
  updateStorage() {
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }

  //Responsavel por delegar o botao enter com a funcão de atualizar a listagem
  pressEnter(e) {
    if (e.key === "Enter") {
      const itemText = e.target.value;
      const curItem = { id: Date.now(), title: itemText, done: false };
      this.addItem(curItem);
      e.target.value = "";
    }
  }

  //Responsavel por setar um item da listagem como completo de acordo com o seu id
  markComplete = id => {
    this.setState(prevState => {
      return {
        items: this.state.items.map(item => {
          if (item.id === id) item.done = !item.done;
          return item;
        })
      };
    }, this.updateStorage());
  };

  //Responsavel por deletar um item da listagem de acordo com o seu id
  deleteItem = id => {
    this.setState(prevState => {
      return { items: [...this.state.items.filter(item => item.id !== id)] };
    }, this.updateStorage());
  };

  //Responsavel por adicionar os itens na listagem de acordo com o parametro recebido
  addItem = newItem => {
    this.setState(prevState => {
      return { items: [...this.state.items, newItem] };
    }, this.updateStorage());
  };

  render() {
    return (
      <div className="TodoApp">
        <h1 className="TodoApp__title">TODO LIST</h1>

        <input
          className="TodoApp__input"
          placeholder="add a new todo..."
          onKeyPress={this.pressEnter}
          ref={this.inputElement}
        />

        <List
          items={this.state.items}
          markComplete={this.markComplete}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
