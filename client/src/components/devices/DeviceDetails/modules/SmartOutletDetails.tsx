import { Fragment } from 'react';
import { DeviceProperties } from '../..';
import { SmartOutlet } from '../../../../typescript/interfaces';

interface Props {
  device: SmartOutlet;
}

export const SmartOutletDetails = ({ device }: Props): JSX.Element => {
  return (
    <Fragment>
      <DeviceProperties
        headers={['Active', 'Power consumption']}
        data={[device.isTurnedOn ? 'Yes' : 'No', `${device.powerConsumption}W`]}
      />
    </Fragment>
  );
};
