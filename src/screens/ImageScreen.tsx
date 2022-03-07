import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';

import {removePost, addFoto, removeFavotite} from '../store/actions/post';
import {ArrowSvg} from '../components/svgComponents/ArrowSvg';
import {TransparentHeartSvg} from '../components/svgComponents/TransparentHeartSvg';
import {HeartSvg} from '../components/svgComponents/HeartSvg';
import {BasketSvg} from '../components/svgComponents/BasketSvg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const ImageScreen = ({
  route,
  navigation,
}: {
  navigation: any;
  route: any;
}) => {
  const dispatch = useDispatch();
  const postId = route.params.id;

  const post = useSelector((state: RootStateOrAny) =>
    state.post.allImages.find((p: {id: any}) => p.id === postId),
  );

  const favouritePost = useSelector((state: RootStateOrAny) =>
    state.post.favouriteFoto.find((p: {id: any}) => p.id === postId),
  );

  const handleFoto = () => {
    dispatch(addFoto(post));
    navigation.navigate('TabNavigator');
  };

  const deleteFavouriteFoto = () => {
    dispatch(removeFavotite(favouritePost.id));
    navigation.navigate('TabNavigator');
  };

  const favouriteFoto = useSelector(
    (state: RootStateOrAny) => state.post.favouriteFoto,
  );

  const removeHandler = () => {
    Alert.alert(
      'Удаление фотографии',
      'Вы точно хотите удалить фото?',
      [
        {
          text: 'Отменить',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress() {
            dispatch(removePost(postId));
            navigation.navigate('TabNavigator');
          },
        },
      ],
      {cancelable: false},
    );
  };

  if (!post) {
    return null;
  }

  return (
    <View style={styles.center}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#790598', '#BC1399']}
        style={styles.header}>
        <TouchableOpacity
          style={styles.headerArrow}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TabNavigator')}>
          <ArrowSvg />
        </TouchableOpacity>

        <Text style={styles.text}>IMG-{route.params.id}</Text>
      </LinearGradient>
      <ImageBackground
        style={styles.image}
        source={{uri: route.params.urls.regular}}
      />
      <View style={styles.buttonGroup}>
        {!favouriteFoto.some((i: {id: any}) => i.id === post.id) && (
          <TouchableOpacity
            style={styles.buttonTop}
            activeOpacity={0.7}
            onPress={handleFoto}>
            <View style={styles.buttonImage}>
              <TransparentHeartSvg />
            </View>
            <Text style={styles.textButton}>Добавить в избранное</Text>
          </TouchableOpacity>
        )}
        {favouriteFoto.some((i: {id: any}) => i.id === post.id) && (
          <TouchableOpacity
            style={styles.buttonTop}
            activeOpacity={0.7}
            onPress={deleteFavouriteFoto}>
            <View style={styles.buttonImage}>
              <HeartSvg />
            </View>
            <Text style={styles.textButton}>Убрать из избранного</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.buttonBottom}
          activeOpacity={0.7}
          onPress={removeHandler}>
          <View style={styles.buttonImage}>
            <BasketSvg />
          </View>
          <Text style={styles.textButton}>Удалить изображение</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    position: 'relative',
    backgroundColor: '#222222',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },

  image: {
    position: 'absolute',
    top: (height - width) / 2 - 15,
    height: width,
    width: width,
  },

  header: {
    position: 'relative',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    height: 60,
  },

  headerArrow: {
    position: 'absolute',
    left: 15,
    padding: 10,
  },

  text: {
    color: 'white',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    fontStyle: 'normal',
    alignSelf: 'center',
  },
  textButton: {
    color: '#000000',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    lineHeight: 22,
    fontStyle: 'normal',
    marginLeft: 10,
  },

  buttonGroup: {
    width: '92%',
    marginBottom: 15,
  },

  buttonImage: {
    paddingTop: 7,
  },

  buttonTop: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopRightRadius: 20,
    borderWidth: 1,
    height: 43,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderBottomColor: '#C4C4C4',
  },

  buttonBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    height: 43,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
