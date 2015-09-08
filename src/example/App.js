import React, { Component } from 'react';

import dedent from 'dedent'

import Template from '../lib/Template'
import HeaderWrapper from '../lib/HeaderWrapper'

class UIView extends Component {
  render() {
    return (
      <Template>
      {`UIView* ${this.props.name} = [[UIView alloc] init];`}
      </Template>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <HeaderWrapper {...this.props}>
        <Template>
          {dedent`All Good Things Must Come To An End
          This is on a new line
          this is math {1+1}
            extra indent plz`}
          <UIView name="awesome" />
          <Template>
            `does math 2+2={2+2} work here?`
          </Template>
          {dedent`All Good Things Must Come To An End
            This is on a new line
            this is math ${1+4}
              extra indent plz`}
        </Template>
      </HeaderWrapper>
    );
  }
}
