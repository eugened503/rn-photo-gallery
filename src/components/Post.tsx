import React from 'react';
import {useSelector, RootStateOrAny} from 'react-redux';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {HeartSvg} from './svgComponents/HeartSvg';

export const Post = ({post, onOpen}: {post: any; onOpen: any}) => {
  const favouriteFoto = useSelector(
    (state: RootStateOrAny) => state.post.favouriteFoto,
  );

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => onOpen(post)}>
      {favouriteFoto.some((i: {id: any}) => i.id === post.id) && (
        <View style={styles.buttonImage}>
          <HeartSvg />
        </View>
      )}
      <ImageBackground
        style={styles.image}
        source={{uri: post.urls.regular}}
        // eslint-disable-next-line react-native/no-inline-styles
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
