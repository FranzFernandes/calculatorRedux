/* eslint no-eval: 0 */
const symbolReducer = (state = { input: '0', result: '0', currentInput: '0' }, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      if (state.input.endsWith('0') && action.number === '0') {
        return state;
      }
      if (state.input.endsWith('0')) {
        return Object.assign({}, state, {
          input: state.input.slice(0, -1).concat(action.number),
          currentInput: state.currentInput.slice(0, -1).concat(action.number),
        });
      }
      if (state.input === '0') {
        return Object.assign({}, state, { input: action.number, currentInput: action.number });
      }
      if (state.result !== '0') {
        return Object.assign(
          {},
          { input: action.number, result: '0', currentInput: action.number },
        );
      }
      return Object.assign({}, state, {
        input: state.input.concat(action.number),
        currentInput: state.currentInput.concat(action.number),
      });
    case 'ADD_OPERATOR':
      if (state.input.match(/(\+|-|\/|\*)$/g)) {
        return Object.assign({}, state, {
          input: state.input.slice(0, -1).concat(action.operator),
          currentInput: '',
        });
      }
      if (state.result !== '0') {
        return Object.assign(
          {},
          {
            input: state.input.concat(action.operator),
            currentInput: '',
            result: '0',
          },
        );
      }
      return Object.assign({}, state, {
        input: state.input.concat(action.operator),
        currentInput: '',
      });
    case 'ADD_EQUALS': {
      // TODO: CHANGE TO MATH LIBRARY INSTEAD OF EVAL AGAINST XSS
      const result = eval(state.input.concat()).toString();
      return Object.assign({}, { input: result, result, currentInput: result });
    }
    case 'ADD_ERASE': {
      return Object.assign({}, { input: '0', result: '0', currentInput: '0' });
    }
    case 'ADD_DECIMAL': {
      if (state.currentInput.includes('.')) {
        return state;
      }
      return Object.assign({}, state, {
        input: state.input.concat('.'),
        currentInput: state.input.concat('.'),
      });
    }
    default:
      return state;
  }
};

export default symbolReducer;
