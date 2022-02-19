import { DevicesContextProvider } from '../state';
import { Dashboard } from '.';
import { NavBar } from '../components';
import styles from './App.module.css';

export const App = (): JSX.Element => {
  return (
    <DevicesContextProvider>
      <NavBar />
      <main className={styles.App}>
        <Dashboard />
      </main>
    </DevicesContextProvider>
  );
};