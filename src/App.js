import React, { Component } from 'react';
import './App.css';


class CustButton extends Component{
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("button Presseed "+this.props.title);

    this.props.callbackfromparrent(this.props.title);
  }
  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>{this.props.title}</button>
      </div>
    );
  }
}


// Maybe I could do it this way:
  //create a different type of button for the operators that would change to a different state item, then when equals is hit it will do it's thing
  //something like:
  // this.state = {
  //   firstNumber: '',
  //   operator: '',
  //   secondNumber: ''
  // }
var firstNumber = 0;
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      calcWindow: []
    };

    this.mycallBack = this.mycallBack.bind(this);
  }
  mycallBack(dataFromChild) {
    console.log(dataFromChild+" here");
    firstNumber += dataFromChild;
    console.log('firstNumber total ' + firstNumber);
    // this.setState({ calcWindow: dataFromChild });
  }
  render() {
    return (
      <div className="App">

        <CustButton 
          title="1"
          callbackfromparrent={this.mycallBack}></CustButton>
                <CustButton 
          title="2"
          callbackfromparrent={this.mycallBack}></CustButton>
      </div>
    );
  }
}

export default App;
