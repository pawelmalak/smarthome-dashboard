import {
  SmartBulb,
  SmartDevice,
  SmartOutlet,
  SmartTemperatureSensor
} from '../../../typescript/interfaces';
import {
  SmartBulbDetails,
  SmartOutletDetails,
  TemperatureSensorDetails
} from '.';
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
    } else if (device.type === 'outlet') {
      deviceType = <SmartOutletDetails device={device as SmartOutlet} />;
    } else {
      deviceType = (
        <TemperatureSensorDetails device={device as SmartTemperatureSensor} />
      );
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
            <DeviceStatus status={device.connectionState} verbose />
          </li>
        </ul>

        <hr />

        {/* Device specific content */}
        {deviceType}
      </div>
    );
  }
};
