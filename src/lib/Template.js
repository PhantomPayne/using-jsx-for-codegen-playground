import React, { Component } from 'react';

export default class Template extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  render() {
    let EmptyTag = 'removeme';
    return (
      <EmptyTag>
      {'\n'}
        {this.props.children}
      {'\n'}
      </EmptyTag>
    );
  }
}
