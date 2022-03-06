import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Post} from '../components/Post';
import {loadPosts} from '../store/actions/post';

export const MainScreen = ({navigation}) => {
  const openPostHandler = (post: any) => {
    navigation.navigate('PostScreen', post);
  };

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const baseURL =
    'https://api.unsplash.com/search/photos?per_page=10&page=1&query=mountains&client_id=AGDRGW_L8ax2wOau3--5yAcPwi2jVekA1UHT9DmiV7g';

  useEffect(() => {
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        dispatch(loadPosts(data.results));
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);

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
          data={allPosts}
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
