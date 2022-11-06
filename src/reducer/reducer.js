import { CHANGE_SCORE } from "./actions";
  
const initialState = {score: 0};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SCORE:
      return { ...state, score: payload};
    default:
      return state;
  }
};
  
export default reducer;