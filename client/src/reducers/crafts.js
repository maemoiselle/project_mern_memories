import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (crafts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return crafts;
  }
};