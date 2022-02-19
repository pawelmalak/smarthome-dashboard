import styles from './Message.module.css';

interface Props {
  children: React.ReactNode;
}

export const Message = ({ children }: Props): JSX.Element => {
  return <span className={styles.Message}>{children}</span>;
};
