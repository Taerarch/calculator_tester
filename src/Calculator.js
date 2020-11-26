import React, {Component} from 'react';
import './css/calculator.css';
import {Button, ButtonGroup, Row, Col, Container, Jumbotron} from 'react-bootstrap';

class Calculator extends Component {
  // Reader note: variables labelled front are basically what the user can see while the back number is held.
  constructor() {
    super();
    this.state = {
      frontNum: '0',
      backNum: '0',
      operator: ''
    }
    this.handleNum = this.handleNum.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }

  handleNum = function(e){
    if (!e.target.value) {return} // To stop it responded when you click the ButtonGroup area not the buttons
    console.log(e.target.value);
    if (this.state.frontNum === '0' && e.target.value !== '.') {
      this.setState({frontNum: e.target.value});
    } else if (this.state.frontNum.includes('.') && e.target.value === '.') {
      // Stops multiple decimal points
    } else {
      this.setState({frontNum: this.state.frontNum + e.target.value});
    }
  }

  handlePlus = function() {
    if(this.state.operator === '') {
      this.setState({backNum: this.state.frontNum});
      this.setState({frontNum: '0'});
    }
    this.setState({operator: '+'});
  }

  handleMinus = function() {
    if(this.state.operator  === '') {
      this.setState({backNum: this.state.frontNum});
      this.setState({frontNum: '0'});
    }
    this.setState({operator: '-'});
  }

  handleEquals = function() {
    let frontFloat = parseFloat(this.state.frontNum);
    let backFloat = parseFloat(this.state.backNum);
    if (this.state.operator === '+') {
      frontFloat = frontFloat + backFloat;
    } else if (this.state.operator === '-') {
      frontFloat = backFloat - frontFloat;
    }
    let frontOut = frontFloat.toString();

    this.setState({frontNum: frontOut});
    this.setState({backNum: 0});
    this.setState({operator: ''});
  }

  handleOperator = function(e) {
    if (!e.target.value) {return} // To stop it responded when you click the ButtonGroup area not the buttons.
    if (e.target.value === '+') {
      this.handlePlus();
    } else if (e.target.value === '-') {
      this.handleMinus();
    } else {
      this.handleEquals();
    }
  }

  render() {
    return (
      <div className="calculator">
      <div data-testid="test-message">Calculator</div>
        <Jumbotron data-testid="display" id="display">
          {this.state.frontNum}
        </ Jumbotron>
        <Container>
          <Row>
            <ButtonGroup id="buttons" onClick={this.handleNum} size="sm" >
              <Col md={6}>
                <Row>
                  <Button value='7'>7</Button>
                  <Button value='8'>8</Button>
                  <Button value='9'>9</Button>
                </ Row>
                <Row>
                  <Button value='4'>4</Button>
                  <Button value='5'>5</Button>
                  <Button value='6'>6</Button>
                </ Row>
                <Row>
                  <Button value="1">1</Button>
                  <Button value="2">2</Button>
                  <Button value='3'>3</Button>
                </ Row>
                <Row>
                  <Button value="0">0</Button>
                  <Button value=".">.</Button>
                </ Row>
              </ Col>
              </ ButtonGroup>
            <ButtonGroup id="buttons" onClick={this.handleOperator} size="sm" >
              <Col md={2}>
                <Row><Button value='+'>+</Button></Row>
                <Row><Button value='-'>-</Button></Row>
                <Row><Button value='='>=</Button></Row>
              </Col>
            </ ButtonGroup>
          </ Row>
        </ Container>
      </ div>
    );
  }
}


export default Calculator;
