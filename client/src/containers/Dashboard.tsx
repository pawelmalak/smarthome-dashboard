import { Fragment, useContext, useEffect } from 'react';
import { DeviceList, DeviceDetails } from '../components';
import { Headline, Dialog } from '../components/ui';
import { DevicesContext, InterfaceContext } from '../state';

export const Dashboard = (): JSX.Element => {
  const { devices, getAllDevices } = useContext(DevicesContext);
  const { deviceDetailsDialog: dialog } = useContext(InterfaceContext);

  useEffect(() => {
    getAllDevices();
  }, []);

  return (
    <Fragment>
      {dialog.show && (
        <Dialog
          initialPosition={{ x: dialog.position.x, y: dialog.position.y }}
        >
          <DeviceDetails device={devices[0]} />
        </Dialog>
      )}

      <Headline>Devices</Headline>
      <DeviceList devices={devices} />
    </Fragment>
  );
};
