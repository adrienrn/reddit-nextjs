import React from 'react';
import AppLink from 'components/AppLink';

import style from './style.css';

export default function({ navigationItems }) {
  return (
    <nav>
      <ul className={style['navigation']}>
        {navigationItems.map(({ key, href, icon, label }) => (
          <li key={key} className={style['navigation__item']}>
            <AppLink href={href} activeClassName={style['navigation__link--active']}>
              <a className={style['navigation__link']}>
                <span className={style['navigation__link__icon']}>
                  {icon ? icon : null}
                </span>
                <span className={style['navigation__link__text']}>
                  {label}
                </span>
              </a>
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
