import React, { Component } from 'react';

class NewTodo extends React.Component {

  state = {
    newTodo: ''
  }

  inputHandler = (event) => {
    const addedText = event.currentTarget.value;
    this.setState({newTodo: addedText});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({newTodo: ''});
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Add new todo
          <input type='text' onChange={this.inputHandler} value={this.state.newTodo} />
        </label>
      </form>
    )
  }
}

export default NewTodo;