import cx from 'classnames';

import Navigation from 'components/Navigation';
import UserWidget from 'components/UserWidget';
import {Sidebar, SidebarBlock} from 'components/Sidebar';
import {IconFavoriteFeed, IconLogout, IconSubscription} from 'components/Icon';

import styles from './style.css';

const navigationPrimary = [
  {
    href: '/',
    icon: (<IconFavoriteFeed />),
    label: 'Favourite feeds'
  },
  {
    href: '/subscriptions',
    icon: (<IconSubscription />),
    label: 'Channel subscriptions'
  },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

const navigationSecondary = [
  {
    href: '#',
    icon: (<IconLogout />),
    label: 'Exit app'
  },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

export default function()
{
    return (
        <Sidebar className={styles['sidebar--app']}>
          <SidebarBlock className={styles['sidebar__block--user']}>
            <UserWidget name={'John Doe'} avatarUrl={'https://api.adorable.io/avatars/285/halloberlin.png'} subtitle={'MyFeeds account'} />
          </SidebarBlock>

          <SidebarBlock className={styles['sidebar__block--navigation-primary']}>
            <Navigation navigationItems={navigationPrimary} />
          </SidebarBlock>

          <SidebarBlock className={styles['sidebar__block--navigation-secondary']}>
            <Navigation navigationItems={navigationSecondary} />
          </SidebarBlock>
        </Sidebar>
    )
}
