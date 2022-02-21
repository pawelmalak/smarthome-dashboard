import { SmartDevice } from '.';

export interface DevicesContext {
  devices: SmartDevice[];
  activeDevice: SmartDevice | null;
  getAllDevices: () => void;
  selectDevice: (id: string) => void;
}

export interface InterfaceContext {
  deviceDetailsDialog: {
    show: boolean;
    position: {
      x: number;
      y: number;
    };
    deviceId: string;
  };
  showDeviceDetails: (id: string) => void;
  hideDeviceDetails: () => void;
  saveDialogPosition: (x: number, y: number) => void;
}
