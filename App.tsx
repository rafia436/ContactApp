/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, useColorScheme, View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import store from './src/store/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/components/HomeScreen';
import AddContact from './src/components/AddContact';
import ViewDetails from './src/components/ViewDetails';

export type RootStackParams = {
  Home: any;
  Form: any;
  Details: any;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown: true}}>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Form" component={AddContact} />
            <RootStack.Screen name="Details" component={ViewDetails} />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
