import React, { Component } from 'react';

class CompleteButton extends React.Component {

  render() {
    return (
      <button type='button' onClick={this.props.toComplete}> {this.props.children} </button>
    )
  }

}

export default CompleteButton;