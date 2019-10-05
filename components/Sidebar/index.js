import cx from 'classnames';

import styles from './style.css';

export function Sidebar({ children, className }) {
  return (
    <div className={cx(styles['sidebar'], className)}>
      {children}
    </div>
  );
}

export function SidebarBlock({ children, className }) {
  return (
    <div className={cx(styles['sidebar__block'], className)}>
      {children}
    </div>
  );
}
