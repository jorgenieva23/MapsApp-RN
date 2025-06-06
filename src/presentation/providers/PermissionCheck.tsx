import { View, Text, AppState } from 'react-native';
import React, { PropsWithChildren, useEffect } from 'react';
import { usePermissionStore } from '../store/permissions/usePermissionStore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/StackNavigator';
import { MapScreen } from '../screen/MapScreen';

export const PermissionCheck = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.reset({
        routes: [{ name: 'MapScreen' }],
      });
    } else if (locationStatus === 'undetermined') {
      navigation.reset({
        routes: [{ name: 'PermissionScreen' }],
      });
    }
  }, [locationStatus]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return <>{children}</>;
};
