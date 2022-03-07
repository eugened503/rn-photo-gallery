import React from 'react';
import {useSelector, RootStateOrAny} from 'react-redux';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {HeartSvg} from './svgComponents/HeartSvg';

export const Image = ({image, onOpen}: {image: any; onOpen: any}) => {
  const favouriteFoto = useSelector(
    (state: RootStateOrAny) => state.post.favouriteFoto,
  );

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => onOpen(image)}>
      {favouriteFoto.some((i: {id: any}) => i.id === image.id) && (
        <View style={styles.buttonImage}>
          <HeartSvg />
        </View>
      )}
      <ImageBackground
        style={styles.image}
        source={{uri: image.urls.regular}}
        // eslint-disable-next-line react-native/no-inline-styles
        imageStyle={{borderRadius: 10}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
  },

  buttonImage: {
    position: 'absolute',
    left: 8,
    bottom: 10,
    zIndex: 1,
  },

  image: {
    marginLeft: 3.5,
    marginBottom: 5,
    marginRight: 3.5,
    height: 81,
    width: 81,
  },
});
