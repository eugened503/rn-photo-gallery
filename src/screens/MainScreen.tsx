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
//import {data} from '../../data/data';
import {Post} from '../components/Post';
import {loadPosts} from '../store/actions/post';

export const MainScreen = ({navigation}) => {
  //const navigation = useNavigation();

  const openPostHandler = (post: any) => {
    //console.log(post);
    navigation.navigate('PostScreen', post);
    // navigation.navigate('Post', {
    //   screen: 'PostScreen',
    //   params: {postId: post.id},
    // });
  };

  // const HandleNavigate = () => {
  //   navigation.navigate('PostScreen');
  // };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadPosts());
  // }, [dispatch]);

  const [isLoading, setLoading] = useState(true);
  //console.log(isLoading);

  const baseURL =
    'https://api.unsplash.com/search/photos?per_page=10&page=1&query=heaven&client_id=AGDRGW_L8ax2wOau3--5yAcPwi2jVekA1UHT9DmiV7g';

  useEffect(() => {
    fetch(baseURL)
      .then(response => response.json()) // get response, convert to json
      .then(data => {
        console.log(data.results);
        dispatch(loadPosts(data.results));
      })
      .catch(error => console.log(error)) // display errors
      .finally(() => setLoading(false)); // change loading state
  }, []);

  const allPosts = useSelector(state => state.post.allPosts);

  //console.log(allPosts);

  return (
    <View style={{flex: 1, width: '100%'}}>
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
  imageContainer: {
    width: 345,
    marginVertical: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    //borderColor: 'blue',
    //borderWidth: 1,
  },

  header: {
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
});
