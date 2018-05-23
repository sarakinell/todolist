import React, { Component } from 'react';
import DeleteButton from './DeleteButton.js';
import CompleteButton from './CompleteButton.js';

class TodoItem extends React.Component {
  proxyDelete = () => {
    this.props.delete(this.props.todoObj.text);
  }

  proxyComplete = () => {
    this.props.toggle(this.props.todoObj.text);
  }

  render() {
    return (
      <li className={this.props.todoObj.isDone ? 'completed' : null}>
        {this.props.todoObj.text}
        <CompleteButton toComplete={this.proxyComplete}>{this.props.todoObj.isDone ? 'Undone' : 'Done'}</CompleteButton>
        <DeleteButton toDelete={this.proxyDelete} />
      </li>
    )
  }
}

export default TodoItem;