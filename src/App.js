import React from "react";
//Components
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="TodoApp">
      <h1 className="TodoApp__title">TODO LIST</h1>
      <input className="TodoApp__input" placeholder="add a new todo..." />
      <List />
    </div>
  );
}

export default App;
