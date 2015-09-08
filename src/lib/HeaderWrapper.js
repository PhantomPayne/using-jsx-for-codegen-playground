import React, { Component } from 'react';

import Template from './Template'

export default class HeaderWrapper extends Component {
  static defaultProps = {
    renderHeader: false
  }
  render() {
    if (React.Children.count(this.props.children) == 0) {
      return null;
    }

    if (this.props.renderHeader == false) {
      return this.props.children;
    }

    let child = React.Children.only(this.props.children);
    console.log('child.props.children', React.Children.count(child.props.children));
    let stuff = React.Children.map(child.props.children, child => {
      console.log(child);
      if (child.type) {
          return <Template>{child.type.name}</Template>
      }
      return null;
    });
    return (
      <Template>
        {stuff}
      </Template>
    )
  }
}
