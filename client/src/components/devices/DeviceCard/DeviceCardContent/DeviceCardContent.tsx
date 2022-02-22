import { Fragment } from 'react';
import {
  SmartDevice,
  SmartOutlet,
  SmartTemperatureSensor
} from '../../../../typescript/interfaces';
import styles from './DeviceCardContent.module.css';

interface Props {
  device: SmartDevice;
}

export const DeviceCardContent = ({ device }: Props): JSX.Element => {
  let contentElement = <></>;

  if (device.type === 'temperatureSensor') {
    const { temperature } = device as SmartTemperatureSensor;

    contentElement = (
      <Fragment>
        {temperature}
        <span>°C</span>
      </Fragment>
    );
  } else if (device.type === 'outlet') {
    const { powerConsumption } = device as SmartOutlet;

    contentElement = (
      <Fragment>
        {powerConsumption}
        <span>W</span>
      </Fragment>
    );
  }

  return <div className={styles.DeviceCardContent}>{contentElement}</div>;
};
