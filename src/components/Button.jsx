import autobind from 'autobind-decorator';
import React from 'react';

export default class Button extends React.Component {
  render() {
    return <button onClick={this.click}>버튼</button>;
  }

  @autobind
  click() {
    console.log('clicked');
  }

}