import { connect } from 'react-redux';
import {
  addNumber, addOperator, addEquals, addErase, addDecimal,
} from '../actions';
import Calculator from '../components/Calculator';

const mapStateToProps = state => ({
  input: state.input,
});

const mapDispatchToProps = dispatch => ({
  onNumberClick: (num) => {
    dispatch(addNumber(num));
  },
  onOperatorClick: (operator) => {
    dispatch(addOperator(operator));
  },
  onEqualsClick: () => {
    dispatch(addEquals());
  },
  onEraseClick: () => {
    dispatch(addErase());
  },
  onDecimalClick: () => {
    dispatch(addDecimal());
  },
});

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);

export default CalculatorContainer;
