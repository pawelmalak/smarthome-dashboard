import { Fragment } from 'react';
import { DeviceCard } from '..';
import { Message } from '../../ui';
import { SmartDevice } from '../../../typescript/interfaces';
import styles from './DeviceList.module.css';

interface Props {
  devices: SmartDevice[];
}

export const DeviceList = ({ devices }: Props): JSX.Element => {
  return (
    <div className={styles.DeviceList}>
      {devices.length ? (
        devices.map(d => <DeviceCard device={d} key={d.id} />)
      ) : (
        <Message>You don't have any connected devices</Message>
      )}
    </div>
  );
};
