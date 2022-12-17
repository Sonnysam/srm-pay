import { CompAction } from "../actions/CompAction";

const CompReducer = (
  state = {
    complaint: null,
  },
  action
) => {
  switch (action.type) {
    case CompAction.GET_COMPLAINTS:
      state.complaint = action.payload;
      return {
        ...state,
      };
  }
  return state;
};

export default CompReducer;
