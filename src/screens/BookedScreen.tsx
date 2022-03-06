import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Post} from '../components/Post';
import {useSelector} from 'react-redux';

export const BookedScreen = ({navigation}) => {
  const openPostHandler = post => {
    navigation.navigate('PostScreen', post);
  };

  const bookedPosts = useSelector(state => state.post.favouriteFoto);

  return (
    <View style={{flex: 1, width: '100%'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#790598', '#BC1399']}
        style={styles.header}>
        <Text style={styles.text}>Избранное</Text>
      </LinearGradient>
      <FlatList
        style={styles.imageContainer}
        data={bookedPosts}
        numColumns={4}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={openPostHandler} />}
      />
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
    //backgroundColor: 'darkslateblue',
    //borderBottomEndRadius: 20,
    //borderBottomStartRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    //paddingTop: 21,
    //paddingBottom: 21,
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
