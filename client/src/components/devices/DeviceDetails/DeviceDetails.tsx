import { Fragment } from 'react';
import { SmartDevice } from '../../../typescript/interfaces';

interface Props {
  device: SmartDevice;
}

export const DeviceDetails = ({ device }: Props): JSX.Element => {
  return (
    <Fragment>
      {device ? <h4>details: {device.type}</h4> : <h4>loading</h4>}
    </Fragment>
  );
};
