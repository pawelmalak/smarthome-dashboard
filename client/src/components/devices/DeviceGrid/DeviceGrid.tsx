import { Fragment } from 'react';
import { Message } from '../../ui';
import { SmartDevice } from '../../../typescript/interfaces';

interface Props {
  devices: SmartDevice[];
}

export const DeviceGrid = ({ devices }: Props): JSX.Element => {
  return (
    <Fragment>
      {devices.length ? (
        <Message>You have {devices.length} devices</Message>
      ) : (
        <Message>You don't have any connected devices</Message>
      )}
    </Fragment>
  );
};
