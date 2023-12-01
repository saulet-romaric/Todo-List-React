import React, { Component }from 'react';
import './App.css';
import TodoList from './Todo/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
  return (
    <TodoList />
  );
  }
}

export default App;
