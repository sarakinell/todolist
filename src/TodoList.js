import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

class TodoList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return <TodoItem todoObj={todo} delete={this.props.delete} toggle={this.props.toggle} />
          })
        }
      </ul>)
  }
}

export default TodoList;
