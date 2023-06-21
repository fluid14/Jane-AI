import React from 'react';
import * as style from './SectionHeader.module.sass';
import cs from 'classnames';

export const SectionHeader = ({ children, className }) => {
  return (
    <div className={style.sectionHeaderWrap}>
      <h2 className={cs(style.sectionHeader, className)}>{children}</h2>
    </div>
  );
};
