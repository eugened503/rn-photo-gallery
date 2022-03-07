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
import {Image} from '../components/Image';
import {loadImages} from '../store/actions/post';
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
        dispatch(loadImages(data.results));
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
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          style={styles.imageContainer}
          data={allImages}
          numColumns={4}
          keyExtractor={image => image.id.toString()}
          renderItem={({item}) => (
            <Image image={item} onOpen={openPostHandler} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainContainer: {
    flex: 1,
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
