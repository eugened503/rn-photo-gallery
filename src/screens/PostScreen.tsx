import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {removePost, addFoto, removeFavotite} from '../store/actions/post';

export const PostScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const postId = route.params.id;

  const post = useSelector(state =>
    state.post.allPosts.find(p => p.id === postId),
  );

  const favouritePost = useSelector(state =>
    state.post.favouriteFoto.find(p => p.id === postId),
  );

  const handleFoto = () => {
    dispatch(addFoto(post));
  };

  const deleteFavouriteFoto = () => {
    dispatch(removeFavotite(favouritePost.id));
    navigation.navigate('TabNav');
  };

  const favouriteFoto = useSelector(state => state.post.favouriteFoto);

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
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
            navigation.navigate('TabNav');
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
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TabNav')}>
          <Text style={styles.text}>←</Text>
        </TouchableOpacity>
        <Text style={styles.text}>IMG-{route.params.id}</Text>
      </LinearGradient>
      <ImageBackground
        style={styles.image}
        source={{uri: route.params.urls.raw}}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={removeHandler}>
        <Text style={styles.text2}>удалить</Text>
      </TouchableOpacity>
      {!Object.values(favouriteFoto).some(i => i.id === post.id) && (
        <TouchableOpacity activeOpacity={0.7} onPress={handleFoto}>
          <Text style={styles.text2}>добавить в избранное</Text>
        </TouchableOpacity>
      )}
      {Object.values(favouriteFoto).some(i => i.id === post.id) && (
        <TouchableOpacity activeOpacity={0.7} onPress={deleteFavouriteFoto}>
          <Text style={styles.text2}>удалить из избранного</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  image: {
    //flex: 1,
    alignItems: 'center',
    height: 350,
    width: 350,
  },

  header: {
    //backgroundColor: 'darkslateblue',
    //borderBottomEndRadius: 20,
    //borderBottomStartRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 21,
    paddingBottom: 21,
  },

  text: {
    color: 'white',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  text2: {
    color: 'red',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});
