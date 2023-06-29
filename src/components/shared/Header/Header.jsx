import React from 'react';
import * as styles from './Header.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {
  const { route } = useRouter();

  return (
    <header className={styles.header}>
      {route !== '/settings' ? (
        <Link href='settings' className={styles.settings}>
          <FontAwesomeIcon icon={faGear} />
        </Link>
      ) : (
        <Link href='/' className={styles.settings}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </Link>
      )}
    </header>
  );
};
