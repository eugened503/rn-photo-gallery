import {
  LOAD_IMAGES,
  REMOVE_IMAGE,
  ADD_FAVORITES,
  REMOVE_FAVORITE,
} from '../types';

const initialState = {
  allImages: [],
  favouriteFoto: [],
};

export const postReducer = (
  state = initialState,
  action: {type: any; payload: any[]},
) => {
  switch (action.type) {
    case LOAD_IMAGES:
      return {
        ...state,
        allImages: action.payload,
      };
    case REMOVE_IMAGE:
      return {
        ...state,
        allImages: state.allImages.filter(
          (p: {id: any}) => p.id !== action.payload,
        ),
        favouriteFoto: state.favouriteFoto.filter(
          (p: {id: any}) => p.id !== action.payload,
        ),
      };

    case ADD_FAVORITES:
      return {
        ...state,
        favouriteFoto: [...state.favouriteFoto, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favouriteFoto: state.favouriteFoto.filter(
          (p: {id: any}) => p.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
