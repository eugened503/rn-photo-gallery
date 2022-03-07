import {
  LOAD_IMAGES,
  REMOVE_IMAGE,
  ADD_FAVORITES,
  REMOVE_FAVORITE,
} from '../types';

export const loadImages = (data: any) => {
  return {
    type: LOAD_IMAGES,
    payload: data,
  };
};

export const removeImage = (id: any) => {
  return {
    type: REMOVE_IMAGE,
    payload: id,
  };
};

export const addFavotite = (item: any) => {
  return {
    type: ADD_FAVORITES,
    payload: item,
  };
};

export const removeFavotite = (id: any) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};
