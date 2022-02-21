import { SmartBulb, SmartDevice } from '../../../typescript/interfaces';
import { SmartBulbDetails } from '.';
import { DeviceStatus } from '..';
import styles from './DeviceDetails.module.css';

interface Props {
  device: SmartDevice | null;
}

export const DeviceDetails = ({ device }: Props): JSX.Element => {
  if (!device) {
    return <h4>loading</h4>;
  } else {
    let deviceType = <></>;

    if (device.type === 'bulb') {
      deviceType = <SmartBulbDetails device={device as SmartBulb} />;
    } else {
      deviceType = <h3>other</h3>;
    }

    return (
      <div className={styles.DeviceDetails}>
        {/* Base device info */}
        <ul className={styles.DeviceInfo}>
          <li>
            <span>Device name: </span>
            {device.name}
          </li>
          <li>
            <span>Device id: </span>
            {device.id}
          </li>
          <li>
            <span>Connection status: </span>
            <DeviceStatus status={device.connectionState} />
          </li>
        </ul>

        <hr />

        {/* Device specific content */}
        {deviceType}
      </div>
    );
  }
};
