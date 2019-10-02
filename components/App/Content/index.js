import styles from './style.css';

export default function({ children }) {
  return (
    <div className={styles['layout__content']}>
      {children}
    </div>
  );
}
