import { Fragment } from 'react';
import { DeviceProperties } from '../..';
import { SmartTemperatureSensor } from '../../../../typescript/interfaces';

interface Props {
  device: SmartTemperatureSensor;
}

export const TemperatureSensorDetails = ({ device }: Props): JSX.Element => {
  return (
    <Fragment>
      <DeviceProperties
        headers={['Temperature']}
        data={[`${device.temperature}W`]}
      />
    </Fragment>
  );
};
