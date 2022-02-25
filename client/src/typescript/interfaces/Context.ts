import { Filter, SmartDevice } from '.';
import { SmartDeviceType } from '../types';

export interface DevicesContext {
  devices: SmartDevice[];
  activeDevice: SmartDevice | null;
  getAllDevices: () => void;
  selectDevice: (id: string) => void;
  clearDevice: () => void;
}

export interface InterfaceContext {
  inMobileView: boolean;
  deviceDetailsDialog: {
    show: boolean;
    position: {
      x: number;
      y: number;
    };
    deviceId: string;
  };
  dataFilters: {
    devices: Filter<keyof SmartDevice>;
  };
  showDeviceDetails: (id: string) => void;
  hideDeviceDetails: () => void;
  saveDialogPosition: (x: number, y: number) => void;
  filterDevices: (type: SmartDeviceType | null) => void;
}
