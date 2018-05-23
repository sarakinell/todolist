import React, { Component } from 'react';
import TodoList from './TodoList.js';
import NewTodo from './NewTodo.js'
import logo from './peace.png';
import './App.css';

class App extends Component {
 
  // An object instead of an array!
  // todos: ["Create state with todos ", "Render todos ", "Change the state"]
  
  state = {
    todos: [
      { text: "Introduce my frontend development month", isDone: true }, 
      { text: "Present my first ever React app", isDone: false }, 
      { text: "Show some more awesome features, like delete", isDone: false }],
  };

  addTodo = (todoText) => {
    const newArr = this.state.todos.concat({ text: todoText, isDone: false });
    this.setState({ todos: newArr});  
  }

  removeTodo = (todoText) => {
    const newArr = this.state.todos.filter((todoObj) => { return todoObj.text !== todoText })
    this.setState({ todos: newArr });
  }

  toggleTodo = (todoText) => {
    const newArr = this.state.todos.map((todoObj) => {
      if(todoObj.text == todoText) 
        todoObj.isDone = !todoObj.isDone;
      return todoObj;
    });

    this.setState({ todos: newArr });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sara's awesome list</h1>
        </header>
        <NewTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} delete={this.removeTodo} toggle={this.toggleTodo}/>
      </div>
    );
  }
}

export default App;
