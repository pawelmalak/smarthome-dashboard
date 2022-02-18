import { SmartDevice } from '.';

export interface SmartOutlet extends SmartDevice {
  type: 'outlet';
  isTurnedOn: boolean;
  powerConsumption: number;
}
