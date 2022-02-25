import styles from './DeviceProperties.module.css';

interface Props {
  headers: string[];
  data: any[];
}

export const DeviceProperties = ({ headers, data }: Props): JSX.Element => {
  return (
    <div className={styles.DeviceProperties}>
      {headers.map((h, idx) => (
        <div key={idx}>
          <span>{h}</span>
          <span>{data[idx]}</span>
        </div>
      ))}
    </div>
  );
};
