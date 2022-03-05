import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  LogBox,
  Dimensions,
  Button,
} from 'react-native';
//import {useDispatch} from 'react-redux';

import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/screens/MainScreen';
import {PostScreen} from './src/screens/PostScreen';
import {BookedScreen} from './src/screens/BookedScreen';
//import {SvgHome} from './assets/svg/SvgHome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import store from './src/store';

//import {loadPosts} from './src/store/actions/post';

LogBox.ignoreLogs(['Remote debugger']);

//const width = Dimensions.get('window').width; //full width
//const height = Dimensions.get('window').height; //full height

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  //const dispatch = useDispatch();

  const TabNav = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="MainScreen"
          component={MainScreen}
          // options={{
          //   title: 'Все изображения',
          //   headerTitleAlign: 'center',
          //   headerStyle: {
          //     backgroundColor: 'darkslateblue',
          //     borderBottomEndRadius: 20,
          //     borderBottomStartRadius: 20,
          //   },
          //   headerTitleStyle: {
          //     color: 'white',
          //     fontFamily: 'OpenSans-SemiBold',
          //     fontSize: 22,
          //     fontStyle: 'normal',
          //   },
          // }}
          // options={{
          //   tabBarLabel: 'Home',
          //   tabBarIcon: ({focused: boolean, color: string, size: number}) => (
          //     <SvgHome />
          //   ),
          // }}
        />
        <Tab.Screen
          name="BookedScreen"
          options={{title: 'Избранное'}}
          component={BookedScreen}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.fotoContainer}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="TabNav"
              component={TabNav}
              //options={{title: 'TabNav'}}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              //options={{headerTitle: 'Главная'}}
            />
            <Stack.Screen
              name="PostScreen"
              component={PostScreen}
              // options={({route}) => ({
              //   headerTitle: 'IMG-' + route.params.id,
              //   headerShown: true,
              // })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  fotoContainer: {
    flex: 1,
    //borderColor: 'red',
    //borderWidth: 1,
  },

  header: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default App;
