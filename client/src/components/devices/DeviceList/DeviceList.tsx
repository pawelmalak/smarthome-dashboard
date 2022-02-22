import { Fragment, useContext } from 'react';
import { InterfaceContext } from '../../../state';
import { DeviceCard } from '..';
import { Message } from '../../ui';
import { SmartDevice } from '../../../typescript/interfaces';
import styles from './DeviceList.module.css';

interface Props {
  devices: SmartDevice[];
}

export const DeviceList = ({ devices }: Props): JSX.Element => {
  const {
    dataFilters: { devices: filter }
  } = useContext(InterfaceContext);

  return (
    <div className={styles.DeviceList}>
      {devices.length ? (
        <Fragment>
          {filter.enabled
            ? devices
                .filter(d => d[filter.field] === filter.value)
                .map(d => <DeviceCard device={d} key={d.id} />)
            : devices.map(d => <DeviceCard device={d} key={d.id} />)}
        </Fragment>
      ) : (
        <Message>You don't have any connected devices</Message>
      )}
    </div>
  );
};
