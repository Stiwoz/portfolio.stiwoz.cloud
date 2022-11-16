import Link from 'next/link';
import { FC } from 'react';
import Logo from '../logo';
import styles from './Slider.module.scss';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import Slide from '../slide';

const Slider: FC = () => {
  return (
    <>
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

      <main className={styles.Main}>
        <Slide />
      </main>
    </>
  );
};

export default Slider;
