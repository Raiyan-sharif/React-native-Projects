import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import CounterScreen from './screens/CounterScreen';
import store from './store/store'; // import Redux store

enableScreens();

export type RootStackParamList = {
  Home: undefined;
  Counter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
