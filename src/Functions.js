export const handleNum = function(e){
  if (!e.target.value) {return} // To stop it responding when you click the ButtonGroup area not the buttons
  console.log(e.target.value);
  if (this.state.frontNum === 0 && e.target.value !== '.') {
  } else if (this.state.frontNum.includes('.') && e.target.value === '.') {
    // Stops multiple decimal points
  } else if (e.target.value === '.') {
    this.setState({frontNum: '0' + e.target.value});
  } else {
    this.setState({frontNum: this.state.frontNum + e.target.value});
  }
}

export const handlePlus = function() {
  this.setState({backNum: this.state.frontNum});
  this.setState({frontNum: 0});
  this.setState({operator: '+'});
}

export const handleMinus = function() {
  this.setState({backNum: this.state.frontNum});
  this.setState({frontNum: 0});
  this.setState({operator: '-'});
}

export const handleEquals = function() {
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



export const handleOperator = function(e) {
  if (!e.target.value) {return} // To stop it responded when you click the ButtonGroup area not the buttons.
  if (e.target.value === '+') {
    this.handlePlus();
  } else if (e.target.value === '-') {
    this.handleMinus();
  } else {
    this.handleEquals();
  }
}
