import React from 'react';
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
          //flexDirection: 'row',
          //justifyContent: 'space-between',
          //width: '100%',
          paddingTop: 10,
          paddingBottom: 10,
          //position: 'relative',
          //paddingLeft: 38,
          //flexDirection: 'row',
          //borderColor: 'red',
          //borderWidth: 1,
          //justifyContent: 'space-between',
        },
        tabBarLabelStyle: {
          // fontFamily: 'Open Sans',
          // fontStyle: 'normal',
          // fontSize: 12,
          // lineHeight: 16,
          //alignSelf: 'flex-end',
          //marginLeft: 'auto',
        },
      }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarIcon: ({color}) => <GallerySvg color={color} />,
          title: '',
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => <StarSvg color={color} />,
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};
