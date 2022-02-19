import { SmartDevice } from '.';

export interface DevicesContext {
  devices: SmartDevice[];
  getAllDevices: () => void;
}

export interface InterfaceContext {
  deviceDetailsDialog: {
    show: boolean;
    position: {
      x: number;
      y: number;
    };
  };
  showDeviceDetails: () => void;
  hideDeviceDetails: () => void;
  saveDialogPosition: (x: number, y: number) => void;
}
