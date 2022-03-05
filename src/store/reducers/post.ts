import {LOAD_POSTS, REMOVE_POST, ADD_FOTO, REMOVE_FAVORITE} from '../types';

const initialState = {
  allPosts: [],
  favouriteFoto: [],
};

export const postReducer = (
  state = initialState,
  action: {type: any; payload: any[]},
) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
      };
    case REMOVE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter(p => p.id !== action.payload),
        favouriteFoto: state.favouriteFoto.filter(p => p.id !== action.payload),
      };

    case ADD_FOTO:
      return {
        ...state,
        favouriteFoto: [...state.favouriteFoto, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favouriteFoto: state.favouriteFoto.filter(p => p.id !== action.payload),
      };
    default:
      return state;
  }
};
