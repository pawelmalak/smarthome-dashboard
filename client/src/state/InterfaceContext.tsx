import { createContext, useState, useContext } from 'react';
import { DevicesContext } from '.';
import {
  Filter,
  InterfaceContext as Context,
  SmartDevice
} from '../typescript/interfaces';
import { SmartDeviceType } from '../typescript/types';

interface Props {
  children: React.ReactNode;
}

export const InterfaceContext = createContext<Context>({
  deviceDetailsDialog: {
    show: false,
    position: {
      x: 0,
      y: 0
    },
    deviceId: '-1'
  },
  dataFilters: {
    devices: {
      enabled: false,
      field: 'type',
      value: ''
    }
  },
  showDeviceDetails: (id: string) => {},
  hideDeviceDetails: () => {},
  saveDialogPosition: (x: number, y: number) => {},
  filterDevices: (type: SmartDeviceType | null) => {}
});

export const InterfaceContextProvider = ({ children }: Props): JSX.Element => {
  const { selectDevice } = useContext(DevicesContext);

  const [deviceDetailsDialog, setDeviceDetailsDialog] = useState({
    show: false,
    position: {
      x: 0,
      y: 0
    },
    deviceId: '-1'
  });

  const [deviceFilter, setDeviceFilter] = useState<Filter<keyof SmartDevice>>({
    enabled: false,
    field: 'type',
    value: ''
  });

  const showDeviceDetails = (id: string): void => {
    selectDevice(id);
    setDeviceDetailsDialog({
      ...deviceDetailsDialog,
      show: true,
      deviceId: id
    });
  };

  const hideDeviceDetails = (): void => {
    setDeviceDetailsDialog({
      ...deviceDetailsDialog,
      show: false
    });
  };

  const saveDialogPosition = (x: number, y: number): void => {
    setDeviceDetailsDialog({
      ...deviceDetailsDialog,
      position: { x, y }
    });
  };

  const filterDevices = (type: SmartDeviceType | null): void => {
    if (!type) {
      setDeviceFilter({
        ...deviceFilter,
        enabled: false,
        value: ''
      });
    } else {
      setDeviceFilter({
        ...deviceFilter,
        enabled: true,
        value: type
      });
    }
  };

  const context: Context = {
    deviceDetailsDialog,
    dataFilters: {
      devices: deviceFilter
    },
    showDeviceDetails,
    hideDeviceDetails,
    saveDialogPosition,
    filterDevices
  };

  return (
    <InterfaceContext.Provider value={context}>
      {children}
    </InterfaceContext.Provider>
  );
};
