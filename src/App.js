import React, { Component } from 'react';
import './App.css';


class CustButton extends Component{
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.callbackfromparrent(this.props.title);
  }
  render() {
    return (
      <button className={this.props.className} onClick={ this.handleClick }>{this.props.title}</button>
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
var firstNumber = 0,
  operatorClicked = false,
  secondNumber = 0;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstNumber: 0,
      operator: '',
      secondNumber: 0,
      total: 0,
      displayWindow: 0
    };

    this.mycallBack = this.mycallBack.bind(this);
  }
  mycallBack(dataFromChild) {
    if (!operatorClicked) {
      firstNumber += dataFromChild;
      this.setState({ firstNumber: firstNumber });
      this.setState({ displayWindow: firstNumber });
    } else {
      secondNumber += dataFromChild;
      this.setState({ secondNumber: secondNumber });
      this.setState({ displayWindow: secondNumber });
    }
  }
  operatorCallBack = (operatorData) => {
    this.setState({ operator: operatorData });
    this.setState({ displayWindow: operatorData });
    operatorClicked = true;
  }
  equalsCallBack = () => {
    if (this.state.operator === '+') {
      this.setState({ total: parseInt(this.state.firstNumber, 10)+parseInt(this.state.secondNumber, 10) });
      this.setState({ displayWindow: parseInt(this.state.firstNumber, 10)+parseInt(this.state.secondNumber, 10) });
    } else if (this.state.operator ===  '-') {
      this.setState({ total: parseInt(this.state.firstNumber, 10)-parseInt(this.state.secondNumber, 10) });
      this.setState({ displayWindow: parseInt(this.state.firstNumber, 10)-parseInt(this.state.secondNumber, 10) });
    } else if (this.state.operator ===  '*') {
      this.setState({ total: parseInt(this.state.firstNumber, 10)*parseInt(this.state.secondNumber, 10) });
      this.setState({ displayWindow: parseInt(this.state.firstNumber, 10)*parseInt(this.state.secondNumber, 10) });
    } else if (this.state.operator ===  '/') {
      this.setState({ total: parseInt(this.state.firstNumber, 10)/parseInt(this.state.secondNumber, 10) });
      this.setState({ displayWindow: parseInt(this.state.firstNumber, 10)/parseInt(this.state.secondNumber, 10) });
    }
    firstNumber = 0;
    operatorClicked = false;
    secondNumber = 0;
    this.setState({ firstNumber: 0 });
    this.setState({ secondNumber: 0 });
  }
  render() {
    return (
      <div className="App">
{/*        <p>firstNumber: {this.state.firstNumber}</p>
        <p>operator: {this.state.operator}</p>
        <p>secondNumber: {this.state.secondNumber}</p>
        <p>total: {this.state.total}</p> */}
        <div className="calculator">
          <h1 className="display-window">{this.state.displayWindow}</h1>
          <div className="numberContainer">
            <CustButton 
              title="7"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              title="8"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              title="9"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              title="4"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              title="5"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              title="6"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              title="1"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              title="2"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              title="3"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              title="0"
              callbackfromparrent={this.mycallBack}></CustButton>
            <CustButton 
              className="equals"
              title="="
              callbackfromparrent={this.equalsCallBack}></CustButton>
          </div>
          <div className="operatorsContainer">
            <CustButton 
              className="operator"
              title="+"
              callbackfromparrent={this.operatorCallBack}></CustButton>
            <CustButton 
              className="operator"
              title="-"
              callbackfromparrent={this.operatorCallBack}></CustButton>
            <CustButton 
              className="operator"
              title="*"
              callbackfromparrent={this.operatorCallBack}></CustButton>
            <CustButton 
              className="operator"
              title="/"
              callbackfromparrent={this.operatorCallBack}></CustButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
