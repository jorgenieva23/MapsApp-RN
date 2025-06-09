import { Pressable, Text, View } from 'react-native';
import { usePermissionStore } from '../store/permissions/usePermissionStore';
import { globalStyles } from '../../config/theme/styles';

export const PermissionScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionStore();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Habilitar ubicación</Text>

      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}>
        <Text style={{ color: 'white' }}>Habilitar Localización</Text>
      </Pressable>

      <Text>Estado actual: {locationStatus}</Text>
    </View>
  );
};
