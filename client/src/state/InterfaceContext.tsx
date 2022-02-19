import { createContext, useState, useEffect } from 'react';
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
    }
  },
  showDeviceDetails: () => {},
  hideDeviceDetails: () => {},
  saveDialogPosition: (x: number, y: number) => {}
});

export const InterfaceContextProvider = ({ children }: Props): JSX.Element => {
  const [deviceDetailsDialog, setDeviceDetailsDialog] = useState({
    show: false,
    position: {
      x: 0,
      y: 0
    }
  });

  useEffect(() => {
    console.log(deviceDetailsDialog.position);
  }, [deviceDetailsDialog.position]);

  const showDeviceDetails = () => {
    setDeviceDetailsDialog({
      ...deviceDetailsDialog,
      show: true
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
