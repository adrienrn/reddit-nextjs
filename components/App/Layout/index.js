import AppSidebar from 'components/App/Sidebar';

import 'normalize.css';
import styles from './style.css';

export default function({ children }) {

  return (
    <div className={styles['layout']}>
      <div className={styles['layout__wrapper']}>
        <header className={styles['layout__header']}>
          <AppSidebar />
        </header>
        <main className={styles['layout__content']}>
          {children}
        </main>
      </div>
    </div>
  )
}
