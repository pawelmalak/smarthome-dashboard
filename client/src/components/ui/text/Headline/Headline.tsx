import { ReactNode } from 'react';
import styles from './Headline.module.css';

interface Props {
  primaryText: ReactNode;
  secondaryContent?: ReactNode;
}

export const Headline = ({
  primaryText,
  secondaryContent
}: Props): JSX.Element => {
  return (
    <div className={styles.Headline}>
      <h2>{primaryText}</h2>
      {secondaryContent}
    </div>
  );
};
