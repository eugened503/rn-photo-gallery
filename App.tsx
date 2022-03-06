import React from 'react';
import {SafeAreaView, StyleSheet, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/screens/MainScreen';
import {PostScreen} from './src/screens/PostScreen';
import {BookedScreen} from './src/screens/BookedScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import store from './src/store';
import {GallerySvg} from './assets/svg/GallerySvg';
import {StarSvg} from './assets/svg/StarSvg';

LogBox.ignoreLogs(['Remote debugger']);

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const TabNav = () => {
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
          name="BookedScreen"
          component={BookedScreen}
          options={{
            tabBarIcon: ({color}) => <StarSvg color={color} />,
            title: '',
          }}
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
            <Stack.Screen name="TabNav" component={TabNav} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="PostScreen" component={PostScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  fotoContainer: {
    flex: 1,
  },

  iconContainer: {
    // position: 'absolute',
    // top: 10,
    // left: 38,
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },

  iconContainerLeft: {
    // position: 'absolute',
    // top: 10,
    // right: 50,
  },
  // text: {
  //   color: 'red',
  // },
});

export default App;
