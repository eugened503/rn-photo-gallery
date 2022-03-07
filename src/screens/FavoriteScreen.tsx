import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from '../components/Image';
import {useSelector, RootStateOrAny} from 'react-redux';

export const FavoriteScreen = ({navigation}: {navigation: any}) => {
  const openPostHandler = (image: any) => {
    navigation.navigate('ImageScreen', image);
  };

  const favouriteFoto = useSelector(
    (state: RootStateOrAny) => state.post.favouriteFoto,
  );

  return (
    <View style={styles.screenContainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#790598', '#BC1399']}
        style={styles.header}>
        <Text style={styles.text}>Избранное</Text>
      </LinearGradient>
      <FlatList
        style={styles.imageContainer}
        data={favouriteFoto}
        numColumns={4}
        keyExtractor={image => image.id.toString()}
        renderItem={({item}) => <Image image={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
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
