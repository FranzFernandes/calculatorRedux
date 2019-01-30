import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import { Helmet } from 'react-helmet';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleDecimal() {
    const { onDecimalClick } = this.props;
    onDecimalClick();
  }

  handleClear() {
    const { onEraseClick } = this.props;
    onEraseClick();
  }

  handleEquals() {
    const { onEqualsClick } = this.props;
    onEqualsClick();
  }

  handleOperator(event) {
    const { onOperatorClick } = this.props;
    onOperatorClick(event.target.value);
  }

  handleNumber(event) {
    const { onNumberClick } = this.props;
    onNumberClick(event.target.value);
  }

  render() {
    const { input } = this.props;
    return (
      <div className="App">
        {/* <div id="input">{input}</div> */}
        <div id="calculator">
          <div id="display">{input}</div>
          <div className="row">
            <button
              id="clear"
              type="button"
              className="col-9"
              onClick={this.handleClear}
              style={{ fontSize: '3vh' }}
            >
              {' '}
              clear
              {' '}
            </button>
            <button
              id="divide"
              type="button"
              className="col-3"
              onClick={this.handleOperator}
              value="/"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              /
              {' '}
            </button>
          </div>
          <div className="row">
            <button
              id="seven"
              type="button"
              className="col-3"
              onClick={this.handleNumber}
              value="7"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              7
              {' '}
            </button>

            <button
              id="eight"
              type="button"
              className="col-3"
              onClick={this.handleNumber}
              value="8"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              8
              {' '}
            </button>

            <button
              id="nine"
              type="button"
              className="col-3"
              onClick={this.handleNumber}
              value="9"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              9
              {' '}
            </button>

            <button
              id="multiply"
              type="button"
              className="col-3"
              onClick={this.handleOperator}
              value="*"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              *
              {' '}
            </button>
          </div>
          <div className="row">
            <button
              id="four"
              type="button"
              className="col-3"
              onClick={this.handleNumber}
              value="4"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              4
              {' '}
            </button>

            <button
              id="five"
              type="button"
              className="col-3"
              onClick={this.handleNumber}
              value="5"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              5
              {' '}
            </button>

            <button
              id="six"
              type="button"
              className="col-3"
              onClick={this.handleNumber}
              value="6"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              6
              {' '}
            </button>

            <button
              id="subtract"
              type="button"
              className="col-3"
              onClick={this.handleOperator}
              value="-"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              -
              {' '}
            </button>
          </div>
          <div className="row">
            <button
              id="one"
              type="button"
              className="col-3"
              onClick={this.handleNumber}
              value="1"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              1
              {' '}
            </button>

            <button
              id="two"
              type="button"
              className="col-3"
              onClick={this.handleNumber}
              value="2"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              2
              {' '}
            </button>

            <button
              id="three"
              type="button"
              className="col-3"
              onClick={this.handleNumber}
              value="3"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              3
              {' '}
            </button>

            <button
              id="add"
              type="button"
              className="col-3"
              onClick={this.handleOperator}
              value="+"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              +
              {' '}
            </button>
          </div>
          <div className="row">
            <button
              id="seven"
              type="button"
              className="col-6"
              onClick={this.handleNumber}
              value="1"
              style={{ fontSize: '3vh' }}
            >
              {' '}
              0
              {' '}
            </button>

            <button
              id="decimal"
              type="button"
              className="col-3"
              onClick={this.handleDecimal}
              value="."
              style={{ fontSize: '3vh' }}
            >
              {' '}
              .
              {' '}
            </button>

            <button
              id="equals"
              type="button"
              className="col-3"
              onClick={this.handleEquals}
              value="="
              style={{ fontSize: '3vh' }}
            >
              {' '}
              =
              {' '}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  onEqualsClick: PropTypes.func.isRequired,
  onNumberClick: PropTypes.func.isRequired,
  onOperatorClick: PropTypes.func.isRequired,
  onEraseClick: PropTypes.func.isRequired,
  onDecimalClick: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};
export default Calculator;
