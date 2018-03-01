import 'babel-polyfill';
import React from 'react';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPara: true
    };
    this.changePara = this.changePara.bind(this);

  }
  render() {
    return(
      <div>
        <h1>this is a title</h1>
        <p style={{visibility: this.state.isShowPara ? 'visible': 'hidden'}}>this is a paragraph</p>
        <button className="changePara" onClick={this.changePara}>change</button>
      </div>
    );
  }
  changePara() {
    this.setState({isShowPara:!this.state.isShowPara});
  }
}