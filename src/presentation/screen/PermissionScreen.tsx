import { View, Text } from 'react-native';
import React from 'react';
import { Pressable } from 'react-native-gesture-handler';
import { globalStyles } from '../../config/theme/styles';
import { usePermissionStore } from '../store/permissions/usePermissionStore';

export const PermissionScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionStore();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Habilitar ubicación</Text>

      <Pressable
        onPress={requestLocationPermission}
        style={globalStyles.btnPrimary}>
        <Text style={{ color: 'white' }}>habilitar localización</Text>
      </Pressable>

      <Text>Estado Actual:{locationStatus}</Text>
    </View>
  );
};
