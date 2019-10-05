import cx from 'classnames';

import styles from './style.css';

export function Section({ children, className }) {
  return (
    <div className={cx(styles['section'], className)}>
      {children}
    </div>
  );
}

export function SectionBlock({ children, className }) {
  return (
    <div className={cx(styles['section__block'], className)}>
      {children}
    </div>
  );
}
