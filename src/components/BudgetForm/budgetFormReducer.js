import Type from '../../redux/type';

const budgetFormReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.GET_BUDGET:
      return payload.value;

    default:
      return state;
  }
};

export default budgetFormReducer;
