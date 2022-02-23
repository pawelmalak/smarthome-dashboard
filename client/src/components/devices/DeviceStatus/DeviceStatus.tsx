import { SmartDeviceConnectionState } from '../../../typescript/types';
import styles from './DeviceStatus.module.css';

interface Props {
  status: SmartDeviceConnectionState;
  verbose?: boolean;
}

export const DeviceStatus = ({
  status,
  verbose = false
}: Props): JSX.Element => {
  let elementColor = 'var(--color-grey-dark)';
  let parsedStatus: String = status;

  if (status === 'connected') {
    elementColor = 'var(--color-green)';
  } else if (status === 'poorConnection') {
    elementColor = 'var(--color-orange)';
    parsedStatus = 'poor connection';
  }

  return (
    <div className={styles.Status} style={{ color: elementColor }}>
      <div
        className={[styles.VisualStatus, verbose && styles.WithText].join(' ')}
        style={{ backgroundColor: elementColor }}
      ></div>
      {verbose && <p>{parsedStatus}</p>}
    </div>
  );
};
