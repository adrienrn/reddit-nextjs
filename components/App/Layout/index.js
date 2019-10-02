import AppContent from 'components/App/Header';
import UserWidget from 'components/UserWidget';
import {Sidebar, SidebarBlock} from 'components/Sidebar';

import 'normalize.css';
import styles from './style.css';

export default function({ children }) {
  return (
    <div className={styles['layout']}>
      <div className={styles['layout__wrapper']}>
        <header className={styles['layout__header']}>
          <Sidebar>
            <SidebarBlock>
              <UserWidget name={'John Doe'} avatarUrl={'https://api.adorable.io/avatars/285/halloberlin.png'} subtitle={'MyFeeds account'} />
            </SidebarBlock>

            <SidebarBlock>
              Nav
            </SidebarBlock>

            <SidebarBlock>
              Exit
            </SidebarBlock>
          </Sidebar>
        </header>
        <main className={styles['layout__content']}>
          {children}
        </main>
      </div>
    </div>
  )
}
