import { StyleSheet, View } from 'react-native';
import { LoadingScreen } from '../screen/LoadingScreen';
import { Map } from '../components/maps/Map';
import { useEffect } from 'react';
import { useLocationStore } from '../store/location/useLocation';

export const MapScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnownLocation === null) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <Map initialLocation={lastKnownLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
