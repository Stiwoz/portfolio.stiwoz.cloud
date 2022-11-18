import { FC } from 'react';

import styles from './Slide.module.scss';

const Slide: FC = () => {
  return (
    <>
      <section className={styles.Slide} data-state="active">
        <div
          className={styles.Image}
          style={{ backgroundImage: "url('https://picsum.photos/800/350')" }}
        ></div>
        <div className={styles.Content}>
          <h3 className={styles.Subtitle}>Titolo della descrizione</h3>
          <p className={styles.Text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quod, quia, voluptas quae voluptatem quibusdam
            consequuntur voluptates quos natus quas. Quisquam, quae. Quisquam
            quae, quod, quia, voluptas quae voluptatem quibusdam consequuntur
            voluptates quos natus quas. Quisquam, quae. Quisquam quae, quod,
            quia, voluptas quae voluptatem quibusdam consequuntur voluptates
            quos natus quas. Quisquam, quae.
          </p>

          <div className={styles.Text}>
            Tecnologie utilizzate:
            <ul>
              <li>Next.js</li>
              <li>React</li>
              <li>Typescript</li>
              <li>SCSS</li>
            </ul>
          </div>
        </div>
        <div className={styles.Title}>
          <h2>Nome del progetto in showcase</h2>
        </div>
        <div className={styles.Buttons}>
          <button className={styles.Button}>&larr;</button>
          <button className={styles.Button}>&rarr;</button>
        </div>
      </section>
    </>
  );
};

export default Slide;
