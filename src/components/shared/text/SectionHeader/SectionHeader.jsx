import React from 'react';
import * as styles from './SectionHeader.module.sass';
import cs from 'classnames';

export const SectionHeader = ({ children, className }) => {
  return (
    <div className={styles.sectionHeaderWrap}>
      <h2 className={cs(styles.sectionHeader, className)}>{children}</h2>
    </div>
  );
};
