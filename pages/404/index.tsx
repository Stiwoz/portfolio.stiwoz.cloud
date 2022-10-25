import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import styles from './404.module.css';

export default function Custom404(): ReactNode {
  return (
    <>
      <h1 className={styles.Center}>
        Space Invadors destroyed this page! Take revenge on them!
      </h1>
      <p className={styles.Center}>
        Use <span className={styles.Label}>Space</span> to shoot and{' '}
        <span className={styles.Label}>←</span>&#160;
        <span className={styles.Label}>→</span> to move!&#160;&#160;&#160;
        <button className={styles.Button} id="restart">
          Restart
        </button>
      </p>

      <canvas className={styles.SpaceInvaders} id="space-invaders" />
      <script src="/js/script.js" defer></script>
    </>
  );
}
