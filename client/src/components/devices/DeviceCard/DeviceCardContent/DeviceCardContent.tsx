import {
  SmartBulb,
  SmartDevice,
  SmartOutlet,
  SmartTemperatureSensor
} from '../../../../typescript/interfaces';
import styles from './DeviceCardContent.module.css';

interface Props {
  device: SmartDevice;
}

export const DeviceCardContent = ({ device }: Props): JSX.Element => {
  let value = -1;
  let unit = 'N/A';

  if (device.type === 'temperatureSensor') {
    value = (device as SmartTemperatureSensor).temperature;
    unit = '°C';
  } else if (device.type === 'outlet') {
    value = (device as SmartOutlet).powerConsumption;
    unit = 'W';
  } else if (device.type === 'bulb') {
    value = (device as SmartBulb).brightness;
    unit = '%';
  }

  return (
    <div className={styles.DeviceCardContent}>
      {value}
      <span>{unit}</span>
    </div>
  );
};
