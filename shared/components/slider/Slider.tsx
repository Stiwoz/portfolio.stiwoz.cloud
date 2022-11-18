import { FC } from 'react';
import styles from './Slider.module.scss';
import Slide from '../slide';
import Navbar from '../navbar';

const Slider: FC = () => {
  return (
    <>
      <Navbar />

      <main className={styles.Main}>
        <Slide />
      </main>
    </>
  );
};

export default Slider;
