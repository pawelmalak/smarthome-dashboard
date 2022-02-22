import { useContext } from 'react';
import { InterfaceContext } from '../../../state';
import { SmartDevice } from '../../../typescript/interfaces';
import { DeviceStatus } from '..';
import Icon from '@ailibs/feather-react-ts';
import styles from './DeviceCard.module.css';
import { DeviceCardContent } from './DeviceCardContent/DeviceCardContent';

interface Props {
  device: SmartDevice;
}

export const DeviceCard = ({ device }: Props): JSX.Element => {
  const { showDeviceDetails } = useContext(InterfaceContext);

  let parsedDeviceType = '';

  if (device.type === 'bulb') {
    parsedDeviceType = 'Smart Bulb';
  } else if (device.type === 'outlet') {
    parsedDeviceType = 'Smart Outlet';
  } else if (device.type === 'temperatureSensor') {
    parsedDeviceType = 'Temperature Sensor';
  }

  return (
    <div className={styles.DeviceCard}>
      <div className={styles.DeviceCardBody}>
        <div className={styles.DeviceCardHeader}>
          <h4>{device.name}</h4>
          <DeviceStatus status={device.connectionState} />
        </div>
        <span>
          {parsedDeviceType} : {device.id}
        </span>

        {/* device specific content */}
        <DeviceCardContent device={device} />
      </div>

      <div
        className={styles.DeviceCardFooter}
        onClick={() => showDeviceDetails(device.id)}
      >
        Show details
        <Icon name='arrow-right' size={15} />
      </div>
    </div>
  );
};
