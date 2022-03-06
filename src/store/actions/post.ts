import {LOAD_POSTS, REMOVE_POST, ADD_FOTO, REMOVE_FAVORITE} from '../types';

export const loadPosts = (data: any) => {
  return {
    type: LOAD_POSTS,
    payload: data,
  };
};

export const removePost = (id: any) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

export const addFoto = (item: any) => {
  return {
    type: ADD_FOTO,
    payload: item,
  };
};

export const removeFavotite = (id: any) => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};
