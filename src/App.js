import React from "react";
//Components
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="TodoApp">
      <h1 className="TodoApp__title">TODO LIST</h1>
      <input />
      <List />
    </div>
  );
}

export default App;
