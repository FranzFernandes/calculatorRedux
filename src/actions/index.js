export const addNumber = num => ({
  type: 'ADD_NUMBER',
  number: num,
});

export const addOperator = operator => ({
  type: 'ADD_OPERATOR',
  operator,
});

export const addEquals = () => ({
  type: 'ADD_EQUALS',
  // equals,
});

export const addErase = () => ({
  type: 'ADD_ERASE',
});

export const addDecimal = () => ({
  type: 'ADD_DECIMAL',
});
