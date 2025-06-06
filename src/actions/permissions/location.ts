import { Platform } from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  openSettings,
  PermissionStatus as RNPermissionStatus,
} from 'react-native-permissions';
import type { PermissionStatus } from '../../infrastructure/interfaces/permission';

const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
  denied: 'denied',
  granted: 'granted',
  blocked: 'blocked',
  limited: 'limited',
  unavailable: 'unavailable',
};

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    let status: RNPermissionStatus = 'unavailable';

    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Unsupported platform');
    }

    if (status === 'blocked') {
      await openSettings();
      return await checkLocationPermission();
    }

    return permissionMapper[status] ?? 'unavailable';
  };

export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  let status: RNPermissionStatus = 'unavailable';

  if (Platform.OS === 'ios') {
    status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Unsupported platform');
  }

  return permissionMapper[status] ?? 'unavailable';
};
