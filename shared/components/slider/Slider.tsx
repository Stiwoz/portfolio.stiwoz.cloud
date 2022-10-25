import Link from 'next/link';
import { FC } from 'react';
import Logo from '../logo';
import styles from './Slider.module.scss';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';

const Slider: FC = () => {
  return (
    <div className={styles.Container}>
      <nav className={styles.Navbar}>
        <div className={styles.NavbarItem}>
          <Link passHref href="https://stiwoz.cloud">
            <Logo />
          </Link>

          <h1>Stiwoz&apos; Portfolio</h1>
        </div>
        <div className={styles.NavbarItem}>
          <Link passHref href="https://stiwoz.cloud">
            Home
          </Link>
          <Link passHref href="/about">
            About
          </Link>
        </div>
        <div className={styles.NavbarItem}>
          <Link passHref href="https://github.com/Stiwoz">
            <GoMarkGithub />
          </Link>
          <Link passHref href="https://www.instagram.com/stiwoz/">
            <BsInstagram />
          </Link>
          <Link passHref href="https://www.linkedin.com/in/stefano-sanvito/">
            <BsLinkedin />
          </Link>
        </div>
        <div className={styles.NavbarItem}>
          <Link passHref href="#">
            Contacts
          </Link>
        </div>
      </nav>

      <main>
        <section className={styles.Slide}>
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
      </main>
    </div>
  );
};

export default Slider;
