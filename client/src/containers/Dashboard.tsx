import { Fragment, useContext, useEffect } from 'react';
import { DeviceList, DeviceDetails } from '../components';
import { Headline, Dialog, SelectInput } from '../components/ui';
import { DevicesContext, InterfaceContext } from '../state';
import { SmartDeviceType } from '../typescript/types';
import styles from './Dashboard.module.css';

export const Dashboard = (): JSX.Element => {
  const { devices, activeDevice, getAllDevices } = useContext(DevicesContext);
  const { deviceDetailsDialog: dialog, filterDevices } =
    useContext(InterfaceContext);

  useEffect(() => {
    getAllDevices();
  }, []);

  return (
    <Fragment>
      {dialog.show && (
        <Dialog
          initialPosition={{ x: dialog.position.x, y: dialog.position.y }}
        >
          <DeviceDetails device={activeDevice} />
        </Dialog>
      )}

      <section className={styles.Dashboard}>
        <Headline
          primaryText='Devices'
          secondaryContent={
            <SelectInput
              defaultOption={{ text: 'All Devices', value: 'null' }}
              options={[
                { text: 'Smart Bulbs', value: 'bulb' },
                { text: 'Smart Outlets', value: 'outlet' },
                { text: 'Temperature Sensors', value: 'temperatureSensor' }
              ]}
              handler={(type: string) => {
                if (type !== 'null') {
                  filterDevices(type as SmartDeviceType);
                } else {
                  filterDevices(null);
                }
              }}
            />
          }
        />

        <DeviceList devices={devices} />
      </section>
    </Fragment>
  );
};
