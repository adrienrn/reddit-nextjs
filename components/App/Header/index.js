import {Sidebar, SidebarBlock} from 'components/Sidebar';

import styles from './style.css';

export default function({ children }) {
  return (
    <div className={styles['layout__header']}>
      <Sidebar>
        <SidebarBlock>
          User
        </SidebarBlock>

        <SidebarBlock>
          Nav
        </SidebarBlock>

        <SidebarBlock>
          Exit
        </SidebarBlock>
      </Sidebar>
    </div>
  );
}
