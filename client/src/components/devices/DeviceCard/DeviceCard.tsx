import { useContext } from 'react';
import { InterfaceContext } from '../../../state';
import { SmartDevice } from '../../../typescript/interfaces';
import { DeviceStatus } from '..';
import Icon from '@ailibs/feather-react-ts';
import styles from './DeviceCard.module.css';

interface Props {
  device: SmartDevice;
}

export const DeviceCard = ({ device }: Props): JSX.Element => {
  const { showDeviceDetails } = useContext(InterfaceContext);

  return (
    <div className={styles.DeviceCard}>
      <div className={styles.DeviceCardBody}>
        <h4 className={styles.DeviceName}>
          {device.name}
          <span className={styles.DeviceId}> [#{device.id}]</span>
        </h4>
        <DeviceStatus status={device.connectionState} />
        {device.type}
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
