import { Fragment } from 'react';
import { DeviceProperties } from '../..';
import { SmartBulb } from '../../../../typescript/interfaces';

interface Props {
  device: SmartBulb;
}

export const SmartBulbDetails = ({ device }: Props): JSX.Element => {
  return (
    <Fragment>
      <DeviceProperties
        headers={['Active', 'Brightness', 'Color']}
        data={[
          device.isTurnedOn ? 'Yes' : 'No',
          `${device.brightness}%`,
          device.color
        ]}
      />
    </Fragment>
  );
};
