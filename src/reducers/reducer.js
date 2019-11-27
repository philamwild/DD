const state = {
  counter: 0
};

const reducer = (initialState = state, action) => {
  const newState = { ...initialState };
  switch (action.type) {
    case "INCREMENT":
      newState.counter += 1;
      return newState;
    case "DECREMENT":
      newState.counter -= 1;
      return newState;
    case "MODIFY":
      newState.counter = parseInt(action.modifier);
      return newState;
    default:
      return newState;
  }
};

export default reducer;
