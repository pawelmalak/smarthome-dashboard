import { createContext, useState, useContext } from 'react';
import { DevicesContext } from '.';
import { InterfaceContext as Context } from '../typescript/interfaces';

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
  showDeviceDetails: (id: string) => {},
  hideDeviceDetails: () => {},
  saveDialogPosition: (x: number, y: number) => {}
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

  const showDeviceDetails = (id: string) => {
    selectDevice(id);
    setDeviceDetailsDialog({
      ...deviceDetailsDialog,
      show: true,
      deviceId: id
    });
  };

  const hideDeviceDetails = () => {
    setDeviceDetailsDialog({
      ...deviceDetailsDialog,
      show: false
    });
  };

  const saveDialogPosition = (x: number, y: number) => {
    setDeviceDetailsDialog({
      ...deviceDetailsDialog,
      position: { x, y }
    });
  };

  const context = {
    deviceDetailsDialog,
    showDeviceDetails,
    hideDeviceDetails,
    saveDialogPosition
  };

  return (
    <InterfaceContext.Provider value={context}>
      {children}
    </InterfaceContext.Provider>
  );
};
