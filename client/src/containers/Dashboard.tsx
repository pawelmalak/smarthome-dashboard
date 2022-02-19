import { Fragment, useContext, useEffect } from 'react';
import { Headline, DeviceList } from '../components';
import { DevicesContext } from '../state';

export const Dashboard = (): JSX.Element => {
  const { devices, getAllDevices } = useContext(DevicesContext);

  useEffect(() => {
    getAllDevices();
  }, []);

  return (
    <Fragment>
      <Headline>Devices</Headline>
      <DeviceList devices={devices} />
    </Fragment>
  );
};
