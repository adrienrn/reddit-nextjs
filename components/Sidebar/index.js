import styles from './style.css';

export function Sidebar({ children }) {
  return (
    <div className={styles['sidebar']}>
      {children}
    </div>
  );
}

export function SidebarBlock({ children }) {
  return (
    <div className={styles['sidebar__block']}>
      {children}
    </div>
  );
}
