import { ADD_PROJECT, DELETE_PROJECT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (projects) => projects.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
