import { Fragment, useContext, useEffect } from 'react';
import { Headline, DeviceGrid } from '../components';
import { DevicesContext } from '../state';

export const Dashboard = (): JSX.Element => {
  const { devices, getAllDevices } = useContext(DevicesContext);

  useEffect(() => {
    getAllDevices();
  }, []);

  return (
    <Fragment>
      <Headline>Devices</Headline>
      <DeviceGrid devices={devices} />
    </Fragment>
  );
};
