import React from 'react';
import * as styles from './Header.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.avatarWrap}>
        <div className={styles.avatar} />
        <h1 className={styles.name}>Jane AI</h1>
      </Link>
      <Link href='settings' className={styles.settings}>
        <FontAwesomeIcon icon={faGear} />
      </Link>
    </header>
  );
};
