import Link from 'next/link';
import { FC } from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import Logo from '../logo';
import styles from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.NavbarItem}>
          <Link passHref href="https://stiwoz.cloud">
            <Logo />
          </Link>

          <h1>Stiwoz&apos; Portfolio [WIP]</h1>
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
    </>
  );
};

export default Navbar;
