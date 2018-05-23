import React, { Component } from 'react';

class DeleteButton extends React.Component {

  render() {
    return (
      <button type='button' onClick={this.props.toDelete}> Delete </button>
    )
  }

}

export default DeleteButton;