import React from 'react';
import styles from './equalizer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Equalizer() {
  const levels = Array.from({ length: 30 }, (_, index) => (
    <div key={`level${index + 1}`} className={cx('level', `level${index + 1}`)}></div>
  ));

  return <div className={cx('levels')}>{levels}</div>;
}

export default Equalizer;
