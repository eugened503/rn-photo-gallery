import React from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export const Post = ({post, onOpen}) => {
  //console.log(post);
  const favouriteFoto = useSelector(state => state.post.favouriteFoto);
  //console.log(bookedPosts);

  //let a = Object.values(bookedPosts).some(i => i.id === post.id);
  //console.log(a);

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => onOpen(post)}>
      {Object.values(favouriteFoto).some(i => i.id === post.id) && (
        <ImageBackground
          style={styles.heart}
          source={{uri: '../../assets/svg/heart.png'}}
        />
      )}
      <ImageBackground style={styles.image} source={{uri: post.urls.raw}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    flex: 1,
  },

  heart: {
    position: 'absolute',
    zIndex: 1,
    bottom: 4,
    left: 4,
    //flex: 1,
    height: 20,
    width: 20,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'red',
  },

  image: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 3.5,
    marginBottom: 5,
    marginRight: 3.5,
    height: 81,
    //width: 81,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1,
  },
});
