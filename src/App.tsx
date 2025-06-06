import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { PermissionCheck } from './presentation/providers/PermissionCheck';

export const App = () => {
  return (
    <NavigationContainer>
      <PermissionCheck>
        <StackNavigator />
      </PermissionCheck>
    </NavigationContainer>
  );
};
