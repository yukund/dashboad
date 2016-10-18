import * as types from '../actions/actionTypes';

// reducer has inintial state, such as empty array
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [
          // copy an array with extra value 
        ...state, // retuns a new instance of State array
        Object.assign({}, action.course) //use object assign to create a deep copy of course (someone just passed in as new course)
      ];

    default:
      return state;
  }
}
