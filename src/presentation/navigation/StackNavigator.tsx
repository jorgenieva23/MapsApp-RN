import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MapScreen } from '../screen/MapScreen';
import { LoadingScreen } from '../screen/LoadingScreen';
import { PermissionScreen } from '../screen/PermissionScreen';

export type RootStackParams = {
  MapScreen: undefined;
  LoadingScreen: undefined;
  PermissionScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
    </Stack.Navigator>
  );
};
