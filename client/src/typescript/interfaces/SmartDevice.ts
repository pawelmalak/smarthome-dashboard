import { SmartDeviceType, SmartDeviceConnectionState } from '../types';

export interface SmartDevice {
  type: SmartDeviceType;
  id: string;
  name: string;
  connectionState: SmartDeviceConnectionState;
}
