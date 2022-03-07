import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import {Post} from '../components/Post';
import {loadPosts} from '../store/actions/post';
import {baseURL} from '../utils/constants/constants';

export const MainScreen = ({navigation}: {navigation: any}) => {
  const openPostHandler = (post: any) => {
    navigation.navigate('ImageScreen', post);
  };

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        dispatch(loadPosts(data.results));
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  const allImages = useSelector(
    (state: RootStateOrAny) => state.post.allImages,
  );

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#790598', '#BC1399']}
        style={styles.header}>
        <Text style={styles.text}>Все изображения</Text>
      </LinearGradient>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.imageContainer}
          data={allImages}
          numColumns={4}
          keyExtractor={post => post.id.toString()}
          renderItem={({item}) => <Post post={item} onOpen={openPostHandler} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },

  imageContainer: {
    marginVertical: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  header: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    height: 60,
  },

  text: {
    color: 'white',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});
