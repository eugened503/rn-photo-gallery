import React from 'react';
import {SafeAreaView, StyleSheet, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from './src/screens/MainScreen';
import {ImageScreen} from './src/screens/ImageScreen';
import store from './src/store';
import {TabNavigator} from './src/navigation/TabNavigator';

LogBox.ignoreLogs(['Remote debugger']);

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.fotoContainer}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="ImageScreen" component={ImageScreen} />
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
});

export default App;
