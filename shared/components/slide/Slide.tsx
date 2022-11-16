import { FC } from 'react';

import styles from './Slide.module.scss';

const Slide: FC = () => {
  return (
    <>
      <section className={styles.Slide} data-state="active">
        <div className={styles.image}>img</div>
        <div className={styles.content}>
          <h3 className={styles.Subtitle}>Slide 1</h3>
          <p className={styles.Content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quod, quia, voluptas quae voluptatem quibusdam
            consequuntur voluptates quos natus quas. Quisquam, quae. Quisquam
            quae, quod, quia, voluptas quae voluptatem quibusdam consequuntur
            voluptates quos natus quas. Quisquam, quae. Quisquam quae, quod,
            quia, voluptas quae voluptatem quibusdam consequuntur voluptates
            quos natus quas. Quisquam, quae.
          </p>
        </div>
        <div className={styles.Title}>
          <h2>Slide 1</h2>
        </div>
        <div className={styles.Commands}>
          <button className={styles.Command}>Prev</button>
          <button className={styles.Command}>Next</button>
        </div>
      </section>
    </>
  );
};

export default Slide;
