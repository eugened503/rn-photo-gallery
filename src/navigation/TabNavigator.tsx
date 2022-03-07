import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from '../screens/MainScreen';
import {FavoriteScreen} from '../screens/FavoriteScreen';
import {GallerySvg} from '../components/svgComponents/GallerySvg';
import {StarSvg} from '../components/svgComponents/StarSvg';

export const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#A10D99',
        tabBarInactiveTintColor: '#94949D',
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.iconContainerLeft}>
              <View style={styles.image}>
                <GallerySvg color={color} />
              </View>
              <Text
                style={(styles.text, {color: focused ? '#A10D99' : '#94949D'})}>
                Галерея
              </Text>
            </View>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={styles.iconContainerRight}>
              <View style={styles.image}>
                <StarSvg color={color} />
              </View>
              <Text
                style={(styles.text, {color: focused ? '#A10D99' : '#94949D'})}>
                Галерея
              </Text>
            </View>
          ),
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainerLeft: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 38,
  },

  iconContainerRight: {
    alignSelf: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 38,
  },

  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 16,
  },
});
