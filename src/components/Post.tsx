import React from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {HeartSvg} from '../../assets/svg/HeartSvg';

export const Post = ({post, onOpen}) => {
  const favouriteFoto = useSelector(state => state.post.favouriteFoto);

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => onOpen(post)}>
      {Object.values(favouriteFoto).some(i => i.id === post.id) && (
        <View style={styles.buttonImage}>
          <HeartSvg />
        </View>
      )}
      <ImageBackground
        style={styles.image}
        source={{uri: post.urls.regular}}
        imageStyle={{borderRadius: 10}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    //borderColor: 'blue',
    //borderWidth: 1,
    //flex: 1,
  },
  buttonImage: {
    position: 'absolute',
    left: 10,
    top: 60,
    zIndex: 1,
  },

  image: {
    //flex: 1,
    //alignItems: 'center',
    marginLeft: 3.5,
    marginBottom: 5,
    marginRight: 3.5,
    height: 81,
    width: 81,
  },
});
